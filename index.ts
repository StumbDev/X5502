import { Command } from 'commander';
import chalk from 'chalk';
import { readFileSync } from 'fs';
import { X5501 } from './src/apu';

const program = new Command();
const apu = new X5501();

// Function to parse and execute assembly instructions
function executeAsmFile(filePath: string) {
    try {
        const fileContent = readFileSync(filePath, 'utf-8');
        const lines = fileContent.split('\n');

        lines.forEach((line, index) => {
            const cleanLine = line.trim().split(';')[0]; // Remove comments and trim the line
            if (cleanLine.length === 0) return; // Skip empty lines

            const [instruction, ...args] = cleanLine.split(' ');
            switch (instruction.toUpperCase()) {
                case 'LOAD':
                    apu.load(Number(args[0]), Number(args[1]), Number(args[2]));
                    break;
                case 'MOVE':
                    apu.move(Number(args[0]), Number(args[1]), Number(args[2]), Number(args[3]));
                    break;
                case 'ADD':
                    apu.add(Number(args[0]), Number(args[1]), Number(args[2]), Number(args[3]));
                    break;
                case 'SUB':
                    apu.sub(Number(args[0]), Number(args[1]), Number(args[2]), Number(args[3]));
                    break;
                default:
                    console.error(chalk.red(`Unknown instruction "${instruction}" at line ${index + 1}`));
            }
        });
    } catch (error) {
        const e = error as Error;
        console.error(chalk.red(`Error reading or parsing file: ${e.message}`));
    }
}

// Add 'load' command to load values into registers
program
    .command('load')
    .description('Load a value into a specific register of a resistor')
    .argument('<resistor>', 'Resistor number (1 or 2)')
    .argument('<registerIndex>', 'Register index (0 to 199)')
    .argument('<value>', 'Value to load into the register')
    .action((resistor, registerIndex, value) => {
        apu.load(Number(resistor), Number(registerIndex), Number(value));
    });

// Add 'move' command to move values between resistors
program
    .command('move')
    .description('Move a value from one resistor to another')
    .argument('<sourceResistor>', 'Source resistor number (1 or 2)')
    .argument('<sourceIndex>', 'Source register index')
    .argument('<targetResistor>', 'Target resistor number (1 or 2)')
    .argument('<targetIndex>', 'Target register index')
    .action((sourceResistor, sourceIndex, targetResistor, targetIndex) => {
        apu.move(Number(sourceResistor), Number(sourceIndex), Number(targetResistor), Number(targetIndex));
    });

// Add 'add' command to add two registers from different resistors
program
    .command('add')
    .description('Add values from two registers and print the result')
    .argument('<resistor1>', 'First resistor number (1 or 2)')
    .argument('<index1>', 'First register index')
    .argument('<resistor2>', 'Second resistor number (1 or 2)')
    .argument('<index2>', 'Second register index')
    .action((resistor1, index1, resistor2, index2) => {
        const result = apu.add(Number(resistor1), Number(index1), Number(resistor2), Number(index2));
        console.log(chalk.green(`Addition result: ${result}`));
    });

// Add 'sub' command to subtract values between registers
program
    .command('sub')
    .description('Subtract values from two registers and print the result')
    .argument('<resistor1>', 'First resistor number (1 or 2)')
    .argument('<index1>', 'First register index')
    .argument('<resistor2>', 'Second resistor number (1 or 2)')
    .argument('<index2>', 'Second register index')
    .action((resistor1, index1, resistor2, index2) => {
        const result = apu.sub(Number(resistor1), Number(index1), Number(resistor2), Number(index2));
        console.log(chalk.green(`Subtraction result: ${result}`));
    });

// Add 'run' command to execute instructions from a .asm file
program
    .command('run <filePath>')
    .description('Run instructions from a .asm file')
    .action((filePath) => {
        executeAsmFile(filePath);
    });

// Add a 'version' command
program.version('1.0.0').description('APU X5501 CLI with ASM file support');

program.parse(process.argv);
