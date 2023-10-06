////////////////////STRING
let myString = "Hello world";
console.log("-----STRING-----");
// 1) lunghezza di una stringa
console.log("length:" + myString.length);

// 2) prendere un carattere della stringa
console.log("substr(): " + myString.substring(0, 1));
console.log("substr(): " + myString.substring(7, 8));
/**The substr() method extracts a part of a string.
The substr() method begins at a specified position, and returns a specified number of characters.
The substr() method does not change the original string.*/

// 3) prendere una parte di una stringa
console.log("slice(): " + myString.slice(0, 5));
/**The slice() method extracts a part of a string.
The slice() method returns the extracted part in a new string.
The slice() method does not change the original string. */

// 4) cambiare il case di una stringa
console.log("toLowerCase(): " + myString.toLowerCase());
console.log("toUpperCase(): " + myString.toUpperCase());

// 5) cambiare parti di una stringa
console.log("replace() a word: " + myString.replace("world", "!"));
console.log("replace() characters: " + myString.replace("ld", "k"));

// 6) recuperare l'indice di un carattere
console.log("indexOf(): " + myString.indexOf("w"));

////////////////////ARRAY
const fruits = ["Strawberry", "Peach", "Apple", "Cherry"];
const vegetables = ["Salad", "Carrot", "Tomato"];
const sweets = ["Croissant", "Cake"];
console.log("-----ARRAY-----");
// 1) lunghezza di un array
console.log("length:" + fruits.length);

// 2) recuperare l'indice di un elemento
console.log("indexOf(): " + fruits.indexOf("Apple"));

// 3) aggiungere un elemento
console.log("push() add at the end: " + fruits.push("Banana"));//only returns the new length
console.log(fruits);
console.log("unshift() add at the beginning: " + fruits.unshift("Papaya"));//only returns the new length
console.log(fruits);

// 4) rimuovere un elemento
console.log("pop() remove at the end: " + fruits.pop());//only returns the element
console.log(fruits);
console.log("shift() remove at the beginning: " + fruits.shift());//only returns the element
console.log(fruits);

// 5) sostituire un elemento
fruits[1] = "Pear";
console.log("modify with index: " + "fruits[1]=Pear");
console.log(fruits);

// 6) verificare la presenza di un elemento, case sensitive
console.log("includes(): " + fruits.includes("pear"));
console.log("includes(): " + fruits.includes("Pear"));

// 7) trasformare array in una stringa
console.log("join(): " + fruits.join());
console.log("join() with separator: " + fruits.join(" and "));

// 8) estrarre un elemento in base all'indice
console.log("at(): " + fruits.at(2));

// 9) unire 2/più array
console.log("concat(): " + fruits.concat(vegetables));
console.log("concat(): " + fruits.concat(vegetables, sweets));

////////////////////ARRAY OF OBJECTS
let users = [
    {
        id: 1,
        firstName: "Cinzia",
        lastName: "Vittone",
        age: 25
    },
    {
        id: 2,
        firstName: "Rossella",
        lastName: "Mascia",
        age: 25
    },
    {
        id: 3,
        firstName: "Luana",
        lastName: "Frisina",
        age: 26
    },
    {
        id: 4,
        firstName: "Stefano",
        lastName: "Scicolone",
        age: 27
    },
    {
        id: 5,
        firstName: "Enrico",
        lastName: "Malesani",
        age: 29
    }
]
console.log("-----ARRAY OF OBJECTS-----");
console.log(users);
// 1) cercare utente per nome
console.log("user with firstName Cinzia: ");
let searchByFirstName = users.find(user => {
    return user.firstName === "Cinzia";
});
console.log(searchByFirstName);

// 2) ordinare alfabeticamente per nome
users.sort(function(a, b){
    if(a.firstName < b.firstName){
        return -1;
    }
    if(a.firstName > b.firstName){
        return 1;
    }
    return 0;
});
console.log("users ordered by firstName: ");
console.log(users);

// 3) recuperare utente con id 3
console.log("user with id 3: ");
let searchById = users.find(user => {
    return user.id === 3;
});
console.log(searchById);

// 4) modificare utente Cinzia aggiungendo 2 anni
console.log("user Cinzia +2 years")
for (let i = 0; i < users.length; i++) {
    if (users[i].firstName === "Cinzia") {
        users[i].age += 2;
    }
}
console.log(users);








