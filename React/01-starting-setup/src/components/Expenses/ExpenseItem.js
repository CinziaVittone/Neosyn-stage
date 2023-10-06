// importo il css, semplice file, non è un componente
import "./ExpenseItem.css";
// importo il componente della data
import ExpenseDate from "./ExpenseDate";
// importo il contenitore, il guscio, il wrapper
import Card from "../UI/Card";
// importo questa funzione per il cambiamento di stato del componente
// import { useState } from "react";

// passing data via props: voglio che i dati siano memorizzati non qua ma in App.js
// si ottiene quindi un parametro al quale si può dare il nome che si desidera
// potrei chiamarlo data, ma di solito props
// si tratta di un oggetto che contiene tutti i valori degli attributi del nostro elemento personalizzato
// otteniamo le coppie chiave-valore
// chiave: nome degli attributi
// valore: quelli impostati

// DOT NOTATION
function ExampleComponent1(props) {
  // dati dinamici(es la data, cambia ogni giorno)
  // invece che utilizzare dati statici nel return, utilizzerò queste variabili tra graffe html{js}html
  // segnaposto dinamici
  // con le props posso "sbarazzarmi" di queste costanti perchè ora ottengo tutti i dati dall'esterno
  // const expenseDate = new Date(2021, 2, 28); // valore iniziale
  // const expenseTitle = "Assicurazione Auto";
  // const expenseAmount = 294.67;

  // finchè ritorno solo un elemento posso metterlo sulla stessa riga e non usare le graffe
  // return <h2>Expense Item!</h2>;

  // ora voglio visualizzare 3 informazioni: titolo, importo, data
  // devo però racchiudere tutto in 1 SOLO ELEMENTO, il return accetta 1 unico elemento
  // accedo alle props
  // utilizzo i className corrispondenti alle classi che ho nel css così che venga applicato
  return (
    <div className="expense-item">
      {/* oggetto data si romperebbe altrimenti */}
      {/* toISOString() metodo integrato per tutti gli oggetti data x produrre una stringa */}
      {/* <div>{expenseDate.toISOString()}</div> */}
      {/* <div>{props.date.toISOString()}</div> */}
      <div>{props.expense.date.toISOString()}</div>
      <div className="expense-item__description">
        {/* <h2>{expenseTitle}</h2> */}
        {/* proprietà title esiste perchè ho impostato l'attributo title */}
        <h2>{props.expense.title}</h2>

        {/* <div className="expense-item__price">${expenseAmount}</div> */}
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </div>
  );
}

// DESTRUCTURING 1
// destructuring passando per props e dalla variabile
function ExampleComponent2(props) {
  let { date, title, amount } = props;
  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}

// CONSIGLIATO
// DESTRUCTURING 2
// destructuring direttamente
// nel momento in cui attribuisco quelle proprietà al componente(in App.js), react se lo ricorda
// nel destructuring solo quelle che mi serve recuperare e che utilizzerò
const ExpenseItem = ({ date, title, amount }) => {
  // useState può essere richiamato SOLO all'interno del componente e IN NESSUNA funzione annidata
  // DIRETTAMENTE E SOLO dentro al componente
  // useState per consentire il cambiamento del titolo
  // array destructuring, è importante l'ordine di cosa scrivo all'interno
  // (puntatatore al valore dello stato corrente, funzione per aggiornarlo)
  // useState(title) questo hook restituisce sempre un array con due elementi esatti
  // questo valore iniziale viene considerato solo quando la funzione del componente veine eseguita per la prima volta
  // const [titlePointer, setTitle] = useState(title); // vuole un valore di stato predefinito, come argomento lo stato iniziale
  // lo commento sennò non cambierà mai il title quando aggiungerò nuovi elementi vedi USING STATEFUL LISTS

  // console.log("ExpenseItem valutato da react");
  // 4(volte appena carico, xk ho 4 items, 4 istanza separate) ExpenseItem valutato da react

  // quando cambio un title:
  // New Desk (Wooden)
  // ExpenseItem valutato da react
  // New TV
  // ExpenseItem valutato da react

  // voglio cambiare titolo quando faccio click sul bottone e la richiamo nel return
  // sto creando una variabile che cambierà ogni volta che verrà eseguita la funzione
  // let titleToChange = title;

  // la funzione verrà eseguita da react quando si verifica l'evento onClick
  // clicco sul bottone(o div ecc) e poi viene eseguita la funzione

  // convenzione di chiamarla handler perchè è legata a un eventHandler, non è una normale funzione che usiamo nel codice
  // function
  // function clickHandler(){
  //   console.log("Clicked!");
  // }

  // arrow function
  // const clickHandler = () => {
  //   // console.log("Clicked!");
  //   // titleToChange = "Updated!";// questa è solo un'assegnazione
  //   // console.log(titleToChange);
  //   setTitle("Updated!"); // questo è un aggiornamento di stato
  //   // non avviene SUBITO la modifica, ma viene programmato l'aggiornamento dello stato
  //   // perciò nella riga successiva non è ancora disponibile
  //   console.log(titlePointer); // titolo prima dell'aggiornamento
  //   // dopo viene chiamato e valutato dinuovo, per questo sarà visibile nell'interfaccia utente
  // };
  // vedo che non è cambiato nulla, solo in console vedo la stampa

  return (
    // wrappo il componente dentro Card, avrà bisogno di oggetti di scena per funzionare
    // essendo un componente persnalizzato, nel suo file devo dirlgi cosa accettare (const classes)
    // i componentei personalizzati supportano solo ciò che gli si dice, a differenza degli altri (div ecc)
    <li>
      <Card className="expense-item">
        {/* <div>{date.toISOString()}</div> */}
        {/* adding "normal" javascript logic to components, data come calendario Mese, Anno, Giorno*/}
        {/* Date.prototype.toLocaleString() metodo per la data leggibile all'uomo, creo variabili */}
        {/* <ExpenseDate></ExpenseDate> posso scriverlo */}
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          {/* <h2>{titlePointer}</h2> vedevo updated, ma non mi serve più */}
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
        {/* <button onClick={clickHandler()}>Change Title</button> con function, dopo con arrow function */}
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};
// quando la funzione del componente viene eseguita si ottiene sempre un'istantanea nuova di zecca dello stato
// devo esportarlo per poterlo utilizzare al di fuori del file
export default ExpenseItem;
// non lo importerò in index.js, lì solo il componente radice App
// lo importerò in App.js
