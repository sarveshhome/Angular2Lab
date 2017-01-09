// var message ='hello';
// function saySomething(message:string ="what going on "){
//     console.log(message);
// }
// //saySomething(3458);
// saySomething("3458");
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        return message + ' something';
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething('hello');
//ref - https://www.typescriptlang.org/play/index.html 
//# sourceMappingURL=magic.js.map