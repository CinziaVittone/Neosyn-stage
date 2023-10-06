// Crea una copia dell'oggetto "person" in un nuovo oggetto "personCopy" e cambia un property dell'object personCopy (mi raccomando non deve cambiare l'object originale).
//spread operator fa solo una copia del primo livello, non dei sottolivelli
let person = {
    firstName : "Cinzia",
    lastName : "Vittone",
    age: 25,
    pippo: {
        test: "test"
    },
    gender : "F"
};
console.log("person: ", person)
//copio l'oggetto in un nuovo oggetto
//copia ogni sottolivello, è la vera deep copy
//diversamente da spread operator fa la vera deep copy, di ogni sottolivello
//la modifica di test non influenza l'originale test: test
let personCopy = structuredClone(person);
personCopy.firstName = "Sara";
personCopy.pippo.test = "test1";
console.log("personCopy: ", personCopy);

//la modifica di test influenza l'originale test:test2
let personCopy2 = {...person};
personCopy2.firstName="Luciana";
personCopy2.pippo.test = "test2";
console.log("personCopy2: ", personCopy2);

