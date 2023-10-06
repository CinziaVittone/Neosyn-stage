// COS'È OOP
// dividiamo il programma in parti logiche invece che serie di funzioni



// DEFINIRE UN OBJECT TEMPLATE
// ASTRAZIONE, astrarre ciò che devo rappresentare, es studenti e insegnanti sono entrambi persone pur avendo qualità differenti
// cos'hanno in comune tutte le persone? nome, cognome, eta, genere, interessi ecc - costituisce
// dalla persona, che è lo stampino -> CLASSE posso creare le istanze con dati differenti -> OGGETTO = ISTANZA DI UNA CLASSE

// COSTRUTTORE della classe per creare delle istanze, funzione che permette alla classe di generare le istanze, costruire un oggetto, una classe

// se mi serve un insegnante non basta la classe persona, una persona non per forza insegna, quindi CLASSE INSEGNANTE
// e CLASSE STUDENTE che EREDITANO dalla CLASSE PERSONA(sono comunque persone)

// CHILD CLASSES: INSEGNANTE e STUDENTE che EREDITANO dalla PARENT CLASS: PERSONA
// nel costruttore delle child classes non sarà necessario ridefinire nome ecc, li ereditano da PERSONA
// i metodi possono essere sovrascritti in base alla specifica classe



// FUNZIONE COSTRUTTORE 
// prima di ECMASCRIPT 2015 si lavorava ad oggetti e non con le classi
// function Persona(nome, cognome, eta, genere, interessi) {// passo le proprietà, i metodi no
//     // proprietà
//     this.nome = nome;// questa persona ha un nome ed è quello che passiamo
//     this.cognome = cognome;
//     this.eta = eta;
//     this.genere = genere;
//     this.interessi = interessi;
//     // metodi
//     this.bio = function () {// ternary operator(è un if inline)
//         console.log(`${this.nome} ${this.cognome} è
//         ${(this.genere == "Femmina") ? "una ragazza" : "un ragazzo"} di ${this.eta} anni 
//         a cui piace ${this.interessi.join(', ')}`);
//     };
//     this.saluta = function () {
//         console.log(`Ciao sono ${this.nome}`);// questa persona nome
//     };
// }
// equivale a
class Persona {
    constructor(nome, cognome, eta, genere, interessi) {
        // proprietà
        this.nome = nome; // questa persona ha un nome ed è quello che passiamo
        this.cognome = cognome;
        this.eta = eta;
        this.genere = genere;
        this.interessi = interessi;
    }
    // metodi FUORI DAL COSTRUTTORE
    bio() {// serve il this per accedere alle prop
        console.log(`${this.nome} ${this.cognome} è
            ${(this.genere == "Femmina") ? "una ragazza" : "un ragazzo"} di ${this.eta} anni 
            a cui piace ${this.interessi.join(', ')}`);
    };
    saluta() {
        console.log(`Ciao sono ${this.nome}`); // this = questa persona nome
    };
}



// ISTANZE = OGGETTI, creati dallo stampino della classe, totalmente indipendenti e diversi
const persona1 = new Persona("Joe", "Black", 35, "Maschio", ["arte", "teatro", "giardinaggio"]);// proprietà
const persona2 = new Persona("Sophie", "White", 29, "Femmina", ["danza", "canto", "cucito"]);
console.log(persona1)// oggetto Persona
/**
{nome: 'Joe', cognome: 'Black', eta: 35, genere: 'Maschio', interessi: Array(3), …}
cognome: "Black"
eta: 35
genere: "Maschio"
interessi: (3) ['arte', 'teatro', 'giardinaggio']
nome: "Joe"
*/

persona1.saluta();// Ciao sono Joe
persona2.saluta();// Ciao sono Sophie

persona1.bio();
/**
 * Joe Black è
        un ragazzo di 35 anni 
        a cui piace arte, teatro, giardinaggio
 */
persona2.bio();
/**
 * Sophie White è
        una ragazza di 29 anni 
        a cui piace danza, canto, cucito
 */