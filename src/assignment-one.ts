

function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        console.log(input.toLowerCase());
    } else {
        console.log(input.toUpperCase());
    }
    return "Invalid input";
}




const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const filterBooks = items.filter(book => book.rating >= 4);
    console.log(filterBooks)
    return filterBooks
}



function concatenateArrays<T>(...arrays: T[][]): T[] {
    const concatArray = arrays.flat();
    console.log(concatArray)
    return concatArray
}



class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;

    }
    getInfo(): string {
        const info = `Make: ${this.make}, Year: ${this.year}`;
        console.log(info);
        return info;
      }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year)
        this.model = model;
    }

    getModel(): string {
        const model = `Model: ${this.model}`;
        console.log(model);
        return model;
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");





function processValue(value: string | number): number {
    if (typeof value === 'string') {
        const valueLength = value.length;
        console.log(valueLength)
        return valueLength;
    } else {
        const multipliedNumber = value * 2;
        console.log(multipliedNumber)
        return multipliedNumber;
    }
}




const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        const result = null;
        console.log(result);
        return result;
    } else {
        const maxPrice = Math.max(...products.map(product => product.price));
        const findMaxPrice = products.find(product => product.price === maxPrice) || null;
        console.log(findMaxPrice)
        return findMaxPrice;
    }
}




enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        const findWeekend = 'Weekend';
        console.log(findWeekend)
        return findWeekend;
    } else {
        const findWeekday = "Weekday";
        console.log(findWeekday)
        return findWeekday;
    }
}




async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(n < 0){
                reject(new Error("Negative number not allowed"));
            }else {
                resolve (n * n);
            }
        }, 1000);
    })
}

