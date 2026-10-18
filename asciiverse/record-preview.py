#!/usr/bin/env python3
"""Records asciiverse/chroma.cast, the catalog preview, at 100x30
(hub/RECORDING.md): the title screen, the level menus, then the first
level of the beginners' set, played with moves worked out beforehand by
asciiverse/solve.c, a greedy player built on the game's own engine that
heads for the nearest star it can catch without losing one. Each move is
typed once the pieces set moving by the previous one have come to rest.
Then the game menu, back through the menus and quit.

chroma-curses runs from out/ (asciiverse/build.sh) by name, so the cast's
header holds no local path, with a throwaway HOME and data folder, so
nothing touches your own saved positions.

Needs a C compiler, asciinema 3.x and pyte. Usage, from the repo root:
  asciiverse/build.sh && uv run --with pyte python3 asciiverse/record-preview.py
Any extra argument is used as the cast's path instead (for test runs);
with --dry-run it plays without recording."""
import fcntl, os, pty, select, shutil, struct, subprocess, sys, tempfile, termios, time
import pyte

# ncurses draws a run of one character with REP (CSI n b, "repeat the last
# character n times"), which pyte does not know. Teach it here.
_draw = pyte.Screen.draw


def _draw_remembering(self, data):
    if data:
        self.last_char = data[-1]
    _draw(self, data)


def _repeat_last(self, n=1, *rest, **kw):
    if getattr(self, "last_char", None):
        _draw(self, self.last_char * max(1, n))


pyte.Screen.draw = _draw_remembering
pyte.Screen.repeat_last = _repeat_last
pyte.Stream.csi = dict(pyte.Stream.csi, b="repeat_last")

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
args = [a for a in sys.argv[1:] if a != "--dry-run"]
dry = "--dry-run" in sys.argv
cast = args[0] if args else f"{root}/asciiverse/chroma.cast"
COLS, ROWS = 100, 30
LEVEL = "levels/chroma-1/chroma-1-01.chroma"
KEYS = {"l": b"\x1bOD", "u": b"\x1bOA", "r": b"\x1bOC", "d": b"\x1bOB", "s": b" "}

work = tempfile.mkdtemp(prefix="chroma-preview-")
os.makedirs(f"{work}/data")

# the moves, from the greedy player
subprocess.run(["cc", "-O2", "-I.", "-Iasciiverse/nonls", "-o", f"{work}/solve", "asciiverse/solve.c",
                "level.c", "engine.c", "xor.c", "enigma.c", "xmlparser.c", "util.c", "names.c"],
               cwd=root, check=True, stderr=subprocess.DEVNULL)
moves = subprocess.run([f"{work}/solve", f"{root}/{LEVEL}"], capture_output=True, text=True,
                       check=True).stdout.strip()

env = dict(os.environ, TERM="xterm-256color", COLORTERM="truecolor", LANG="C.UTF-8",
           HOME=work, XDG_DATA_HOME=f"{work}/data", PATH=f"{root}/out:{os.environ['PATH']}",
           ESCDELAY="300")
for v in ("VTE_VERSION", "TERM_PROGRAM", "TERM_PROGRAM_VERSION", "TMUX"):
    env.pop(v, None)

pid, fd = pty.fork()
if pid == 0:
    os.chdir(work)
    if dry:
        os.execvpe("chroma-curses", ["chroma-curses"], env)
    os.execvpe("asciinema", ["asciinema", "rec", "--overwrite", "-q", "--idle-time-limit", "2",
        "--window-size", f"{COLS}x{ROWS}", "--capture-env", "TERM,COLORTERM,LANG",
        "--title", "chroma", "--command", "chroma-curses", cast], env)
fcntl.ioctl(fd, termios.TIOCSWINSZ, struct.pack("HHHH", ROWS, COLS, 0, 0))
screen = pyte.Screen(COLS, ROWS)
stream = pyte.ByteStream(screen)
start = time.time()


def pump(seconds):
    end = time.time() + seconds
    while True:
        left = end - time.time()
        r, _, _ = select.select([fd], [], [], max(0.0, min(0.02, left)))
        if r:
            try:
                stream.feed(os.read(fd, 65536))
            except OSError:
                return False
        if left <= 0:
            return True


def key(k, wait=0.3):
    os.write(fd, k)
    pump(wait)


def text():
    return "\n".join(screen.display)


def settle(quiet=0.25, limit=6.0):
    """Waits until the screen has not changed for `quiet` seconds: the
    pieces a move set going have stopped."""
    last, since, end = text(), time.time(), time.time() + limit
    while time.time() < end:
        pump(0.03)
        now = text()
        if now != last:
            last, since = now, time.time()
        elif time.time() - since >= quiet:
            return


pump(2.0)                  # the title screen
key(b"\r", 1.2)            # the level sets
key(b"1", 1.2)             # chroma 1 : initiation
key(b"1", 1.2)             # chroma 1.01 : invitation
for m in moves:
    key(KEYS[m], 0.05)
    settle()
    pump(0.12)
stars = screen.display[ROWS - 1].split()[:2]
pump(1.5)
key(b"\x1b", 1.8)          # the game menu
key(b"a", 1.2)             # abort the level
key(b"q", 0.8)             # back to the sets
key(b"q", 0.8)             # back to the title
key(b"q", 0.8)             # quit
end = time.time() + 5
while time.time() < end:
    if not pump(0.1):
        break
    done, _ = os.waitpid(pid, os.WNOHANG)
    if done:
        break
else:
    os.kill(pid, 9)
try:
    os.waitpid(pid, 0)
except ChildProcessError:
    pass
shutil.rmtree(work, ignore_errors=True)
print(f"{cast}: {time.time() - start:.0f} s, {len(moves)} moves, stars {' '.join(stars)}", file=sys.stderr)
