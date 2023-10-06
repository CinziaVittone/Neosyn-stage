import "./ChartBar.css";

// lo userò in Chart
const ChartBar = (props) => {
  /**
   * riempire la ChartBar mettendo value in relazione con valueMax
   * se valueMax è 100 e value è 50 allora ChartBar riempita del 50%
   * devo quindi calcolare di quanto deve essere rimepita questa specifica istanza di Chart
   * creo quindi una variabile per l'altezza di riempimento del grafico con valore iniziale 0%
   */
  let barFillHeight = "0%";
  // controllo se ho un valore max > 0 impostando l'altezza di riempimento con un calcolo che indica la % tra 0 e 100 con cui deve essere riempita
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  // definisco gli oggetti di scena che mi aspetto di ottenere
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* ADDING DYNAMIC STYLES con attributo style, dinamico perchè deve essere l'altezza di riempimento derivata
        il valore dinamico è un oggetto js creato anch'esso con le graffe quindi {{chiave: valore}} */}
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight, backgroundColor: "yellow" }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
