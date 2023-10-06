// https://github.com/lydiahallie/javascript-questions
// 1. What's the output? D
function sayHi() {
    console.log(name);// Lydia
    console.log(age);// undefined
    var name = 'Lydia';
    let age = 21;
}
sayHi();
// A: Lydia and undefined
// B: Lydia and ReferenceError
// C: ReferenceError and 21
// D: undefined and ReferenceError 
// Within the function, we first declare the name variable with the var keyword. 
// This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, 
// until we actually get to the line where we define the variable. 
// We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined.

// Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. 
// They are not accessible before the line we declare (initialize) them. 
// This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a ReferenceError.



// 2. What's the output? C
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}
// A: 0 1 2 and 0 1 2
// B: 0 1 2 and 3 3 3
// C: 3 3 3 and 0 1 2
// Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. 
// Since the variable i in the first loop was declared using the var keyword, this value was global. 
// During the loop, we incremented the value of i by 1 each time, using the unary operator ++. 
// By the time the setTimeout callback function was invoked, i was equal to 3 in the first example.

// In the second loop, the variable i was declared using the let keyword: 
// variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). 
// During each iteration, i will have a new value, and each value is scoped inside the loop.


// 3. What's the output?
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());
// A: 20 and 62.83185307179586
// B: 20 and NaN
// C: 20 and 63
// D: NaN and 63



// 4. What's the output?
+true;
!'Lydia';
// A: 1 and false
// B: false and NaN
// C: false and false



// 5. Which one is true?
const bird = {
    size: 'small',
};

const mouse = {
    name: 'Mickey',
    small: true,
};
// A: mouse.bird.size is not valid
// B: mouse[bird.size] is not valid
// C: mouse[bird["size"]] is not valid
// D: All of them are valid



// 6. What's the output?
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);
// A: Hello
// B: Hey!
// C: undefined
// D: ReferenceError
// E: TypeError



// 7. What's the output?
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
// A: true false true
// B: false false true
// C: true false false
// D: false true true



// 8. What's the output?
class Chameleon {
    static colorChange(newColor) {
        this.newColor = newColor;
        return this.newColor;
    }

    constructor({ newColor = 'green' } = {}) {
        this.newColor = newColor;
    }
}

const freddie = new Chameleon({ newColor: 'purple' });
console.log(freddie.colorChange('orange'));
// A: orange
// B: purple
// C: green
// D: TypeError



// 9. What's the output?
let greeting;
greetign = {}; // Typo!
console.log(greetign);
// A: {}
// B: ReferenceError: greetign is not defined
// C: undefined



// 10. What happens when we do this?
function bark() {
    console.log('Woof!');
}

bark.animal = 'dog';
// A: Nothing, this is totally fine!
// B: SyntaxError. You cannot add properties to a function this way.
// C: "Woof" gets logged.
// D: ReferenceError



// 11. What's the output?
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
// A: TypeError
// B: SyntaxError
// C: Lydia Hallie
// D: undefined undefined



// 12. What's the output?
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');

console.log(lydia);
console.log(sarah);
// A: Person {firstName: "Lydia", lastName: "Hallie"} and undefined
// B: Person {firstName: "Lydia", lastName: "Hallie"} and Person {firstName: "Sarah", lastName: "Smith"}
// C: Person {firstName: "Lydia", lastName: "Hallie"} and {}
// D: Person {firstName: "Lydia", lastName: "Hallie"} and ReferenceError



// 13. What are the three phases of event propagation?
// A: Target > Capturing > Bubbling
// B: Bubbling > Target > Capturing
// C: Target > Bubbling > Capturing
// D: Capturing > Target > Bubbling



// 14. All object have prototypes.
// A: true
// B: false



// 15. What's the output?
function sum(a, b) {
    return a + b;
}

sum(1, '2');
// A: NaN
// B: TypeError
// C: "12"
// D: 3



// 16. What's the output?
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
// A: 1 1 2
// B: 1 2 2
// C: 0 2 2
// D: 0 1 2



// 17. What's the output?
function getPersonInfo(one, two, three) {
    console.log(one);
    console.log(two);
    console.log(three);
}

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`;
// A: "Lydia" 21 ["", " is ", " years old"]
// B: ["", " is ", " years old"] "Lydia" 21
// C: "Lydia" ["", " is ", " years old"] 21



// 18. What's the output?
function checkAge(data) {
    if (data === { age: 18 }) {
        console.log('You are an adult!');
    } else if (data == { age: 18 }) {
        console.log('You are still an adult.');
    } else {
        console.log(`Hmm.. You don't have an age I guess`);
    }
}

checkAge({ age: 18 });
// A: You are an adult!
// B: You are still an adult.
// C: Hmm.. You don't have an age I guess



// 19. What's the output?
function getAge(...args) {
    console.log(typeof args);
}

getAge(21);
// A: "number"
// B: "array"
// C: "object"
// D: "NaN"



// 20. What's the output?
function getAge() {
    'use strict';
    age = 21;
    console.log(age);
}

getAge();
// A: 21
// B: undefined
// C: ReferenceError
// D: TypeError
