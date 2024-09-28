# X5502
The first APU (Anormal Processing Unit)

## Cli usage
```bash
::::::::-====================
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
X5502 Enviroment runner

enter assembly/hex for running especific code
> assembly
>>> START:
>>> LOAD #message
>>> CALL print_string
>>> HALT
>>> message:
>>> .DB "Hello, World!", 0x00
>>> SRUN:NOW
Compiling......1%......15%....20%...100%...
Now running tmp.bin....
Hello, World!
Program ended
>>>
```

## JsLib example usage
```javascript
// Import the jslib (X5502APU) module
const X5502APU = require('x5502/jslib');

// Create an instance of the X5502 APU
const apu = new X5502APU();

// Example usage of the X5502APU in a CLI context
console.log('--- X5502 APU - Hello World Simulation ---');

// Load a string into memory (e.g., at address 0x10)
apu.loadStringIntoMemory(0x10, 'Hello, World!');

// Simulate running the following assembly code
apu.LOAD(0x10);            // Load the memory address of the string into ACC
apu.CALL('print_string');   // Call the print_string function
apu.HALT();                 // Halt the program

// Output result stored in the APU's buffer
console.log('Final Output:', apu.getOutput());
```

## License
Boost software license 1.0
