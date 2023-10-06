// importo il css, semplice file, non è un componente
import "./ExpenseDate.css";
// componente che riguarderà il rendering della data di una spesa
// porto qua la logica che avevo creato per la data
// nel destructuring metto solo quella che mi servirà, date
const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  // utilizzo i className corrispondenti alle classi che ho nel css così che venga applicato
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
// la data viene passata a noi e noi la passiamo attraverso la voce di spesa
// passiaamo i dati da un componente a un componente figlio diretto
