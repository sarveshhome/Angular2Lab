
// var message ='hello';

// function saySomething(message:string ="what going on "){
//     console.log(message);
// }

// //saySomething(3458);
// saySomething("3458");

class Greeter
{
    saySomething(message:string)
    {
        return message + ' something';
    }
}

var greeter = new Greeter();
greeter.saySomething('hello');


//ref - https://www.typescriptlang.org/play/index.html