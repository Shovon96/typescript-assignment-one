"use strict";
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
