freeCodeCamp

-UNDEFINED
quando viene dichiarata una variabile senza associare a essa un valore, con il console.log verrà undefined
When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a string of undefined.
------
-PRIMITIVE TYPES
1. string
2. number
3. bigint
4. boolean
5. undefined
6. symbol
7. null
There are 7 primitive data types.
------
-CASE SENSITIVE
MYVAR is not the same as MyVar nor myvar.
------
-VAR LET CONST
var camper = "James";
var camper = "David";
console.log(camper);
In the code above, the camper variable is originally declared as James, and is then overridden to be David. The console then displays the string David.
A keyword called let was introduced in ES6, a major update to JavaScript, to solve this potential issue with the var keyword. You'll learn about other ES6 features in later challenges.
If you replace var with let in the code above, it results in an error:
let camper = "James";
let camper = "David";
The error can be seen in your browser console.
So unlike var, when you use let, a variable with the same name can only be declared once.
var ha scope globale, dovunque venga dichiarata varrà per tutto lo script, perciò potrei fare confusione o errori
let ha scope globale, dentro la funziona ad esempio, se all'esterno dichiaro una variabile con lo stesso nome non ci saranno problemi perchè quella dentro la funzine non avrà validità all'esterno
Declare a Read-Only Variable with the const Keyword
The keyword let is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword.
const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:
const FAV_PET = "Cats";
FAV_PET = "Dogs";
The console will display an error due to reassigning the value of FAV_PET.
You should always name variables you don't want to reassign using the const keyword. This helps when you accidentally attempt to reassign a variable that is meant to stay constant.
Note: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). You will learn more about objects, arrays, and immutable and mutable values in later challenges. Also in later challenges, you will see examples of uppercase, lowercase, or camelCase variable identifiers.

--VAR GLOBAL SCOPE
function varAndLetScoping() {
  var x = 1;

  if (true) {
    var x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 2
}

--LET BLOCK SCOPE
function varAndLetScoping() {
  let x = 1;

  if (true) {
    let x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 1
}
------
-OPERATORS
= assigment
== equal
=== strictly equal
+ add
- subtract
* multiply (you can also multiply decimals)
/ divide (you can also divide decimals)
++ increment
-- decrement
5/7 decimal
------
-REMINDER OPERATOR %
The remainder operator % gives the remainder (resto) of the division of two numbers.
Example
5 % 2 = 1
5 / 2 = 2 remainder 1
2 * 2 = 4
5 - 4 = 1
Usage
In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2. Even numbers have a remainder of 0, while odd numbers a remainder of 1.
17 % 2 = 1
48 % 2 = 0
Note: The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers.
------
-COMPOUND ASSIGNMENTS
var =  var + 5 is equal to var += 5;
var =  var - 5 is equal to var -= 5;
var =  var * 5 is equal to var *= 5;
var =  var / 5 is equal to var /= 5;
------
-ESCAPING LITERAL QUOTES IN STRINGS
When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: " or ' inside of your string?
In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
This signals to JavaScript that the following quote is not the end of the string, but should instead appear inside the string. So if you were to print this to the console, you would get:
Alan said, "Peter is learning JavaScript".
------
-ESCAPE SEQUENCES IN STRINGS
Quotes are not the only characters that can be escaped inside a string. Escape sequences allow you to use characters you may not otherwise be able to use in a string.
Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	backspace
\f	form feed
Note that the backslash itself must be escaped in order to display as a backslash.
Assign the following three lines of text into the single variable myStr using escape sequences.
FirstLine
    \SecondLine
ThirdLine
You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.
Note: The indentation for SecondLine is achieved with the tab escape character, not spaces.
------
-CONCATENATING STRINGS
plus operator 
'I come first, ' + 'I am concatenated.';
plus equals operator
let myStr = 'I come first. ';
myStr += 'I come second.'; 
myStr has now the value of 'I come first. I come second.'
------
-CONSTRUCTING STRINGS WITH VARIABLES
let myName = "Cinzia";
let myOutput = "Hello my name is: " + myName;
------
-APPENDING VARIABLES TO STRINGS
let myName = "Cinzia";
let myStr = "My name is: ";
mySTr += myName;
------
-LENGTH OF A STRING
let myName = "Cinzia";
myNameLength = myName.length;
------
-BRACKET NOTATIONS
let myStr = "Hello";
myStr[0] find the first character of a string -> H
myStr[3] find the Nth character of a string -> l
myStr[myStr.length - 1] find the last character of a string -> o
myStr[myStr.length - 4] find the Nth-to-last character of a string -> e (is the third to last letter (la terza a partire dall'ultima))
------
-STRING IMMUTABILITY
In JavaScript, String values are immutable, which means that they cannot be altered once created.
For example, the following code will produce an error because the letter B in the string Bob cannot be changed to the letter J:
let myStr = "Bob";
myStr[0] = "J";
Note that this does not mean that myStr could not be re-assigned. The only way to change myStr would be to assign it with a new value, like this:
let myStr = "Bob";
myStr = "Job";
------
-WORD BANKS
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Only change this line;
------
-STORE MULTIPLE VALUES IN ONE VARIABLE USING ARRAYS
const sandwich = ["peanut butter", "jelly", "bread"];
------
-NEST ONE ARRAY WITHIN ANOTHER ARRAY
const teams = [["Bulls", 23], ["White Sox", 45]];
This is also called a multi-dimensional array.
------
-ACCESS ARRAY DATA WITH INDEXES
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
------
-MODIFY ARRAY DATA WITH INDEXES
Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.
const ourArray = [50, 40, 30];
ourArray[0] = 15;
ourArray now has the value [15, 40, 30].
------
-ACCESS MULTI-DIMENSIONAL ARRAYS WITH INDEXES
This is a matrix (matrice). One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outermost (the first level) array, and each additional pair of brackets refers to the next level of entries inside.
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];
const subarray = arr[3]; has the value [[10, 11, 12], 13, 14]
const nestedSubarray = arr[3][0]; has the value [10, 11, 12]
const element = arr[3][0][1]; has the value 11
------
-MANIPULATE ARRAYS
--PUSH (adds at the end)
.push() takes one or more parameters and "pushes" them onto the end of the array.
const arr1 = [1, 2, 3];
arr1.push(4);
arr1 now has the value [1, 2, 3, 4]
--POP (removes at the end)
.pop() removes the last element from an array and returns that element
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown); 6
console.log(threeArr); [1, 4]
--SHIFT (removes at the beginning)
That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
removedFromOurArray is Stimpson
ourArray is ["J", ["cat"]].
--UNSHIFT (adds at the beginning)
.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); removes the first ["J", "Cat"]
ourArray.unshift("Happy"); adds the first ["Happy", "J", "cat"].
------
-SHOPPING LIST
The list should be a multi-dimensional array containing several sub-arrays.
var myList = [
  ["Canned Beans", 3],
  ["Milk Galon", 1],
  ["Cereal", 2],
  ["Toilet Paper", 12],
  ["Sack of Rice", 1]
];
------
-WRITE REUSABLE JAVASCRIPT WITH FUNCTIONS
Reusable parts of the code
1. create the function
function functionName() {
  console.log("Hello World");
}
2.call the function
functionName();
------
-PASSING VALUES TO FUNCTIONS WITH ARGUMENTS
function functionWithArgs(one, two) {
  console.log(one + two);
}
functionWithArgs(7, 3); 10
------
-RETURN A VALUE FROM A FUNCTION WITH RETURN
function plusThree(num) {
  return num + 3;
}
plusThree(3);
plusThree takes an argument for num and returns a value equal to num + 3.
------
-GLOBAL SCOPE AND FUNCTIONS
In JavaScript, scope refers to the visibility of variables.
Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.
Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.
Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.
Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.
------
-LOCAL SCOPE AND FUNCTIONS
Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.
Here is a function myTest with a local variable called loc.
function myTest() {
  const loc = "foo";
  console.log(loc);
}
myTest();
console.log(loc);
The myTest() function call will display the string foo in the console. The console.log(loc) line (outside of the myTest function) will throw an error, as loc is not defined outside of the function.
------
-GLOBAL VS LOCAL SCOPE IN FUNCTIONS
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
In this example:
const someVar = "Hat";
function myFun() {
  const someVar = "Head";
  return someVar;
}
The function myFun will return the string Head because the local version of the variable is present.
------
-UNDEFINED VALUE RETURNED FROM A FUNCTION
A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.
Example
let sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3);
addSum is a function without a return statement.
The function will change the global sum variable but the returned value of the function is undefined.
------
-ASSIGNMENT WITH A RETURNED VALUE
Assume we have defined a function sum which adds two numbers together.
ourSum = sum(5, 12);
Calling the sum function with the arguments of 5 and 12 produces a return value of 17. This return value is assigned to the ourSum variable.
------
-STAND IN LINE
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.
let testArr = [1, 2, 3, 4, 5];
function nextInLine(arr, item) {
  arr.push(item); adds item to arr
  const removed = arr.shift(); removes the first
  return removed;
}
------
-BOOLEAN VALUES
true/false
------
-IF STATEMENT
if (condition is true) {
  statement is executed
}
------
-EQUALITY
1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
------
-STRICTLY EQUALITY (compares also the type)
3 ===  3  // true
3 === '3' // false
------
-VAR e LET
--let può essere aggiornato ma non ridichiarato
Quindi mentre questo funzionerebbe:
let greeting = "say Hi";
greeting = "say Hello instead";
questo restituisce un errore:
let greeting = "say Hi";
let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declare
--variabili var possono essere ri-dichiarate e aggiornate
Questo significa che possiamo fare questo nello stesso ambito e non riceveremo un errore.
var greeter = "hey hi";
var greeter = "say Hello instead";
e anche questo
var greeter = "hey hi";
greeter = "say Hello instead";
--let ha scope di blocco, non vede la variabile perchè non fa parte del suo blocco
  	let greeting = "say Hi";
let times = 4;
if (times > 3) {
    let hello = "say Hello instead";
    console.log(hello);// "say Hello instead"
}
console.log(hello) // hello is not defined
--var ha scope di funzione, vede la variabile perchè fa parte della funzione
var greeter = "hey hi";
var times = 4;
if (times > 3) {
    var greeter = "say Hello instead"; 
}
console.log(greeter) // "say Hello instead"
Se hai usato greeter in altre parti del tuo codice, potresti avere una sorpresa sull'output che ottieni. Questo causerà probabilmente molti bug nel tuo codice ed è il motivo per cui let e const sono necessari.
------
-ELSE STATEMENT
When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
------
-ELSE IF
If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
------
-SWITCH STATEMENTS
If you need to match one value against many options, you can use a switch statement. A switch statement compares the value to the case statements which define various possible values. Any valid JavaScript statements can be executed inside a case block and will run from the first matched case value until a break is encountered.
Example 1
switch (fruit) {
  case "apple":
    console.log("The fruit is an apple");
    break;
  case "orange":
    console.log("The fruit is an orange");
    break;
}
Example 2
function caseInSwitch(val) {
  let answer = "";
switch(val){
  case 1:
  answer = "alpha";
  break;

  case 2:
  answer = "beta";
  break;

  case 3:
  answer = "gamma";
  break;

  case 4:
  answer = "delta";
  break;
  }
  return answer;
}
------
-SWITCH STATEMENTS DEFAULT OPTION
In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.
function switchOfStuff(val) {
  let answer = "";
  switch(val){
    case "a":
    answer="apple";
    break;

    case "b":
    answer="bird";
    break;

    case "c":
    answer="cat";
    break;

    default:
    answer="stuff";
    break;

  }
  return answer;
}
------
-MULTIPLE IDENTICAL OPTIONS IN SWITCH STATEMENTS
If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered.
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3:
    answer="Low";
    break;

    case 4:
    case 5:
    case 6:
    answer = "Mid";
    break;

    case 7:
    case 8:
    case 9:
    answer = "High";
    break;
  }
  return answer;
}
------
-REPLACING IF ELSE CHAINS WITH SWITCH
If Else verify every single option, Switch only goes directly to the correct one, it is better to use this one.
If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:
if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }
can be replaced with:
switch(val){
    case "bob":
    answer="Marley";
    break;

    case 42:
    answer = "The Answer";
    break;

    case 1:
    answer = "There is no #1";
    break;

    case 99:
    answer = "Missed me by this much!";
    break;

    case 7:
    answer = "Ate Nine";
    break;
}
------  
-BOOLEAN VALUES FROM FUNCTIONS
Sometimes people use an if/else statement to do a comparison, like this:
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:
function isEqual(a, b) {
  return a === b;
}
------
-RETURN EARLY PATTERN FOR FUNCTIONS
When a return statement is reached, the execution of the current function stops and control returns to the calling location.
Example 1
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
The above will display the string Hello in the console, and return the string World. The string byebye will never display in the console, because the function exits at the return statement.
Example 2
// Setup
function abTest(a, b) {
  if(a<0||b<0){
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
------
-BUILD JAVASCRIPT OBJECTS
Useful for storing data in a structured way, can represent real world objecst
Similar to arrays, except that instead of using indexes to access/modify theri data, you access the data objects using properties
const myDog = {
  "name" : "Melody",
  "legs" : 4,
  "tails" : 1,
  friends : ["Guinea Pigs", "Hamsters"]
};
------
-WAYS TO ACCESS OBJECTS PROPERTIES
--WITH DOT NOTATION .
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;
--WITH BRACKLET NOTATION []
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
const entreeValue = testObj["an entree"];   
const drinkValue = testObj["the drink"]; 
--WITH VARIABLES
Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
const playerNumber = 16;  
const player = testObj[playerNumber];
------
-UPDATING OBJECT PROPERTIES
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
------
-ADD NEW PROPERTIES TO OBJECTS (bark property)
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof";
------
-DELETE PROPERTIES FROM OBJECTS
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;
------
-ITERATE WITH JS WHILE LOOPS
You can run the same code multiple times by using a loop.
The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true.
Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
const myArray = [];
let i=0;
while (i<6){
  myArray.push(i);
  i++;
}
console.log(myArray.reverse()); [5, 4, 3, 2, 1, 0]
------
-ITERATE WITH JS FOR LOOPS
The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.
for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.
inizializzazione
verifica
aggiornamento
The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.
Use a for loop to push the values 1 through 5 onto myArray.
const myArray = [];
for(let i=1; i<6; i++){ start from 1 to 6 excluded
  myArray.push(i)
}
console.log(myArray) [ 1, 2, 3, 4, 5 ]
------
-ITERATE ODD NUMBERS WITH A FOR LOOP
For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.
We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.
const ourArray = [];
for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
ourArray will now contain [0, 2, 4, 6, 8]. Let's change our initialization so we can count by odd numbers.

const myArray = [];
for(let i =1;i<10;i+=2){
  myArray.push(i)
}
console.log(myArray)// [ 1, 3, 5, 7, 9 ]
------
-COUNT BACKWARDS WITH A FOR LOOP
A for loop can also count backwards, so long as we can define the right conditions.
In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression.
We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.
const ourArray = [];
for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
ourArray will now contain [10, 8, 6, 4, 2]. Let's change our initialization and final expression so we can count backwards by twos to create an array of descending odd numbers.
Push the odd numbers from 9 through 1 to myArray using a for loop.
const myArray = [];
for(let i = 9; i>0; i-=2){
  myArray.push(i);
}
console.log(myArray);// [ 9, 7, 5, 3, 1 ]
------
-ITERATE THROUGH AN ARRAY FOR LOOP
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i=0; i< myArr.length;i++){
  total += myArr[i];
}
console.log(total); 20
------
-SPREAD OPERATOR e SPLIT()
let checkPalindrome = (string) => {
    let reverseString = [...string].reverse().join('');
    /**spread operator() fa una deep copy dell'array, lo utilizzo in modo da lavorare sulla copia senza modificare l'originale, ad es se voglio fare il merge di 2 array 
    posso utilizzare lo spread su entrambi in modo da non modificare gli originali*/
    //in questo caso lo metto tra [] e quindi metterà ciò che estrae dentro un array
    //reverse() ribalta la stringa creando un nuovo array
    //join() unisce gli elementi del nuovo array con ciò che c'è tra le '', in questo caso rimuovo la virgola che li separa
--------    
    let reverseString2 = string.split('').reverse().join('');
    /**split() fa la stessa cosa dello spread, separa i singoli elementi che estrae con ciò che spcifichiamo tra '' */
    console.log('reverseString spread', reverseString);//accetta più argomenti
    reverseString spread eye
    reverseString spread olleh
--------
    console.log('reverseString split', reverseString2);
    reverseString split olleh
    reverseString split eye
--------
    return reverseString === string;
    true
    false
    //basta scrivere la condizione, restituisce un booleano da sola quindi non c'è bisogno di specificare
    //se la condizione si verifica restituisce true, altrimenti false
}
------
-SPREAD OPERATOR
let numeri = [1, 2, 3, 4];
//gli stiamo passando l'array intero, non riesce a trovare i valori, ha bisogni di una lista di singolik valori, non di un array
console.log('Math.max(numeri)', Math.max(numeri));// NaN
//accetterebbe i valori in questo modo, ma non si usa
console.log('Math.max(1, 2, 3, 4)', Math.max(1, 2, 3, 4));// 4
//spread operator fa una deep copy del mio array restituendo i valori in lista, singoli, non più raggruppati nell'array, ma singoli valori
console.log('Math.max(...numeri)', Math.max(...numeri));// 4
//per stampare direttamente i numeri
console.log('...numeri', ...numeri);// 1 2 3 4
//per inserirli in un array
console.log('[...numeri]', [...numeri]);
------
REST OPERATOR -> si usa sulle funzioni, quando ho più di 1 argomento
//inverso allo spread, trasforma una lista di valori in un array, invece che passare tutti gli argomenti, passo il rest, semrpe al fondo
function fn(numero) {
    console.log('numero', numero);
}
fn(5);// 5
function fn2(a, b, c, d) {
    console.log('a, b, c, d', a, b, c, d);
}
fn2(1, 2, 3, 4);// 1 2 3 4 singoli
function fn3(...argomenti) {
    console.log('argomenti', argomenti);
}
fn3(1, 2, 3, 4);//(4) [1, 2, 3, 4] array

//es firstName e lastName saranno sempre 1 solo, invece i titles possono essre di più
function showName(firstName, lastName, ...titles) {
    //alert(firstName + ' ' + lastName); // Julius Caesar
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    //alert(titles[0]); // Consul
    //alert(titles[1]); // Imperator
    //alert(titles.length); // 2
}
//showName("Julius", "Caesar", "Consul", "Imperator");
------
-METHODS OF PRIMITIVES (metodi dei tipi primitivi)
Esistono 6 tipi primitivi: string, number, bigint, boolean, symbol, null e undefined.
Un oggetto è in grado di memorizzare molti valori come proprietà.
Può essere creato con {}, ad esempio: {name: "John", age: 30}. Ci sono altri tipi di oggetto in JavaScript; le funzioni ad esempio sono oggetti.
Uno dei principali vantaggi degli oggetti, è che questi possono essere utilizzati per memorizzare funzioni come loro proprietà.
let john = {
  name: "John",
  sayHi: function() {
    alert("Hi buddy!");
  }
};
john.sayHi(); // Hi buddy!
In questo esempio abbiamo creato un oggetto john con il metodo sayHi.
------
-CICLO FOR...IN
si usa sugli OGGETTi
for (proprietà in oggetto) {
  // codice
}
Il ciclo  for...in esegue un'iterazione sulle proprietà di un oggetto. Per ogni proprietà viene eseguito il codice nel blocco di istruzioni.
Es
1. Iterare sulle proprietà di un oggetto e stampare il nome e il valore nella console:
const capitali = {
  a: "Atene",
  b: "Belgrado",
  c: "Cairo"
};

for (let key in capitali) {
  console.log(key + ": " + capitali[key]);
}
// Output:
// a: Atene
// b: Belgrado
// c: Cairo
Attenzione!
Sebbene sia possibile utilizzare un ciclo for...in per eseguire l'iterazione su un array, è consigliabile utilizzare invece un normale ciclo for o un ciclo for...of.
Il ciclo for...in può scorrere su array e oggetti simili a array, ma potrebbe non accedere sempre agli indici dell'array in ordine.
------
-CICLO FOR...OF
si usa sugli ARRAY
for (variabile of oggetto) {
  // codice
}
Il ciclo for...of esegue un'iterazione sui valori di molti tipi di iterabili, inclusi gli array e i tipi di raccolta speciali come Set e Map. Per ogni valore nell'oggetto iterabile, viene eseguito il codice nel blocco di codice.

Esempi
1. Iterare su un array:

const arr = [ "Fred", "Tom", "Bob" ];

for (let i of arr) {
  console.log(i);
}
// Output:
// Fred
// Tom
// Bob

2. Iterare su  Map:
const m = new Map();
m.set(1, "nero");
m.set(2, "rosso");

for (let n of m) {
  console.log(n);
}
// Output:
// [1, nero]
// [2, rosso]

3. Iterare su  Set:
const s = new Set();
s.add(1);
s.add("rosso");

for (let n of s) {
  console.log(n);
}
// Output:
// 1
// rosso
------
-FUNZIONE TRADIZIONALE E FUNZIONE ARROW
https://www.dropbox.com/scl/fi/pwramnc6dv3l0k8jaueg8/Funzione-tradizionale-e-funzione-arrow.paper?rlkey=nfznla0ba1hv2dvvahpmuseh7&dl=0
------
-DEEP COPY e SHALLOW COPY
deep copy, toglie ogni riferimento all'originale, la modifica della copia non infierisce sull'originale
supponiamo A=2, B=...A, B=3 -> A resterà 2
shallow copy, se modifico la copia modifica anche l'originale, hanno lo stesso riferimento, stessa locazione di memoria
supponiamo A=2, B=A, B=3 -> A diventerà 3
Es.
let person = {
    firstName : "Cinzia",
    lastName : "Vittone",
    age: 25,
    pippo: {
        test: "test"
    },
    gender : "F"
};
--structuredClone(obj)
copia ogni sottolivello, è la vera deep copy
diversamente da spread operator fa la vera deep copy, di ogni sottolivello
la modifica di test non influenza l'originale test: test
let personCopy = structuredClone(person);
--{...obj}
spread operator fa solo una copia del primo livello, non dei sottolivelli
la modifica di test influenza l'originale test:test2
let personCopy2 = {...person};
------
-METODOLOGIA AGILE
Approccio, modo in cui si affronta qualcosa, approccio verso la gestione  dei progetti e la conduzione aziendale
3 principi:
1. Valore: dare valore al cliente, capire di cosa ha bisogno e dare soluzioni che lo valorizzino,
cambiare le soluzioni perchè il cliente cambierà richieste nel corso del tempo, coinvolgere il cliente
2. Cambiamento: essere pronti a cambiare piani, programmi e competenze seguendo le necessità del cliente, essere 
pronti a cogliere le opportunità, adattarsi alle nuove situazioni
3. Persone: se vuoi cambiare devi mettere al centro le persone dell'azienda, perchè sono le persone stesse a dare vita 
al cambiamento, non essere abitudinari, rendere invece le persone motivate e coinvolte, sempre al centro
        |
        |
        V
Metodi + Azioni -> Risultati
------
-GUIDA SCRUM(pdf)
Scrum è un framework leggero che aiuta persone, team ed organizzazioni a generare valore attraverso
soluzioni adattive per problemi complessi.
Scrum si basa sull’empirismo ed il pensiero Lean. L'empirismo afferma che la conoscenza derivi
dall'esperienza e dal prendere decisioni basate su ciò che si è osservato. Il pensiero Lean riduce gli
sprechi e si focalizza su ciò che è essenziale

Pilastri empirici di Scrum:
1. Trasparenza: il processo ed il lavoro emergenti devono essere visibili sia a coloro che svolgono il lavoro che a quelli
che ne beneficiano
2. Ispezione: li artefatti di Scrum e l’avanzamento verso gli obiettivi concordati devono essere ispezionati frequentemente e diligentemente, 
per rilevare deviazioni o problemi indesiderati
3. Adattamento: l'adattamento deve essere effettuato il più presto possibile per ridurre al minimo ulteriori deviazioni

Valori di Scrum:
1. Impegno
2. Focus
3. Apertura
4. Rispetto
5. Coraggio

Lo Scrum Team: 
Lo Scrum Team si impegna a raggiungere i propri obiettivi, nonché a supportarsi reciprocamente.
Aperti al confronto e alle sfide.
L’unità fondamentale di Scrum è un piccolo gruppo di persone, uno Scrum Team. Lo scrum Team è
composto da uno Scrum Master, un Product Owner e dai Developer. All’interno dello Scrum Team non ci
sono sottogruppi o gerarchie. È un’unità coesa di professionisti concentrati su un unico obiettivo alla
volta, il Product Goal.
Lo Scrum Team è abbastanza piccolo da essere agile e grande abbastanza per portare a termine un
lavoro significativo all’interno dello Sprint, di solito è composto da 10 persone o meno.
-I Developer: pianificano e adattano lo Sprint
-Il Product Owner: massimizza il valore del lavoro svolto dallo Scrum Team, è una singola persona
-Lo Scrum Master: responsabile di promuovere Scrum, responsabile della sua efficacia, 
aiuta tutti a comprenderne pratica e teoria, aiuta e supporta i membri del team, guida e pianifica

Gli Eventi Scrum:

Lo Sprint:
cuore pulsante di Scrum, dove le idee sono trasformate in valore
eventi della durata fissa di 1 mese o meno, uno nuovo inizia subito dopo la fine del precedente.
Tutto il lavoro necessario per raggiungere il Product Goal, inclusi lo Sprint Planning, i Daily Scrum, la
Sprint Review e la Sprint Retrospective, si svolge all'interno degli Sprint.
Garantiscono ispezione e adattamento dei progressi verso un Product Goal almeno ogni mese

Lo Sprint Planning:
da il via allo Sprint, ne stabilisce il lavoro da svolgere, affronta 3 argomenti:
1. Perchè questo Sprint è di valore?
2. Cosa si può fare in questo Sprint?
3. Come si svolgerà il lavoro scelto? 

Il Daily Scrum:
evento della durata di 15 minuti che coinvolge i Developer, stessa ora e luogo ogni giorno, si focalizza sull'avanzamento 
dello Sprint Goal e producono un piano per la successiva gionata lavorativa, crea concentrazione e autogestione
non è l'unico momento in cui i Developer si confrontano, lo fanno anche durante il giorno

La Sprint Review:
ispeziona il risultato dello Sprint e ne determina i futuri adattamenti, durata di 4 ore per uno SPrint di 1 mese

La Sprint Retrospective:
pianificare modi per incrementare qualità e efficacia, conclude lo Sprint, durata di 3 ore per uno Sprint di 1 mese

Gli Artefatti Scrum:
rappresentano lavoro o valore, massimizzano la trasparenza

Il Product Backlog:
elenco emergente e ordinato di ciò che è necessario per migliorare il prodotto
Impegno: il Product Goal
descrive lo stato futuro del prodotto, è l'obbiettivo a lungo termine
bisogna raggiungere/abbandonare un obbiettivo prima di affrontarne un altro

Lo Sprint Backlog:
composto da Sprint Goal (il perchè) + elementi selezionati per lo Sprint(il cosa) + piano attuabile(il come)
piano elaborato da e per i Developer, lavoro che essi intendono realizzare durante lo Sprint per arrivare allo Sprint Goal
di conseguenza lo Sprint Backlog è aggiornato durante lo Sprint
Impegno: lo Sprint Goal
unioc obbiettivo per lo Sprint
se il lavoro si rivela diverso da quello che ci si aspettava si collabora per negoziare l'ambito("scope") senza modificare l'obbiettivo
crea coerenza e focus, incoraggia lo Scrum Team a lavorare insieme piuttosto che su iniziative separate

L'Increment:
primo passo concreto verso l'obbiettivo, è l'ultima verso il prodotto
Impegno: la Definition of Done
descrizione dello stato dell'Increment quando questo soddisfa le metriche di qualità richieste per il prodotto
crea trasparenza sul lavoro che è stato completato
quando un elemento soddisfa la Definition of Done, nasce un Increment
se un elemento del Product Backlog non soddisfa la Definition of Done, non può essere rilasciato 
e nemmeno presentato durante la Sprint Review. Ritorna nel Product Backlog per future considerazioni

Cambiamenti dalla Guida 2017 alla 2020
-meno prescrittiva
-team concentrato su un prodotto
-introduzione del Product Goal
-la Definition of Done
-autogestione e auto-organizzazione
-Sprint Planning "cosa", "come", "perchè"
-semplificazione dle linguaggio per pubblico più ampio
------
-INTRODUZIONE A SCRUM(video)
framework agile di sviluppo software per gestire progetti
Stackeholder: persone interessate a realizzare il prodotto stesso (cliente, venditori, utilizzatori finali), permettono il progetto che darà benifici a tutti
User Story: breve descrizione di una caratteristica detta e scritta dal punto di vista dell'utente che la richiede, segue il formato:
As a
<type of user>,
I want
<some goal>
so that
<some reason>.
Esempio
Come
<creatore>,
voglio
<caricare un mio video>
in modo tale che
<tutti possano vederlo>.
Product Backlog: raccoglie tutute le User Stories, fa parte dell'Information Radiator
Information Radiators(tipo grafici): forniscono informazioni pronte e immediate a colore che li guardano

In Scrum le persone necessarie si dividono in 3 gruppi.
1. Product Owner: rappresenta gli Stackeholder, è la voce del cliente, assicura che il prodotto sviluppato fornisca valore al business, 
scrive le User Story e assegna loro la proprità e le aggiunge al Product Backlog
2. Scrum Master: rimuove gli ostacoli che impediscono al Team di raggiungere l'obbiettivo dello Sprint, non è il Team Leader, 
facilita la corretta esecuzione del processo, protegge il Team e lo tiene concentrato sui compiti
3. Team: responsabile della consegna del prodotto in modo che sia rilasciabile alla fine dello Sprint, 
composto da 3-9 persone con competenze cross-funzionali (analisi, progettazione, sviluppo, test ecc), si auto-organizza

Eventi che caratterizzano Scrum: (tutti con durata limitata nel tempo, time boxed)
Sprint è l'unità di base dello sviluppo Scrum , si sviluppano le User Story che si consegnano alla fine dello Sprint, 
il prodotto finale è definito Incremento
1. Backlog Refinment(15% del tempo poi 5-10%): Product Owner incontra il Team per discutere delle User Stories presenti nel Product Backlog, 
condivide con il Team le priotrità da assegnare alle Stories, stima di rischi e costi fatta dal Team, si decide quali User Stories formeranno il Release Backlog, 
si definisce il concetto di "Done", regola da rispettare affinchè una User Story sia considerata finita, la stima sul costo delle Stories si può basare su 
Story Points, Ideal Days, Hours. Considerando le ore lavorate bisognerebbe seguire la sequenza di Fibonacci (1, 2, 3, 5, 8, 13, 21, 34h ecc).
Es se penso che un'attività richieda 10 h la stimerò quindi 13h, 25h sarà stimato 34h ecc
2. Sprint Planning(2h per ogni settimana di Sprint): si pianifica il lavoro da svolgere durante lo Sprint, partecipano Product Owner, Scrum Master, Team.
Il Product Owner si presenta con un Product Backog pieno di User Stories pronte con priorità assegnata, deve avere Stories pronte per almeno 2 Sprint 
prima di presentarsi allo Sprint Planning. Si scelgono(in base a priorità) le Stories che si adranno a terminare nello Sprint successivo entrando nello Sprint Backlog.
Questo è un Artifact che esce dallo Sprint Planning. 
Da qui le User Stories scelte possono essere suddicise in task.
Altro Artifact che esce è lo Sprint Goal, obbiettivo dello Sprint, descrizione di cosa verrà prodotto.  
3. Sprint(time boxed 1-4 settimane): lavoro vero e proprio in cui le User Story vengono man mano definite "Done" in base alla Definition of Done(Dod)=lista di specifiche che un Incremento deve 
soddisfare per definirsi rilasciabile, non è statica, può evolversi
-i build sono esenti da errori?
-il codice è stato sottoposto a refactoring?
-il codice è stato commentato?
-il codice segue gli standard previsti per il progetto?
-la User Story funziona completamente?
-il codice è stato integrato e committato nel server?
4. Daily Scrum(15min): Team e Scrum Master(Product Owner non partecipa attivamente), ci si aggiorna sullo stato del lavoro, in piedi, si risponde a 3 domande
-cosa ho fatto ieri?
-cosa farò oggi?
-quali sono stati gli impedimenti che hanno ostacolato il mio lavoro?
Release Burndown Chart aggiornata dallo Scrum Master alla fine di ogni Sprint(asse x numero di Sprint, asse y unità di misura per le Stories), andamento decrecente, 
velocità del Team(blu) e velocità ideale(rosso) a confronto
5. Sprint Review(1h per ogni settimana di Sprint): software testato e rilasciabile che rispetta la Definition of Done, il Team mostra al Product Owner, 
Stackeholder e tutti coloro che sono interessati gli Incrementi di prodotto realizzati, demo delle nuove carattersitiche, 
no diapositive power-point ma prodotto vero e proprio, progetto valutato  a fronte dello Sprint Goal
6. Sprint Retrospective(1h per ogni settimana di Sprint): focalizzata identificare le cose che il Team fa bene e deve continuare a fare, 
le cose che sarebbe buono iniziare a fare, le cose che frenano il Team e che bisognerebbe smettere di fare. Facilitata dallo Scrum Master, 
il Product Owner non partecipa, si rivedono valutano e migliorano i processi interni

...e si ricomincia
Scrum così come tutte le metodologie Agile è iterativo
------
-AGILE E SCRUM
approccio, modo in cui si affronta qualcosa, approccio verso la gestione  dei progetti e la conduzione aziendale
agile:
-VALORE: dare valore al cliente, soluzioni che lo valorizzino
-CAMBIAMENTO: pronti a cambiare piani xk cliente può cambiare idea
-PERSONE: al centro le persone dell'azienda, motivate e coinvolte

scrum è un FRAMEWORK AGILE x gestire progetti
cardini:
-IMPEGNO
-FOCUS
-APERTURA
-RISPETTO
-CORAGGIO
   
STACKEHOLDER: persone interessate al prodotto
USER STORY: as a <type of user> i want <goal> so that <reason>
PRODUCT BACKLOG: raccoglie le user stories
INFORMATION RADIATORS: grafici x info immediate

3 gruppi di persone
-STACKEHODER: cliente, chi effettua la richiesta, non è competente in ambito tecnico, per questo il product owner traduce in obbiettivi raggiungibili
-PRODUCT OWNER: voce del cliente, scrive user stories e ne assegna priorità e le aggiunge al product backlog, suddivide in tasks(non sempre), 
fa da schemo tra cliente e team, il team non sente mai il cliente direttamente, facilitatore
-SCRUM MASTER: rimuove gli ostacoli al team, facilita il loro lavoro ed evita conflitti, protegge e tiene concentrato il team, coach, supervisiona, 
scheemo tra product owner e team, riferimento organizzativo per il team(serve una certificazione, fa solo quello nella vita)
-TEAM: responsabile della consegna del prodotto, 3-9persone con competenze cross funzionali(analisi, test, progetto ecc)

eventi(tutti time boxed):
Sprint è l'unità base, è la fase esecutiva di n task che racchiudono il sottoprodotto di un prodotto globale, es per la home page di un prodotto che è l'app completa
-BACKLOG REFINMENT(15%->5-10%tempo): product owner + team, si dicute delle user stories e delle priorità, stima rischi e costi fatta dal team(si può basare su story points, ideal days, hours->fibonacci, stimo in quanto tempo), si scelgono le stories che andranno nel release backlog, defininto concetto di done(specifiche secondo cui una story si considera completata), arrivare a un risultato concreto a 
fine Sprint e non restare fermi, quindi non si inizia da tutte le più difficili, costruisce le board in fuznione delle milestones a seconda delle funzionalità che vuole il cliente, 
in modo che il cliente veda a ogni step un risutato, il prodotto non veiene rilasciato tutto assieme ma in frammenti con risultato tangibile ogni volta

-SPRINT PLANNING(2h x sett di sprint): product owner + scrum master + team, pianifica di lavoro, product owner presenta le stories e le priorità e si scelgono le stories che finiranno nello 
-->SPRINT BACKLOG(artifact) poi suddivise in tasks, 
-->altro artifact è lo SPRINT GOAL, obbiettivo

-SPRINT(1-4sett): lavoro, le stories diventano DONE in base alla definition of done ==> lista di specifiche per considerare un INCREMENTO rilasciabile
release burndown chart(grafico) andamento del team, velocità ideale vs velocità team

-SPRINT REVIEW(1h x sett di sprint): team mostra al product owner, stackeholder e tutti interessati il prodotto demo(no diapositive ma prodotto vero)

-SPRINT RETROSPECTIVE(15min): analisi di cosa è buono continuare a fare, cosa sarebbe meglio iniziare a fare, cosa danneggia e andrebbe smesso

...e si ricomincia->ogni metodologia AGILE è ITERATIVA
------
-OBJECT METHODS THIS -> app es-6
Riepilogo
Le funzioni che vengono memorizzate come proprietà di un oggetto vengono dette “metodi”.
I metodi consentono agli oggetti di “agire”, come object.doSomething().
I metodi possono riferirsi all’oggetto tramite this.
Il valore this viene definito durante l’esecuzione (run-time).
------
-MODIFICATORI DI ACCESSO PUBLIC/PRIVATE/PROTECTED/READONLY(Ts)
-Le proprietà public sono accessibili e modificabili all'esterno della classe.
-Le proprietà private non sono invece accessibili all'esterno della classe.
Le proprietà o i metodi private di una classe base non sono accessibili neanche dalla classe derivata.
-In questi casi è possibile usare il modificatore protected che è simile a private, ma le classi derivate hanno accesso a questo tipo di metodi e proprietà.
-Le propreità readonly possono solo essere lette ma non modificate

Get e Set per intercettare l'accesso alle proprietà di un oggetto

UN ESEMPIO DEL MONDO REALE
Prendiamo l’esempio di una macchina del caffè. Semplice all’esterno: un bottone, un display, un paio di fori… E, ovviamente, il risultato: un ottimo caffè!
Ma internamente...
Ci sono molti dettagli. Ma riusciamo comunque ad utilizzarla anche senza conoscerli.
Le macchine del caffè sono piuttosto affidabili, giusto? Possono durare per anni, e solamente nel caso in cui qualcosa smetta di funzionare, le portiamo a riparare.
Il segreto dietro all’affidabilità e alla semplicità di una macchina del caffè è che tutti i dettagli sono ottimizzati e nascosti.
Se rimuovessimo la copertura della macchina del caffè, allora il suo utilizzo sarebbe molto più complesso (dove dovremmo premere?), e pericoloso (potremmo prendere la scossa).
Come vedremo in seguito, nella programmazione gli oggetti sono come le macchine del caffè.
Ma per poter nascondere i loro dettagli interni, non utilizzeremo una copertura di sicurezza, ma piuttosto una speciale sintassi del linguaggio ed alcune convenzioni.
------
-GET, POST, PUT, PATCH
in funzione del verbo il be sa bene cosa fare
non c'è neinte che vieti di fare get input ecc assieme, posso farlo ma non ha senso fare un insert con una get
get post put patch e delete sono delle convenzioni ma non dei limiti
GET
limiti di parametri 2085
espongono i parametri in chiaro, pass ecc tramite la query string
POST
invece non li passa in chiaro ma li passa nei body
non è sicura a patto che si usi il protocollo HTTPS e non HTTP e ogni richiesta clint-server verrà criptata
PUT
se c'è aggiorna sennò crea
PATCH
aggiorna/modifica esistenti
---
-OPTIONAL CHAINING
The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.
Sto dicendo che sono consapevole del fatto che sia undefined/null, quindi non dare errore
---
NULLISH COALESCING OPERATOR
The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
Esegue ciò ceh ha alla destra quando ciò ceh ha alla sua sinistra è undefined

spesso usati insieme
---
TEMPLATE LITERALS/STRINGS
Used for string interpolation(concatenare stringhe e logica)
Senza template literals
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
Con template literals
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions
`string text ${expression} string text`



-RISORSE
https://www.freecodecamp.org/italian/news/var-let-const-differenza/ var let const
https://it.javascript.info/rest-parameters-spread rest spread
https://javascript.info/primitives-methods primitives
https://www.freecodecamp.org/italian/news/spiegazione-dei-loop-in-javascript/ loop js
https://www.dropbox.com/scl/fi/pwramnc6dv3l0k8jaueg8/Funzione-tradizionale-e-funzione-arrow.paper?rlkey=nfznla0ba1hv2dvvahpmuseh7&dl=0 funzione tradizionale e arrow function
https://www.youtube.com/watch?v=6m-01cClfbc spread e rest
https://www.youtube.com/watch?v=L_Mk7R2uz78 agile video
https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Italian.pdf scrum pdf
https://www.youtube.com/watch?v=Wku93RUALqc scrum video
https://it.javascript.info/object-methods object methods this
https://www.freecodecamp.org/news/the-this-keyword-in-javascript/ this
https://it.javascript.info/bind function binding
https://it.javascript.info/destructuring-assignment#tasks destructuring operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries entries
https://javascript.info/object-toprimitive conversion obj-primitives
https://it.javascript.info/async promises, async/await
+ https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
https://morioh.com/p/bebf397089dd promises example
https://www.freecodecamp.org/italian/news/javascript-sincrono-vs-asincrono-call-stack-promise-a-altro/#:~:text=Il%20termine%20asincrono%20vuol%20dire,del%20codice%20in%20modo%20asincrono sync vs async, call stack, callback queue, promise, job queue, output
https://it.javascript.info/promise-chaining fetch
https://www.youtube.com/watch?v=1zkgdLZEdwM&t=3s create a fake rest api with json server(min 16 per chiamate POST)
https://www.youtube.com/watch?v=Y-4EkRBzGRc async await
https://www.youtube.com/watch?v=tdVgqgRPZc8&list=PLP5MAKLy8lP9FUx06-avV66mS8LXz7_Bb&index=14 object
https://it.javascript.info/classes classes
https://www.youtube.com/watch?v=yuL6K46MufM&list=PLP5MAKLy8lP9FUx06-avV66mS8LXz7_Bb&index=15 oop
https://www.youtube.com/watch?v=BJ-WzB9AhAQ&list=PLP5MAKLy8lP9FUx06-avV66mS8LXz7_Bb&index=16 classi e ereditarietà
+ https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
https://it.javascript.info/private-protected-properties-methods proprietà e metodi privati e protetti
https://www.mrw.it/javascript/classi-typescript_12486.html ts modificatori di accesso
https://it.javascript.info/dom-nodes alberatura DOM
https://it.javascript.info/searching-elements-dom getElement, querySelector
https://it.javascript.info/introduction-browser-events browser events intro
https://it.javascript.info/mouse-events-basics mouse events
https://it.javascript.info/keyboard-events keyboard events
https://it.javascript.info/form-elements form elements
https://it.javascript.info/focus-blur focus blur
https://it.javascript.info/events-change-input change input cut copy paste
https://it.javascript.info/forms-submit submit
https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/ what is the DOM
https://www.codeguage.com/courses/js/html-dom-introduction HTML DOM + exercises, events