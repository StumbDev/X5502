export class AssembInterpreter {
  private apuName: string | null = null;
  private apuFunctions: { [key: string]: string[] } = {};

  public interpret(fileContents: string): void {
    const lines = fileContents.split('\n');
    let currentFunction: string | null = null;

    for (const line of lines) {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith('SET')) {
        this.apuName = trimmedLine.split(' ')[1];
      } else if (trimmedLine.endsWith(':')) {
        currentFunction = trimmedLine.replace(':', '');
        this.apuFunctions[currentFunction] = [];
      } else if (currentFunction && trimmedLine !== '') {
        this.apuFunctions[currentFunction].push(trimmedLine);
      }
    }
  }

  public getApuName(): string | null {
    return this.apuName;
  }

  public getApuFunctions(): { [key: string]: string[] } {
    return this.apuFunctions;
  }

  public runApuFunction(functionName: string): void {
    if (this.apuFunctions[functionName]) {
      for (const line of this.apuFunctions[functionName]) {
        this.executeLine(line);
      }
    }
  }

  private executeLine(line: string): void {
    // Implement execution logic for ASM instructions here
    if (line.startsWith('_runner:')) {
      console.log('Unit runner starting...');
      // Replace this with appropriate logic for handling runner.
    } else if (line.startsWith('mov')) {
      const parts = line.split(' ');
      const dest = parts[1];
      const src = parts[2];
      console.log(`Moving value from ${src} to ${dest}`);
      // Implement actual register/memory manipulation logic here.
    } else if (line.startsWith('add')) {
      const parts = line.split(' ');
      const dest = parts[1];
      const src = parts[2];
      console.log(`Adding ${src} to ${dest}`);
      // Implement actual addition logic here.
    } else if (line.startsWith('sub')) {
      const parts = line.split(' ');
      const dest = parts[1];
      const src = parts[2];
      console.log(`Subtracting ${src} from ${dest}`);
      // Implement actual subtraction logic here.
    } else {
        console.log('Executing: ' + line);
    }
  }
}
