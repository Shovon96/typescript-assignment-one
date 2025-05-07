
// Problem-1
function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        console.log(input.toLowerCase());
    } else {
        console.log(input.toUpperCase());
    }
    return "Invalid input";
}

// formatString("Hello", true);



// Problem-2
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const filterBooks = items.filter(book => book.rating >= 4);
    return filterBooks
}
// console.log(filterByRating(books))



// Problem-3
function concatenateArrays<T>(...arrays: T[][]): T[] {
    const concatArray = arrays.flat();
    console.log(concatArray)
    return concatArray
}

// concatenateArrays(["a", "b"], ["c"], ['d']); 


// Problem-4
class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;

    }
    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year)
        this.model = model;
    }

    getModel(): string {
        return `Model: ${this.model}`
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());
// console.log(myCar.getModel()); 