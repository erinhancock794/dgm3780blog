---
title: TypeScript
date: "2021-02-13T23:46:37.121Z"
---


Typescript is a variant of JavaScript. It has all of JavaScript's features while adding another type system. It's super helpful for developers because JavaScript has types, but it doesn't consistently check what has been assigned to variables. That's where TypeScript comes in. It identifies unexpected behavior and lower the chance of bugs. 

It's a transpiled language, which means it takes high level code and changes it to another high level code. This is different from compilation because that takes high level code and changes it to low level code. 

TypeScript adds new types in addition to JavaScript's primary types. Variables and functions can be assigned to the following additional types:

#### Any
Any is mainly used to bypass type checking.

#### Unknown
Unknown is used to describe variable that you don't know when writing an application, such as values from dynamic content.
```
let notSure: unknown = 4;
notSure = 'could be a string'
```
#### Never

Functions that return never don't have a reachable end point.
```
function error(message: string): never {
    throw new Error(message);
}
```
#### Void
Void is used when a function returns nothing, like a console.log. It can be used when typing a return value of a function.
```
function warningUser(): void {
    console.log('This is a warning.')
}
```
#### Enum
The Enum type establishes allowed values and works on indexes.
```
Enum Shape {
    Square,
    Circle,
    Triangle
}

let s: Shape.Square;
let myShape: Shape = Shape.Triangle;
//myShape is 2
```
#### Tuple
Tuple type allows multiple types to be combined into one. This allows you to express an array with a fixed amount of elements whose types are known but aren't the same.
```
let x: [string, number];
x = ['hello', 2]; //works
x = [2, 'hello']; //error
```

In addition to adding types, TypeScript also focuses on the shape that values have and it uses interfaces to do that. Interfaces act like a contract for your code.

```
interface CarInfo {
    model: string;
    make: string;
    year: number;
}
function printCarModel(carObj: CarInfo) {
    console.log(carObj.model);
}
let carObj = { model: 'Jetta', make: 'Volkswagen', year: 2018, 'color': 'red'};
printCarModel(carObj)

```
