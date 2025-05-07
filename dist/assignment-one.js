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
const arrays = [];
function concatenateArrays(...arrays) {
    const concatArray = arrays.flat();
    console.log(concatArray);
    return concatArray;
}
// concatenateArrays(["a", "b"], ["c"], ['d']); 
