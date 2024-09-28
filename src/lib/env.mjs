import { Command } from 'commander';
import { createInterface } from 'readline';
import * as fs from 'fs';
import * as path from 'path';

const program = new Command();

program
  .name('X5502 Enviroment')
  .version('0.1.5502');

program
  .command('run')
  .description('Run the Eviroment')
  .action(() => {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const env = {};

    rl.on('line', (line) => {
      const parts = line.split('=');
      if (parts.length === 2) {
        const key = parts[0].trim();
        const value = parts[1].trim();
        env[key] = value;
      }
      console.log(env);
    });
  });

program.parse();
