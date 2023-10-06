// COMPONENTE WRAPPER
// componente per l'aspetto specifico del contenitore
// contenitore di schede, andrà a incorporare gli altri componenti
import "./Card.css";

const Card = (props) => {
  // senza questo non leggeva lo stile in ExpenseItem
  // mi assicuro che tutti i valori impostati su props del nome della classe vengano aggiunti a questa stringa di nomi di classe
  // che viene poi impostata su questo div all'interno della scheda
  const classes = "card " + props.className;

  // wrappa le props dei childre, in questo caso Expense Date
  return <div className={classes}>{props.children}</div>;
};

export default Card;
