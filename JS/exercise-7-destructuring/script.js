// Destrutturazione di un array, array destrutturato in variabili, NO distruzione, array non viene modificato
let arr = ["Joe", "Black"];
let [firstName, lastName] = arr;// trasformo in variabili il contenuto dell'array
console.log(firstName, lastName);// Joe Black
// da questo momento posso lavorare direttamente con le variabili piuttosto che con l'array

// Riconversione variabili in array
let [fisrtName1, lastName1] = "Alan Turing".split(' ');
console.log(fisrtName1, lastName1); // Alan Turing

// Ignora gli elementi usando la virgola
let [fisrtName2, , title] = ["Julius", "Caesar", "Consul", "of Rome"];// 2 saltato, dopo il 3 ignorati
console.log(title);// Consul

// Funziona con qualsiasi iterabile alla destra, non solo con gli array
let [a, b, c] = "abc";
console.log(a, b, c);// a b c
let [one, two, three] = new Set([1, 2, 3]);
console.log(one, two, three); // 1 2 3
// i set sono potentiperchè anche se inseriamo dei valori duplicati questi non verranno presi in considerazione
let orderSet = new Set([
    'pizza',
    'pizza',
    'pasta',
    'riso'
]);
console.log(orderSet);// Set(3) {'pizza', 'pasta', 'riso'}

// Assegna a qualsiasi cosa ci sia dalla parte sinistra
let user1 = {};
[user1.name, user1.surname] = "Tom Ford".split(' ');
console.log(user1.name, user1.surname);// Tom Ford

// Eseguire cicli con .entries()
// Es Object.entries()
const object1 = {
    a: 'somestring',
    b: 42
};

for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);//a: something b: 42
}
// Usarlo per eseguire cicli sulle coppie chiave-valore di un oggetto
let user2 = {
    firstName: "Edgar Allan",
    lastName: "Poe"
};
// ciclo su chiave-valore
for (let [key, value] of Object.entries(user2)) {
    console.log(`${key}: ${value}`);// firstName: Edgar Allan lastName: Poe
}

// Il trucco dello scambio di variabili, scambiare i valori
let guest = "Jane";
let admin = "Pete";
// scambio dei valori rende guest=Pete, admin=Jane
[guest, admin] = [admin, guest];
console.log(`guest: ${guest}, admin: ${admin}`);// guest: Pete, admin: Jane

// L'operatore rest
// di norma elementi a destra ignorati, come visto prima, con rest prendo tutto da lì in poi
let [name1, name2, ...names] = ["Ellie", "Kate", "Sophie", "Bill", "Tim", "Francis"];
console.log(name1);
console.log(name2);
console.log(`rest: ${names}`);
console.log(...names);

// Valori di default, quando ci sono meno elementi nell'array rispetto alle varibili
let [var1, var2] = [];
console.log(var1, var2); // undefined undefined
// se vogliamo assegnare un valore di default usiamo =
let [myName = "Cinzia", mySurname = "Vittone"] = ["Matteo"];
console.log(myName, mySurname); // Matteo Vittone, myName viene sostituito perhcè c'è la corrispondenza

// Destrutturazione degli oggetti, oggetto a dx che vogliamo dividere in variabili
let options = {
    titlee: "Menu",
    width: 100,
    height: 200
};
let { height, width, titlee } = options;// ordine indifferente, comunque le assegna a quelle con lo stesso nome
console.log(titlee, width, height);// Menu, 100, 200
// invece che options.title, options.width, options.height

// Cambiando l'ordine in let
let { color, opacity, font } = { font: "Bold", color: "green", opacity: 50 };
console.log(color, opacity, font);// green 50 Bold

// Dare degli alias
let images = {
    size: 400,
    trasparency: 0,
    position: "center"
};
let { size: s, trasparency: t, position: p } = images;
console.log(s, t, p);// 400 o center

// Aggiungere proprietà
let cards = {
    card_item: "png"
};
let { bg_color = "yellow", card_item } = cards;
console.log(bg_color, card_item);// yellow png

// Combinare alias e uguaglianza
let friends = {
    first: "Sara"
};
let { second: sd = "Sophie", first } = friends;
console.log(first, sd);// Sara Sophie

// Oggetto complesso, posso estrarre solo ciò che mi serve
let animals = {
    type: "herbivores",
    gender: "F",
    age: 3
};
let { gender } = animals;
console.log(gender);// F

// ...rest funziona allo stesso modo che per gli array



// Assegnamento di destrutturazione
// Abbiamo un oggetto:
let user = {
    name: "John",
    years: 30
};
// Scrivete l’assegnamento di destrutturazione che legge:
// la proprietà name nella variabile name.
// la proprietà years nella variabile age.
// la proprietà isAdmin nella variabile isAdmin(falsa se assente)
let { name: n, years: y, isAdmin: i = false } = user;// se non specifico false, esce undefined
console.log(n, y, i);// John 30 false



// Il salario massimo
// Abbiamo un oggetto salaries:
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
// Create la funzione topSalary(salaries) che ritorna il nome della persona con il salario maggiore.
// Se salaries è vuoto, dovrebbe ritornare null.
// Se ci sono più persone con lo stesso salario massimo, ritornatene una.
// P.S.utilizzate Object.entries e la destrutturazione per iterare sulle coppie chiave / valore.
let topSalary = (salaries) => {
    // variabili di partenza
    let maxSalary = 0;
    let maxName = null;
    for (let [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    console.log(maxName);
    return maxName;
}
topSalary(salaries);


// Symbol
// Le chiavi delle proprietà di un oggetto possono essere SOLO di tipo stringa o simbolo
// finora usato stringa
// Symbol rappresenta un identificatore univoco

let id = Symbol();// id è un nuovo symbol

let id2 = Symbol("id");// id è un symbol con descrizione "id"

// garantisce UNICITA', più simboli con la stessa descrizione saranno comunque VALORI DIFFERENTI
//la descrizione è solo un'etichetta, non ha effetto 
let id3 = Symbol("id");
console.log(id2 == id3);// false

// Come mostrare un Symbol?
// Non si auto converte a stringa
// alert(id2);// Uncaught TypeError: Cannot convert a Symbol value to a string
// console.log(id2);// Symbol(id) MA non lo legge come stringa, lo lascia come oggetto
console.log(id2.toString());// Symbol(id)
// per mostrare la descrizione
console.log(id2.description);// id


// Conversion rules
// converto le stringhe in numeri così da poter fare calcoli
/**
 *  this.a = Number(prompt("Enter the first number: ", "number"));
    this.b = +prompt("Enter the second number: ", 0);
*/

// Number, +
// explicit conversion
// let num = Number(obj);

// maths (except binary plus)
// let n1 = +obj; // unary plus

// valueOf
let myUser = { name: "John" };
console.log(myUser); // {name: 'John'}
console.log(myUser.valueOf() === myUser); // true

// toString
const stringObj = new String('foo');
console.log(stringObj);// String {'foo'}
console.log(stringObj.toString());// foo