// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type HeroPower = 'fly' | 'run' | 'swim';

// type Hero = {
//     readonly id?: HeroId;
//     name: string;
//     age: number;
//     isActive?: boolean;
//     power?: HeroPower;
// }

// let hero: Hero = {
//     name: 'Ironman',
//     age: 45,
// }

// function createHero(hero: Hero): Hero {
//     const { name, age } = hero;
//     return{
//         id: crypto.randomUUID(),
//         name,
//         age,
//         isActive: true,
//     }
// }

// const batMan = createHero({ name: 'Batman', age: 30 });
// batMan.power = "swim";


// Intersections types
// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type HeroPower = 'fly' | 'run' | 'swim';

// type HeroBasicInfo = {
//     name: string;
//     age: number;
// }

// type HeroProperties = {
//     readonly id?: HeroId;
//     isActive?: boolean;
//     power?: HeroPower;
// }

// type Hero = HeroBasicInfo & HeroProperties;

// let hero: Hero = {
//     name: 'Ironman',
//     age: 45,
// }

// function createHero(input: HeroBasicInfo): Hero {
//     const { name, age } = hero;
//     return{
//         id: crypto.randomUUID(),
//         name,
//         age,
//         isActive: true,
//     }
// }

// const batMan = createHero({ name: 'Batman', age: 30 });
// batMan.power = "swim";

// type indexing
// type HeroProperties = {
//     isActive?: boolean;
//     power?: string;
//     address: {
//         planet: string;
//         city: string;
//     }
// }

// const addressHero: HeroProperties['address'] = {
//     planet: 'Earth',
//     city: 'New York',
// }

// Type from value
// const address = {
//     planet: 'Earth',
//     city: 'New York',
// }

// type Address = typeof address;

// const addressHero: Address = {
//     planet: 'Earth',
//     city: 'New York',
// }

// type from function return
// function createAddress(){
//     return {
//         planet: 'Earth',
//         city: 'New York',
//     }
// }

// type Address = ReturnType<typeof createAddress>;

// Arrays

// const languages: Array<string> = [];
// const languages: string[] = [];
// const languages: (string | number)[] = [];

// languages.push('Javascript');
// languages.push(123);


// gameBoard

/*
[
    ['X', 'O', 'X'], <-- string[]
    ['O', 'X', 'O'], <-- string[]
    ['O', 'X', 'X'] <-- string[
]
*/

type CellValue = 'X' | 'O' | '';
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],  
]

const gameBoard: GameBoard = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'X', 'X'],
]

type RGB = [number, number, number];
const rgb: RGB = [255, 255, 255];