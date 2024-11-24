"use strict";
let message;
// variationName: type -> string, number, boolean, null, undefined, object, array, function
let age = 30;
let userName = "John";
let isAdult = true;
let hobbies = ["Sports", "Gaming", "Reading", "Traveling"];
let address = ["Street", 99]; // Tuple
function add(a, b) {
    return a + b;
}
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
console.log(jsonData.unknownKey.value);
const greetFunction = (name) => `Hello ${name}`; // Function
// const sum = (a: number, b: number) => a + b;
// let greet: (a: string) => string; // Function Type
