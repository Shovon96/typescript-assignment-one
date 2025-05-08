"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Problem-1
function formatString(input, toUpper) {
    if (toUpper === false) {
        console.log(input.toLowerCase());
    }
    else {
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
function filterByRating(items) {
    const filterBooks = items.filter(book => book.rating >= 4);
    return filterBooks;
}
// console.log(filterByRating(books))
// Problem-3
function concatenateArrays(...arrays) {
    const concatArray = arrays.flat();
    console.log(concatArray);
    return concatArray;
}
// concatenateArrays(["a", "b"], ["c"], ['d']); 
// Problem-4
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());
// console.log(myCar.getModel()); 
// Problem-5
function processValue(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    else {
        return value * 2;
    }
}
// console.log(processValue("Hello"));
// console.log(processValue(12)); 
// Problem-6
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    else {
        const maxPrice = Math.max(...products.map(product => product.price));
        return products.find(product => product.price === maxPrice) || null;
    }
}
// console.log(getMostExpensiveProduct(products));
// Problem-7
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Saturday || day === Day.Sunday) {
        return 'Weekend';
    }
    else {
        return "Weekday";
    }
}
// console.log(getDayType(Day.Monday));
// console.log(getDayType(Day.Sunday));
// Problem-8
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) {
                    reject("Negative number not allowed");
                }
                else {
                    resolve(n * n);
                }
            }, 1000);
        });
    });
}
squareAsync(5).then(console.log);
squareAsync(-4).catch(console.error);
