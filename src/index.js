"use strict";
let message;
// variationName: type -> string, number, boolean, null, undefined, object, array, function
let age = 30;
let userName = "John";
let isAdult = true;
let hobbies = ["Sports", "Gaming", "Reading", "Traveling"];
let address = ["Street", 99]; // Tuple
let fordCar = {
    model: "Mustang",
    year: 2021,
    brand: "Ford",
};
let teslaCar = {
    model: "Model S",
    brand: "Tesla",
    year: 2021,
    chargeVoltage: 220,
};
let colorCode = [0, 0, 0, 0.5];
let primaryColorCode = [255, 0, 0];
let secondaryColorCode = [0, 255, 0];
const value = "Hello World";
const useStatus = "active";
let result;
function flipCoin() {
    if (Math.random() > 0.5)
        return "heads";
    return "tails";
}
result = flipCoin();
let managerEmployee = {
    id: 1,
    role: "Software Engineer",
    department: "Engineering",
    reports: [],
};
const employee1 = {
    id: 1,
    role: "Software Engineer",
    jobTitle: "Frontend Developer",
    salary: 100000,
    projects: ["Project A", "Project B"],
};
const employee2 = {
    id: 2,
    role: "Software Engineer",
    jobTitle: "Backend Developer",
    salary: 120000,
    projects: ["Project C", "Project D"],
};
const manager = {
    id: 3,
    role: "Engineering Manager",
    jobTitle: "Engineering Manager",
    salary: 150000,
    projects: [],
    department: "Engineering",
    reports: [employee1, employee2],
};
const jsonData = {
    id: 1,
    role: "Software Engineer",
    jobTitle: "Frontend Developer",
    salary: 100000,
    isMarried: false,
    projects: ["Project A", "Project B", 30, null, true],
    address: {
        street: "Street",
        number: 99,
    },
};
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
const greetFunction = (name) => `Hello ${name}`; // Function
// const sum = (a: number, b: number) => a + b;
// let greet: (a: string) => string; // Function Type
// Class
class Person {
    constructor(name = "Mostafiz", age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
const person1 = new Person("John", 30);
const person2 = new Person("Jane");
const person3 = new Person();
console.log(person1.greet());
console.log(person2.greet());
console.log(person3.greet());
// Generics
// <Type>
function identity(arg) {
    return arg;
}
const output = identity({
    name: "John",
    age: 30,
});
const array1 = [1, 2, 3, 4, 5];
const array2 = ["John", "Jane", "Doe"];
function reverseArray(array) {
    return array.reverse();
}
const reverseStringArray = reverseArray(array1);
// type StringBox = Box<string>;
// type NumberBox = Box<number>;
const box1 = { content: "Hello World" };
const box2 = { content: 100 };
// const box3: Box<boolean> = { content: true };
function add(a, b) {
    return `${a} + ${b}`;
}
// const sum = add<number, number>("10", 20);
// Enums
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["User"] = "user";
})(Role || (Role = {}));
const user = {
    id: 1,
    name: "John",
    email: "john@example.com",
    role: Role.Admin,
};
const user2 = {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
    role: Role.User,
};
// Top Types
let x;
// x = { name: "John" };
// x = 10;`
// x = true;
// x = "Hello World";
// x = [1, 2, 3];
// x = null;
// x = undefined;
// x = {};
console.log(x.unknownProperty);
let y;
// y = { name: "John" };
// y = 10;
// y = true;
y = "Hello World";
// y = [1, 2, 3];
// y = null;
// y = undefined;
console.log(y.toFixed(2));
// Bottom Type
let z;
// z = 10;
const fetchData = new Promise((resolve, reject) => {
    const response = {};
});
