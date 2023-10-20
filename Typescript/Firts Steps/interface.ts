// interface Hero {
//     name: string;
//     age?: number;
//     powers: string[];
//     getName?: () => string;
// }

// const superman: Hero = {
//     name: 'Clark Kent',
//     age: 60,
//     powers: ['Super fuerza', 'Volar', 'Super velocidad'],
//     getName() {
//         return this.name;
//     }
// }

interface Product {
    id: number;
    name: string;
    price: number;
}

interface Shampoo extends Product {
    brand: string;
}

// Metods
// interface ProducOps {
//     add: (product: Product) => void;
//     getAll: () => Product[];
//     getById: (id: number) => Product;
//     clear: () => void;
// }

interface ProducOps {
    add(product: Product): void;
    getAll(): Product[];
    getById(id: number): Product;
    clear(): void;
}

interface ShoppingCart{
    totalPrice: number;
    products: Shampoo[];
    // products: (Product | Shampoo)[]; // Union
}

const cart: ShoppingCart = {
    totalPrice: 500,
    products: [
        {
            id: 1,
            name: 'Shampoo',
            price: 100,
            brand: 'Loreal'
        },
        {
            id: 2,
            name: 'Jabon',
            price: 200,
            brand: 'Dove'
        }
    ]
}

function showInfo(object: string | number[]) {
    if (typeof object === 'string'){
        return object.length;
    }
    return object.toString().length;
}

showInfo('123')
showInfo('Hola mundo');