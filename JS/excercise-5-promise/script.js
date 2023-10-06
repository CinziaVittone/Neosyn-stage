//Creare una promise che si risolve dopo 2 secondi:
let promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("done")
    }, 2000);// in millisecondi
});
// consumo la promise
promise1.then(
    result => console.log(result)// done
);



//Creare una promise che viene rifiutata dopo 3 secondi:
let promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject(new Error("Oh oh"))
    }, 3000);
});
// consumo la promise
promise2.then(
    error => console.log(error)// Uncaught (in promise) Error: Oh oh
);



//Eseguire una serie di chiamate asincrone in sequenza utilizzando le promise deve restituire chiamata X completata:
// stessa cosa
//Utilizzare le promise per eseguire operazioni asincrone in sequenza deve restituire operazione 1 completata e operazione 2 completata.
function f1(string) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(`Chiamata ${string} compleata`)
        }, 3000);
    })
};

//then perchè la risolvo, sennò catch per gestire errori
f1("1").then((result1) => {
    console.log(result1)
    return f1("2")
}).then((result2) => {
    console.log(result2)
    return f1("3")
}).then((result3) => console.log(result3));
// funzione perchè è una cosa che si ripete sempre uguale
// invece che fare return new Promise ogni volta, basta dentro 1 funzione



// https://swapi.dev/api/people/1/