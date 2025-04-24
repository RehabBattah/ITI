// NO.1 & 2
function Employee(id, name, age, salary, isManager) {
    this.id = id++;
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.isManager = isManager;
}

function Office(name) {
    this.name = name;
    this.employees = [];

    this.getAllEmployees = function getAllEmployees() {
        return this.employees;
    }
    this.hire = function hire(emp) {
        return this.employees.push(emp);
    }
    this.getEmployeeById = function getEmployeeById(id) {
        return this.employees.find((e) => e.id === id);
    }
    this.fire = function fire(id) {
        return this.employees = this.employees.filter(e => e.id !== id)
    }
}

let newOffice = new Office("Office");

let id, name, salary, isManager;
function hireEmployee() {
    id = document.getElementById("id").value;
    name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    salary = document.getElementById("salary").value;
    isManager = document.querySelector('input[name="isManager"]:checked').value === "Yes";

    let employee = new Employee(id, name, age, salary, isManager);


    newOffice.hire(employee);

    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("salary").value = ""; 

    alert(`Employee ' ${name} ' Added successfully`);
}

function show() {
    console.log(newOffice.getAllEmployees());
}

function fireEmployee() {
    let idFire = Number(prompt("please enter the id to fire"));

    let emp = newOffice.getEmployeeById(idFire);
    newOffice.fire(idFire);

    alert(`Employee ' ${emp.name} ' fired successfully`);
}

// NO.3
function Book(id, name, writer_name, numOfPages) {
    this.id = id;
    this.name = name;
    this.writer_name = writer_name;
    this.numOfPages = numOfPages;
}
let book1 = new Book(1, "Book A", "rehab", 55)
let book2 = new Book(2, "Book B", "Mohamed", 110)
function Box(width, height) {
    this.width = width;
    this.height = height;
    this.books = [];

    this.addBook = function (book) {
        return this.books.push(book)
    }

    this.sumPages = function () {
        let sum = 0
        for (let i = 0; i < this.books.length; i++) {
            sum += this.books[i].numOfPages;
        }
        return "Sum of all pages of Books = " + sum
    }
    this.calcArea = function calcArea() {
        return "Area of The Box = " + (this.width * this.height)
    }
}
console.log("********** BOX & BOOKS *************");

let box = new Box(5, 3)
box.addBook(book1)
box.addBook(book2)


console.log(book1);
console.log(book2);
// console.log(box.books);

console.log(box.sumPages());
console.log(box.calcArea());

console.log("********** Employee **************");