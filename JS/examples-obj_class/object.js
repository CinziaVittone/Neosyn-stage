// COS'È UN OGGETTO, PROPRIETÀ, METODI
// oggetto = collezione di dati in relazione tra di loro
// rappresentazione di qualcosa che può esistere nella realtà
// un oggetto ha PROPRIETÀ(variabili) e METODI(funzioni)
// CREARE UN OGGETTO
const chiave = "interessi";// *
const persona = {
    // proprietà
    nome: "Cinzia",// key: "value";
    cognome: "Vittone",
    genere: "F",
    eta: 25,
    // array
    interessi: ["musica", "equitazione", "manga", "corsa"],
    // sotto oggetto dell'oggetto persona
    indirizzo: {
        via: "G. Leopardi",
        cap: "10090",
        provincia: "TO",
        citta: "Gassino"
    },
    // metodi
    saluta: function () {// è un azione
        console.log(`Ciao sono ${persona.nome}`);
    }
};



// LEGGERE LE PROPRIETÀ E METODI
// proprietà
console.log(persona.nome);// Cinzia
console.log(persona.nome.toLowerCase());// cinzia
// array
console.log(persona.interessi);// (4) ['musica', 'equitazione', 'manga', 'corsa']
console.log(persona.interessi[2]);// manga
console.log(persona.interessi.push("camminata"));// 5
console.log(persona.interessi);// (5) ['musica', 'equitazione', 'manga', 'corsa', 'camminata]
// sotto oggetto
console.log(persona.indirizzo.citta);// Gassino
// metodo
persona.saluta();// Ciao sono Cinzia



// DOT NOTATION->NO dinamica E BRACKET NOTATION(square brackets)->SI dinamica
// proprietà
console.log(persona["cognome"]);// Vittone
console.log(persona["cogn"]);// undefined
// array
console.log(persona["interessi"]);// (5) ['musica', 'equitazione', 'manga', 'corsa', 'camminata]
console.log(persona["interessi"][3]);// corsa
// sotto oggetto
console.log(persona["indirizzo"]["cap"]);// 10090
// metodi -> SOLO dot notation

// se devo accedere dinamicamente all'oggetto uso []
// es chiave *
console.log(persona.chiave);// undefined
console.log(persona[chiave][0]);// musica



// AGGIORNARE UN OGGETTO
// MODIFICARE ELEMENTI
persona.indirizzo.citta = "Gassino Torinese";
console.log(persona.indirizzo.citta);// Gassino Torinese
persona.interessi[1] = "cavallo";
console.log(persona.interessi);// (5) ['musica', 'cavallo', 'manga', 'corsa', 'camminata']
// perchè posso farlo anche se è const?
// perchè Gassino è di indirizzo.citta, quello che non può cambiare è persona in sè, il suo contenuto
// le sue prop possono cambiare
// se voglio che diventi un array scrivendo 
// persona = [];// object.js:69 Uncaught TypeError: Assignment to constant variable.
persona["interessi"][1] = "cavalli";
console.log(persona.interessi);// (5) ['musica', 'cavalli', 'manga', 'corsa', 'camminata']


// AGGIUNGERE ELEMENTI
persona.colore = "verde";
console.log(persona);
/**
{nome: 'Cinzia', cognome: 'Vittone', genere: 'F', eta: 25, interessi: Array(5), …}
cognome: "Vittone"
colore: "verde"
eta: 25
genere: "F"
indirizzo: {via: 'G. Leopardi', cap: '10090', provincia: 'TO', citta: 'Gassino Torinese'}
interessi: (5) ['musica', 'cavalli', 'manga', 'corsa', 'camminata']
nome: "Cinzia"
saluta: ƒ ()
*/
persona["animale"] = "porcellino d'india";
console.log(persona);
/**
{nome: 'Cinzia', cognome: 'Vittone', genere: 'F', eta: 25, interessi: Array(5), …}
animale: "porcellino d'india"
cognome: "Vittone"
colore: "verde"
eta: 25
genere: "F"
indirizzo: {via: 'G. Leopardi', cap: '10090', provincia: 'TO', citta: 'Gassino Torinese'}
interessi: (5) ['musica', 'cavalli', 'manga', 'corsa', 'camminata']
nome: "Cinzia"
saluta: ƒ ()
*/



// LA KEYWORD THIS
// prende come contesto l'oggetto in cui si trova
const persona2 = {
    // proprietà
    nome: "Cinzia",// key: "value";ù
    cognome: "Vittone",
    genere: "F",
    eta: 25,
    // array
    interessi: ["musica", "equitazione", "manga", "corsa"],
    // sotto oggetto dell'oggetto persona
    indirizzo: {
        via: "G. Leopardi",
        cap: "10090",
        provincia: "TO",
        citta: "Gassino"
    },
    // metodi
    saluta: function () {// è un azione
        console.log(`Ciao sono ${this.nome}`);
    }
};
persona.saluta();// Ciao sono Cinzia