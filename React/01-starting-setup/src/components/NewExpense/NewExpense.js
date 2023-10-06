// modulo in cui gli utenti possono inserire i dati
import React from "react"; // non indipensabile, solo per esempio
import "./NewExpense.css";
// form
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  // CHILD-TO-PARENT(new Expense è il parent di ExpenseForm)
  // gestore(handler)
  // enteredExpenseData è il valore che riceveremo come parametro
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // quello generato in submitHandler
      ...enteredExpenseData, // copia dell'oggetto, estraggo le coppie chiave-valore
      id: Math.random().toString(), // aggiungo id random
    };
    // console.log(expenseData);
    /**
     {title: 'Test2', amount: '0.02', date: Thu Jul 20 2023 02:00:00 GMT+0200 (Ora legale dell’Europa centrale), id: '0.823105960215099'}
      amount: "0.02"
      date: Thu Jul 20 2023 02:00:00 GMT+0200 (Ora legale dell’Europa centrale) {}
      id: "0.823105960215099"
      title: "Test2"
      [[Prototype]]: Object
     */

    // LIFTING THE STATE UP stiamo sollevando i dati di quello stato:
    // passiamo i dati di spesa expenseData alla funzione onAddExpense che riceviamo al momento dell'aggiunta della spesa
    props.onAddExpense(expenseData);
  };

  return (
    // il componente ExpenseForm sta comunicando verso l'alto con il componente padre NewExpense
    // grazie al puntatore della funzione qua sotto
    // chiamo la funzione in ExpenseForm e passo i dati come parametro
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
    // funzione che sarà attivata quando accadrà qualcosa all'interno di questo componente
    // quando l'utente invia i dati, salva i dati
  );
};

export default NewExpense;
// per vederlo nell'applicazione, quindi andrò in App.js a utilizzarlo
