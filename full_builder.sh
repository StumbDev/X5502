#!/bin/bash
npx pkg ./dist/index.js -o ./dist/bin/x5502asm -t node14-linux-x64,node14-linux-arm64,node14-win-x64,node14-macos-arm64
echo "Done!"
echo "use cp ./dist/bin/x5502asm-x-arch /usr/local/bin to install the assembler to your system"
echo "files:\n"
ls ./dist/bin