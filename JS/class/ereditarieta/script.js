//Creare una classe "Veicolo" con proprietà "marca" e "anno di produzione". 
// Successivamente, creare una classe "Automobile" che erediti dalla classe "Veicolo" e abbia una proprietà aggiuntiva "modello"
class Veicolo {
    constructor(marca, annoProduzione) {
        this.marca = marca;
        this.annoProduzione = annoProduzione;
    }
}
const veicolo1 = new Veicolo("Alfa Romeo", "2016");
console.log(veicolo1);
/**
Veicolo {marca: 'Alfa Romeo', annoProduzione: '2016'}
annoProduzione: "2016"
marca: "Alfa Romeo"
*/

class Automobile extends Veicolo {
    constructor(marca, annoProduzione, modello) {
        super(marca, annoProduzione)
        this.modello = modello;
    }
}
const auto1 = new Automobile("Alfa Romeo", "2016", "MiTo");
console.log(auto1);
/**
Automobile {marca: 'Alfa Romeo', annoProduzione: '2016', modello: 'MiTo'}
annoProduzione: "2016"
marca: "Alfa Romeo"
modello: "MiTo"
*/