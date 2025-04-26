
// **First Calss :**
// An abstract generic class Notifier<T> with: ✔
// A protected property messages: T[] (the list of messages to be sent) ✔
// A constructor that accepts an initial list of messages ✔
// An abstract method send(message: T): void  ✔
// A concrete method sendAll(): void that loops over all messages and calls send() on each
// A private method log(message: T): void that logs the message being sent (simulating audit logging)


abstract class Notifier<T> {
    protected messages: T[];
    constructor(initialMsgs: T[]) {
        this.messages = initialMsgs
    }   
    abstract send(message: T): void;

    sendAll(): void {
        this.messages.forEach((oneMsg) => {
            this.send(oneMsg)
            this.log(oneMsg)
        })
    }
    private log(message: T): void{
        console.log(`Logging Message : ${JSON.stringify(message)}`);
        
    }
    
}
// logs the message being sent ✔,
// Notifier.prototype.sendAll()

// **First SubClass :**  ✔
// EmailNotifier which only accepts strings as messages (representing email content)
class EmailNotifier extends Notifier<string>{
    send(message: string): void {
        console.log(`Message : ${message}`);

        // console.log(message);
        
    }
}
const emails = new EmailNotifier(['Welcome!', 'Please verify your email.']);
emails.sendAll();

// **Second SubClass :**
// SMSNotifier which accepts an object { to: string, content: string } as messages
// Add appropriate TypeScript access modifiers: private, protected, and public as needed.

interface SMS {
    to:string;
    content: string;
}
class SMSNotifier extends Notifier<SMS>{
    send(message: SMS): void {
        console.log(message);
        console.log(`to ${message.to} , content: ${message.content}`);
    }
}

const smsList = new SMSNotifier([
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
