import ReactDOM from "react-dom/client";
// importo l'oggetto ReactDOM dalla libreria di terze parti, è una delle dipendenze visibili nel package.json
// "react": "^18.0.0",
// "react-dom": "^18.0.0",
// insieme formano la libreria React

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); // funziona solo perchè viene trasformato prima di essere consegnato al browser con il render

/**
memorizziamo questo oggetto root in una costante/variabile  
su di esso chiamiamo il metodo render per dire a react che cosa deve
funziona solo perchè viene trasformato prima di essere consegnato al browser con il render
<App /> è sitassi JSX
importato con percorso relativo(dentro la stessa cartella di index.js) ./, inoltre è una lobreria e non un file(avrebbe l'estensione.html/css/js ecc)
è un componente
 */
