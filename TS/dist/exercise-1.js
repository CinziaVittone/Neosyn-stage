"use strict";
//Dati i dati, definire l'interfaccia "Utente" e utilizzarla di conseguenza.
let user1 = {
    firstName: "Ciccio",
    lastName: "Pasticcio",
    id: 1
};
let user2 = {
    firstName: "Ciccia",
    lastName: "Pasticcia",
    id: 2
};
function getUser(user) {
    console.log(user);
}
getUser(user1); // {firstName: 'Ciccio', lastName: 'Pasticcio', id: 1}
getUser(user2); // {firstName: 'Ciccia', lastName: 'Pasticcia', id: 2}
//# sourceMappingURL=exercise-1.js.map