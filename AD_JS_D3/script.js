// ========= No.1 ===================
function BankAccount(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}
let myAccount = new BankAccount(58489, 5000, "Rehab");

// deposit
BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
    document.getElementById("deposit").innerHTML = `You deposited <span style="color:green; text-align:center">
    <u>$${amount}</u></span> , Your Balance is <u>$${this.balance}</u>  `;
}
myAccount.deposit(800);

// withdraw 
BankAccount.prototype.withdraw = function (amount) {
    if (amount > this.balance) {
        document.getElementById("withdraw").innerHTML =
            `Insufficient balance :) Your balance is only <u>$${this.balance}</u> `;
        
    }else{
        this.balance -= amount;
        document.getElementById("withdraw").innerHTML = `You withdrew <span style="color:red"><u>$${amount}</u></span> 
        pounds , Your Balance is <u>$${this.balance}</u>`
    }
    
}
// myAccount.withdraw(1000);
myAccount.withdraw(1000000000);

// display 
BankAccount.prototype.displayInfo = function () {
    document.getElementById("info").innerHTML = `
        Account Number: ${this.accountNumber} <br>
        Owner: ${this.owner} <br>
        Balance: $${this.balance} `
}
myAccount.displayInfo();

// ========= No.2 ===================

// Closure carryingFunction, function-chain =>
//        1) it looks like nested function but not any nested function is considering a closure,
//        2) function return function , 
//        3) if it contains variable that i used it inside the return function => it will save it in the clousre


// function sum(one) {
//     return function (two) {
//         return function (three) {
//             return one + two + three
//         }
//     }
// }
// sum(1)(2)(3)


// function calc() {
//     let count = 0;
//     return{
//         increase: function(){return ++count},
//         decrease: function() {return --count},
//         value: function() {return count},
//     }
// }
// let res = calc()