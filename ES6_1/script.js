// 1- Write a Function to swap  two values using destructuring
function swapValues([a,b]) {
    return [b,a]
}
console.log(swapValues([5, 10]));


// 2- Write a Function that returns min and max value using rest/spread operators within object and then destructuring min & max from returned object.
// const numbers = [3, 9, 1, 15, 22, 7];
// console.log(`Min: ${Math.min(...numbers)}, Max: ${Math.max(...numbers)}`);

function getNum(numbers) {
    return(`Min: ${Math.min(...numbers)}, Max: ${Math.max(...numbers)}`);
}
console.log(getNum([3, 9, 1, 15, 22, 7]));
// Expected Output: Min: 1, Max: 22;


// 3- Write a Function that uses template object destructuring & literals to format and display student details
const studentInfo = {
	name: 'John',
	university: 'XYZ University',
	faculty: 'Computer Science',
	finalGrade: 'A',
};
function displayStudentInfo(studentInfo) {
    const {name,university,faculty,finalGrade} = studentInfo
    return`Student Name: ${name} \nUniversity: ${university} \nFaculty: ${faculty} \nFinal Grade: ${finalGrade}`;
}
console.log(displayStudentInfo(studentInfo));

// 4- Create an arrow function that returns the maximum of two numbers using ternary operator.
const maximum = (a,b)=> a>b?  `max ${a}`: `max ${b}` ;
console.log(maximum(2,3))


// 5- Using Array destructuring
const [one,two,three] = [1, 2, 3];
console.log(one); 
console.log(two);
console.log(three); 


// 6- Write a function with Default Parameters
function greet(guest='Guest'){
    return `Hello, ${guest}`
}; 
console.log(greet('Charlie')); 


// 7- Write a function that use rest operator & reduce to get the sum of given numbers.
function getReduce(...arr) {
    return arr.reduce((a,b)=> a+b )
}
console.log(getReduce(1, 2, 3, 4)); 


// 8- Write a function that use Spread Operator to combine two array

function combine(arr1,arr2) {
    return ([...arr1,...arr2])
}
console.log(combine([1, 2, 3],[4, 5, 6])); 


// 9- Using Enhanced Object Literals
const newName = 'Rehab';
const newAge = 22;
const newPerson = {
	newName,
    newAge,
    greet(){
        return `Hello, my name is ${newName} and I am ${newAge} years old.`
    }
};
console.log(newPerson.greet());


// 10- Convert Function to Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(5, 3)); // Expected Output: 15


// 11 - Using Arrow Function with map()
const names = ['Alice', 'Bob', 'Charlie'];
const result = names.map((name)=> name.toUpperCase() ) 
console.log(result);


// 12- How can we ensure this inside an object's method refers to the object itself when using an arrow function?

const user = {
	name: 'Alice',
	greet(){ 
        return ()=>  `Hello, my name is ${this.name} ` }
};
const greeting =user.greet()
console.log(greeting()); 



// 13- How to remove property from objectr without using delete keyword
const info = {
	name: 'Mark',
	age: 30,
	job: 'Develpoer',
	country: 'Egypt',
};
const {age,...customizedInfo} = info;
console.log(customizedInfo);


// 14- Using skipping to get value using Array destructuring
const [,,third,] = ['A', 'B', 'C', 'D'];
console.log(third); 


// 15- Define a dynamic property name in an object using enhanced literals

const name = 'dynamic';

const obj ={
    id: 12,
    [name]: "Rehab"
}

console.log(obj);
