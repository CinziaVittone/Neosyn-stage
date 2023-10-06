import ChartBar from "./ChartBar";
import "./Chart.css";

// uso sempre il destructuring
const Chart = (props) => {
  // per calcolare il valore massimo
  // trasformo i dataPoint in numeri, restituendo quindi solo il loro value
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); // è un array
  // lo associo a maxValue

  const totalMaximun = Math.max(...dataPointValues); // Math.max(elenco di argomenti quindi con lo spread li estraggo dall'array)
  return (
    <div className="chart">
      {/* opzione 1 lo creo statico inserendo a mano quanti ne voglio*/}
      {/* <ChartBar />
      <ChartBar />
      <ChartBar />
      <ChartBar />
      <ChartBar /> */}
      {/* opzione 2 lo creo più flessibile e non limitato, con un array di dataPoints e mappando ogni pointer in una barra ChartBar
      così avrò tanti ChartBar quanti sono i dataPoints,
      definisco inoltre quali tipi di dati (oggetti di scena) mi aspetto di estrarre,
      voglio assicurarmi che ogni ChartBar tracci il valore in relazione al valore massimo dell'intero Chart,
      key perchè è un elemento che sto aggiungendo, così che react lo riconosca
      vogliamo una label per il mese, sarà la albel siccome è UNIVOCA, non serve mettere un id per forza, basta che sia un valore univoco*/}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
