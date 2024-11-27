// let message: string;

// // variationName: type -> string, number, boolean, null, undefined, object, array, function

// let age: number = 30;

// let userName: string = "John";

// let isAdult: boolean = true;

// let hobbies: string[] = ["Sports", "Gaming", "Reading", "Traveling"];

// let address: [string, number] = ["Street", 99]; // Tuple

// // function add(a: number, b: number): number {
// //   return a + b;
// // }

// type Car = {
//   brand: string;
//   model: string;
//   year: number;
//   chargeVoltage?: number;
// };

// let fordCar: Car = {
//   model: "Mustang",
//   year: 2021,
//   brand: "Ford",
// };

// let teslaCar: Car = {
//   model: "Model S",
//   brand: "Tesla",
//   year: 2021,
//   chargeVoltage: 220,
// };

// // Type Aliases
// type ColorCodeType = [number, number, number, number?];

// let colorCode: ColorCodeType = [0, 0, 0, 0.5];

// let primaryColorCode: ColorCodeType = [255, 0, 0];

// let secondaryColorCode: ColorCodeType = [0, 255, 0];

// // Union Types
// type InputValue = string | number | boolean | undefined;

// const value: InputValue = "Hello World";

// type UserStatusType = "active" | "inactive" | "pending";

// const useStatus: UserStatusType = "active";

// type ResultType = "heads" | "tails";

// let result: ResultType;

// function flipCoin() {
//   if (Math.random() > 0.5) return "heads";
//   return "tails";
// }

// result = flipCoin();

// // Intersection Types
// type Employee = {
//   id: number;
//   role: string;
// };

// type Manager = {
//   department: string;
//   reports: Employee[];
// };

// type ManagerEmployee = Employee & Manager;

// let managerEmployee: ManagerEmployee = {
//   id: 1,
//   role: "Software Engineer",
//   department: "Engineering",
//   reports: [],
// };

// // Typescript Interfaces
// interface EmployeeInterface {
//   id: number;
//   role: string;
//   jobTitle: string;
//   salary: number;
// }

// interface EmployeeInterface {
//   projects: string[];
// }

// interface ManagerInterface {
//   department: string;
//   reports: EmployeeInterface[];
// }

// interface ManagerEmployeeInterface
//   extends EmployeeInterface,
//     ManagerInterface {}

// const employee1: EmployeeInterface = {
//   id: 1,
//   role: "Software Engineer",
//   jobTitle: "Frontend Developer",
//   salary: 100000,
//   projects: ["Project A", "Project B"],
// };

// const employee2: EmployeeInterface = {
//   id: 2,
//   role: "Software Engineer",
//   jobTitle: "Backend Developer",
//   salary: 120000,
//   projects: ["Project C", "Project D"],
// };

// const manager: ManagerEmployeeInterface = {
//   id: 3,
//   role: "Engineering Manager",
//   jobTitle: "Engineering Manager",
//   salary: 150000,
//   projects: [],
//   department: "Engineering",
//   reports: [employee1, employee2],
// };

// type JsonValue = string | number | boolean | null | JsonValue[] | JsonObject;

// type JsonObject = {
//   [key: string]: JsonValue;
// };

// const jsonData: JsonObject = {
//   id: 1,
//   role: "Software Engineer",
//   jobTitle: "Frontend Developer",
//   salary: 100000,
//   isMarried: false,
//   projects: ["Project A", "Project B", 30, null, true],
//   address: {
//     street: "Street",
//     number: 99,
//   },
// };

// // Functions

// type GreetFunctionType = (a: string) => string;

// function makeDate(timestamp: number): Date;
// function makeDate(m: number, d: number, y: number): Date;
// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
//   if (d !== undefined && y !== undefined) {
//     return new Date(y, mOrTimestamp, d);
//   } else {
//     return new Date(mOrTimestamp);
//   }
// }

// const greetFunction: GreetFunctionType = (name: string) => `Hello ${name}`; // Function

// // const sum = (a: number, b: number) => a + b;

// // let greet: (a: string) => string; // Function Type

// // Class

// class Person {
//   name: string;
//   age?: number;

//   constructor(name: string = "Mostafiz", age?: number) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Hello ${this.name}`;
//   }
// }

// const person1 = new Person("John", 30);

// const person2 = new Person("Jane");

// const person3 = new Person();

// console.log(person1.greet());

// console.log(person2.greet());

// console.log(person3.greet());

// // Generics

// // <Type>
// function identity<T>(arg: T): T {
//   return arg;
// }

// const output = identity<{ name: string; age: number }>({
//   name: "John",
//   age: 30,
// });

// const array1: number[] = [1, 2, 3, 4, 5];

// const array2: string[] = ["John", "Jane", "Doe"];

// function reverseArray<T>(array: T[]): T[] {
//   return array.reverse();
// }

// const reverseStringArray = reverseArray<number>(array1);

// // Generic Interface

// interface Box<T extends string | number> {
//   content: T;
// }

// // type StringBox = Box<string>;

// // type NumberBox = Box<number>;

// const box1: Box<string> = { content: "Hello World" };

// const box2: Box<number> = { content: 100 };

// // const box3: Box<boolean> = { content: true };

// function add<T, U>(a: T, b: U): string {
//   return `${a} + ${b}`;
// }

// // const sum = add<number, number>("10", 20);

// // Enums
// enum Role {
//   Admin = "admin",
//   User = "user",
// }

// type User = {
//   id: number;
//   name: string;
//   email: string;
//   role: Role;
// };

// const user: User = {
//   id: 1,
//   name: "John",
//   email: "john@example.com",
//   role: Role.Admin,
// };

// const user2: User = {
//   id: 2,
//   name: "Jane",
//   email: "jane@example.com",
//   role: Role.User,
// };

// // Top Types

// let x: any;

// // x = { name: "John" };

// // x = 10;`

// // x = true;

// // x = "Hello World";

// // x = [1, 2, 3];

// // x = null;

// // x = undefined;

// // x = {};

// console.log(x.unknownProperty);

// let y: unknown;

// // y = { name: "John" };

// // y = 10;

// // y = true;

// y = "Hello World";

// // y = [1, 2, 3];

// // y = null;

// // y = undefined;

// console.log((y as number).toFixed(2));

// // Bottom Type

// let z: never;

// // z = 10;

// const fetchData: Promise<User> = new Promise((resolve, reject) => {
//   const response = {} as User;
// });

// Utility Types

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  permissions?: string[];
  address?: {
    street: string;
    number: number;
  };
  projects?: string[];
  isActive?: boolean;
};

type NewUser = Pick<User, "name" | "email">;

type UserWithoutId = Omit<User, "id" | "projects">;

type RequiredUser = Required<User>;

function createUser(user: RequiredUser) {
  console.log("User Created");
}

createUser({
  id: 1,
  name: "John",
  email: "john@example.com",
  role: "admin",
  address: {
    street: "Mirpur, Dhaka",
    number: 1111,
  },
  projects: [],
  isActive: true,
  permissions: [],
});

type PartialUser = Partial<User>;

function updateUser(user: Partial<User>) {
  console.log("User update");
}

updateUser({
  name: "John",
});

type UserStatus = "active" | "inactive" | "pending";

// type UserWithStatus = {
//   [key: string]: UserStatus;
// };

type UserWithStatus = Record<string, UserStatus>;

const userStatusList: UserWithStatus = {
  john: "active",
  jane: "inactive",
  rahim: "pending",
  karim: "active",
};

// Exlcude
type NewUserStatus = Exclude<UserStatus, "pending">;

type UpperUserStatus = Uppercase<UserStatus>;
