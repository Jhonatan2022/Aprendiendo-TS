class Hero {
    readonly name: string; // solo lectura
    // #powerScore: number; // private
    private powerScore: number; // Privado solo accesible desde la clase
    wonBattles: number = 0;
    protected age: number; // Solo accesible desde la clase y sus subclases

    constructor(name: string, powerScore: number) {
        this.name = name;
        this.powerScore = powerScore;
    }

    get fullName(){
        return `${this.name} - score: ${this.powerScore}`;
    }

    set power(newPower: number){
        if(newPower <= 100){
            this.powerScore = newPower;
        } else {
            throw new Error('The power score cannot be greater than 100');
        }
    }
}