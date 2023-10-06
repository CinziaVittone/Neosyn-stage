// Promises
// oggetto usato come placeholder per il futuri risultato di un'operazione asincrona
let promise = new Promise(function (resolve, reject) {
    // esecutore (il codice produttore, "cantante")
});
// quando la promise è creata, la funzione esecutore viene eseguita
// ogni riga di codice aspetta che quella che la precede venga eseguita
/**
 * La funzione passata a new Promise è chiamata esecutore (executor). 
 * Quando la promise è creata, questa funzione esecutore viene eseguita automaticamente. 
 * Contiene il codice produttore, che eventualmente produrrà un risultato. 
 * Nei termini dell’analogia precedente: l’esecutore è il “cantante”.
 * I suoi argomenti resolve e reject sono delle callback fornite da JavaScript stesso. 
 * Il nostro codice sta solamente dentro l’esecutore.
 * resolve(value) — se il processo termina correttamente, col risultato value
 * reject(error) — se si verifica un errore, error è l’oggetto errore
 * Ricapitolando: l’esecutore parte automaticamente e tenta di eseguire un compito. 
 * Quando l’esecuzione termina, viene invocato resolve in caso di successo, oppure reject in caso di errore.
 * L’oggetto promise restituito ha le seguenti proprietà interne:
 * state — inizialmente “pending”, poi cambia in “fulfilled” se viene invocato resolve o in “rejected” se viene invocato reject.
 * result — inizialmente undefined, poi cambia in value se viene invocato resolve(value) o in error se viene invocato reject(error).
 * state:"pending" e result:"undefined" ---resolve(value)---> state:"fulfilled" result:value
 *                                      ---reject(error)---> state:"fulfilled" result:error
 * 
 */



// Fulfilled promise
let promise2 = new Promise(function (resolve, reject) {
    // la funzione è eseguita automaticamente quando la promise è costruita

    // dopo 1 secondo segnala che il lavoro è fatto con risultato "done"
    setTimeout(() => resolve("done"), 1000);
});
/**
 * Possiamo vedere due cose eseguendo il codice sopra:
 * L’esecutore è chiamato automaticamente ed immediatamente (da new Promise).
 * L’esecutore riceve due argomenti: resolve e reject — queste funzioni sono predefinite dal motore JavaScript. 
 * Quindi non abbiamo bisogno di crearle. Dovremo invece scrivere l’esecutore per chiamarle quando è il momento.
 * Dopo un secondo di “elaborazione” l’esecutore chiama resolve("done") per produrre il risultato. 
 * Questo cambia lo stato dell’oggetto promise:
 * state:"pending" e result:"undefined" ---resolve("done")---> state:"fulfilled" result:"done"
 */



// Rejected promise
let promise3 = new Promise(function (resolve, reject) {
    // dopo 1 secondo segnala che il lavoro è finito con un errore
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});
// state:"pending" e result:"undefined" ---reject(error)---> state:"rejected" result:error



// Può esserci 1 SOLO result/error, il resto ignorato
let promise4 = new Promise(function (resolve, reject) {
    resolve("done");
    // dopo il primo viene tutto ignorato, infatti restituisce "done"
    reject(new Error("…")); // ignorato
    setTimeout(() => resolve("…")); // ignorato
});



// Chiamare immediatamente resolve/reject, si può
let promise5 = new Promise(function (resolve, reject) {
    // non prendiamo il nostro tempo per svolgere il lavoro
    resolve(123); // diamo immediatamente il risultato: 123
});
/**Una promise ha 3 STATI:
 * PENDING: quando ancora sta avvenendo l'eleborazione dela richiesta
 * SETTLED: la promise ha terminato l'elaborazione della richiesta MA non vuol dire che ho ricevuto i dati
 * 
 * FULFILLED: promise SODDISFATTA, ho ottenuto i dati
 * 
 * REJECTED: promise RIFIUTATA, non ho ottenuto i dati
 */


// Consumers: then, catch, finally
// then
promise.then(
    function (result) { /* gestisce un risultato in caso di successo */ },
    function (error) { /* gestisce un errore */ }
);
/**
 * Il primo argomento di .then è una funzione che esegue quando una promise viene risolta, e ne riceve il risultato.
 * Il secondo argomento di .then è una funzione che esegue quando una promise viene rifiutata e riceve l’errore.
 */

// la prima funzione è stata eseguita
let promise6 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("fatto!"), 1000);
});
// resolve esegue la prima funzione in in .then
promise6.then(
    result => alert(result), // mostra "fatto!" dopo 1 secondo
    error => alert(error) // non viene eseguito
);

// in caso di rifiuto viene eseguita la seconda
let promise7 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});
// reject runs the second function in .then
promise7.then(
    result => alert(result), // non vene eseguita
    error => alert(error) // mostra "Error: Whoops!" dopo 1 secondo
);



// catch
let promise8 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise8.catch(alert); // mostra "Error: Whoops!" dopo 1 secondo



// finally
new Promise((resolve, reject) => {
    /* fa qualcosa che prende tempo, poi chiama resolve/reject */
    setTimeout(() => resolve("result"), 2000)
})
    // viene eseguito quando la promise è ferma (settled), non conta se con successo o no
    .finally(() => alert("Promise ready"))
    .then(result => alert(result)); // <-- .then gestisce il risultato

// ecco un errore nella promise, passata da finally a catch
new Promise((resolve, reject) => {
    throw new Error("error");
})
    .finally(() => alert("Promise ready"))
    .catch(err => alert(err));  // <-- .catch gestisce l'oggetto errore



// Esempio: loadScript
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}
/**
 * Riscriviamola usando le Promise.
 * La nuova funzione loadScript non richiederà una callback. 
 * Invece, creerà e ritornerà un oggetto Promise che risolve quando il caricamento è completo. 
 * Il codice esterno può aggiungervi handler (subscribing functions) usando .then:
 */
function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Errore di caricamento dello script per: ${src}`));

        document.head.append(script);
    });
}
// Usage
let promise9 = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise9.then(
    script => alert(`${script.src} is loaded!`),
    error => alert(`Error: ${error.message}`)
);

promise9.then(script => alert('Un altro handler per fare qualcos\'altro'));
/**
 * Quando faccio una richiesta http in js si può usare la fetch API
 * fetch(url)
 * quello che restituisce non sono i dati ma una promessa
 * la promessa che non appena avrà i dati me li farà avere
 * se guardo il risultato:
 * const result = fetch(url)
 * console.log(result) // darà una promise, non direttamente i dati
 * per accedere ai dati dovrò scrivere:
 * const result = fetch(url).then(data ==> data.json);
 * le promise permettono di gestire operazioni asincrone che richiedono più tempo per essere eseguite
 * ad esempio le richieste http
 * catch permette di gestire gli errori
 * l'unico errore che viene gestito quando effettuo una richiesta http è che non ci sia connessione
 * quindi dovrei lanciare io manualmente un errore se volessi gestirlo
 * 
 * Si basa tutto sul concetto di ASINCRONIA
 * le richieste http verso il be non sono mai immediate, MAI sincrone
 * il be richiede sempre tempo per gestire la richiesta, non saprò mai il tempo esatto
 * andrà quindi gestito in modo asincrono, altrimenti non vedrò mai i dati
 * le promise permettono di gestire questo comportamento asincrono per le richieste http
 * */

const result = fetch("https://swapi.dev/api/");
console.log(result);
// output: errors and
// Promise {<pending>}
//     [[Prototype]]: Promise
//     [[PromiseState]]: "rejected"
//     [[PromiseResult]]: TypeError: Failed to fetch at <anonymous>:1:16



// Esempio
// Immaginiamo che mamma mi prometta di comprarmi il telefono la prossima settimana,
// non sono sicura che ciò accada, dipende se la farò contenta o no
// Una promessa ha 3 stati:
// 1. PENDING: non so se avrò quel telefono
// 2. FULFILLED: mamma è contenta e mi compra il telefono
// 3. REJECTED: mamma è scontenta e non mi compra il telefono
// Parte 1: Creazione della promessa
var isMomHappy = true;
promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {// callback
        if (isMomHappy) {
            var phone = {
                brand: 'Apple',
                color: 'white'
            };
            resolve(phone);// fulfilled
        } else {
            var reason = new Error("mom is not happy");
            reject(reason);// reject
        }
    }
);
// Parte 2: Chiamare la promessa
var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            console.log(fulfilled);// output: {brand: 'Apple', color: 'white'}
        })
        .catch(function (error) {
            console.log(error.message);// output : "mom in not happy", ERROR
        });
};
askMom();


