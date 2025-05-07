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
    formatString("Hello");          // Output: "HELLO"
    formatString("Hello", true);   // Output: "HELLO"
    formatString("Hello", false);  // Output: "hello"
}