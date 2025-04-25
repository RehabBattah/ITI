// Q1: Define the type for all the following:
// string
const str:string = "Rehab"
// number
const age:number = 24;
// boolean
const isBoolean:boolean = true;
// Union types
const arr: (number|string)[] = [1,'ahmed']
// Literal types
// let name = 'rehab';
// array
// -['One', 'Two']
const arr1 : string[] = ['One', 'Two']
console.log(arr1);
// - ['One', 'Two', 100]
const arr2 : (string|number)[] = ['One', 'Two', 100]
console.log(arr2);
// - ['One',100,[true, 10]]
const arr3 : ( string |  number| (boolean|number)[])[] = ['One',100,[true, 10]]
console.log(arr3);

// functions that return string
//  ((void, undefiend, never) => using function)

const printNum2 = (num: string): string => num;
console.log(printNum2('10'));

const printVoid = (): void => console.log('Void Function');;
const printUndefined = (): undefined => undefined;
console.log( "printUndefined"  ,printUndefined());
const printNever = (): never => {
	throw new Error('Error!');
};

// any, unknown
let customVar: any;
customVar = true;
customVar = 'Rehab';
console.log('customVar', customVar);
// must be type-checked before using
let customVar2: unknown;
customVar2 = 20;
customVar2 = 'Rehab';
if (typeof customVar2 === 'string') {
	console.log('customVar2', customVar2.toUpperCase());
}
// object
const info: { name: string; age: number; job?: string } = {
	name: 'Rehab',
	age: 20,
	// job: 'Developer',
};

// type with (|, &)
interface Info2  {
	name: string;
	age?: number;
};

interface Info3  {
	job: string;
};
const myInfo3: Info2 & Info3 = {
	name: 'Rehab',
	age: 24,
    job:'Developer',
};

// tuple
const myTuple: [number, boolean] = [1, true];
// enum
enum Role {
	Admin = 'ADMIN',
	Support = 'SUPPORT',
	User = 'USER',
}
const admin = Role.Admin;
const support = Role.Support;
const user2 = Role.User;
console.log(' admin: ', admin);
console.log(' support: ', support);
console.log('user2: ', user2);

// Type cast with as HTMLInputElement and with non-null assertion

// let bookTitle = document.getElementById('titleInput') as HTMLInputElement;
// bookTitle.value


// Q2 

type bookId = number | string;
interface Book {
    readonly id: bookId;
    title: string;
    pages: number;
}

let bookTitle = document.getElementById('titleInput') as HTMLInputElement;
let bookPages = document.getElementById('pagesInput') as HTMLInputElement;
let Btn = document.querySelector('button') as HTMLButtonElement;
let output = document.getElementById('output') as HTMLDivElement;
let allBooks:Book[] = [];

function addBook() {
    let id = allBooks.length+1;
    let title = bookTitle.value.toUpperCase();
    let pages = +bookPages.value;
    const book:Book={id , title , pages };
    allBooks.push(book);
    
    output.innerHTML = '';
    allBooks.forEach((oneBook)=>{
        console.log(oneBook);
        const p = document.createElement('p');
        p.innerHTML+= ` Book Title : ${oneBook.title}  |  No.Pages : ${oneBook.pages} `;
        output.appendChild(p);
    });
};

