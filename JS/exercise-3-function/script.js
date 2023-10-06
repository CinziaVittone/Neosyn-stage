// Scrivi una funzione che prenda un array di numeri come parametro e restituisca la media di tutti gli elementi.
console.log("average of numbers: ");
let numbers = [11, 19, 15, 31, 03];

let calculateAverage = (numbers) => {
    let sum = numbers.reduce((a, b) => (a + b));//reduce to sum the numbers
    console.log(`sum: ${sum}`);
    return sum / numbers.length; //average
}
const average = calculateAverage(numbers);
console.log(`average: ${average}`);

// Scrivi una funzione che prenda un array di numeri come parametro e restituisca un oggetto con le proprietà "massimo" e "minimo" che rappresentano rispettivamente il valore massimo e il valore minimo dell'array.
console.log("min max of numbers: ");
let findMinMax = (numbers) => {
    let obj = {
        "min": Math.min(...numbers),
        "max": Math.max(...numbers)
    }
    return obj;
}
let obj = findMinMax(numbers);
console.log(obj);

// Scrivi una funzione che prenda una parola come parametro e restituisca true se la parola è palindroma, altrimenti restituisca false.
console.log("check palindrome: ");
let checkPalindrome = (string) => {
    let reverseString = [...string].reverse().join('');
    /**spread operator() fa una deep copy dell'array, lo utilizzo in modo da lavorare sulla copia senza modificare l'originale, ad es se voglio fare il merge di 2 array 
    posso utilizzare lo spread su entrambi in modo da non modificare gli originali*/
    //in questo caso lo metto tra [] e quindi metterà ciò che estrae dentro un array
    //reverse() ribalta la stringa creando un nuovo array
    //join() unisce gli elementi del nuovo array con ciò che c'è tra le '', in questo caso rimuovo la virgola che li separa
    let reverseString2 = string.split('').reverse().join('');
    /**split() fa la stessa cosa dello spread, separa i singoli elementi che estrae con ciò che spcifichiamo tra '' */
    //console.log()accetta più argomenti
    console.log('reverseString spread', reverseString);//reverseString spread eye //reverseString spread olleh
    console.log('reverseString split', reverseString2);//reverseString split eye //reverseString split olleh
    return reverseString === string;
    //basta scrivere la condizione, restituisce un booleano da sola quindi non c'è bisogno di specificare
    //se la condizione si verifica restituisce true, altrimenti false
}
let str1 = checkPalindrome("eye");
console.log(str1);
let str2 = checkPalindrome("hello");
console.log(str2);

// Spread operator
let numeri = [1, 2, 3, 4];
//gli stiamo passando l'array intero, non riesce a trovare i valori, ha bisogni di una lista di singolik valori, non di un array
console.log('Math.max(numeri)', Math.max(numeri));// NaN
//accetterebbe i valori in questo modo, ma non si usa
console.log('Math.max(1, 2, 3, 4)', Math.max(1, 2, 3, 4));// 4
//spread operator fa una deep copy del mio array restituendo i valori in lista, singoli, non più raggruppati nell'array, ma singoli valori
console.log('Math.max(...numeri)', Math.max(...numeri));// 4
//per stampare direttamente i numeri
console.log('...numeri', ...numeri);// 1 2 3 4
//per inserirli in un array
console.log('[...numeri]', [...numeri]);

// Rest operator -> si usa sulle funzioni, quando ho più di 1 argomento
//inverso allo spread, trasforma una lista di valori in un array, invece che passare tutti gli argomenti, passo il rest, semrpe al fondo
let fn = (numero) => {
    console.log('numero', numero);
}
fn(5);// 5
let fn2 = (a, b, c, d) => {
    console.log('a, b, c, d', a, b, c, d);
}
fn2(1, 2, 3, 4);// 1 2 3 4 singoli
let fn3 = (...argomenti) => {
    console.log('argomenti', argomenti);
}
fn3(1, 2, 3, 4);//(4) [1, 2, 3, 4] array

//es firstName e lastName saranno sempre 1 solo, invece i titles possono essre di più
let showName = (firstName, lastName, ...titles) => {
    //alert(firstName + ' ' + lastName); // Julius Caesar
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    //alert(titles[0]); // Consul
    //alert(titles[1]); // Imperator
    //alert(titles.length); // 2
}
//showName("Julius", "Caesar", "Consul", "Imperator");