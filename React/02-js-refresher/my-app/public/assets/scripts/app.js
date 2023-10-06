// lo importo nella index

// IMPORT E EXPORT
// importo da util.js

// posso importarli singolarmente, anche con alias
import { apiKey, apiKey1 as content1 } from "./util.js";

// posso importarli raggruppandoli in oggetti
import * as keys from "./util.js";

import myDefault from "./util.js";

console.log(apiKey);// example
console.log(content1);// example1

console.log(myDefault);// example2

console.log(keys.apiKey1);// example1
console.log(keys.default);// example2



// REVISITING VARIABLES, VALUES AND OPERATORS
// TYPE OF VALUES: string(text, '', "", ``), number(int, float), boolean(true, false), null(assegnato da noi, null), undefined(ancora non assegnato)

// VARIABLES: store values
let userMessage = "Hello";
console.log(userMessage);// Hello
// posSo richiamarla quante volte voglio, stamparla e riassegnarla altrettante
console.log(userMessage);// Hello

// CONSTANTS
const userName = "Cintia";
// error, const is a readonly
// userName = "Cinzia";// Uncaught TypeError: Assignment to constant variable.

// OPERATORS: +(anche per concatenare le stringhe), *, -, /, %, =, ==, ===, >, >=, <, <=


// REVISITING FUNCTIONS AND PARAMETERS
function greet() {
    console.log("I'm a function")
}
greet();// I'm a function
// viene eseguita solo nel momento in cui viene invocata
// quante volte voglio
greet();
greet();
greet();

// argomenti senza valore
function greetUser(userName, message) {
    console.log(userName);
    console.log(message);
}
greetUser("Cinzia", "Ciao");// Cinzia // Ciao

// argomenti con valore assegnato, non serve ma posso riassegnarlo
function greetUser1(userName, message = "Ciao") {
    console.log(userName);
    console.log(message);
}
greetUser1("Cinzia");// Cinzia // Ciao
greetUser1("Cinzia", "Hello");//Cinzia // Hello

// con return
function createGreetings(userName, message = "Ciao") {
    return "Hi I am " + userName + " and I say: " + message;// ovviamente non lo vedo in console
}
// a utilizzo direttamente
console.log(createGreetings("Cinzia"));// Hi I am Cinzia and I say: Ciao
console.log(createGreetings("Cinzia", "Hello"));// Hi I am Cinzia and I say: Hello
// oppure creo delle variabili per contenere il valore ritornato e poterlo ottenere in console
const greetings1 = createGreetings("Cinzia");
const greetings2 = createGreetings("Cinzia", "Hello");
console.log(greetings1);// Hi I am Cinzia and I say: Ciao
console.log(greetings2);// Hi I am Cinzia and I say: Hello



// EXERCISE 1
/**
 * Your task is to write a new function that should be named combine and have the following characteristics:
 * Accept three input values
 * Calculate a new value based on the three input values: a * b / c (if a, b & c are the input values)
 * Return the calculated result
 */

function combine(a, b, c) {
    return a * b / c;
}
console.log(combine(2, 6, 4));// 3
// oppure
let result = combine(2, 6, 4);
console.log(result);// 3



// ARROW FUNCTIONS
// per le funzioni anonime ad esempio, che non hanno bisogno di un nome perchè sono associate a un evento
// es onClick = {()=> setActiveContentIndex(1)}
// possono comunque essere definite con la parola function MA deve essere associata a una variabile
// in genere sono le CALLBACKS, sono funzini anonime passate come argomento di un'altra funzione
// variabile = function () {
//     console.log("Hello");
// };
// oppure senza
export default (userName, message) => {
    console.log("Hello");
    return userName + message;
}

/**
 * When working with Arrow Functions, you have a couple of "syntax shortcuts" available.

Most importantly, you should know about the following alternatives:

1) Omitting parameter list parentheses
If your arrow functions takes exactly one parameter, you may omit the wrapping parentheses.
Instead of

(userName) => { ... }
you could write

userName => { ... }

Please note: 
If your function takes no parameters, parentheses must not be omitted - () => { ... } is the only correct form in that case.
If your function takes more than one parameter, you also must not omit parentheses - userName, userAge => { ... } would be invalid ((userName, userAge) => { ... } is correct)!

2) Omitting function body curly braces
If your arrow function contains no other logic but a return statement, you may omit the curly braces and the return keyword.
Instead of

number => { 
  return number * 3;
}
you could write

number => number * 3;
The following code would be invalid:

number => return number * 3; // invalid because return keyword must also be omitted!
number => if (number === 2) { return 5 }; // invalid because if statements can't be returned

3) Special case: Just returning an object
If you go for the shorter alternative explained in 2) and you're trying to return a JavaScript object, you may end up with the following, invalid code:

number => { age: number }; // trying to return an object

This code would be invalid because JavaScript treats the curly braces as function body wrappers (not as code that creates a JS object).
To "tell" JavaScript that an object should be created (and returned) instead, the code would need to be adjusted like this:

number => ({ age: number }); // wrapping the object in extra parentheses
By wrapping the object and its curly braces with an extra pair of parentheses, JavaScript understands that the curly braces are not there to define a function body but instead to create an object. Hence that object then gets returned.
 */



// IIFE: IMMEDIATELY-INVOKED FUNCTION EXPRESSION, SELF-EXECUTING ANONYMOUS FUNCTION
(function (x, y) {
    return x + y;
}(4, 8));



// REVISITING OBJECTS AND CLASSES
// invece di avere tante proprietà sparse
// const userN = "Max";
// const userA = "34";
// possiamo raggrupparle in oggetti
const user = {
    name: "Max",
    age: "34",
    greet() {
        console.log(this.name);
    }
};
console.log(user.age);// 34
user.greet();// Max

// blueprint che può essere utilizzato per creare gli oggetti
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hi")
    }
}
const user1 = new User("Tom", 35);
console.log(user1);// User {name: 'Tom', age: 35}
user1.greet();// Hi



// ARRAYS AND ARRAY METHODS LIKE MAP
// usati per memorizzare un elenco di valori(array, oggetti, numeri, stringhe, qualsiasi cosa)
const hobbies = ["Piano", "Horses", "Padel"];
console.log(hobbies);// (3) ['Piano', 'Horses', 'Padel'], anche qua ha effetto push
// accedo ai valori tramite indici, partendo da 0
console.log(hobbies[1]);// Horses

// metodi
// push, modifica l'array originale, infatti anche sopra ha effetto
hobbies.push("Work");
console.log(hobbies);// (4) ['Piano', 'Horses', 'Padel', 'Work']

// findIndex, lo associo a una variabile così da poterlo stampare
const index = hobbies.findIndex((item) => item === "Non presente nell'array");
// true, se i due valori sono uguali, ha trovato l'elemento e restituisce l'indice, altrimenti false e -1
console.log(index);// -1
// Work, presente nell'array // 3

// map, non modifica l'array originale ma ne restituisce uno nuovo, trasforma ogni elemento
const editHobbies1 = hobbies.map((item) => item + ":)");
console.log(editHobbies1);// (4) ['Piano:)', 'Horses:)', 'Padel:)', 'Work:)']
// li trasformo in oggetti, {} dentro a () altrimenti lo prende come corpo della funzione
const editHobbies2 = hobbies.map((item) => ({ text: item }));// ogni oggetto avrà una chiave di testo, il valore rimane lo stesso
console.log(editHobbies2);
/**
(4) [{…}, {…}, {…}, {…}]
0: {text: 'Piano'}
1: {text: 'Horses'}
2: {text: 'Padel'}
3: {text: 'Work'}
 */



// EXERCISE 2
/**
 * Your task is to add the missing logic to a transformToObjects() function that should transform a list of numbers
 * into a list of JavaScript objects.
 * In the newly returned array, every object must have a val key and the input array's number as a value.
 * For example, for the provided input [1, 2, 3] the transformToObjects([1, 2, 3]) function should return
 * [{val: 1}, {val: 2}, {val: 3}].
 */
function transformToObjects(numberArray = []) {
    // Todo: Add your logic
    // should return an array of objects
    const res = numberArray.map((item) => ({ val: item }));
    console.log(res);
    return res;
}
transformToObjects([1, 2, 3]);
/**
(3) [{…}, {…}, {…}]
0: {val: 1}
1: {val: 2}
2: {val: 3}
 */



// DESTRUCTURING, per accedere a proprietà di array/oggetti
// array
// opzione1
// const userNameData = ["Tom", "Ford"];
// const firstName = userNameData[0];
// const lastName = userNameData[1];

// destructuring
const [firstName, lastName] = ["Tom", "Ford"];
console.log(firstName);// Tom
console.log(lastName);// Ford

// oggetti
// opzione1
// const user2 = {
//     name: "Tom",
//     age: "33"
// };
// const name = user2.name;
// const age = user2.age;
// console.log(name);// Tom
// console.log(age);// 33

// destructuring
// 1
const { name, age } = {
    name: "Tom",
    age: 33
};
console.log(name);// Tom
console.log(age);// 33
// 2, se voglio produrre un nuovo valore
const { name: username, id } = {
    name: "Alicia",
    id: 2
};
console.log(username);// Alicia
console.log(id);// 2



// DESTRUCTURING IN FUNCTION PARAMETER LISTS
// accesso alle prop tramite dot notation
// function storeOrder(order) {
//     localStorage.setItem('id', order.id);
//     localStorage.setItem('currency', order.currency);
// }
// destructuring
function storeOrder({ id, currency }) { // destructuring
    localStorage.setItem('id', id);
    localStorage.setItem('currency', currency);
}
// prende un solo argomento/valore
// è un ssingolo oggetto destrutturato dall'interno
storeOrder({ id: 5, currency: 'USD', amount: 15.99 });



// SPREAD OPERATOR
// array
// suppponiamo di voler unire due array senza apportare modificeh agli originali
const colors1 = ["Pink", "Purple"];
const colors2 = ["Yellow", "Orange"];
// opzione1
const mergedColors1 = [colors1, colors2];
console.log(mergedColors1);
/** array con 2 array annidati
(2) [Array(2), Array(2)]
0: (2) ['Pink', 'Purple']
1: (2) ['Yellow', 'Orange']
length: 2
 */

// spread, estrae i valori a se stanti e li aggiunge singolarmente
const mergedColors2 = [...colors1, ...colors2];
console.log(mergedColors2);// (4) ['Pink', 'Purple', 'Yellow', 'Orange']

const mergedColors3 = [...colors1, "White"];
console.log(mergedColors3);// (3) ['Pink', 'Purple', 'White']

// oggetti
const dog = {
    name: "Melody",
    gender: "F"
};
const extendedDog = {
    age: 5,
    ...dog
};
console.log(extendedDog);// {age: 5, name: 'Melody', gender: 'F'}



// REVISITING CONTROL STRUCTURES
// if
const password = prompt("Your password");
if (password === "Hello") {
    console.log("Hello everyone!")
} else if (password === "Hi") {
    console.log("Hi everyone!")
} else if (password === "Goodbye") {
    console.log("Goodbye everyone!")
} else {
    console.log("No password!")
}

// for of
const animals = ["Guinea Pig", "Praire Dog", "Hamster"]
for (const animal of animals) {
    console.log(animal);// Guinea Pig // Praire Dog // Hamster
}



// MANIPULATING THE DOM
const list = document.querySelector("ul");// seleziono il tag ul
list.remove();// lo rimuovo



// USING FUNCTIONS AS VALUES, passare funzioni come valore ad altre funzioni, callbacks
function handleTimeout() {
    console.log("Time out!");
}
const handleTimeout2 = () => {
    console.log("Time out...again!");
};
// definendo in anticipo la funzione e passando un gestore handle
// per fare sì che non venga eseguita subito, millisecondi
// attende l'esecuzione della funzione passata come primo parametro e POI imposta il timeout
setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);

// con funzione anonima, senza doverla definire prima
setTimeout(() => {
    console.log("More timing out...")
}, 4000);

// è possibile costruire una propria funzione
function greeter(greeterFn) {
    greeterFn();
}
greeter(() => console.log("Hi"));// eseguita subito, non ho messo timeout
// in ordine in console vedrò
// 1. Hi
// saranno semrpe eseguite dopo tutto, anche dopo il codice seguente
// perchè sono le uniche ad avere un timeout
// 2. Time out!
// 3. Time out...again!
// 4. More timing out...


// DEFINING FUNCTIONS INSIDE OF FUNCTIONS
function init() {
    // annidata, ha validità nello scope della funcione init, quindi posso eseguirla solo al suo interno
    function greet() {
        console.log("I'm a function inside a function")
    }
    greet();// I'm a function inside a function
    console.log(":)")
}
// posso eseguirla all' esterno perchè ha scope globale, non annidata
init();// :)



// REFERENCE VS PRIMITIVE VALUES
// riferimento
// gli array sono oggetti, e gli oggetti sono i cosiddetti valori di riferimento
const songs = ["Yellow", "Dancing in the Moonlight", "Hymn for the Weekend"];
// posso farlo anche se è const perchè ho memorizzato l'indirizzo in quella variabile, e questo non cambia
// non sto violando l'idea di una costante che viene sovrascritta, sto solo modificando il valore che si trova in quell'indirizzo
songs.push("Tetris");
console.log(songs);// (4) ['Yellow', 'Dancing in the Moonlight', 'Hymn for the Weekend', 'Tetris']
// ho modificato l'array originale
// in una variabile non si memorizza il valore, ma l'indirizzo di quel valore in memoria
// l'array è modificato da qualche parte nella memoria del computer
// è l'indirizzo di quel posto in memoria che viene memorizzato in quella costante
// quando chiamo push, js raggiunge quell'indirizzo e l'array in memoria verrà modificato, ma l'indirizzo no
// si accede per riferimento, per indirizzo

// primitivi
// con valori primitivi come questa stringa, invece la stringa stessa è memorizzata nella variabile
// non c'è il discorso dell'indirizzo



// NEXT-GEN JAVASCRIPT summmary



// JS ARRAYS FUNCTIONS
// map()
const array1 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);// (4) [2, 8, 18, 32]

// find()
const array2 = [5, 12, 8, 130, 44];
const found = array2.find(element => element > 10);
console.log(found);// 12

// findIndex()
const array3 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array3.findIndex(isLargeNumber));// 3

// filter()
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const wordsResult = words.filter(word => word.length > 6);
console.log(wordsResult);// (3) ['exuberant', 'destruction', 'present']

// reduce()
const array4 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array4.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);
console.log(sumWithInitial);// 10

// concat()
const arrayA = ['a', 'b', 'c'];
const arrayB = ['d', 'e', 'f'];
const arrayC = arrayA.concat(arrayB);
console.log(arrayC);// (6) ['a', 'b', 'c', 'd', 'e', 'f']

// slice()
const myAnimals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(myAnimals.slice(2));// (3) ['camel', 'duck', 'elephant']
console.log(myAnimals.slice(2, 4));// (2) ['camel', 'duck']
console.log(myAnimals.slice(1, 5));// (4) ['bison', 'camel', 'duck', 'elephant']
console.log(myAnimals.slice(-2));// (2) ['duck', 'elephant']
console.log(myAnimals.slice(2, -1));// (2) ['camel', 'duck']
console.log(myAnimals.slice());// (5) ['ant', 'bison', 'camel', 'duck', 'elephant']

// splice()
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);// (5) ['Jan', 'Feb', 'March', 'April', 'June']
months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);// (5) ['Jan', 'Feb', 'March', 'April', 'May']








































