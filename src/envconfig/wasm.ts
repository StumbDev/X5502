import * as fs from 'fs/promises';

export async function interpretWasm(path: string) {
  const wasmBuffer = await fs.readFile(path);
  const wasmModule = await WebAssembly.compile(wasmBuffer);
  return await WebAssembly.instantiate(wasmModule);
}