import { Command } from 'commander';
import { AssemblyInterpreter } from './assembly';
import { HexInterpreter } from './hex';
import readlineSync from 'readline-sync';
import chalk from 'chalk';

const program = new Command();
const assemblyInterpreter = new AssemblyInterpreter();
const hexInterpreter = new HexInterpreter();

program
  .version('1.0.0')
  .description('CLI tool for X5502 APU')
  .option('-r, --run', 'Run the APU')
  .option('-a, --assembly <code>', 'Run Assembly code')
  .option('-h, --hex <code>', 'Run Hex code')
  .option('-i, --interactive', 'Interactive REPL mode (assembly/hex)');

program.parse(process.argv);

// Function to handle REPL Mode
const runRepl = () => {
  console.log(chalk.green('Interactive REPL Mode for X5502'));
  console.log(chalk.blue(`
::::::::::-==================
::::::::-====================
:::::::::-===================
::::::::::-==================
:::::::=++*++===*+===========
:::::::=::-%%===**===========
:::::::::::+@*-=+%====++=====
:::::::::::-***-+@===+%@+====
::::++++=::::#=+-%#==========
:::-*:::-=:::#:=*#**=========
::::#::::::::#:::::+*========
::::=*::::::=*::::::-****====
::::::++=-=++::::::::::-=====
::::::::---:::::::::::::--===
X5502 Portable System
                         `))
  let mode = readlineSync.question('Choose mode (assembly/hex): ');

  while (true) {
    const input = readlineSync.question(chalk.blue('> '));
    
    if (input === 'exit') {
      console.log(chalk.red('Exiting REPL...'));
      break;
    }

    if (mode === 'assembly') {
      const code = input.split(';');
      assemblyInterpreter.interpret(code);
    } else if (mode === 'hex') {
      hexInterpreter.interpret(input);
    } else {
      console.log(chalk.red('Invalid mode. Use "assembly" or "hex".'));
      mode = readlineSync.question('Choose mode (assembly/hex): ');
    }
  }
};

if (program.run) {
    console.log(chalk.green('Running the APU...'));
}

if (program.assembly) {
    const code = program.assembly.split(';');
    assemblyInterpreter.interpret(code);
}

if (program.hex) {
    const hexCode = program.hex;
    hexInterpreter.interpret(hexCode);
}

if (program.interactive) {
    runRepl();
}
