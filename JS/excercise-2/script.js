// 1) creare un array random
console.log("array numeri random: ")
const randomNumbers = Array(10)//array size
    .fill()//riempie
    .map(() => Math.floor(20 * Math.random()));//floor arrotonda
//genera numeri molto piccoli quindi moltiplico per 20
console.log(randomNumbers);

// 2) stampare i numeri pari e dipari
console.log("pari o dispari: ")
for (let i = 0; i < randomNumbers.length; i++) {
    // ternary operator
    (randomNumbers[i] % 2 === 0) ? console.log(`${randomNumbers[i]} pari`) : console.log(`${randomNumbers[i]} dispari`);
};
console.log(randomNumbers);

//versione più semplice
// 1)
let numbers = [];//array vuoto
const number = 20;//quanti elementi nell'array
for (let i = 0; i < number; i++) {
    numbers.push(Math.floor(20 * Math.random()));//push per riempire l'array
}
// 2)
//map al posto del ciclo for, fa la stessa cosa, al suo interno infatti contiene un ciclo for
numbers.map((number) => number % 2 === 0 ? console.log(`${number} pari`) : console.log(`${number} dispari`));

