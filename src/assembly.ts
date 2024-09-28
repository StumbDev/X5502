export class AssemblyInterpreter {
  private registers: Record<string, number> = { A: 0, B: 0, C: 0 };

  constructor() {
    console.log("Assembly Interpreter Initialized");
  }

  interpret(commands: string[]) {
    for (let command of commands) {
      this.execute(command);
    }
    this.printRegisters();
  }

  execute(command: string) {
    const [instruction, ...args] = command.split(' ');

    switch (instruction.toUpperCase()) {
      case 'MOV':
        this.mov(args[0], parseInt(args[1]));
        break;
      case 'ADD':
        this.add(args[0], args[1]);
        break;
      case 'SUB':
        this.sub(args[0], args[1]);
        break;
      case 'JMP':
        console.log("Jump is not implemented yet");
        break;
      default:
        console.error(`Unknown instruction: ${instruction}`);
    }
  }

  mov(register: string, value: number) {
    if (this.registers[register] !== undefined) {
      this.registers[register] = value;
    } else {
      console.error(`Invalid register: ${register}`);
    }
  }

  add(register1: string, register2: string) {
    if (this.registers[register1] !== undefined && this.registers[register2] !== undefined) {
      this.registers[register1] += this.registers[register2];
    }
  }

  sub(register1: string, register2: string) {
    if (this.registers[register1] !== undefined && this.registers[register2] !== undefined) {
      this.registers[register1] -= this.registers[register2];
    }
  }

  printRegisters() {
    console.log("Registers:", this.registers);
  }
}
