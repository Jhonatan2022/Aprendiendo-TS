// los .d.ts son archivos de definicion de tipos de datos, no puede haber codigo en ellos
export interface IHero {
    readonly name: string;
    wonBattles: number;
    age: number;
    powerScore: number;
}
