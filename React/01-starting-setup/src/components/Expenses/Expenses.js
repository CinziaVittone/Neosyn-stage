import "./Expenses.css";
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

// con il destructuring devo accedere a items adesso, non più a data, title, amount
const Expenses = ({ items }) => {
  // DERIVED/COMPUTED STATE, quando imposto uno stato direttamente collegato ad un altro non ha senso gestirlo a sè **
  // voglio l'elenco degli anni esclusi
  const [filteredYear, setFilteredyear] = useState("2020");
  // const [filterInfoText, setFilterInfoText] = useState("2019, 2021 & 2022");// **

  // è sufficiente una variabile
  let filterInfoText = "2019, 2021 & 2022";

  // verrà calcolato in base al valore di filteredYear

  switch (filteredYear) {
    case "2019":
      filterInfoText = "2020, 2021 & 2022";
      break;
    // non necessario perchè già parto con lo stato sul 2020
    // case "2020":
    //   filterInfoText = "2019, 2021 & 2022";
    //   break;
    case "2021":
      filterInfoText = "2019, 2020 & 2022";
      break;
    case "2022":
      filterInfoText = "2019, 2020 & 2021";
      break;
    default:
      // filterInfoText = "-no year selected-";
      break;
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredyear(selectedYear);
  };

  // creo una costante per filtrare le spese in base all'anno
  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  }); // ora devo passarle a ExpensesList nel return sotto

  // lo sposto in ExpensesList così da gestire a parte l'elenco
  // // versione 3 con variabile, potrei memorizzare il contenuto così da poterlo richiamare tutte le volte che serve
  // let expensesContent = <p className="expenses-p">No expenses found.</p>;
  // // // possiamo fare un controllo
  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  // wrappo dentro un componente Card anche le spese
  return (
    <Card className="expenses">
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
      ecc */}

      {/* DERIVED/COMPUTED STATE */}

      {/* CONTROLLED COMPONENT */}
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <p className="expenses-p">Data for years {filterInfoText} is hidden.</p>

      {/* RENDERING LISTS OF DATA, al momento stiamo aggiungendo singolarmente gli elementi, NON DINAMICO, non è corretto 
      definire una lista statica, devo poterla modificare, vogliamo invece recuperare l'array di spese definite in App,
      attraverso i puntatori le stiamo già trasferendo con items che punta a expenses
      <Expenses items={expenses}
      infatti qua lo otteniamo ma non lo stiamo usando, voglio invece raggiungerlo
      ricorriamo al metodo map():
      creates a new array populated with the results of calling a provided function on every element in the calling array
      usiamo map per trasformare il nostro array di oggetti expenses 
      map(callback eseguita per ogni elemento dell'array)
      per mappare, trasformare ogni spesa dell'array in un elemento JSX ExpenseItem
      expense mi serve per estrarre le proprietà, siamo noi a riempire l'array ora, modificando l'array di spese le modifiche
      si rifletteranno sull'output, non serve più che aggiunga uno a uno gli elementi 
       */}

      {/* la lista viene renderizzata MA riceviamo un avviso
      Warning: Each child in a list should have a unique "key" prop */}

      {/* UNDERSTANDING "KEYS" */}
      {/* SE HO L'ID, univoco */}
      {/* OUTPUTTING CONDITIONAL CONTENT, filtro l'output in base all'anno selezionato */}

      {/* versione 1 operatore ternario*/}
      {/* {filteredExpenses.length === 0 ? (
        <p className="expenses-p">No expenses found.</p>;
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}

      {/* versione 2 espressioni indipendenti che eseguono controlli separati*/}
      {/* && se la prima condizione è vera, allora esegue la seconda */}
      {/* {filteredExpenses.length === 0 && <p className="expenses-p">No expenses found.</p>;}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

      {/* WRAP UP & NEXT STEP */}
      <ExpensesChart expenses={filteredExpenses}/>

      {/* versione 3 vedi prima del return con variabile */}
      {/* {expensesContent} */}
      {/* ADDING CONDITIONAL RETURN STATEMENT */}
      <ExpensesList items={filteredExpenses} />

      {/* SE NON HO UN ID TRA LE PROPRIETA', non conviene, index può non essere univoco */}
      {/* {items.map((expense, index) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}

      {/* ora che passo i dati dinamicamente, questo non serve più */}
      {/* <ExpenseItem
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />

      <ExpenseItem
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      />

      <ExpenseItem
        title={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      />

      <ExpenseItem
        title={items[3].title}
        amount={items[3].amount}
        date={items[3].date}
      /> */}
    </Card>
  );
};

export default Expenses;
