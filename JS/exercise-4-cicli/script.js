//Scrivi una funzione che prenda una stringa come parametro e restituisca il numero di vocali presenti nella stringa.
console.log("show how many vowels in a string: ")
let countVowels = (string) => {
    let count = 0;
    let vowels = ["A", "E", "I", "O", "U"];
    //string.toUpperCase() trasforma direttamente senza bisogno di farlo in una variabile nuova let upperCase = string.toUpperCase();
    for (let char of string.toUpperCase()) {
        //se l'array di vocali include, contiene il mio char
        if (vowels.includes(char)) {
            count++;
        }
    }
    //return va fuori dal ciclo sennò si ferma subito
    return count;
}
let string1 = "Ciao, siamo Hamtaro e Alvin"
console.log("countVowels: ", countVowels(string1));// 12


//conta vocali
let contaVocali = (stringa) => {
    let contatore = 0;
    let vocali = ["a", "e", "i", "o", "u"];
    for(let carattere of stringa.toLowerCase()){//converto la stringa lower come l'array
        if(vocali.includes(carattere)){
            contatore ++;
        }
    }
    return contatore;
}
console.log("vocali: ", contaVocali("helloWorld"));

//conta consonanti
let contaConsonanti = (str) => {
    let i=0;
    let voc = ["a", "e", "i", "o", "u"];
    for(let car of str.toLowerCase()){
        if(voc.includes(car)){
            i--;
        }
        i++;
    }
    return i;
}
console.log("consonanti: ", contaConsonanti("helloWorld"));