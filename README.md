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

## License
Boost software license 1.0
