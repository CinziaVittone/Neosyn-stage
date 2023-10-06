// JS SINCRONO, single-thread, ha un solo call stack usato per eseguire il programma
// Come funziona il function execution stack
// cosa accade quando definiamo e invochiamo la funzione?
// il motore js gestisce una struttura di dati stack chiamata function execution stack
// scopo dello stack:
/**
 * FUNCTION EXECUTION STACK -> CALL STACK
 * Quando il motore JavaScript invoca una funzione, la aggiunge allo stack e ne avvia l'esecuzione.
 * Se la funzione attualmente eseguita chiama un'altra funzione, il motore aggiunge la seconda funzione allo stack e ne avvia l'esecuzione.
 * Una volta terminata l'esecuzione della seconda funzione, il motore la rimuove dallo stack.
 * Si torna al controllo dell'esecuzione della prima funzione dal punto in cui è rimasta l'ultima volta.
 * Una volta che la prima funzione è terminata, il motore la rimuove dallo stack.
 * Il tutto prosegue finché non c'è più nulla da inserire nello stack.
 */
// Il function execution stack è anche detto call stack.
// f1() va nello stack, veine eseguita, e poi rimossa, poi tocca a f2() ecc, quando lo stack è vuoto non c'è più nulla da eseguire
// Inizialmente f3() va nello stack, invocando un'altra funzione, f2(). Adesso viene inserita f2() mentre f3() resta nello stack. 
// La funzione f2() invoca f1(). Per f1() è il momento di andare nello stack, insieme a f2() e f3(), che restano al suo interno.
// L'esecuzione di f1() termina e viene rimossa dallo stack. Subito dopo, f2() termina e infine f3().

// tutto ciò che accade nello stack è SEQUENZIALE, parte SINCRONA, una cosa dopo l'altra in successioen
// si assicura di gestire tutto quello che è nello stack prima di passare ad altro
// operazioni SINCRONE in questo caso



// JS ASINCRONO, api browser e promise, non accade nello stesso tempo
// gestire operazioni asincrone in 2 modi:
/**
 * 1. Eventi o funzioni di API browser/API Web. Questi includono metodi come setTimeout o gestori come click, mouse over, scroll e altri.
 * 2. Promise. Un oggetto JavaScript unico che consente di svolgere operazioni asincrone
 */
// GESTIRE API BROWSER/API WEB -> si basa sulle funzioni callback
// setTimeout esegue la funzione dopo che è trascorso il tempo
// cosa ci aspettiamo che accada?
// Il motore JavaScript aspetterà 2 secondi per passare all'invocazione della funzione test() generando questo output? printMe test
// O terrà da parte la funzione callback di setTimeout continuando l'ordine di esecuzione? Quindi l'output potrebbe essere: test printMe
// accade la seconda, fa subuto test e dopo i 2 sec stampa printMe
function printMe() {
    console.log('print me');
}

function test() {
    console.log('test');
}
setTimeout(printMe, 2000);
test();

// CALLBACK QUEUE/TASK QUEUE - elementi all'interno: MACRO TASKS
// es struttura FIFO First In First Out
/**
 * Il motore crea un loop per valutare periodicamente la coda e trovare ciò che bisogna estrarre.
 * Estrae una funzione callback dalla coda e la inserisce nello stack quando quest'ultimo è vuoto.
 * Poi la funzione callback viene eseguita come qualsiasi altra funzione nello stack e il loop continua.
 * Questo loop è ben conosciuto con il nome di event loop.
 */

/**
 * Quando entra in gioco una API browser, parcheggia le sue funzioni in una coda.
 * L'esecuzione del codice nello stack prosegue come al solito.
 * L'event loop verifica se c'è una funzione callback in coda.
 * Se c'è, la richiama allo stack e la esegue.
 * Il loop continua.
 */
// Il codice esegue una funzione setTimeout con una funzione callback f1(). 
// Nota che le abbiamo assegnato un ritardo di zero. 
// Ciò vuol dire che ci aspettiamo che la funzione f1() sia eseguita immediatamente. 
// Proprio dopo setTimeout, eseguiamo un'altra funzione, f2(). output: main f2 f1
function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function main() {
    console.log('main');// 1. eseguito per primo, va in stack e ne esce

    setTimeout(f1, 0);// 2. API browser setTimeOut, funzione callback va in CODA
    // 4. l'event loop si accorge che lo stack è vuoto e che lei è in coda, quindi va nello stack e esce

    f2();// 3. va nello stack e ne esce
}
// questo è il funzionamento ASINCRONO
main();// output: main, f2, f1



// COME VENGONO GESTITE LE PROMISE
// create con il costruttore Promise a cui passo una funzione executor
// nella funzione definisco cosa deve accadere in caso di successo/errore, con resolve/reject
const promise = new Promise((resolve, reject) =>
    resolve('Sono una promise risolta')
);
// gestisco il risultato con .then()
promise.then(result => console.log(result));
// gestisco gli errori con .catch()
// richiedo dati con fetch()



// JOB QUEUE/MICROTASK QUEUE - elementi all'interno: MICRO TASKS
/**
 * Ogni volta che c'è una promise, la executor va nella job queue
 * l'event loop, quando cerca nelle code, da priorità alla job queue sulla callback queue
 */



// Trova l'output
function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function main() {
    console.log('main');// 1. eseguito per primo, va in stack e ne esce

    setTimeout(f1, 0);// 2. API browser setTimeOut, funzione callback va in CODA(callback queue)
    // 6. l'event loop si accorge che lo stack è vuoto e che lei è in coda, essendo nella callback queue non aveva priorità, 
    // quindi va nello stack e esce

    new Promise((resolve, reject) =>
        resolve('I am a promise')
    ).then(resolve => console.log(resolve))// 3. API browser setTimeOut, funzione callback va in CODA(job queue)
    // 5. l'event loop si accorge che lo stack è vuoto e che lei è in coda, executor va nella job queue ha priorità, 
    // quindi va nello stack e esce

    f2();//  4. va nello stack e ne esce
}

main();// output: main, f2, I am a promise, f1



// Trova l'output
function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function f3() {
    console.log('f3');
}

function main() {
    console.log('main');// 1. -> stack e esce

    setTimeout(f1, 50);// 2. -> callback queue 9. -> time50>30 aspeta 11. -> stack e esce
    setTimeout(f3, 30);// 3. -> callback queue 10. -> stack e esce

    new Promise((resolve, reject) =>
        resolve('Sono una Promise, proprio dopo f1 e f3! Davvero?')
    ).then(resolve => console.log(resolve));// 4. -> job queue 7. -> stack e esce

    new Promise((resolve, reject) =>
        resolve('Sono una Promise dopo una Promise!')
    ).then(resolve => console.log(resolve));// 5. -> job queue 8. -> stack e esce

    f2();// 6. -> stack e esce
}

main();// main, f2, (stack vuoto, va alla job queue, micro)Sono una Promise, proprio dopo f1 e f3! Davvero?
// Sono una promise dopo una Promise!, (va alla callback queue, macro) f3, f1