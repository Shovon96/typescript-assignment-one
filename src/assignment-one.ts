{
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
}

{
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
}