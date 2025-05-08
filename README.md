# I have written articles on two important topics in TypeScript.

## 1. What is type inference in TypeScript? Why is it helpful?

### Answer: 
TypeScript's type `inference` automatically determines the types of variables, function return values, objects, and arrays values. That is a powerful feature that allows you to write more effecience and readable code. It also helps to prevent errors by ensuring that your code is type-safe.

### What is type inference?

Type `inference` means that TypeScript automatically understands what the type of a variable, function, or expression should be. That is, it is a feature that allows the TypeScript compiler to automatically determine the type of a variable or expression, and you do not have to explicitly specify the type of each variable and expression in your code.

<b>For example:</b>

```typescript 
const x = 10; 
const y = x + 2; 
console.log(y); // Output: 12 
```

In this code, the TypeScript compiler can infer that the type of `x` is number. This is because `x` is being assigned a `number` value. The compiler can also infer that the type of `y` is number, because `y` is the result of `adding two numbers` together.

As a result, the TypeScript compiler does not need to be explicitly told the type of `x` or `y`. This can make the code more concise and readable, as it eliminates the need for type annotations.


### Why is it helpful?

Benefits of TypeScript Type Inference
TypeScript type inference provides a number of benefits, including:

- <b>Conciseness:</b> TypeScript type inference can help to make your code more concise by eliminating the need for type annotations. This can make your code easier to read and write.

- <b>Readability:</b> TypeScript type inference can help to make your code more readable by making it clear what the types of your variables and expressions are. This helps others to understand your code.

- <b>Type safety:</b> TypeScript type inference prevents errors by ensuring that your code is type-safe, and the TypeScript compiler can detect compile-time errors at runtime.

### Conclusion
Type inference is a powerful feature of TypeScript that gives developers more security and convenience with less code. It makes TypeScript smarter and type-safer than JavaScript. Therefore, understanding and using type inference well improves a developer's coding skills.


## 2. Provide an example of using union and intersection types in TypeScript.

### Answer: 
In TypeScript, union and intersection types are powerful type for building type-safe code. A union type `(|)` allows a variable to hold one of multiple possible types. And on the other hand, an intersection type `(&)` combines multiple types into a single type that must satisfy all the included types.

### Using of union type in TypeScript:
Union types allow you to specify that a variable or expression can have one of a few different types. Union types are created by joining multiples with the pipe `|` symbol.

<b>For example:</b>

```typescript 
interface Animal {
  kind: string;
}
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}
interface Employee {
  employeeCode: string;
}
let employee: Animal | Person | Employee = {
  kind: 'Human',
  firstName: 'Jane',
  lastName: 'Smith',
  age: 20  
}
```
The code above has an employee object of the Animal | Person | Employee type which means that it can have some of the properties of the Animal, Person, or Employee interfaces. Not all of them have to be included, but if they’re included, then the type has to match the ones in the interface.

### Using of intersection type in TypeScript:
An intersection type lets us combine multiple types into one. The structure of an object that has an intersection type has to have both the structure of all the types that form the intersection types. It’s denoted by an `&` sign. All members of all the types are required in the object of an intersection type.

<b>For example:</b>

```typescript 
type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

const person: Person = {
  name: 'Alice',
  age: 30,
};

console.log(person); // { name: 'Alice', age: 30 }
```
We have two types, `Name` and `Age`, each representing an object with specific properties. We then create an intersection type `Person` that combines both `Name` and `Age`. The resulting `Person` type enforces that any object assigned to it must have both a `name` and an `age` property. Finally, we create an object `person` that satisfies the intersection type and contains both properties.

### Conclusion
We use `union` and `intersection` types in TypeScript to make our code more flexible, expressive, and type-safe. A `union` type allows a variable to hold values of multiple possible types. And another one, an `intersection` type combines multiple types into one, requiring that the resulting value includes all properties from each type.
