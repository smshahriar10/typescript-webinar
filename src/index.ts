let age: number = 30;

let userName: string = "John";

let isAdult: boolean = true;

let hobbies: string[] = ["Sports", "Gaming"];

let address: [string, number] = ["Street", 99];

function add(a: number, b: number) {
  return a + b;
}

type Car = {
  brand: string;
  model: string;
  year: number;
  chargeVoltage?: number;
};

let fordCard: Car = {
  model: "Mustang",
  year: 2021,
  brand: "Ford",
};

let teslaCard: Car = {
  model: "Model S",
  brand: "Tesla",
  year: 2021,
  chargeVoltage: 220,
};

// Type Aliases
type ColorCodeType = [number, number, number, number?];

let colorCode: ColorCodeType = [0, 0, 0, 0.5];

let primaryColorCode: ColorCodeType = [255, 0, 0];

let secondaryColorCode: ColorCodeType = [0, 255, 0];

// Union Types
type InputValue = string | number | boolean | undefined;

const value: InputValue = undefined;

type UserStatusType = "active" | "inactive" | "pending";

const useStatus: UserStatusType = "active";

type ResultType = "heads" | "tails";

let result: ResultType;

function flipCoin() {
  if (Math.random() > 0.5) return "heads";
  return "tails";
}

result = flipCoin();

// Intersection Types
type Employee = {
  id: number;
  role: string;
};

type Manager = {
  department: string;
  reports: Employee[];
};

type ManagerEmployee = Employee & Manager;

let managerEmployee: ManagerEmployee = {
  id: 1,
  role: "Software Engineer",
  department: "Engineering",
  reports: [],
};

// Typescript Interfaces
interface EmployeeInterface {
  id: number;
  role: string;
  jobTitle: string;
  salary: number;
}

interface EmployeeInterface {
  projects: string[];
}

interface ManagerInterface {
  department: string;
  reports: EmployeeInterface[];
}

interface ManagerEmployeeInterface
  extends EmployeeInterface,
    ManagerInterface {}

const employee1: EmployeeInterface = {
  id: 1,
  role: "Software Engineer",
  jobTitle: "Frontend Developer",
  salary: 100000,
  projects: ["Project A", "Project B"],
};

const employee2: EmployeeInterface = {
  id: 2,
  role: "Software Engineer",
  jobTitle: "Backend Developer",
  salary: 120000,
  projects: ["Project C", "Project D"],
};

const manager: ManagerEmployeeInterface = {
  id: 3,
  role: "Engineering Manager",
  jobTitle: "Engineering Manager",
  salary: 150000,
  projects: [],
  department: "Engineering",
  reports: [employee1, employee2],
};
