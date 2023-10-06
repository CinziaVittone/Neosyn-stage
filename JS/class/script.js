//Creare una classe "Persona" con proprietà nome e cognome.Aggiungere un metodo "saluta" che stampi un saluto con il nome e cognome.
class Persona {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    // fuori dal costruttore, deve vedersi quando lo invoco io
    saluta() {
        console.log(`Ciao sono ${this.nome} ${this.cognome}`);
    }
}

const persona1 = new Persona("Sara", "Vittone");
console.log(persona1);// oggetto Persona {nome: 'Sara', cognome: 'Vittone'}
persona1.saluta();// Ciao sono Sara Vittone



//Creare una classe "Automobile" con proprietà marca e anno di produzione. Aggiungere un metodo "dettagli" alla classe "Automobile" che stampi i dettagli della vettura.
class Automobile {
    constructor(marca, annoProduzione) {
        this.marca = marca;
        this.annoProduzione = annoProduzione;
    }
    dettagli() {
        console.log(`Dettagli automobile: ${this.marca}, ${this.annoProduzione}`)
    }
}

const auto1 = new Automobile("Lancia", "2003");
console.log(auto1);// oggetto Automobile {marca: 'Lacia', annoProduzione: '2003'}
auto1.dettagli();// Dettagli automobile: Lancia, 2003



//Creare una classe "Utente" con proprietà nome, cognome e un metodo per generare l'indirizzo email.
class Utente {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    email() {
        console.log(`Mail: ${this.nome.toLowerCase()}.${this.cognome.toLowerCase()}@gmail.com`);
    }
}

const utente1 = new Utente("Luciano", "Vittone");
console.log(utente1);// oggetto Utente {nome: 'Luciano', cognome: 'Vittone'}
utente1.email();// Mail: luciano.vittone@gmail.com