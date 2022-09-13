// very easy 
var num1= 6;
var num2= 2;

console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}`);




//easy 

var name1 = 'Thomas';
var name2 = 'John';

console.log(`The name ${name1} is longer than ${name2} by ${name1.length - name2.length} characters.`);





//medium 

// var message = prompt("Type a message"); commented this out so I could text out the other functions

if (message == message.toUpperCase()) {
    console.log('shouting');
} else if (message == message.toLowerCase()) {
    console.log('whispering');
} else {
    console.log ('talking normally');
}





// hard   

function add () {
    var x = prompt("Enter a Value");
    var y = prompt("Enter a Value");
    var num1 = parseInt(x);
    var num2 = parseInt(y);

    console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
}

function subtract () {
    var x = prompt("Enter a Value");
    var y = prompt("Enter a Value");
    var num1 = parseInt(x);
    var num2 = parseInt(y);

    console.log(`The difference of ${num1} and ${num2} is ${num1 - num2}`);
}

function multiply () {
    var x = prompt("Enter a Value");
 var y = prompt("Enter a Value");
 var num1 = parseInt(x);
 var num2 = parseInt(y);

 console.log(`The product of ${num1} and ${num2} is ${num1 * num2}`);
}

function divide () {
    var x = prompt("Enter a Value");
    var y = prompt("Enter a Value");
    var num1 = parseInt(x);
    var num2 = parseInt(y);

    console.log(`The quotient of ${num1} and ${num2} is ${num1 / num2}`);
}











// very hard


function calculator() {
    var x = prompt("Enter a Value");
    var y = prompt("Enter an Operator");
    var z = prompt("Enter a Value");
    var num1 = parseInt(x);
    var num2 = parseInt(z);
    
    if (y == '+'){
        add();
    } else if (y == '-'){
        subtract();
    } else if (y == '*'){
        multiply();
    } else if (y == '/') {
        divide();
    }


function add () {
    console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
}

function subtract () {
    console.log(`The difference of ${num1} and ${num2} is ${num1 - num2}`);
}

function multiply () {
 console.log(`The product of ${num1} and ${num2} is ${num1 * num2}`);
}

function divide () {
    console.log(`The quotient of ${num1} and ${num2} is ${num1 / num2}`);
}
}

 