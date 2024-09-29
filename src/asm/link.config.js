const path = require('path');
const { build } = require('esbuild');
path.resolve(__dirname, '../vhard/pins.dart')

const entryPoints = [
  path.resolve(__dirname, '../assembly.ts'),
  path.resolve(__dirname, '../hex.ts'),
];

const outdir = path.resolve(__dirname, '../../dist/wasm');

build({
  entryPoints,
  outfile: path.resolve(outdir, 'index.js'),
  bundle: true,
  minify: true,
  target: ['es2020'],
  format: 'esm',
  platform: 'browser',
}).catch(() => process.exit(1));
