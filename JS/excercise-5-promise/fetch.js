// fetch
// esempio di utilizzo di promise usata dal fe per le richieste di rete

// Utilizzare fetch per recuparare i dati https://randomuser.me/api/?page=3&results=20 stampa tutti i dati dell'utente
// let promise = fetch(url);



// Method GET, di default se non specificato
// TEXT, carica il testo dal server, da cui leggo i dati
fetch('https://randomuser.me/api/?page=3&results=20')
    .then(function (response) {
        return response.text();
    })
    .then(function (text) {
        alert(text)
    });



// JSON, legge i dati e li parsa come json
/**
 * Metodo response.json() che legge i dati remoti e li parsa come JSON. 
 * Funzioni a freccia:
 */
fetch('https://randomuser.me/api/?page=3&results=20')
    .then(response => response.json())// converti a json
    .then(json => console.log(json))// stampa i dati sulla console
    .catch(error => console.log("Request failed", error));// gestisce gli errori
// {results: Array(20), info: {…}}
// info : {seed: '5c64a6b8994239f1', results: 20, page: 3, version: '1.4'}
// results : (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// [[Prototype]] : Object



fetch('https://swapi.dev/api/people/10/')
    .then(response => response.json())// converti a json
    .then(json => console.log(json))// stampa i dati sulla console
    .catch(error => console.log("Request failed", error));// gestisce gli errori
// {name: 'Obi-Wan Kenobi', height: '182', mass: '77', hair_color: 'auburn, white', skin_color: 'fair', …}



// Method POST
const user = {
    id: "1",
    firstName: "Elena",
    lastName: "Gilbert",
    email: "elenagilbert@gmail.com",
    age: 29,
    companyId: "2"
}

// fetch('http://localhost:3000/users', {
//     method: "POST",
//     body: JSON.stringify(user)// json to string
// }).then((result) => console.log('result: ', result));
// nel Network  - Payload vedo l'utente che ho inserito
/**
 * Request Payload
 * {id: "1", firstName: "Elena", lastName: "Gilbert", email: "elenagilbert@gmail.com", age: 29,…}
 * age: 29
 * companyId: "2"
 * email: "elenagilbert@gmail.com"
 * firstName: "Elena"
 * id: "1"
 * lastName: "Gilbert"
 */

/** Chiamate per recuperare dati specifici
http://localhost:3000/companies/1
http://localhost:3000/companies/1/users
http://localhost:3000/companies?name=Apple
http://localhost:3000/companies?name=Apple&name=Microsoft
http://localhost:3000/companies?_page=1&_limit=2
http://localhost:3000/companies?_sort=name&_order=asc
http://localhost:3000/users?age_gte=30
http://localhost:3000/users?age_gte=30&age_lte=35
http://localhost:3000/users?q=Demon
http://localhost:3000/users?q=S
 */