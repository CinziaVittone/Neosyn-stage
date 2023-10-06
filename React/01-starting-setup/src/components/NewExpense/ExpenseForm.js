// componente del form, con anche il bottone, che mi servirà in NewExpense
import React from "react";

import { useState } from "react";

import "./ExpenseForm.css";
// CHILD-TO-PARENT, agiungo props(ExpenseForm è il child di NewExpense)
const ExpenseForm = (props) => {
  // useState("initial state");
  // "" stato iniziale è una stringa vuota, input parte vuoto

  // MULTIPLE STATES, se devo gestirli separatamente(es diversi campi di input)
  // con la destrutturazione otteniamo però i 2 elementi: titolo inserito, funzione di aggiornamento
  const [enteredTitle, setEnteredTitle] = useState("");
  // sono indipendenti, devo fare lo stesso con gli altri campi di input
  // numero comunque memorizzato come stringa, ecco perchè inizializzati a stringa sia data che importo
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // ONE STATE, se serve aggiornarli tutti contemporaneamente
  // raccolgo i 3 stati, siccome tutti raccolgono gli input dell'utente non ha senso ripetere n volte la cosa
  // useState({oggetto che raggruppa gli stati});
  // differenza: ogni volta che si aggiorna questo stato, è necessario aggiornare TUTTE 3 le proprietà e NON SOLO 1
  // si può estrarre questo dato e inserire l'input dell'utente e impostarlo
  // cambierà anche il modo di memorizzarlo **
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // event listener, ascoltatore dell'evento, comportamento del js standard
  // document.getElementById("").addEventListener("click", (event) => {});

  // 3 FUNZIONI DI GESTIONE DELLE MODIFICHE SINGOLARMENTE DEI SINGOLI INPUT
  // event handler, gestore dell'evento
  const titleChangeHandler = (event) => {
    // abbiamo capito da * come ottenere il valore in input
    setEnteredTitle(event.target.value);

    // cambia il modo di memorizzarlo **
    // setUserInput({
    //   // quando si aggiorna lo stato, react non lo fonde con il vecchio, lo sostituisce, ecco perchè
    //   // è importante che abbia tutte le coppie chiave valore che servono(in questo caso 3) altrimenti 2 andranno perse
    //   // anche se in questo momento ne sto aggiornando solo 1, è importante tenere anche quelle che non cambio
    //   // importante copiare manualmente anche gli altri valori ESISTENTI anche se non vengono aggiornati
    //   ...userInput, // con lo SPREAD OPERATOR copio oggetto userInput(con le sue coppie chiave: valore)
    //   enteredTitle: event.target.value, // e poi sovrascrivo il titolo inserito
    // });
    // console.log("Title changed!"); // in console ogni volta che scrivo una lettera nell'input
    // come posso ottenere il valore inserito dall'utente?
    console.log(event);
    // SyntheticBaseEvent {_reactName: 'onChange', _targetInst: null, type: 'change', nativeEvent: InputEvent, target: input, …}
    // espandendolo vedrò
    // target: input(con elenco di proprietà che possiamo leggere e impostare)
    // vedo anche value:"a" -> è a questo che devo accedere
    // console.log(event.target.value); // ottengo ciò che ho inserito *
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // versione 1
    // setUserInput({
    //   ...userInput,
    //   // non va bene perchè stiamo considerando anche il vecchio stato, dipendiamo da lui, copiamo i valori da questo e poi sovrascriviamo
    //   enteredAmount: event.target.value,
    // });

    // versione 2 -> UPDATING THE STATE THAT DEPENDS ON THE PREVIOUS STATE
    // così react si assicura di fornirci sempre l'ultima istantanea del prevState
    // entra in gioco una funzione dove impostare i titolo e prendere come argomento lo stato precedente
    // react pianifica gli aggiornamenti, se ne pianifichiamo molti nello stesso momento si potrebbe però dipendere per sbaglio da un'istantanea non aggiornata/errata
    // ecco perchè usiamo questa nuova funzione e non la versione 1
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    //   // restituisco nuova istantanea dello stato per cui sto eseguendo l'aggiornamento(copio il prevState e sovrascrivo)
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  // UNICA FUNZIONE CHE GESTISCE TUTTE LE MODIFICHE DEGLI INPUT, meglio averne 3 separate
  // nome del parametro, valore
  // identifier sarà l'unico dato che permetterà di distinguere gli input
  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "date") {
      setEnteredDate(value);
    } else {
      setEnteredAmount(value);
    }
  };

  // HIGHER ORDER FUNCTION(passo come argomento un'altra arrow function, così recupero event)
  // A higher order function is a function that takes a function as an argument, or returns a function
  // identifier è il valore che è stato modificato
  const inputChangeHandler2 = (identifier, value) => (event) => {
    if (identifier === "title") {
      setEnteredTitle(event.value);
    } else if (identifier === "date") {
      setEnteredDate(event.value);
    } else {
      setEnteredAmount(event.value);
    }
  };

  // PER INVIARE IL FORM
  // devo puntare al gestore di invio, come per gli altri eventi
  const submitHandler = (event) => {
    // ogni volta che viene inviato il form, viene inviata una richiesta e ricaricata una pagina, NON LO VOGLIO
    // entra in gioco un evento integrato in js, siccome vogliamo gestire tutto con js
    // evitiamo di default l'invio di questa richiesta, evitiamo quindi il ricaricarsi della pagina
    event.preventDefault();

    // creo l'oggetto spesa combinando tutti i dati(che puntavano ai diversi stati definiti inizialmente)
    // utile per inviare i dati al be
    // const expenseData = {
    //   title: enteredTitle,
    //   amount: enteredAmount,
    //   date: new Date(enteredDate),
    // };
    // lo modifico
    // FIXING A SMALL BUG: When adding multiple values, those values are added as strings instead of numbers.
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);
    /** oggetto che contiene tutti i dati memorizzati
     {title: 'Test1', amount: '19.90', date: Mon Jul 03 2023 02:00:00 GMT+0200 (Ora legale dell’Europa centrale)}
      amount: "19.90"
      date: Mon Jul 03 2023 02:00:00 GMT+0200 (Ora legale dell’Europa centrale) {}
      title: "Test1"
      [[Prototype]]: Object
     */

    // CHILD-TO-PARENT
    // salvataggio dei dati della spesa, con argomento l'oggetto spesa generato prima
    props.onSaveExpenseData(expenseData); // eseguiamo la funzione che ho definito in NewExpense

    // una volta che invio il form, gli input tornano vuoti, ripartono da ""
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  // PER POTER USARE L'UNICA FUNZIONE, DEVO RICHIAMARE UNA FUNZIONE FRECCIA che sarà richiamata da react al cambiare dell'input
  // riceve l'evento come argomento e poi eseguo manualmente il gestore della modifica dell'input
  // manteniamo comunque l'esempio con funzioni separate

  // TWO-WAY BINDING non ci limitiamo ad ascoltare le modifiche, possiamo anche passare un nuovo valore all'ingresso
  // in modo da poterlo resettare o modificare programmaticamente, cambiando lo stato cambierà il value
  // aggiungo attributo value per gestire il comportamento degli input dopo aver inviato il form
  // BINDING BIDIREZIONALE: 1. raccolgo gli input 2. li modifico all'invio(input tornano vuoti)

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          {/* (identificatore, valore che è stato modificato) */}
          {/* <input
            type="text"
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          /> */}
          {/* higher order function */}
          {/* <input
            type="text"
            onChange={inputChangeHandler("title")}
          /> */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
          {/* <input
            type="text"
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          /> */}
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
          {/* <input
            type="text"
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          /> */}
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">+ Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
// The step attribute specifies the interval between legal numbers in an <input> element.
// The step attribute can be used together with the max and min attributes to create a range of legal values.

// ho bisogno di salvare il valore in input in una variabile distaccata dal lifecycle del componente
// così che indipendentemente dalla frequenza con cui la funzione del componente viene eseguita, lei viene memorizzara e sopravvive
