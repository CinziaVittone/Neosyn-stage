// DIFFERENZE CON JS(è un linguaggio tipizzato e compilato)
// in Js una funziona somma che verifica i tipi richiederebbe tutte queste righe di codice(if, else)
/**
function sommaJs(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {// *
        return a + b;
    } else {
        return "errore";
    }
}
console.log(sommaJs(3, 5));// 8
console.log(sommaJs(3, '5'));// 35, risulta come concatenazione, non errore per Js, ma errore a livello logico
console.log(sommaJs(3, '5'));// errore, se verifico i tipi con typeOf *
*/
// in Ts è sufficiente
function somma(a, b) {
    return a + b;
}
console.log(somma(3, 5)); // 8
// console.log(somma(3, '5'));// sottolinea subito l'errore e lo da anche in console
// TYPE ASSIGNMENT e TYPE INFERENCE
// in Js questo sarebbe possibile, dinamico, tipi possono cambiare dinamicamente
/**
let prova = 5;
prova = "ciao";
*/
// in Ts i tipi sono statici, una volta che lo riconosce non posso più cambiarlo
let prova = 5;
// prova = "ciao";// sottolinea subito l'errore e lo da anche in console
// TYPE ASSIGNMENT-assegnazione del tipi(assegniamo un tipo di dato a una variabile)
let prova1; // se non so ancora il numero
let prova2 = 5; // ridondante, lo capisce da solo
// TYPE INFERENCE-Ts capisce il tipo di dato della variabile in base al valore che detiene
let prova3 = 5; // Ts già capisce che tipo sarebbe, non fa storie
let prova4; // qua invece ci indica che manca il tipo 
function inference(num1, num2 = 0) { }
;
// inference("3", "3");
// si è accorto del parametro di default dato a num2 e mi da errore, per num1 non fa storie perchè non ancora tipizzato
// STRING, NUMBER, BOOLEAN
let num = 9.5; // qualsiasi
let str = "Ciao"; // '' / "" / ``
let bool = true; // true/false
// OBJECT, ARRAY, TUPLE
// in Js
/**
let persona = {
    nome: "Luca",
    cognome: "Verdi"
}
persona.eta;// non darebbe errori qua, poi in console sì
*/
// in Ts 
let persona = {
    nome: "Luca",
    cognome: "Verdi"
};
// persona.eta;// si accorge che la prop non esiste e avvisa dell'errore
// persona.nome = 3;// non consente l'assegnazione del tipo sbagliato
// OBJECT
let persona2 = {
    nome: "Mario",
    cognome: "Rossi"
};
let persona3 = {
    nome: "Mario",
    cognome: "Rossi"
};
let persona4;
persona4 = {
    nome: "Paolo",
    cognome: "Azzurri",
    eta: 30,
    indirizzo: {
        via: "G. Leopardi",
        civico: 5,
        citta: "Gassino To"
    }
};
// ARRAY
const arr = [1, 2, 3]; // mi dice const arr: number[]
// const arr1: string[] = [1, 2, 3];// mi avvisa Type 'number' is not assignable to type 'string'
const arr1 = ['', 'ciao', "", ``]; // non da problemi
const arr2 = ["ciccio", 2, true, [], {}]; //any può contentere QUALSIASI TIPO
// TUPLE(array di valori definiti nel numero e nel tipo), esclusivo di Ts
const game = {
    id: '0123',
    codiceAccesso: 'az12sx34',
    players: ['Bob', "Tom"] // numero di giocatori FISSO, non ne voglio di più, come faccio?
};
// const tupla: [] = [1, 2];// mi avvisa [number, number] NON più number[] come prima
// gli sto dicendo che voglio un array vuoto :[] quindi mi avvisa che ci ho messo number, number
// Type '[number, number]' is not assignable to type '[]'
// Source has 2 element(s) but target allows only 0
const tupla = [1, 2]; // specifico cosa accettto nell'array, SOLO 2 e SOLO di quel tipo
const tupla1 = [1, "ciccia", true];
// ANY, UNION, CUSTOM TYPE, ENUM
// ANY, il più generico possibile
let myany = ["ciccino", 4]; // es tupla con primo valore any
let myany1 = [{}, 4];
let myany2;
// va usato solo in quelle situazioni in cui davvero potrebbe esserci tutto, es un array che accetta tutto
// difficilmente su prop di cui so già il tipo a prescindere
//UNION, unione di più elementi, voglio che accetti solo quello che specifico
// let myunion: string | number = true;// voglio stringa/numero, non accetta true
let myunion = "ciccio";
let myunion1 = 2;
let myunion3 = ["polpettone", "polpettina"];
let myunion4 = { nome: "cinzia", cognome: "vittone", indirizzo: { via: "Leopardi", civico: 5 } }; // obj
let myunion5 = [2, "porcelli"];
// CUSTOM TYPE
let utente;
utente = {
    nome: "Sofia",
    cognome: "Rosa",
    eta: 24 // ovviamente qua devo rispettare l'originale
};
// un pò scomodo definire ogni volta così
// ogni volta che userò utente dovrò specificare i tipi
// se modifico poi utente originale devo RIMODIFICARE tutto dopo, funzioni che lo usavano ecc *
function trovaUtente(utente) { }
;
let utente1;
// diciamo il tipo, quindi se modifico l'originale in automatico le modifiche si ripercuotono
// senza bisogno che vada io a mano a modificare le funzioni che lo prendono come argomento
utente1 = {
    nome: "Dorothy",
    cognome: "Viola",
    eta: 22 // qua lo modifico io a mano per rispecchiare l'originale
};
function trovaUtente1(utente1) { }
; // qua si prende in automatico il tipo
let utente2 = "ciccio";
let utente3 = {};
// ENUM
const dipendente = {
    nome: "Joe",
    cognome: "Black",
    ruolo: "adminnn" // i ruoli possono essere solo 3: admin, user, guest, ESATTAMENTE SCRITTI COSI', al momento però accetta tutto
    // voglio assicurarmi che il ruolo sarà sempre scritto in quel modo in tutto il codice, per tuta l'applicazione
};
// e se scrivo male? potrei creare delle COSTANTI
const ADMIN = "admin";
const USER = "user";
const GUEST = "guest";
const dipendente1 = {
    nome: "Joe",
    cognome: "Black",
    ruolo: ADMIN
};
// non è troppo efficiente, arriverei a scriverne un'infinità, quindi
// ecco che enum ci aiuta a creare delle ETICHETTE
var RuoloEsempio;
(function (RuoloEsempio) {
    RuoloEsempio[RuoloEsempio["ADMIN"] = 100] = "ADMIN";
    // (enum member) RuoloEsempio.ADMIN = 0 dice la posizione
    RuoloEsempio[RuoloEsempio["USER"] = 1000] = "USER";
    RuoloEsempio[RuoloEsempio["GUEST"] = 1001] = "GUEST"; // 2 default, 1001 perchè riparte da 1000
})(RuoloEsempio || (RuoloEsempio = {}));
var RuoloEsempio1;
(function (RuoloEsempio1) {
    RuoloEsempio1[RuoloEsempio1["ADMIN"] = 0] = "ADMIN";
    RuoloEsempio1[RuoloEsempio1["USER"] = 1] = "USER";
    RuoloEsempio1[RuoloEsempio1["GUEST"] = 2] = "GUEST";
})(RuoloEsempio1 || (RuoloEsempio1 = {}));
const dipendente4 = {
    nome: "Ellie",
    cognome: "Brown",
    ruolo: 1
};
if (dipendente4.ruolo === RuoloEsempio1.ADMIN) { }
; // non sono uguali
if (dipendente4.ruolo === RuoloEsempio1.USER) { }
; // sono uguali
// più utile però usarlo con stringhe, che magari corrispondono alle tabelle dei db
var Ruolo;
(function (Ruolo) {
    Ruolo["ADMIN"] = "admin";
    Ruolo["USER"] = "user";
    Ruolo["GUEST"] = "guest";
})(Ruolo || (Ruolo = {}));
const dipendente2 = {
    nome: "Jack",
    cognome: "Sparrow",
    ruolo: Ruolo.GUEST // li suggerice, ecco che ora non mi potrò più sbagliare per tutto il codice
    // (enum member) Ruolo.GUEST = "guest"
};
// oppure utile per verificare uguaglianze
const dipendente3 = {
    nome: "Jack",
    cognome: "Sparrow",
    ruolo: "guest"
};
if (dipendente3.ruolo === Ruolo.GUEST) {
    console.log("Ok"); // Ok
}
// FUNZIONI
// 1. TIPI DI DATI DEI PARAMETRI 
function somma1(num1, num2) {
    console.log(num1 + num2);
}
somma1(3, " stringa"); // non ho specificato il tipo dei parametri quindi accetta tutto, come fosse any
function somma2(num1, num2) {
    console.log(num1 + num2);
}
somma2(3, 4); // accetta solo number, number
// 2. INFERENCE NEI PARAMETRI DI DEFAULT
/** in Js dovrei
function somma3(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    console.log(num1 + num2);
}
*/
function somma3(num1, num2 = 10) {
    console.log(num1 + num2);
}
somma3(3, 3); // 6
somma3(3); // 13
function somma4(num1, num2 = 20) {
    console.log(num1 + num2);
}
// 3. IL TIPO DI RITORNO
function somma5(num1, num2 = 1) {
    return num1 + num2;
}
somma(5, 5); // quale sarà il tipo di ritorno? un number
// Ts già lo capisce
// function somma(a: number, b: number): number
function somma6(num1, num2 = 1) {
    return "stringa";
}
somma6(5, 5); // in realtà ammette qualsiasi tipo di ritorno
// function somma6(num1: number, num2?: number): string
// ma è meglio specificare in modo che ci sia un controllo
function somma7(num1, num2 = 1) {
    return num1 + num2; // già mi avvisa se ritorno un tipo non adatto
}
// se non ritorno niente è un problema perchè lui si aspetta number
function somma8(num1, num2 = 1) {
    // console.log();// A function whose declared type is neither 'void' nor 'any' must return a value
    return num1 + num2;
}
// utilizzo ANY
function somma9(num1, num2 = 1) {
    if (num1 === num2) {
        return num1 + num2;
    }
    else {
        console.log();
    }
}
// utilizzo VOID
function somma10(num1, num2 = 1) {
    // return num1 + num2;// errore perchè non devo ritornare niente
    console.log("ciao");
}
// diverso da undefined
// utilizzo UNDEFINED
function somma11(num1, num2 = 1) {
    return undefined; // unico tipo che accetta
}
// 4. FUNZIONI COME TIPO DI VARIABILE
function funzioneComeVariabile(num1, num2 = 1) {
    return num1 + num2;
}
function funzioneComeVariabile1(str) {
    console.log(str);
}
let variabile = funzioneComeVariabile; // la inference di Ts già capisce
// let variabile: (num1: number, num2?: number) => number
// accetta qualsiasi funzione
let provaX;
// provaX = 4;// errore
// se voglio specificare le funzioni accettate
// voglio assegnare una funzione specifica che ritorni un tipo specifico
// accetta solo funzioni con par number, number e tipo di ritorno number
let provaY;
provaY = funzioneComeVariabile; // ok
// provaY = funzioneComeVariabile1;// no, non lo accetta 
// accetta solo funzioni con par qualsiasi e tipo di ritorno string
let provaZ;
// callback come argomento da richiamare
function provaW(num, cb) { }
provaW(6, () => {
    console.log("miao"); // non ho specificato cosa accetta cb quindi va bene tutto
    return 2;
});
// CLASSI
// 1. CREARE UNA CLASSE
// SENZA costruttore
class Persona {
    // 2. AGGIUNGERE PROPRIETA'
    // devo inizializzarli non basta dichiarare il tipo
    nome = "Cinzia";
    cognome = "Vittone";
}
// opzione 1
const personaA = new Persona();
// opzione 2, come variabile che assegnerò successivamente
let personaB;
// personaB = "ciao";// errore! posso solo assegnarla a new Persona
personaB = new Persona;
// opzione 3
let personaC = new Persona(); // variabile: tipo = assegnazione
let personaC1 = new Persona();
let personaC2 = new Persona();
// improbabile che vogliamo persone con lo stesso nome e cognome, quindi creo il costruttore per personalizzare
// 3. CREARE COSTRUTTORE CON PARAMETRI
class MyPersona {
    nome;
    genere;
    id;
    // tutti i tipi dovrano essere COERENTI(nella classe, costruttore, oggetti)
    // public nome: string// sottointeso, di default, posso chiamarlo ovunque
    // private nome: string;// 6.
    cognome;
    // 6. SHORTHAND COSTRUTTORE
    // necessario specificare il modificatore nel costruttore per evitare ulteriori passaggi
    constructor(nome, cognome, genere, id) {
        this.nome = nome;
        this.genere = genere;
        this.id = id;
        // valorizzo le proprietà
        // this.nome = nome;// 6.
        this.cognome = cognome;
    }
    // metodi
    // void perchè non hanno return
    presenta() {
        console.log(`Ciao sono ${this.nome} ${this.cognome} e sono ${this.genere}`); // senza this non li trova
    }
    // 4. METODI CON TIPI DI DATI
    saluta(myPersona) {
        console.log(`Ciao ${myPersona.nome} ${myPersona.cognome} :)`);
    }
    cambiaNome(nuovoNome) {
        this.nome = nuovoNome;
    }
    // 7. PROPRIETA' READONLY
    // una volta che è stata definita nel costruttore non può essere modificata, nemmeno da un metodo interno
    cambiaGenere() {
        // qua posso invece modificare il nome, essendo private solo in questa classe lo posso fare
        // this.genere = "F";// Cannot assign to 'genere' because it is a read-only property.
    }
    static parla() {
        console.log("Fa davvero caldo oggi!");
    }
}
let myPersona1 = new MyPersona("Ciccio", "Pallino", "M", "01"); // devo per forza mettere gli argomenti ora, devono essere di QUEL tipo
let myPersona2 = new MyPersona("Ciccia", "Pallina", "F", "02");
// ecc
myPersona1.presenta(); // Ciao sono Ciccio Pallino // e sono ;
myPersona2.presenta(); // Ciao sono Ciccia Pallina // e sono F
// accetta solo oggetti di tipo MyPersona
myPersona2.saluta(myPersona1); // Ciao Ciccio Pallino :)
// diventa Ciao Cinzia Pallina :) quando cambio il nome
myPersona2.cambiaNome("Cinzia");
// 5. MODIFICATORI DI ACCESSO: PRIVATE, PUBLIC E PROTECTED
// PRIVATE, non voglio che siano modificabili le prop/metodi, NO accesso diretto
// finora posso modificare le prop/met della classe
// myPersona1.nome = "Ciccetto";// errore, una volta che metto private non me lo fa più modificare
myPersona1.presenta(); // Ciao sono Ciccetto Pallino
// voglio farlo con metodi appositi, es cambiaNome()
// PUBLIC, è di default anche senza specificarlo
// 8. CREARE CLASSE FIGLIA COSTRUTTORE DEFAULT E SUPER
// DEFAULT
class MyStudente extends MyPersona {
}
let myStudente1 = new MyStudente("Ciccino", "Piccino", "M", "03"); // Expected 3 arguments, but got 0. eredita da MyPersona
// eredita anche i metodi
myStudente1.presenta(); // Ciao sono Ciccino Piccino e sono M
myStudente1.saluta(myPersona2); // Ciao Ciccia Pallina :)
// SUPER
class MyInsegnante extends MyPersona {
    materia;
    alunni;
    // sono necessarie anche le prop del padre
    constructor(
    // quelle del padre senza modificatori, le passo come parametri normali
    nome, cognome, genere, id, 
    // nuove prop che creo
    materia, alunni) {
        super(nome, cognome, genere, id); // quelle del padre
        this.materia = materia;
        this.alunni = alunni;
    }
    cambia() {
        // this.nome = "nuovo nome";// Property 'nome' is private and only accessible within class 'MyPersona'
        // this.genere = "altro";// Cannot assign to 'genere' because it is a read-only property
        this.id = "nuovo id"; // 9.
        console.log(`Nuovo id: ${this.id}`);
    }
}
let myInsegnante1 = new MyInsegnante("Luca", "Rossi", "M", "04", "Italiano", ["Pippo", "Pluto", "Paperino"]);
// myInsegnante1.nome = "ciao";// Property 'nome' is private and only accessible within class 'MyPersona'
// essendo privata è modificabile SOLO nella classe di appartenenza(MyPersona)
myInsegnante1.presenta(); // Ciao sono Luca Rossi e sono M
myInsegnante1.cambia(); // Nuovo id: nuovo id
// 9. PROTECTED
// modificabile dalla classe MyPersona e dalle sue classi figlie ma sempre DENTRO
// 10. PROPRIETA' E METODI STATIC
// DEFAULT se non specifico automaticamente dovrò creare un oggetto per accedere a prop/metodi, come sempre fatto
// let myPersona2: MyPersona = new MyPersona("Ciccia", "Pallina", "F", "02");
// myPersona2.saluta();
// STATIC possiamo chiamarli senza creare un oggetto, senza istanziare la classe
// es
Math.PI; // non serve fare new Math ecc
// var Math: Math
MyPersona.parla(); // Fa davvero caldo oggi!
// 11. CLASSI ASTRATTE
// contengono 1/più prop e metodi astratti
// utile farlo sulla classe MyPersona, che non andrò a istanziare ma solo a estendere, come stampino per dare nome e cognome
class Esempio {
}
class Esempio1 extends Esempio {
    // Non-abstract class 'Esempio1' does not implement all abstract members of 'Esempio'
    // quindi
    scrivi() {
        console.log(`Sono Esempio1`);
    }
}
class Esempio2 extends Esempio {
    scrivi() {
        console.log(`Sono Esempio2`);
    }
}
// ecc
// 12. SINGLETON CON PRIVATE CONSTRUCTOR E STATIC INSTANCE
// pattern di programmazione che impone di utilizzare UN'UNICA ISTANZA DI UNA CLASSE
class MyPreside {
    nome;
    cognome;
    static instance; // UNICA ISTANZA
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    static getInstance() {
        if (MyPreside.instance) { // se esiste
            return this.instance;
        } // viene ritornata
        // non serve else, se succede fa il return, altrimenti va oltre e basta
        this.instance = new MyPreside("Paolo", "Azzurri");
        return this.instance;
    }
    riunione() {
        console.log(`Buongiorno, siete convocati in sala riunioni da ${this.nome} ${this.cognome}.`);
    }
}
// MyPreside.instace;// è private quindi non accessibile all'esterno
// ne voglio solo 1, questo non posso farlo
// let myPreside1: MyPreside = new MyPreside("Marco", "Verdi");
// let myPreside2: MyPreside = new MyPreside("Tom", "Gialli");
MyPreside.getInstance().riunione(); // Buongiorno, siete convocati in sala riunioni da Paolo Azzurri.
// CLASSE ASTRATTA può avere sia metodi normali che astratti
class ProvaAstratta {
    saluta() {
    }
}
// IMPLEMENTARE LE INTERFACCE, più di 1, MA ESTENDERE SOLO 1
// derivo, extends solo da 1
// ma ne implemento più di 1
// class X extends Y implements ProvaInterfaccia, ProvaInterfaccia2 {}
class X {
    nome;
    // no modificatori
    // constructor(private nome: string) {
    // }
    constructor(nome) {
        this.nome = nome;
    }
    saluta() {
        console.log("Ciao");
    }
    scrivi() {
        console.log("Ciao");
    }
}
// padre
class Dispositivo {
    nome;
    anno;
    constructor(nome, anno) {
        this.nome = nome;
        this.anno = anno;
    }
}
// figli
// ereditano da 1 solo genitore
class Telefono extends Dispositivo {
    // devo implementare i metodi
    accendi() {
        console.log("Il telefono si accende...");
    }
    spegni() {
        console.log("Il telefono si spegne...");
    }
}
// hanno un metodo extra oltre a quelli del padre, quindi entra in gioco l'interfaccia, devo IMPLEMENTARLA però
class Smartphone extends Dispositivo {
    ip;
    constructor(nome, anno, ip) {
        super(nome, anno); // del padre
        this.ip = ip;
    }
    // devo implementare i metodi
    accendi() {
        console.log("Lo smartphone si accende...");
    }
    spegni() {
        console.log("Lo smartphone si spegne...");
    }
    // voglio che sia Smartphone che Computer abbiano questo metodo ma senza scriverlo a mano
    // connetti(): void{
    //     console.log("Lo smartphone si connette...");
    // }
    // dell'interfaccia
    connetti() {
        console.log("Lo smartphone si connette...");
    }
}
class Computer extends Dispositivo {
    ip;
    constructor(nome, anno, ip) {
        super(nome, anno); // del padre
        this.ip = ip;
    }
    // devo implementare i metodi
    accendi() {
        console.log("Il computer si accende...");
    }
    spegni() {
        console.log("Il computer si spegne...");
    }
    // dell'interfaccia
    connetti() {
        console.log("Il computer si connette...");
    }
}
class Abitante {
    // devo implementare tutto
    nome;
    cognome;
    telefono;
    via;
    constructor(nome, cognome, telefono, via) {
        this.nome = nome;
        this.cognome = cognome;
        this.telefono = telefono;
        this.via = via;
    }
    cammina() {
        console.log("Sto camminando...");
    }
    saluta() {
        console.log("Sto salutando...");
    }
    mangia() {
        console.log("Sto mangiando...");
    }
}
// IMPORTARE ALTRI FILE
import { addizione, sottrazione, moltiplicazione } from "./function.js"; // non prende .ts, ma solo .js *
console.log(addizione(4, 4)); // 8
// in app.js vedrò *
// const function_js_1 = require("./function.js");
console.log(sottrazione(4, 4)); // 0
console.log(moltiplicazione(4, 4)); // 16
// se vado in console vedo che non funziona
// per vedere in console devo lavorare sui Modules da tsconfig.json
// e su index.html
// finalmente vedrò in console i risultati
import { Animale } from "./Animale.js";
const gatto = new Animale();
gatto.mangia(); // Gnam
//# sourceMappingURL=app.js.map