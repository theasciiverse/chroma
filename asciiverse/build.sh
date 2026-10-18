#!/bin/sh
# Builds chroma-curses, the terminal version of Chroma, into out/, with the
# data folders it reads (colours, help, levels, locale) copied beside it.
# The SDL version is not built. One compiler run (one process, so no
# parallel jobs to limit); the compiler, flags and curses library come
# from the environment, so one script serves every target (see
# .github/workflows/release.yml):
#
#   asciiverse/build.sh                                        # Linux
#   LDFLAGS="-static -s" asciiverse/build.sh                   # Alpine, static
#   NLS=0 LIBS=-lncurses CFLAGS="-O2 -arch arm64" \
#     LDFLAGS="-arch arm64" asciiverse/build.sh                # macOS
#   CC=x86_64-w64-mingw32-gcc NLS=0 CURSES_HEADER="<curses.h>" \
#     CFLAGS="-O2 -I$PDC" LIBS="$PDC/wincon/pdcurses.a" \
#     LDFLAGS="-static -s" EXE=.exe asciiverse/build.sh        # Windows
#
# NLS=0 builds without gettext (asciiverse/nonls/libintl.h): the C
# libraries of macOS and Windows have none, and the only translation,
# en_US, changes "colour" to "color" in six messages.
set -eu
cd "$(dirname "$0")/.."
CC="${CC:-cc}"
CFLAGS="${CFLAGS:--O2}"
LDFLAGS="${LDFLAGS:-}"
LIBS="${LIBS:--lncursesw}"
CURSES_HEADER="${CURSES_HEADER:-<ncurses.h>}"
NLS="${NLS:-1}"
EXE="${EXE:-}"
INCLUDES=""
if [ "$NLS" = 0 ]; then INCLUDES="-Iasciiverse/nonls"; fi
SOURCES="main.c level.c engine.c menu.c colours.c util.c enigma.c xor.c editor.c
  xmlparser.c names.c cursesdisplay.c cursesmenudisplay.c"
mkdir -p out
rm -rf out/*
# shellcheck disable=SC2086
nice -n 10 $CC $CFLAGS $INCLUDES -DCHROMA_CURSES_HEADER="$CURSES_HEADER" \
  -o "out/chroma-curses$EXE" $SOURCES $LDFLAGS $LIBS
mkdir -p out/levels
cp -R colours help locale out/
cp -R levels/chroma-1 levels/chroma-2 levels/regression out/levels/
echo "built chroma-curses$EXE"
