// Promise chaining, concatenamento di promise, catena di gestori(handler)
// sequenza di task asincroni da eseguire uno dopo l'altro
new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(1)
    }, 1000);

}).then(function (result) {
    alert(result);
    return result * 2;// 1

}).then(function (result) {
    alert(result);
    return result * 2;// 2

}).then(function (result) {
    alert(result);
    return result * 2;// 4
});
// result è passato attraverso la catena di gestori, handler, e avviene una sequenza di chiamate
// funziona perchè una promise.then ritorna una promise, sulla quale possiamo chiamare dinuovo .then
// quando un gestore(handler) ritorna un valore, questo diventa il risultato della promise con il quale sarà chiamato il prossimo then
// new Promise -- resolve(1) --> .then ----> .then ----> .then


// Questo non è il concatenamento, ho aggiunto diversi gestori ad una promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
});

promise.then(function (result) {
    alert(result); // 1
    return result * 2;
});

promise.then(function (result) {
    alert(result); // 1
    return result * 2;
});

promise.then(function (result) {
    alert(result); // 1
    return result * 2;
});
// lo schema cambia
// new Promise -- resolve(1) --> .then 
//                         ----> .then 
//                         ----> .then



// Ritornare promise
/**
 * Normalmente, il valore ritornato da un gestore (handler) .then(handler) è passato immediatamente a quello successivo. 
 * Ma esiste un’eccezione.
 * Se il valore ritornato è una promise, allora l’esecuzione è sospesa fino a quando la promise è ferma (settled). 
 * Dopo di ciò, il risultato della promise viene passato al prossimo gestore (handler) .then.
 */
new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);

}).then(function (result) {
    alert(result); // 1
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000);
    });

}).then(function (result) {
    alert(result); // 2
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000);
    });

}).then(function (result) {
    alert(result); // 4
});
// l’output è ancora 1 → 2 → 4, ma ora con un secondo di ritardo tra le chiamate alert
// Ritornare le promise ci permette di creare una catena di azioni asincrone.



// Esempio: LoadScript
// caricare gli script uno a uno
loadScript("/article/promise-chaining/one.js")
    .then(function (script) {
        return loadScript("/article/promise-chaining/two.js");
    })
    .then(function (script) {
        return loadScript("/article/promise-chaining/three.js");
    })
    .then(function (script) {
        // usiamo le funzioni dichiarate negli gli script
        // per mostrare che hanno effettivamente caricato
        one();
        two();
        three();
    });
// con arrow functions
loadScript("/article/promise-chaining/one.js")
    .then(script => loadScript("/article/promise-chaining/two.js"))
    .then(script => loadScript("/article/promise-chaining/three.js"))
    .then(script => {
        // scripts are loaded, we can use functions declared there
        one();
        two();
        three();
    });
/**
 * Qui ogni chiamata loadScript ritorna una promise, ed il prossimo .then viene eseguito quando la promise risolve (resolves). 
 * Poi inizia il caricamento del prossimo script. Così gli script vengono caricati uno dopo l’altro.
 * Possiamo aggiungere più azioni asincrone alla catena. 
 * È da notare che il codice rimane “piatto”, cresce verso il basso, non verso destra. 
 * Non ci sono segni di “pyramid of doom”(qui di seguito, non usare, meglio il concatenamento)
 * 
 * loadScript("/article/promise-chaining/one.js").then(script1 => {
    loadScript("/article/promise-chaining/two.js").then(script2 => {
        loadScript("/article/promise-chaining/three.js").then(script3 => {
            // this function has access to variables script1, script2 and script3
            one();
            two();
            three();
        });
    });
});
 * 
 */



// Riassunto
// se un handler(then, catch, finally) ritorna una promise, 
// il resto della catena aspetta fino a quando la promise si ferma(settles)
// quando lo fa il suo result/error