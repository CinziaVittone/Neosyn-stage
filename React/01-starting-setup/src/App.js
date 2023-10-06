// importo i componenti
// import ExpenseItem from "./components/ExpenseItem"; // nome del componente, non .js
import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

// USING STATEFUL LISTS, collegare l'aggiunta della spesa all'array -> interviene lo STATO
import { useState } from "react";

// estraggo l'array dal componente, da expenses lo rinomino, è uno stato
const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // passing data via props
  // array di oggetti
  // voglio passare i dati di questi oggetti alle voci di ExpenseItem sotto rendendole configurabili dall'esterno
  // voglio ricevere i dati dall'esterno, non memorizzarli al loro interno
  // esempio dal file txt

  // RENDERING LISTS OF DATA, da array di oggetti verrà trasformato in array di voci grazie a map()

  // USING STATEFUL LISTS, collegare l'aggiunta della spesa all'array -> interviene lo STATO
  // estraggo l'array, prima era qua, ora invece lo utilizzo con lo stato
  // destructuring[elementpo, funzione] = useState
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  // CHILD-TO-PARENT(App è il parent di new Expense)
  const addExpenseHandler = (expense) => {
    // argomento la nuova spesa
    // console.log("In App.js");
    // console.log(expenses); // stampa l'array di spese, non dinamico però, sempre quello di partenza
    console.log(expense); // stampa la spesa
    /**
    In App.js
    {title: 'Test3', amount: '0.03', date: Sun Jul 30 2023 02:00:00 GMT+0200 (Ora legale dell’Europa centrale), id: '0.1841321828237401'}
      amount: "0.03"
      date: Sun Jul 30 2023 02:00:00 GMT+0200 (Ora legale dell’Europa centrale) {}
      id: "0.1841321828237401"
      title: "Test3"
      [[Prototype]]: Object
    */

    // USING STATEFUL LISTS
    // setExpenses([expense, ...expenses]);
    // (nuova spesa aggiunta davanti all'array di spese esistenti)NON SAREBBE CORRETTO

    // devo tenere conto dello stato precedente
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];// vedo che lo aggiunge all'elenco
    });
  };

  // IMPERATIVO, normale js, istruzioni chiare passo dopo passo, ma se avessi interfacce molto più complesse?
  const paragraph = document.createElement("p"); // creo il nuovo elemento con createElement
  paragraph.textContent = "This is also visible"; // imposto il contenuto del testo
  document.getElementById("root").append(paragraph); // lo aggiungo al DOM con append
  // DICHIARATIVO, definisco lo stato desiderato, senza dire come raggiungerlo lui genera le istruzioni dietro le quinte
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      {/* in minuscolo gli elementi HTML incorporati */}
      {/* maiuscolo così react riconosce che è un componente personalizzato, definito dall'utente */}
      {/* non avrebbe senso title="Toilet paper" ecc, recupero dall'array */}

      {/* alternative ways of passing & receveing/handling "props"
      invece di passare le singole proprietà, passo un singolo oggetto 
      posso passare un singolo oggetto che contiene l'intero oggetto

      <ExpenseItem expense={expenses[0]}></ExpenseItem>
      <ExpenseItem expense={expenses[1]}></ExpenseItem>
      <ExpenseItem expense={expenses[2]}></ExpenseItem>
      <ExpenseItem expense={expenses[3]}></ExpenseItem> 

      o più oggetti che contengono i singoli valori
      cambierà anche il componente */}

      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />

      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      /> */}

      {/* LIFTING THE STATE UP, App ha accesso a entrambi i figli che tra di loro sono fratelli e non possono comunicare direttamente
        lo solleviamo nel componente dell'applicazione in modo da poterlo usare come un gestore di spese aggiuntive
        vedi const addExpenseHandler, lo stiamo solo registrando in console al momento*/}
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );

  // senza la sintassi JSX, questo return sarebbe
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
};
// restituisce codice HTML

// come possiamo accedere ai valori definiti nel luogo in cui utilizziamo i nostri componenti personalizzati?
// nel normale js is usano i parametri, avevo creato const expenseDate, expenseTitle, expenseAmount
// con react sfrutto le props, in ExpenseItem.js le utilizzerò per accedere ai valori

export default App; // importata in index.js
