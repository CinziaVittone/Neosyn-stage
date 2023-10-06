import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

// componente per il rendering delle spese in base all'anno selezionato
// per produrre l'elenco delle spese, lo userò in Expenses
const ExpensesList = ({ items }) => {
  // versione 3 con variabile, potrei memorizzare il contenuto così da poterlo richiamare tutte le volte che serve
  // let expensesContent = <p className="expenses-p">No expenses found.</p>;
  // possiamo fare un controllo
  // qua non uso più filteredExpenses, prendo solo gli items
  // lo rendo dinamico spostandolo nel return, dati ritornati in modo dinamico e non inserito a mano

  // ADDING CONDITIONAL RETURN STATEMENTS
  // messaggio di fallback se non esiste una spesa per quell'anno selezioknato
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  // al contrario se esistono spese per quell'anno allora le ritorna
  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
