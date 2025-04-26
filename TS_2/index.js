// **First Calss :**
// An abstract generic class Notifier<T> with: ✔
// A protected property messages: T[] (the list of messages to be sent) ✔
// A constructor that accepts an initial list of messages ✔
// An abstract method send(message: T): void  ✔
// A concrete method sendAll(): void that loops over all messages and calls send() on each
// A private method log(message: T): void that logs the message being sent (simulating audit logging)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Notifier = /** @class */ (function () {
    function Notifier(initialMsgs) {
        this.messages = initialMsgs;
    }
    Notifier.prototype.sendAll = function () {
        var _this = this;
        this.messages.forEach(function (oneMsg) {
            _this.send(oneMsg);
            _this.log(oneMsg);
        });
    };
    Notifier.prototype.log = function (message) {
        console.log("Logging Message : ".concat(JSON.stringify(message)));
    };
    return Notifier;
}());
// logs the message being sent ✔,
// Notifier.prototype.sendAll()
// **First SubClass :**  ✔
// EmailNotifier which only accepts strings as messages (representing email content)
var EmailNotifier = /** @class */ (function (_super) {
    __extends(EmailNotifier, _super);
    function EmailNotifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailNotifier.prototype.send = function (message) {
        console.log("Message : ".concat(message));
        // console.log(message);
    };
    return EmailNotifier;
}(Notifier));
var emails = new EmailNotifier(['Welcome!', 'Please verify your email.']);
emails.sendAll();
var SMSNotifier = /** @class */ (function (_super) {
    __extends(SMSNotifier, _super);
    function SMSNotifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMSNotifier.prototype.send = function (message) {
        console.log(message);
        console.log("to ".concat(message.to, " , content: ").concat(message.content));
    };
    return SMSNotifier;
}(Notifier));
var smsList = new SMSNotifier([
    { to: '+1234567890', content: 'Your code is 1234' },
    { to: '+0987654321', content: 'Your appointment is tomorrow' },
]);
smsList.sendAll();
/*
  Expected Output:
  Logging message: { to: '+1234567890', content: 'Your code is 1234' }
  Sending SMS to +1234567890: "Your code is 1234"
  Logging message: { to: '+0987654321', content: 'Your appointment is tomorrow' }
  Sending SMS to +0987654321: "Your appointment is tomorrow"
  */
