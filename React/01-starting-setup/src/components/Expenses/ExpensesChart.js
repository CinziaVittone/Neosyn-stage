import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  // voglio avere degli oggetti con etichetta e chiave di valore(iniziale 0)
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // vogliamo passare in rassegna tutte le spese per un anno selezionato e sommare le spese per tutti i diversi mesi per poi assegnarle ai dataPoints

  // ciclo for in cui inserisco tutte le spese ottenute tramite gli oggetti di scena
  // for in -> per oggetti
  // for of -> per array
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // oggetto date con emtodo incorporato, mese a partire da 0 -> Jan 0, Feb 1 ecc
    // array chartDataPoints all'indice expenseMonth
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
