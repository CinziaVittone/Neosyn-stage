// CLASSE PADRE COME SEMPLICE STAMPINO
class Animale {
    constructor() {

    }
}

class Cavallo extends Animale {
    constructor(criniera) {
        super()
        this.criniera = criniera;
    }
    corri() {
        console.log("Sto correndo");
    };
};

const cavallo1 = new Cavallo("bianca");
console.log(cavallo1);
/**
Cavallo {criniera: 'bianca'}
criniera: "bianca"
*/

cavallo1.corri();// Sto correndo



// DEFINIRE IL COSTRUTTORE DI UNA CLASSE FIGLIA es classe Insegnante è figlia di Persona
class Persona {
    constructor(nome, cognome, eta, genere, interessi) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.genere = genere;
        this.interessi = interessi;
    }
    // metodi FUORI DAL COSTRUTTORE, devo vederli solo quando li invoco
    saluta() {
        console.log(`Ciao sono la persona ${this.nome}`);
    };
};
const persona1 = new Persona("Mario", "Verdi", 32, "M", ["calcio", "padel"]);
console.log(persona1);
/**
Persona {nome: 'Mario', cognome: 'Verdi', eta: 32, genere: 'M', interessi: Array(2), …}
cognome: "Verdi"
eta: 32
genere: "M"
interessi: (2) ['calcio', 'padel']
nome: "Mario"
*/
persona1.saluta();// Ciao sono la persona Mario

// dalla Persona creo un Insegnante
// (tutto ciò che ha persona, più quello che voglio, materia)
class Insegnante extends Persona {
    // prop del padre + nuove del figlio
    constructor(nome, cognome, eta, genere, interessi, materia) {
        // prima di ECMASCRIPT 2015 invece di extends e super() si usava
        // Persona.call(this, nome, cognome, erta, genere, interessi)
        super(nome, cognome, eta, genere, interessi)// prop del padre
        // inizializzo le prop del figlio
        this.materia = materia;
    }
    // GETTERS E SETTERS, sempre in coppia
    get getMateria() {
        return this._materia;
    }
    set setMateria(nuovaMateria) {
        this._materia = nuovaMateria;
    }
    // METODI
    // sovrascrivo il metodo, se non avessi scritto niente avrebbe ereditato quello di Persona
    saluta() {
        console.log(`Buongiorno sono l'insegnante ${this.nome} ${this.cognome}`);
    }
    // metodo proprio di Insegnante
    riprendiAlunno(nomeAlunno) {
        console.log(`${nomeAlunno} non si mangia in classe!`)
    }
}
const insegnante1 = new Insegnante("Paolo", "Azzurri", 30, "M", ["Netflix", "cucina"], "Fisica");
console.log(insegnante1);
/**
Insegnante {nome: 'Paolo', cognome: 'Azzurri', eta: 30, genere: 'M', interessi: Array(2), …}
cognome: "Azzurri"
eta: 30
genere: "M"
interessi: (2) ['Netflix', 'cucina']
materia: "Fisica"
nome: "Paolo"
*/



// ACCEDERE E MODIFICARE PROPRIETÀ, DOT NOTATION 
console.log(insegnante1.materia);// Fisica
// modifico una proprietà
insegnante1.materia = "Astrofisica";
console.log(insegnante1.materia);// Astrofisica



// ACCEDERE E MODIFICARE PROPRIETÀ, GETTERS E SETTERS
insegnante1.setMateria = "Fisica quantistica";
console.log(insegnante1.getMateria);// Fisica quantistica



// METODI
insegnante1.saluta();// Buongiorno sono l'insegnante Paolo Azzurri
// eredita quello del padre se commento l'altro // Ciao sono la persona Paolo 
insegnante1.riprendiAlunno("Edoardo");// Edoardo non si mangia in classe!