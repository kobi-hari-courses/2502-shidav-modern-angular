# Module 03 - Typescript

## Projects
|     |     |
| --- | --- |
| [fun-with-ts](projects/fun-with-ts/) | Example of a node project in Typescript |


## Typescript basics
* We learned about the basic types of typescript
  * The 6 atomic types of javascript: `boolean`, `number`, `string`, `object`, `function` and `undefined`
* Typed arrays: `number[]` and `Array<number>`
* Tuples: `[number, number], [string, boolean, number]`


### Typed Arrays
Typed arrays allow specifying the type of elements an array can hold, ensuring type safety. This helps catch errors at compile time and improves code reliability. It also makes code more predictable when working with collections of data.

```typescript
let numbers: number[] = [1, 2, 3];
let strings: string[] = ['a', 'b', 'c'];
```

### Tuples
Tuples define arrays with a fixed number of elements, each with a specific type. This is useful when dealing with structured but heterogeneous data, such as representing a database record with different types.

```typescript
let person: [string, number] = ['John', 25];
```

### "let" vs "var"
`let` has block scope, meaning it is only accessible inside the block where it is defined. `var`, on the other hand, has function scope and can be accessed outside of the block where it was declared, which can lead to unexpected behaviors.

```typescript
function test() {
    for (let i = 0; i < 3; i++) {
        console.log(i); // Works as expected
    }
    // console.log(i); // Error: i is not defined
}
```

### `const` variables
`const` declares variables that cannot be reassigned, ensuring immutability. However, objects declared with `const` can still have their properties modified.

```typescript
const PI = 3.14;
// PI = 3.1415; // Error: Cannot assign to 'PI'
```

### `any` and `unknown`
The `any` type allows a variable to hold values of any type, disabling type safety and making it flexible but potentially error-prone. The `unknown` type is similar but requires type checking before using the value.

```typescript
let anything: any = 42;
anything = "hello"; // No error, but no type safety

let something: unknown = "Hello";
if (typeof something === "string") {
    console.log(something.toUpperCase()); // Safe after type check
}
```

### The `type` Keyword
The `type` keyword is used to create custom type aliases. This makes code more readable and reusable by defining complex types once and reusing them.

```typescript
type Point = { x: number; y: number };
let p: Point = { x: 10, y: 20 };
```


## Object types in Typrscript

### General Object Type
The `object` type in TypeScript is a more general type that can hold any object. However, it does not specify the properties or structure of the object, making it less useful for enforcing type safety.

```typescript
let obj: object = { key: 'value' };
obj = {x: 40, y: 30};
obj = [1, 2, 3]; // Also valid since arrays are objects in JavaScript
```

### Explicit Object Types
Objects can be explicitly typed with specific properties or as generic objects. This helps define the expected structure of an object and ensures type safety when accessing properties.

```typescript
let obj: { x: boolean; y: number } = { x: true, y: 10 };
```

### Record<K, T> Type
The `Record<K, T>` type is a utility type that maps a set of keys (K) to values of a specified type (T). It is useful for defining objects where keys are known but their values need to conform to a specific type.

```typescript
let userRoles: Record<string, string> = {
    admin: 'full-access',
    editor: 'write-access',
    viewer: 'read-only'
};
```

## Function Types
Function types define input and return value types for functions. This ensures that functions receive the correct arguments and return the expected type, reducing runtime errors.

```typescript
let add: (a: number, b: number) => number = (a, b) => a + b;
```

### Using the "..." Symbol in Function Types
The rest parameter `...` allows functions to accept a variable number of arguments. This is useful when the number of arguments is not fixed. It can also be used in lambda type definitions to make function signatures more concise.

```typescript
let sum: (...numbers: number[]) => number = (...numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0);
};
```

## Optional Arguments in Function Types
Optional parameters are indicated with `?`, making them optional when calling the function. This is useful for providing default behavior when certain arguments are not passed. In functional types, this helps define more flexible function signatures.

```typescript
let greet: (name: string, message?: string) => void = (name, message) => {
    console.log(`Hello ${name}, ${message || 'Welcome!'}`);
};
```

## Object Oriented Programming in Typescript
### Defining Classes
Classes in TypeScript follow an object-oriented approach with defined properties and methods. They allow creating blueprints for objects and organizing code into reusable structures.

```typescript
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
```

### Public and Private Fields
Public fields are accessible anywhere, while private fields are restricted to the class. This helps encapsulate implementation details and prevents accidental modifications from outside the class.

```typescript
class Person {
    public name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
```

### Readonly Fields
Readonly fields cannot be modified after initialization. They help ensure that certain properties remain constant throughout the lifetime of an object.

```typescript
class Circle {
    readonly PI = 3.14;
}
```

### Properties (Get, Set)
Getters and setters provide controlled access to class properties. They allow adding logic when retrieving or modifying values.

```typescript
class Person {
    private _age: number = 0;
    get age() {
        return this._age;
    }
    set age(value: number) {
        if (value > 0) this._age = value;
    }
}
```

### Constructors
The `constructor` method initializes class instances. It is automatically called when an object is created from a class.

```typescript
class Car {
    model: string;
    constructor(model: string) {
        this.model = model;
    }
}
```

### Setting Fields in the Constructor Parameters
Shorthand syntax can automatically create and assign properties, making the code more concise.

```typescript
class Person {
    constructor(public name: string, private age: number) {}
}
```

### Extending a Class and the Super Method
`extends` creates a subclass, and `super` calls the parent constructor. This allows sharing behavior between classes.

```typescript
class Animal {
    constructor(public name: string) {}
}
class Dog extends Animal {
    constructor(name: string, public breed: string) {
        super(name);
    }
}
```

### Abstract Classes
Abstract classes cannot be instantiated and must be extended. They can include abstract methods, which must be implemented by subclasses.

```typescript
abstract class Shape {
    abstract getArea(): number;
}

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
```

### Interfaces
Interfaces define a structure that objects must follow. They provide a way to enforce a contract on an object’s shape.

```typescript
interface User {
    name: string;
    age: number;
}
let user: User = { name: 'Alice', age: 25 };
```

### Union Types
Union types allow a variable to have multiple possible types. They are useful when a value can have different forms.

```typescript
let value: string | number;
value = 42;
value = 'Hello';

let direction: 'up' | 'down' | 'left' | 'right';
direction = 'up';
```

### Intersection Types
Intersection types combine multiple types into one. This is useful when an object needs to satisfy multiple contracts simultaneously.

```typescript
interface Logger {
    log: () => void;
}
interface Database {
    save: () => void;
}
type Service = Logger & Database;

function processService(service: Service) {
    service.log();
    service.save();
}
```

### Type Narrowing
Type narrowing helps refine types at runtime, allowing safer operations based on conditions. This is useful when working with union types.

```typescript
function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log("String: ", value.toUpperCase());
    } else {
        console.log("Number: ", value.toFixed(2));
    }
}
```

## Working Environment
* We saw how to create working environment with npm and vscode
* We Defined source and dist folders
* We saw how to create the `tsconfig.json` file and configure different aspects of the typescript project
  * What the target version of javascript is
  * Where to locate the source files
  * Where to place the compiled files
  * Libreries to include
  * Adding `map` files to support debugging
  * Running in the compiler in `watch` mode for continous compilation
* We saw how to configure the `VS Code Debugger` for work with our `node.js` project


