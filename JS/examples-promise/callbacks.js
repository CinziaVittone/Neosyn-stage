// Callbacks
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert(`Cool, the ${script.src} is loaded`);
    alert(_); // funzione dichiarata nello script caricato
});
// funzione passata come argomento di un'altra funzione
// funzione che viene restituita da un'altra funzione
// viene eseguita all'interno della funzione stessa
// Questa è l’idea: il secondo argomento è una funzione (solitamente anonima) che viene eseguita quando l’azione è completata
/**
 * Questo è lo stile di programmazione asincrona “callback-based”.
 * Una funzione che fa qualcosa in modo asincrono dovrebbe prevedere un argomento callback 
 * in cui mettiamo la funzione da eseguire al completamento dell’operazione asincrona.
 * In questo esempio lo abbiamo fatto in loadScript ma, ovviamente, è un approccio generale.
*/



// Callback dentro callback
// Dopo che la funzione loadScript più esterna è completata, la callback comincia quella interna.
loadScript('/my/script.js', function (script) {

    loadScript('/my/script2.js', function (script) {

        loadScript('/my/script3.js', function (script) {
            // ...continua quando tutti gli script sono stati caricati
        });

    });

});
/**
 * Quindi, ogni nuova azione è dentro una callback. 
 * Questo va bene quando abbiamo poche azioni, ma non quando ne abbiamo molte, 
 * quindi in seguito vedremo altre alternative. 
*/



// Gestione degli errori, se il caricamento dello script fallisce?
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Errore di caricamento dello script per ${src}`));

    document.head.append(script);
}
// Chiama callback(null, script) per i caricamenti con successo e callback(error) altrimenti
loadScript('/my/script.js', function (error, script) {
    if (error) {
        // gestione dell'errore
    } else {
        // script caricato con successo
    }
});
// “error-first callback” style
/**
 * La convenzione è:
 * Il primo argomento di callback è riservato per un errore se si verifica. In questo caso la chiamata è callback(err).
 * Il secondo argomento (e quelli successivi se necessario) sono per il risultato in caso di successo. 
 * In questo caso la chiamata è callback(null, result1, result2…).
*/