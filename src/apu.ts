export class X5501 {
    private resistor1: number[];
    private resistor2: number[];

    constructor() {
        // Initialize 200 registers for each resistor with default value 0
        this.resistor1 = Array(200).fill(0);
        this.resistor2 = Array(200).fill(0);
    }

    // Load a value into a specific register of a resistor
    load(resistor: number, registerIndex: number, value: number): void {
        this.getResistor(resistor)[registerIndex] = value;
        console.log(`Loaded value ${value} into Resistor ${resistor} at register ${registerIndex}`);
    }

    // Store a value from one resistor to another
    move(sourceResistor: number, sourceIndex: number, targetResistor: number, targetIndex: number): void {
        const value = this.getResistor(sourceResistor)[sourceIndex];
        this.getResistor(targetResistor)[targetIndex] = value;
        console.log(`Moved value ${value} from Resistor ${sourceResistor}[${sourceIndex}] to Resistor ${targetResistor}[${targetIndex}]`);
    }

    // Add two registers and return the result
    add(resistor1: number, index1: number, resistor2: number, index2: number): number {
        const result = this.getResistor(resistor1)[index1] + this.getResistor(resistor2)[index2];
        console.log(`Adding Resistor ${resistor1}[${index1}] + Resistor ${resistor2}[${index2}] = ${result}`);
        return result;
    }

    // Subtract two registers and return the result
    sub(resistor1: number, index1: number, resistor2: number, index2: number): number {
        const result = this.getResistor(resistor1)[index1] - this.getResistor(resistor2)[index2];
        console.log(`Subtracting Resistor ${resistor1}[${index1}] - Resistor ${resistor2}[${index2}] = ${result}`);
        return result;
    }

    // Utility function to get the correct resistor array
    private getResistor(resistor: number): number[] {
        if (resistor === 1) return this.resistor1;
        if (resistor === 2) return this.resistor2;
        throw new Error('Invalid resistor number. Choose 1 or 2.');
    }
}
