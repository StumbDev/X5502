export class AssemblyLib {
  private registers: Record<string, number> = { A: 0, B: 0, C: 0 };

  mov(register: string, value: number) {
    if (this.registers[register] !== undefined) {
      this.registers[register] = value;
      console.log(`MOV ${register}, ${value}`);
    }
  }

  add(register1: string, register2: string) {
    if (this.registers[register1] !== undefined && this.registers[register2] !== undefined) {
      this.registers[register1] += this.registers[register2];
      console.log(`ADD ${register1}, ${register2}`);
    }
  }

  sub(register1: string, register2: string) {
    if (this.registers[register1] !== undefined && this.registers[register2] !== undefined) {
      this.registers[register1] -= this.registers[register2];
      console.log(`SUB ${register1}, ${register2}`);
    }
  }

  print() {
    console.log("Registers:", this.registers);
  }
}
