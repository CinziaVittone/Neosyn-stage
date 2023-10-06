import "./ExpensesFilter.css";

// è un componente che presenta l'interfaccia utente, il menù a tendina con degli ascoltatori di eventi(onChange) e oggetti di scena(porps)
// la vera logica risiede nel padre, Expenses, che trasforma ExpenseFilter in un componente controllato
// sia il valore che le sue modifiche non sono gestite qua, ma nel padre
const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
