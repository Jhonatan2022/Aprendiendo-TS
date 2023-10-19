type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPower = 'fly' | 'run' | 'swim';

type Hero = {
    readonly id?: HeroId;
    name: string;
    age: number;
    isActive?: boolean;
    power?: HeroPower;
}

let hero: Hero = {
    name: 'Ironman',
    age: 45,
}

function createHero(hero: Hero): Hero {
    const { name, age } = hero;
    return{
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true,
    }
}

const batMan = createHero({ name: 'Batman', age: 30 });
batMan.power = "swim";