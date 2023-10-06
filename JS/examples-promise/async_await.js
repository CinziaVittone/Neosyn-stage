// Async/Await
// Async/Await è un modo di scrivere promesse che ci consente di scrivere codice asincrono in modo sincrono



// funzione classica
function hello() {
    return "hello";
}
console.log(hello());// hello

// ASYNC -> resituiisce promise
// 3 modi per scrivere la stessa cosa
// async -> funzione asincrona
async function ciao() {
    return "ciao";
}
console.log(ciao());// Promise {<fulfilled>: 'ciao'}

// async -> function expression
let expression = async function () { return "expression" };
console.log(expression());// Promise {<fulfilled>: 'expression'}

// async -> arrow function
let arrow = async () => { return "arrow" };
console.log(arrow());// Promise {<fulfilled>: 'arrow'}

// come recupero i dati dalle promise?
// versione estesa
expression().then((value) => {
    console.log(value);// expression
});

// shorthand con 1 SOLO PARAMETRO RITORNATO
arrow().then(console.log);// arrow



// AWAIT -> keyword per aspettare il risultato di una Promise
async function myFunction() {
    return result = await Promise.resolve("myFunction");
    // result = un valore che sto aspettando
    // await blocca l'esecuzione finchè il valore non è ritornato
};
myFunction().then(console.log);// myFunction



// FROM PROMISE TO ASYNC/AWAIT
fetch('inuyasha.jpg')// promise
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error! status : ${response.status}`);
        } else {
            return response.blob();
        }
    })
    .then(myBlob => {
        let objectURL = URL.createObjectURL(myBlob);
        let image = document.createElement("img");
        image.src = objectURL;
        document.body.appendChild(image);
    })
    .catch(error => {
        console.log("There has been a problem with your fetch operation: " + error.message);
    });
// stessa cosa
// ora lo faccio tramite funzione async - await
async function myFetch() {
    let response = await fetch('inuyasha.jpg');// corrisponde al primo then
    let myBlob = await response.blob();// corrisponde al secondo then

    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement("img");
    image.src = objectURL;
    document.body.appendChild(image);
};
// ora chiamo la funzione
myFetch().catch(error => {// i then sono già gestiti prima
    console.log("There has been a problem with your fetch operation: " + error.message);
});



// GESTIRE GLI ERRORI TRY - CATCH
async function myFetch() {
    try {
        let response = await fetch('inuyasha.jpg');// corrisponde al primo then
        let myBlob = await response.blob();// corrisponde al secondo then
        // blob crea file da scaricare, qui invece carico
        let objectURL = URL.createObjectURL(myBlob);// string containing an object URL that can be used to reference the contents of the specified source object.
        let image = document.createElement("img");// crea il nodo img
        image.src = objectURL;// la src della image è objectURL
        document.body.appendChild(image);// aggiunge image al body, lo vedo in Elements della console, non nell'html
    } catch (error) {
        console.log("There has been a problem with your fetch operation: " + error.message);
    }
};
// ora chiamo la funzione
myFetch();



// Da promise -> Rifarlo con async/await
fetch('https://swapi.dev/api/people/10/')// promise
    .then(response => response.json())// converti a json
    .then(json => console.log(json))// stampa i dati sulla console
    .catch(error => console.log("Request failed", error));// gestisce gli errori
// {name: 'Obi-Wan Kenobi', height: '182', mass: '77', hair_color: 'auburn, white', skin_color: 'fair', …}

async function myFetch2() {
    try{
        let response = await fetch('https://swapi.dev/api/people/10/');
        let myJson = await response.json();
        console.log(myJson);
    }catch(error){
        console.log("Request failed: " + error.message);
    }
};
myFetch2();
// {name: 'Obi-Wan Kenobi', height: '182', mass: '77', hair_color: 'auburn, white', skin_color: 'fair', …}


