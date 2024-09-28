import { Command } from "commander";
const program = new Command();

program
  .name('X5502 Enviroment')
  .version('0.1.5502')

program.command('asm')
   .description('Run the Eviroment in the assembly mode')
   .action(function() {
     //
     const prompt = 'X5502:: ';

   })

program.parse()
