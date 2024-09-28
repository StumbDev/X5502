import { AssemblyInterpreter } from './assembly';

export class HexInterpreter {
  private assemblyInterpreter: AssemblyInterpreter;

  constructor() {
    this.assemblyInterpreter = new AssemblyInterpreter();
  }

  interpret(hexCode: string) {
    const instructions = this.convertHexToAssembly(hexCode);
    this.assemblyInterpreter.interpret(instructions);
  }

  convertHexToAssembly(hexCode: string): string[] {
    // Basic hex to assembly translation (this could be expanded)
    const instructionMap: Record<string, string> = {
      '01': 'MOV A 10',
      '02': 'MOV B 20',
      '03': 'ADD A B',
      '04': 'SUB A B',
    };

    return hexCode.split(' ').map((hex) => instructionMap[hex] || '');
  }
}
