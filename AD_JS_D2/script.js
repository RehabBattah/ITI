//======= Rectangle ================
// Rectangle.counter=0; 
// function Rectangle(width, height) {
//     this.width = width;
//     this.height = height;
//     Rectangle.counter++;
// }
// Rectangle.prototype.area = function () {
//     return (this.width * this.height) ;
// }
// Rectangle.prototype.perimeter = function () {
//     return (this.width + this.height) * 2;
// }
// // calc Area,Perimeter
// let rect = new Rectangle(5,10)
// console.log("area "+ rect.area());
// console.log("perimeter " + rect.perimeter());

// //Modifying toString()
// Rectangle.prototype.toString = function () {
//     return `Width is = ${this.width} , Height is = ${this.height}\nArea => ${this.area()}\nPerimeter => ${this.perimeter()}`;
// }
// console.log(rect.toString());

// //counts numbers of created objects and Class method 
// Rectangle.countNoOfObj = function () {
//     return Rectangle.counter;
// }
// console.log("No Of Objects = "+Rectangle.countNoOfObj());

// .********************************************************************************

// ========= Shape , Rectangle , Square ============
// ======  1.Shape  ==============
// function Shape(width,height) {
//     if (this.constructor.name === 'Shape') {
//         throw new Error("You can not create instance from shape");
//     }
//     this.width = width;
//     this.height = height;
// }
// // ======= 2.Rectangle ==============
// Rectangle.counter=0; 
// function Rectangle(width, height) {
//     if (Rectangle.counter > 1) {
//         throw new Error("You can create only 1 instance from Rectangle and no more")
//     }
//     Shape.call(this,width,height);
//     Rectangle.counter++;
// }
// // Rectangle inherit Shape 
// Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.constructor = Rectangle;

// // calc Area,Perimeter
// Rectangle.prototype.area = function () {
//     return (this.width * this.height) ;
// }
// Rectangle.prototype.perimeter = function () {
//     return (this.width + this.height) * 2;
// }
// let rect = new Rectangle(5,10)
// console.log("Area Rectangle "+ rect.area());
// console.log("Perimeter Rectangle " + rect.perimeter());

// //Modifying toString()
// Rectangle.prototype.toString = function () {
//     return `Rectangle:-\nWidth is = ${this.width} , Height is = ${this.height}\nArea => ${this.area()}\nPerimeter => ${this.perimeter()}`;
// }
// console.log(rect.toString());

// //counts numbers of created objects and Class method 
// Rectangle.countNoOfObj = function () {
//     return Rectangle.counter;
// }
// console.log("No Of Objects Rectangle = " + Rectangle.countNoOfObj());

// // ======== 3.Square ==============
// Square.counter = 0;
// function Square(side) {
//     if (Square.counter > 1) {
//         throw new Error("You can create only 1 instance from Square and no more")
//     }
//     Rectangle.call(this,side,side)
//     Square.counter++;
// }
// Square.prototype=Object.create(Rectangle.prototype)
// Square.prototype.constructor=Square;

// let square1 = new Square(10)
// // let square2 = new Square(10)

// .********************************************************************************

// ===== NO.2 ========================

function Person(name, age) {
    if (this.constructor.name === 'Person') {
        throw new Error("You can not create an instance of Person ");
    }
    this.name = name;
    this.age = age;
}
Person.prototype.getName = function() {return this.name;};
Person.prototype.setName = function(name) {this.name = name;};
Person.prototype.getAge = function() {return this.age;};
Person.prototype.setAge = function(age) {this.age = age;};


Employee.counter = 0;
function Employee(name,age,salary) {
    Person.call(this,name,age)
    this.salary = salary;
    Employee.counter++;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

let emp1 = new Employee(5,"Rehab",6000);
let emp2 = new Employee(5,"Rehab",6000);
Employee.countNoOfEmployees = function () {
    return Employee.counter;
}
console.log("No Of Employees = " + Employee.countNoOfEmployees());

Employee.displayHTRules = function(){return `the company’s HR rules.... `}
console.log(Employee.displayHTRules());

Student.counter=0;
function Student(name,age,id) {
    Person.call(this,name,age,id)
    this.id = id;
    Student.counter++;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

let std1 = new Student(5,"Rehab",14);
Student.countNoOfStudents = function () {
    return Student.counter;
}
console.log("No Of Students = " + Student.countNoOfStudents());
