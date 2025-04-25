// Q1: Define the type for all the following:
// string
var str = "Rehab";
// number
var age = 24;
// boolean
var isBoolean = true;
// Union types
var arr = [1, 'ahmed'];
// Literal types
// let name = 'rehab';
// array
// -['One', 'Two']
var arr1 = ['One', 'Two'];
console.log(arr1);
// - ['One', 'Two', 100]
var arr2 = ['One', 'Two', 100];
console.log(arr2);
// - ['One',100,[true, 10]]
var arr3 = ['One', 100, [true, 10]];
console.log(arr3);
// functions that return string
//  ((void, undefiend, never) => using function)
var printNum2 = function (num) { return num; };
console.log(printNum2('10'));
var printVoid = function () { return console.log('Void Function'); };
;
var printUndefined = function () { return undefined; };
console.log("printUndefined", printUndefined());
var printNever = function () {
    throw new Error('Error!');
};
// any, unknown
var customVar;
customVar = true;
customVar = 'Rehab';
console.log('customVar', customVar);
// must be type-checked before using
var customVar2;
customVar2 = 20;
customVar2 = 'Rehab';
if (typeof customVar2 === 'string') {
    console.log('customVar2', customVar2.toUpperCase());
}
// object
var info = {
    name: 'Rehab',
    age: 20,
    // job: 'Developer',
};
;
;
var myInfo3 = {
    name: 'Rehab',
    age: 24,
    job: 'Developer',
};
// tuple
var myTuple = [1, true];
// enum
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["Support"] = "SUPPORT";
    Role["User"] = "USER";
})(Role || (Role = {}));
var admin = Role.Admin;
var support = Role.Support;
var user2 = Role.User;
console.log(' admin: ', admin);
console.log(' support: ', support);
console.log('user2: ', user2);
var bookTitle = document.getElementById('titleInput');
var bookPages = document.getElementById('pagesInput');
var Btn = document.querySelector('button');
var output = document.getElementById('output');
var allBooks = [];
function addBook() {
    var id = allBooks.length + 1;
    var title = bookTitle.value.toUpperCase();
    var pages = +bookPages.value;
    var book = { id: id, title: title, pages: pages };
    allBooks.push(book);
    output.innerHTML = '';
    allBooks.forEach(function (oneBook) {
        console.log(oneBook);
        var p = document.createElement('p');
        p.innerHTML += " Book Title : ".concat(oneBook.title, " | No.Pages : ").concat(oneBook.pages, " ");
        output.appendChild(p);
    });
}
