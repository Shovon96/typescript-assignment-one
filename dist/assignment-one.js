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
function formatString(input, toUpper) {
    if (toUpper === false) {
        console.log(input.toLowerCase());
    }
    else {
        console.log(input.toUpperCase());
    }
    return "Invalid input";
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
function filterByRating(items) {
    const filterBooks = items.filter(book => book.rating >= 4);
    console.log(filterBooks);
    return filterBooks;
}
function concatenateArrays(...arrays) {
    const concatArray = arrays.flat();
    console.log(concatArray);
    return concatArray;
}
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        const info = `Make: ${this.make}, Year: ${this.year}`;
        console.log(info);
        return info;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        const model = `Model: ${this.model}`;
        console.log(model);
        return model;
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
function processValue(value) {
    if (typeof value === 'string') {
        const valueLength = value.length;
        console.log(valueLength);
        return valueLength;
    }
    else {
        const multipliedNumber = value * 2;
        console.log(multipliedNumber);
        return multipliedNumber;
    }
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        const result = null;
        console.log(result);
        return result;
    }
    else {
        const maxPrice = Math.max(...products.map(product => product.price));
        const findMaxPrice = products.find(product => product.price === maxPrice) || null;
        console.log(findMaxPrice);
        return findMaxPrice;
    }
}
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
        const findWeekend = 'Weekend';
        console.log(findWeekend);
        return findWeekend;
    }
    else {
        const findWeekday = "Weekday";
        console.log(findWeekday);
        return findWeekday;
    }
}
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) {
                    reject(new Error("Negative number not allowed"));
                }
                else {
                    resolve(n * n);
                }
            }, 1000);
        });
    });
}
