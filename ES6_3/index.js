//1 - Create an object and make it iterable using [Symbol.iterator].
// const myObject = {
//     data: [10, 20, 30, 40],

//     [Symbol.iterator]: function () {
//         let index = 0;
//         const data = this.data;

//     return {
//         next: () => index < data.length
//             ? { value: data[index++], done: false }
//             : { value: undefined, done: true }
//     };
//     },
// };

// for (const value of myObject){
//     console.log(value);
// }


// 2- Write a generator to produce the Fibonacci sequence lazily.
// function* fibonacciGen(){
//     let a = 1 ;
//     while (true){
//         yield a;
//         a++;
//     }
// }
// const fibonacci = fibonacciGen();

// console.log(fibonacci.next().value);
// console.log(fibonacci.next().value);
// console.log(fibonacci.next().value);
// console.log(fibonacci.next().value);


// 3- Add values using Set and use it's methods add,delete, has and clear
// let users = new Set();
// users.add("rehab")
// users.add("mohamed")
// users.add("fathy")
// users.add("fathy")
// users.add("battah")

// users.delete('battah');
// console.log('After deleting battah ', users);
// console.log(users);

// // console.log(`Users: ${JSON.stringify(std)}`);
// console.log(`Users: ${JSON.stringify(users)}`);
// console.log(users);
// console.log('Does rehab exist? ' , users.has('rania'));

// console.log('All Users ', users.size);
// users.clear()
// console.log('After deleting battah ', users);
// // ================================================

// 4- Using WeakMap with these contants


// let weakMap1 = new WeakMap()
// function createStudents() {
//     const studentOne = { name: 'A' };
//     const studentTwo = { name: 'B' };
//     weakMap1.set(studentOne,  { age: 25, role: "Developer" })
//     return {studentOne,studentTwo};
// }
// const { studentOne, studentTwo } = createStudents();

// console.log('Student 1 ' , weakMap1.get(studentOne));
// console.log('Student 2 ' , weakMap1.get(studentTwo));
// console.log('Check if studentOne in WeakMap Expected :' , weakMap1.has(studentOne));
// console.log('Check if studentOne in WeakMap Expected :' , weakMap1.has(studentTwo));



//  1- Class Basic Class Implementation
// class Student1{
//     constructor(name,age,course){
//         this.name = name;
//         this.age = age;
//         this.course = course;
//     }
//     displayDetails(){
//         console.log(`student details:- Name= ${this.name}, Age= ${this.age}, Course= ${this.course} `);
//     }
// }
// const std1 = new Student1('Rehab', 24, 'front end');
// std1.displayDetails();


// 2- Class Inheritance
// Create a Person class with a method greet().
// Extend it to a Teacher class that adds subject and overrides greet().

// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log(`Hello ${this.name}!`);
//     }
// }
// const person1 = new Person('Rehab');
// person1.greet();

// class Teacher extends Person{
//     constructor(name,subject){
//         super(name)
//         this.subject = subject;
//     }
//     greet(){
//         console.log(`Hello ${this.name}! and your Subject is ${this.subject}`);
//     }
// }
// const teacher1 = new Teacher('Rehab','front-end');
// teacher1.greet();


// 3- Class Private Properties Using #
// Implement a class with a private #password field that is only accessible via a method.

// class User {
//     #privatePassword = 'rehab@123';
//     constructor(name, password){
//         this.name = name;
//         this.#privatePassword = password;
//     }
//     checkPass(password){
//         return password === this.#privatePassword? console.log('Match'): console.log('Not Match');
        
//     }
// }
// const user1 = new User('Rehab' , 'rehab@123')
// user1.checkPass('rehab@')


// 4- Abstract Class in js

class Employees {
    constructor(name, job) {
        if (new.target === Employees) {
            throw new Error(`Can't instantiate Web class directly.`);
        }
        this.name = name;
        this.job = job;
    }
}

class Employee extends Employees {
    constructor(name, job , salary) {
        super(name, job);
        this.salary = salary;
    }    
    greet() {
        console.log(`
        Hello ${this.name}!
        Your position is: ${this.job} 
        and your Salary: ${this.salary}`);
    }
}
const emp1 = new Employee("Rehab", 'Developer', 50000);
emp1.greet();


