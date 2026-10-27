# Changes from upstream

This is the Asciiverse packaging of [Chroma](http://www.level7.org.uk/chroma/)
by Amf, an abstract puzzle game, GPL-2.0-or-later (README: "either version
2 of the License, or (at your option) any later version"; COPYING is the
GPL 2; the sources carry the same notice). Chroma has no public
repository, so this one starts from the release tarball:

- `chroma-1.21.tar.bz2` from http://www.level7.org.uk/chroma/download/,
  the newest release (1.21, 28 November 2025: "fixed various memory
  leaks"), retrieved 2026-10-18, sha256
  `bdf4d6e1ac65588a93569ec3ec01869fee461f9dafe4cdbebb1fc38c42d9693d`,
  imported unchanged as the first commit (credited to Amf) and tagged
  `1.21`.

Only the terminal version, `chroma-curses`, is built. The SDL version and
what only it uses (`graphics/`, including the DejaVu Sans font
`graphics/font.ttf` under the Bitstream Vera and Arev terms in
`graphics/font.txt`, and the browser version) stay in the tree as
received but are neither built nor shipped.

## Debian

Debian packages Chroma as `chroma`, `chroma-curses` and `chroma-data`
(1.19-2, maintained by Simon Tatham). It has no `debian/patches` and no
packaging repository (`Vcs-*`), so there is nothing to apply; its only
changes are build steps for the SDL graphics and installing to
/usr/games. Like Debian, the archive leaves out the font.

## Code

- **Data beside the program, player files in the XDG data folder**
  (`util.c`, `util.h`). The levels, colour schemes, help and
  translations were looked for in the data folder fixed at build time
  (`/usr/local/share/chroma` by default), so a build that was not
  installed showed an empty level menu; on Windows they were looked for
  in the current folder. They are read from the folder holding the
  running program when it has a `levels` folder, found through
  `/proc/self/exe` on Linux, `_NSGetExecutablePath()` on macOS and
  `GetModuleFileName()` on Windows, so av's symbolic link still finds
  them; otherwise from the old places. Saved and solved positions,
  levels under construction and the display options move from
  `~/.chroma` to `$XDG_DATA_HOME/chroma` (`~/.local/share/chroma`), with
  missing parent folders created; an existing `~/.chroma` stays in use
  while the new folder does not exist. Windows keeps `%APPDATA%\chroma`.
  Exported levels and solutions still go to the home folder (Documents
  on Windows), as the game's menu says.
- **Builds for Windows with current GCC** (`main.c`). `WinMain()` called
  `main()` before it was declared, which GCC 14 rejects; it is declared
  first, and `WinMain()` returns its result.

## Packaging (new files)

- `asciiverse/build.sh`: `chroma-curses` in one compiler run against wide
  ncurses (PDCurses on Windows), with `colours`, `help`, `levels` and
  `locale` copied into `out/` beside it. `NLS=0` builds without gettext
  through `asciiverse/nonls/libintl.h` (macOS and Windows, whose C
  libraries have none); the only translation, `en_US`, changes "colour"
  to "color" in six messages, so nothing else is lost.
- `asciiverse/package.sh`: one archive per target with the binary, the
  data folders, COPYING, README and this file.
- `.github/workflows/release.yml`: static Linux in Alpine (x86_64,
  aarch64; musl's own gettext, so the `en_US` messages work), macOS
  (x86_64, arm64) and Windows x86_64 (MinGW and PDCurses 3.9), plus
  SHA256SUMS, on a tag.
- `asciiverse/solve.c` and `asciiverse/record-preview.py`: record
  `asciiverse/chroma.cast`. `solve.c` is a greedy player built on the
  game's own engine (it walks to the nearest star it can catch without
  losing one, 15 of the 71 on the first level before it would need to
  plan further); the recorder types its moves into the game.

## Tested

Linux: native (glibc, ncursesw 6.6) and static (Alpine 3.22, musl) builds;
the level menus, both sets, play, undo, the game menu and saving a
position, at 100x30, 80x24 and 50x16 (the level scrolls with the player;
menus are tidy from 60x20); run through a symbolic link from another
folder; `LANG=en_US.UTF-8` shows the American messages in the static
build; saved positions and options written to the XDG folder. ASan and
UBSan: three one-minute runs of random keys (moves, undo, redo, menus,
saving, display options) with random resizes, no reports. Windows:
cross-built with MinGW-w64 against PDCurses 3.9 and run under Wine (the
title, the level menus and a level; a position saved to
`%APPDATA%\chroma\saved`); arrow keys under Wine's console are unchecked,
as for nSnake and Bastet. macOS: not built here.

## Ours

- **How to play it, at the top of README.** A short note on installing and
  starting it with av, or from a release archive; the original text follows
  unchanged.
