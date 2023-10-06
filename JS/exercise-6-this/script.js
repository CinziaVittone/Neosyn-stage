console.log("-----EXAMPLES-----");
// oggetto obj
let user1 = {
    name: "Paul",
    age: 30
};

// esempio di un metodo
user1.sayHi = function () {
    console.log("Hi!");
};
user1.sayHi(); // Hi!

// questi oggetti fanno la stessa cosa
user1 = {
    sayHello: function () {
        console.log("Hello!");
    }
};
user1.sayHello(); // Hello!

// la sintassi più breve risulta migliore
user1 = {
    sayBye() { // equivalente a "sayHi: function(){...}"
        console.log("Bye!");
    }
};
user1.sayBye(); // Bye!

// this nei metodi
let user2 = {
    name: "Tom",
    age: 20,
    surname: "Ford",

    sayHi() {
        // "this" is the "current object", user2
        console.log(this.name);
        // altro modo di accedere, INSTABILE, se copiamo user2 in un'altra variabile si rischia poi di accedere all'ogg sbagliato, errore
        // this fa riferimento ESCLUSIVAMENTE a questo e nessun altro, OGGETTO PRIMA DEL PUNTO this.
        console.log(user2.age)
            ;
    }
};
user2.sayHi(); // Tom 20

// invocazione senza un oggetto
// se non ha un oggetto a cui far riferimento è undefined, valore definito durante l'esecuzione, in run-time
function sayHi() {
    console.log(this.surname);
}

// arrow functions
let user3 = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};
user3.sayHi(); // Ilya

console.log("-----THIS-----");
// Utilizzare "this" in un oggetto letterale
// Qui la funzione makeUser ritorna un oggetto.
// Qual è il risultato dell’accesso a ref ? Perché ?
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}
let user = makeUser();
console.log(user.ref.name);
// Qual è il risultato?
// undefined, non fa riferimento a nessun oggetto il this
console.log("result: undefined");



// Create una calcolatrice
// Create un oggetto calculator con tre metodi
console.log("-----CALCULATOR-----");
let calculator = {
    read() {
        this.a = Number(prompt("Enter the first number: ", "number"));
        this.b = +prompt("Enter the second number: ", 0);
        console.log("read");
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b; 2
    }
};
calculator.read();
console.log("sum: ", calculator.sum());
console.log("mul: ", calculator.mul());
/**
The function prompt returns a string and + is used for both string concatenation and number addition.
You do not "specify types" in JavaScript but you can do string to number conversion at run time. There are many ways to so this. The simplest is:

var a = +prompt("Enter first number");
var b = +prompt("Enter second number");
alert(a + b);
but you can also do

var a = Number(prompt("Enter first number"));
var b = Number(prompt("Enter second number"));
alert(a + b); */



// Concatenazione
// Qui abbiamo un oggetto ladder che ci consente di salire e scendere:
console.log("-----CONCATENATION-----");
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // shows the current step
        console.log(this.step);
        return this;
    }
};
// Ora, se abbiamo bisogno di eseguire più chiamate in sequenza, possiamo:
ladder.up(); // +1
ladder.up();  // +1
ladder.down(); // -1
ladder.showStep(); // 1
ladder.down(); // -1
ladder.showStep(); // 0
// Modificare il codice di up, down e showStep per rendere le chiamate concatenabili, come in questo esempio:
ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
// aggiunto return in modo che lo ritorni dentro la funzione stessa e sia quinid visibile