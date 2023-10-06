//Dati i dati, definire l'interfaccia "Utente" e utilizzarla di conseguenza.

// CUSTOM TYPE
type User = {
    firstName: string;
    lastName: string;
    id: number;
}

let user1: User = {
    firstName: "Ciccio",
    lastName: "Pasticcio",
    id: 1
}

let user2: User = {
    firstName: "Ciccia",
    lastName: "Pasticcia",
    id: 2
}

function getUser(user: User): void {
    console.log(user);
}

getUser(user1);// {firstName: 'Ciccio', lastName: 'Pasticcio', id: 1}
getUser(user2);// {firstName: 'Ciccia', lastName: 'Pasticcia', id: 2}