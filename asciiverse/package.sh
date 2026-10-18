#!/bin/sh
# Packs the build into dist/chroma-<target>.tar.gz (.zip for Windows) for
# av: chroma-curses at the top with the data folders it reads beside it,
# plus COPYING, README and PATCHES.md.
#
#   asciiverse/package.sh x86_64-unknown-linux-musl
set -eu
cd "$(dirname "$0")/.."
target="$1"
case "$target" in *windows*) exe=.exe ;; *) exe= ;; esac
stage=stage/chroma
rm -rf "$stage" && mkdir -p "$stage" dist
cp -R out/. "$stage/"
cp COPYING README PATCHES.md "$stage/"
if [ -n "$exe" ]; then
  (cd "$stage" && zip -qr "../../dist/chroma-$target.zip" .)
else
  tar -czf "dist/chroma-$target.tar.gz" -C "$stage" .
fi
ls dist
