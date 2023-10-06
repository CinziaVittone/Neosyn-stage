udemy

babel è un compilatore che serviva a convertire il js in formato comprensibile per il browser(es le arrow functions le convertiva in funztions normali)
ormai non serve più

npm view react -v per vedere la versione

se non compaiono gli NPM Scripts apro il package-lock.json

Non c'è molto di più in React oltre a questi concetti:

1. Componenti
2. JSX
3. State
4. Props

-SEZ 1 -GETTING STARTED:
--COS'È REACT
React è una libreria JavaScript per la creazione di interfacce utente (UI, User Interface).
Sviluppata nel 2013 all'interno di Facebook, adesso React è una libreria open-source supportata da una grande community di programmatori.

React consente di sviluppare applicazioni dinamiche che non necessitano di ricaricare la pagina per visualizzare i dati modificati.
Inoltre nelle applicazioni React le modifiche effettuate sul codice si possono visualizzare in tempo reale, permettendo uno sviluppo rapido, efficiente e flessibile delle applicazioni web.

Libreria per costruire interfacce utente

Netflix ad esempio usa React, le transizioni sono molto fluide, sembra di essere in un'app mobile, molto dinamico
React essendo una libreria Js utilizza Js nel browser per aggiornare la pagina e l'interfaccia che vediamo senza ricaricare la pagina
Aggiorna dietro lo quinte, in backgrount, senza ricaricare/lasciare la pagina, così da garantire transizione delle pagine
crea un virtual DOM confrontandolo con il DOM originale basandosi sugli eventHandler, fa il confro
---
--REACTJS VS VANILLA JS
Usare solo js vanilla non è conveniente nè performante, vedi confronto vanilla-js-demo e react-vs-vanilla-demo
Fondere codice HTML e Js, nell App.js -> JSX oppure con Ts -> TSX
---
--EDITING OUR FIRST REACT APP -> aggiungere un quarto bottone all'app di prima, parto dal link start
React è DICHIARATIVO
Js è IMPERATIVO
---
--CREATING REACT PROJECTS: BROWSER-BASED VS LOCAL DEVELOPMENT
Local: progetti salvati su disco rigido e il software necessario per eseguire il progetto è installato sul sistema, installare pacchetti e strumenti, meglio, posso usare estensioni, editor ecc, tutto come voglio
Browser: progetto remoto ad esempio su CodeSandBox, non installo niente in locale e non devo creare file, ma è più limitato devo usare il layout generale fornito e non ho molto controllo
---
--CREATING REACT PROJECTS LOCALLY
installare node.js

PROGETTI SCARICATI DA ZIP
per i progetti esempio
CodeSandbox
li scarico
nuovo terminale, entro nella folder del progetto
npm install nella folder del progetto(oppure npm i)
npm start
visito la pagina all'indirizzo indicato
CONTROL C per uscire dallo start
poi npm start per farlo ripartire

npm install scrica la cartella dei node_modules

PROGETTO DA ZERO
da zero
creo la cartela del progetto
create react app*
entro nella cartella dove voglio creare il progetto 01-starting-setup
npx create-react-app my-app(nome che voglio dare al progetto)
cd my-app
npm start
si apre sul browser
oppure
vite.js*
crea già anche il .gitignore ignorando i node_modules ecc
npx permette di scaricare da remoto invece che sul pc

PER USARE TYPESCRIPT
devo specificarlo quando creo il porgetto
npx create-react-app my-app --template typescript
---
-SEZ 2 -JS REFRESHER:
--STARTING PROJECT
folder 02-js-refresher in cui creo il progetto per il ripasso di js, partendo dalla sua base
cd my-app
npm run start(lancio lo start dello script npm, come anche per il build)
quando apro il package.json diventano visibili nella sidebar gli NPM SCRIPTS
---
--REACT PROJECT USE A BUILD PROCESS(compilazione)
Progetti React usano un processo di compilazione(build process), il codice che scrivo non è quello che viene eseguito nel browser, viene trasformato dietro le quinte prima di essere consegnato al browser, grazie a uno strumento in esecuzione nel background.
package.json: elenca tutte le dipendenze del progetto, le librerie(le librerie react nel caso di react) ad esempio "react-dom" e "react-scripts"(non verrà eseguita, ma fornisce una serie di strumenti per trasformare il codice prima ceh arrivi al browser, prima hce venga iniettato con uno script ne file HTLM)

Perchè il codice deve essere tarsformato?

1. il codice react grezzo e non elaborato non viene eseguito nel browser soprattutto perchè react utilizza una speciale funzione di js JSX
che non è una feature di default di js. React si basa sull'inclusione di questo codice simile all'HTML nei file js
2. il codice non sarebbe ottimizzato per la produzione
I progetti react richiedono un build process che trasforma il codice
NodeJS è necessario e utilizzato dietro le quinte per assicurarsi che il codice react venga trasformato
---
--IMPORT E EXPORT
meglio dividere il codice in più file per renderlo mantenibile
-
--REVISITING VARIABLES, VALUES AND OPERATORS
Why use variables?

1. Reusability: store a value in a variable once and use it as often anda in as many places are needed
2. Readability: organize your code over several lines rather than creamming everything into a single line
var, let, const
---
--NEXT-GEN JAVASCRIPT
file:///C:/Users/vitto/OneDrive/Desktop/next-gen-js-summary.pdf
let e const
arrow functions
important
exports e imports
classes
spread operator
rest operator
destructuring
---
--JS ARRAYS FUNCTIONS
https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8199160#content
---
-SEZ 3 -REACT BASICS & WORKING WITH COMPONENTS:
--COMPONENTS
Cos'è un componente?
Considerando che è qualcosa di fondamentale presente in tutte le interfacce possiamo definrilo come:
un blocco riutilizzabile nell'interfaccia, è una combinazione di codice HTML, CSS, JS
singoli elementi che combiniamo insieme per costruire un'interfaccia utente
si costruiscono singoli componenti e poi react li compone insieme in un'interfaccia
elemento personalizzato
-riusabilità, no ripetizioni
-separazione dei contenuti, non fare troppe cose nello stesso momento
ogni componente ha un obbiettivo, un compito specifico
dividiamo il progetto in file, pezzi di codice più facili da gestire, codice diviso in piccole funzioni ognuna delle quali risolve un problema
funzioni e separazione del codice
un componente è una funzione js, un tipo speciale, JSX, che restituisce HTML
riutilizzabile
come focus la RIUTIZZABILITA'
frammento applicazione in componenti per dare approccio congruente tra le pagine(es homepage, careers, ecc) 
unica pagina con n componenti, poco fruibile, la SINGLE PAGE
quando carico la prima pagina lui scarica tutto
potrei avere più componenti in un unico file ma non ha senso
react non si basa sulle directories, non impone uno scaffolding(impalcatura), nulla mi vieta di fare file a caso e metterci quanti componenti voglio
multipage in funzione del path
non esiste il concetto di pagina vero e proprio, TUTTO SI BASA SUI COMPONENTI
REACT ROUTER*
a questo path corrisponde un compoonetne 7home = <Home>, ecco cosa fa il routing 
cosa mi fa decidere tra mettere un tag <h1>Title</h1> o creare un componente Title?
il fatto che sia riutilizzabile nel mio progetto, es il Title nella homepage sarà Home, nella pagina carriere sarà Carriere ecc
renderlo quanto più RIUTILIZZABILE possibile, es un bottone/input ecc, DOVREI AVERE SOLO COMPONENTI e poi ovviamente al suo interno avranno HTML e CSS
la comodità è anche che, se il cliente chiede una modifica sui bottoni, invece che farlo su 10000, lo fai sul componente Button
gestisco poi tutto tramite le PROPS per definire la sua destinazione*
---
--REACT CODE IS WRITTEN IN A DECLARATIVE WAY
Come costruire un componente?
le interfacce utente si basano su: HTML + CSS + JS --> REACT
i componenti si basano sulla loro combinazione, per lo più HTML + jS = JSX
componenti riutilizzabili e reattivi
con un approccio DICHIARATIVO:
non dico a react che un elemento HTML deve essere creato e inserito in un punto specifico della interfaccia utente(come farei con vanilla)
invece
si definerà lo stato finale, lo stato di arrivo/più stati di arrivo a seconda della condizione
compito di react è capire quali elementi della pagina web devono essere aggiunti/rimossi/aggiornati
basta definire gli stati finali e in quali condizioni deve essere utilizzato lo stato, react farà
non scrivo tutti i passaggi come nell'approccio imperativo, manipola il DOM da solo
imperativo: definisco passaggio per passaggio, ogni singola istruzione
dichiarativo: non serve che definisca ogni passaggio, affido il mio codice a React, manipola da solo il DOM
definisco lo stato desiderato e react è responsabile della generazione e dell'esecuzione delle istruzioni DOM
es lo stato desiderato è
<div>
    <h2>Let's get started!</h2>
</div>
che è il codice HTML che viene visualizzato sullo schermo
---
--CREATING A NEW REACT PROJECT
scaricato zip 01-starting-setup
cd 01-starting-setup, no cd my-app
Download it
Extract it
Run npm install in the extracted folder
Run npm run build
Run npm start to start the development server
---
--ANALYZING A STANDARD REACT PROJECT
src: cartella dove scriveremo il codice

-index.js(vedi file): è il primo file che verrà eseguito ogni volta che la pagina viene ricaricata, non è quell'esatto codice, viene trasformato con il metodo render
import ReactDOM from "react-dom/client";
importo l'oggetto ReactDOM dalla libreria di terze parti, è una delle dipendenze visibili nel package.json
// "react": "^18.0.0",
// "react-dom": "^18.0.0",
insieme formano la libreria React
poi
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
memorizziamo questo oggetto root in una costante/variabile  
su di esso chiamiamo il metodo render per dire a react che cosa deve
funziona solo perchè viene trasformato prima di essere consegnato al browser con il render
<App /> è sitassi JSX
importato con percorso relativo(dentro la stessa cartella di index.js) ./, inoltre è una lobreria e non un file(avrebbe l'estensione.html/css/js ecc)
è un componente

-App.js(vedi file): contine una function App() che viene poi esportata e importata nel file in index.js
restituisce codice HTML

-index.css: da lo stile al progetto

public: cartella in cui lavoreremo raramente
-index.html: singolo file HTML caricato dal browser, React inietta nell'HTML tutto il nostro HTML
unico file HTML utilizzato dall'applicazione react, si tratta di una SINGLE PAGE APPLICATION:
ha un unico file HTML e tutte le successive modifiche all'interfaccia utente della pagina web saranno gestite
è il PUNTO DI INGRESSO
qua otteniamo la normale struttura di un documento HTML

<div id="root"></div> 
è dove vogliamo collegare/iniettare la nostra interfaccia utente guidata da react
infatti ritroviamo l'id "root" anche in index.js

## "sugar syntax" fa riferimento al codice scritto in modo semplice
--INTRODUCING JSX
acronimo di Javascript XML
passaggi di trasformazione che avvengono dietro le quinte
npm infatti trasforma il codice js in un codice più adatto

react devtools estensione chrome
sul browser - F12 - sources - cartella static - js(contiene file js, il codice non è uguale a quello scritto da noi, è quello eseguito nel browser, è ciò in cui il nostro codic eviene trasformato automaticamente, questo è JSX: codice semplice e snello per noi, e allo stesso tempo codice che il browser può interpretare) / index
---
--HOW REACT WORKS
definisco lo stato desiderato e react è responsabile della generazione e dell'esecuzione delle istruzioni DOM
es lo stato desiderato è
<div>
    <h2>Let's get started!</h2>
</div>
che è il codice HTML che viene visualizzato sullo schermo
lavoro su App.js
---
--EXERCISE3 WORKING WITH JSX CODE
This is a quick exercise to get started with React and JSX code: Your task is to edit the JSX code of a provided React component such that it displays a h1 element with the text "Exercise done!" on the page.
Important: The custom JSX code must be added inside the existing <div> element.

import React from 'react';
// don't change the Component name "App"
export default function App() {
    return (
        <div>
            <h1>Exercise done!</h1>
            <p>Practicing React...</p>
        </div>
    );
}
---
--BUILDING A FIRST CUSTOM COMPONENT: expenses tracker
suddivideremo i componenti in file appositi, in modo da avere un file per ogni componente
src - cartella components(conterrà i file sorgente dei componenti)
App.js è un tipo speciale di componente, è il COMPONENTE RADICE/PRINCIPALE che viene reso in index.js con l'istruzione render(della libreria react dom)
abbiamo un albero di componenti
<App />
    <Header>
    <Tasks>
        <Task>
        <Task>
        <Task>
        <Task>
components - ExpenseItem.js
non lo importerò in index.js, lì solo il componente radice App
lo importerò in App.js
---
--EXERCISE4 BUILD A FIRST COMPONENT
App.js
import React from 'react';
import ExerciseComponent from "./ExerciseComponent";
// don't change the Component name "App"
export default function App() {
    return (
        <div>
            <ExerciseComponent></ExerciseComponent>
        </div>
        );
}

ExerciseComponent.js
import React from 'react';
// Todo: Add your component code
// Important: Use export default function MyCmp() { ... }, don't define "export default" on a separate line!
export default function ExerciseComponent(){
    return(
        <h1>"First exercise - done!"</h1>
        );
}
---
--PASSING DATA VIA "PROPS"
quando voglio utilizzare lo stesso componente ma voglio che i dati non siano gli stessi ogni volta ceh lo usao, in sostanza voglio che la base di partenza sia sempre quella ma cambino i dati in esso contenuto, il problema è che i dati sono incorporati in questo componente, devo rendere "indipendenti" i vari componenti per quanto di base abbiano la stessa struttura
possiamo passare i dati al componente personalizzato aggiungendo un attributo e all'interno di tale componente possiamo accedere a tutti gli attributi eventualmente impostati sul nostro componente
con react anche i nostri componenti personalizzati possono avere degli attributi
possiamo impostare le proprietà dei nostri componenti personalizzati
è possibile render ei componenti riutilizzabili e configurabili utilizzando il concetto di props
il concetto di oggetti è importante perchè consente di rendere riutilizzabili i componenti e di passare i dati da un altro componente a questo
---
--EXERCISE5 PASSING DATA VIA "PROPS"
App.js
import React from 'react';
import Product from './Product';
import './styles.css';

// don't change the Component name "App"
export default function App() {
    
    const products = [
    {
        title: "Product 1",
        price: 10,
        description:"First product"
    },
    {
        title: "Product 2",
        price: 20,
        description:"Second product"
    },
    ];

    return (
        <>
        <div>
            <h1>My Demo Shop</h1>
        </div>
        <div>
            <Product
            title= {products[0].title}
            price= {products[0].price}
            description= {products[0].description}
            ></Product>
            <Product
            title= {products[1].title}
            price= {products[1].price}
            description= {products[1].description}
            ></Product>
        </div>
        </>
    );
}

Product.js
import React from 'react';

export default function Product({title, price, description}) {
    return (
        <article className="product">
            <h2>{title}</h2>
            <p className="price">${price}</p>
            <p>{description}</p>
        </article>
    );
}

styles.css
#code

REACT FRAGMENTS
fragment per racchiudere tutto dentro un padre quando non voglio usare un altro <div>
il return deve ritornaree 1 SOLO ELEMENTO
short syntax
<>
</>
oppure
<React.Fragment>
</React.Fragment>
---
--SPLITTING COMPONENTS INTO MULTIPLE COMPONENTS
quando abbiamo molta logica, è conveniente dividere l'applicazione in blocchi di costruzione più piccoli
ogni blocco è focalizzato su un compito fondamentale
nell'insieme costruiscono l'interfaccia
ogni componente resta da solo, relativamente piccolo e gestibile, con la sua base di logica
l'insieme di questi piccoli componti da vita a una complessa interfaccia utente
ad esempio la voce spesa può essere tranquillamente divisa per gestire meglio ogni parte(es data ecc)
quindi creo un nuovo componente ExpenseDate visto che avrà un suo stile, una sua logica
più i componenti diventano grandi, più c'è il bisogno di dividerli
anche per il css è sempre buona norma tenerlo separato

nel componente App abbiamo il riferimento a ExpenseItem ceh al suo interno ha il, riferimento a ExpenseDate
tutto questo grazie alle props, sono il odo in cui possiamo passare dati tra componenti in un progetto react, componenti con relazione diretta padre-figlio
ExpenseDate ha la responsabilità di renderizzare le date
ExpenseItem contiene il riferimento
---
--THE CONCEPT OF "COMPOSITION"("CHILDREN PROPS")
approccio a composizione, interfaccia a aprtire da elementi più piccoli
abbiamo i componenti Expenses, ExpenseItem, ExpenseDate
come creo un componente che fa solo da involucro per tutto il resto? -> Card.js
al momento abbiamo componenti molto specifici:
ExpenseDate si occupa di produrre una data esattamente in quel formato e quel modo
ExpenseItem si occupa di produrre una voce di spesa
date, title, amount sono oggetti di scena

App --contiene--> Card --che wrappa--> Expenses --che contiene--> ExpenseItem ---che contiene --> Card --che wrappa--> ExpenseDate(children di Card)

creo un nuovo componente per l'aspetto specifico della Card
children è un nome riservato e i valore di questo oggetto speciale children sarà sempre il contenuto tra i tag di apertura e chiusura del componente personalizzato

REACT DEVTOOLS
per vedere struttura dei componenti e ispezionare direttamente da chrome
su Card ad esempio
props
children:[<ExpenseDate />, <div />, <button />]
className: "expense-item"
rendered by
...
source
ExpenseItem.js:121
---
--EXERCISE6 COMPONENT COMPOSITION
App.js
import React from 'react';
import './styles.css';

// don't change the Component name "App"
export default function App() {
    return (
        <div>
            <h1>Todos</h1>
            
            <Card>
              <p>Please note: Below are just the most important todos - feel free to add more.</p>
            </Card>
            
            <ul>
              <li className="todo">
                <Card>
                  <h2>Learn React</h2>
                  <p>Learn React fundamentals & explore core concepts</p>
                </Card>
              </li>
              <li className="todo">
                <Card>
                  <h2>Practice React</h2>
                  <p>Apply your knowledge & build demo projects</p>
                </Card>
              </li>
            </ul>
        </div>
    );
}

Card.js
import React from "react";
export default function Card(props) {
    return <div className="card">{props.children}</div>;
}

styles.css
#code
---
--FIRST SUMMARY
ciò che finisce nell'HTML sono solo gli elementi HTML, i componenti personalizzati non finiscono nell'HTML
infatti non li vedrò nell'ispezione degli elementi, posso vederli solo con i devtools di react
l'aspetto negativo dell'applicazione che abbiamo costruito è che è ancora statica
in App.js ho infatti un array di oggetti expenses, che non cambia mai, i dati sono fissi
questo dipende dallo STATO
---
--A CLOSER LOOK TO JSX
la maggior parte delle dipendeze si occupa della trasformazione dietro le quinte
ispezionando sources - page - main.js
vedrò che il codice non è quello che ho scritto io, o meglio è stato trasformato
App.js
return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], 
    className: "expenses",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ExpenseItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: items[0].title,
      amount: items[0].amount,
      date: items[0].date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ExpenseItem__WEBPACK_IMPORTED_MODULE_1__["default"], 
      title: items[1].title,
      ...)
corrisponde a 
return
<div>
<Expenses items={expenses} />
</div>

inoltre in index.js usiamo ReactDOM e non react, non veine mai importato
importe ReactDOM from "react-dom/client";
importe React from "react"; prima era necessario in tutti i componenti in cui lo utilizzavo
dava Error: React is not defined
---
--ORGANIZING COMPONENT FILES
non tutti in un'unica cartella components, abbiamo ad esempio componenti generali per la UI e componenti più specifici che si occupano di renderizzare solo una specifica cosa
dentro components creo le cartelle
Expenses
UI
e sistemo gli import per dare il giusto path
---
--AN ALTERNATIVE FUNCTION SYNTAX
applico le modifiche ai componenti
prima
function App() {}
dopo
const App = () => {}
arrow functions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
---
--QUIZ1 REACT BASICS, COMPONENTS, PROPS & JSX
Domanda 1:
Which kind of code do you write when using React.js?
Declarative

Domanda 2:
What is "JSX"?
Special, non-standard syntax which is enabled in React projects

Domanda 3:
Why is React all about "Components"?
Every UI is made up of multiple building blocks(=components), hence it makes sense to think about user interfaces as "combination of components"s

Domanda 4:
What does "declarative" mean?
You define the desire outcome and let the library(React) figure out the steps

Domanda 5:
What is a "React Component"?
It's a js function which typically returns HTML(JSX) code taht should be displayed

Domanda 6:
How many custom React components must a React app have?
That's totally up to you

Domanda 7:
Which statement is correct?
With React, you build  a component tree with one root component that's mounted into a DOM node

Domanda 8:
What does "component tree" mean?
It means that you have a root node which then has more components nested beneath it

Domanda 9:
How do you pass data between components?
Via "custom HTML attributes"(props)

Domanda 10:
How can you output dynamic data in React components (i.e. in the returned JSX code)?
You can use single curly braces(opening & closing) with any JS expression between them
---
-SEZ 4 -TIME TO PRACTICE:COMPONENT BASICS:



TO DO
---
-SEZ 5 -REACT STATE & WORKING WITH EVENTS:
lo stato rappresenta il print momentaneo dell'applicativo
la nostra applicazione finora era statica, lo stato non cambiava, l'output era sempre quello e i dati erano fissi e dettati dal codice che scrivevo (nell'array expenses)
applicazioni devono essere INTERATTIVE e poter RIVCEVERE I DATI DALL'UTENTE
Handling Events(gestori di eventi)
Updating the UI & working with "state"(passare da stato A a stato B)
A closer look at components and state
---
--LISTENING TO EVENTS & WORKING WITH EVENT HANDLERS
creo un <button> in ExpenseItem per cambiare il titolo
button
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
1. prima
<button
    onClick={ () => {
        console.log("Clicked!");
    }}
>
Change Title
</button>

2. creando una funzione
function clickHandler(){
    console.log("Clicked!");
}
<button onClick={clickHandler()}>Change Title</button>

3. arrow function
const clickHandler = () => {
    console.log("Clicked!");
};
<button onClick={clickHandler}>Change Title</button>
convenzione di chiamarla handler perchè è legata a un eventHandler, non è una normale funzione che usiamo nel codice
---
--EXERCISE7 LISTENING TO EVENTS
App.js
import React from 'react';

import './styles.css';
// don't change the Component name "App"
export default function App() {
    const connectionHandler=()=>{
        console.log("Stored!");
    }
    return <button onClick={connectionHandler}>Bookmark</button>;
}

styles.css
#code
---
--HOW COMPONENT FUNCTIONS ARE EXECUTED
1. voglio cambiare titolo quando faccio click sul bottone
let titleToChange = title;

2. la utilizzo nella funzione
const clickHandler = () => {
    titleToChange = "Updated!";
    console.log(titleToChange);
};

3. e la richiamo nel return
<h2>{titleToChange}</h2>

ancora non vedo il risultato, vedo solo in console
perchè?
partiamo dal fatto che i nostri componenti altro non sono che funzioni, e come tali da qualche parte devono essere invocate
MA finora non abbiamo invocato nessun componente da nessuna parte, li abbiamo solo usati come componenti <Component></Component> nel nostro JSX(che è comunque una chiamata di funzione), infatti usando i componenti rendiamo react consapevole delle funzioni dei nostri componenti
COME FUNZIONA?
quando l'applicazione react viene caricata sullo schermo(quando la pagina viene visitata) tutto inizia nella index.js che punta al componente App(prima funzione componente chiamata) e di conseguenza agli altri
react valita il codice JSX -> chiama le funzioni dei componenti -> le funzioni restituiscono codice JSX(con a sua volta funzioni all'interno, come nel caso degli eventHandlers) -> questo viene a sua volta valitato fino a quando non c'è più codice da valutare -> valuta il risultato complessivo -> lo traduce in istruzioni DOM -> output sullo schermo
MA
questo non viene mai ripetuto, tutte queste oeprazioni vengono eseguite quando l'applicazione viene renderizzata, ma in seguito il gioco è fatto, tuttavia può essere necessario aggiornare ciò che vedo sullo schermo, ad esempio in seguito a un evento
abbiamo bisogno di dire a react che qualcosa è cambiato, che un determinato componente deve essere rivalutato
COME?
con il concetto di STATE
---
--WORKING WITH "STATE"(useState)
il titleToChange è un dato deve far sì che il componente venga rivalutato e ridisegnato sullo schermo
una variabile regolare come questa non consente ciò
let titleToChange = title;
la funzione del componente attualmente non viene richiamata una seconda volta dopo il rendering iniziale
l'evento onClick non implica che l'intero componente venga rivalutato

QUINDI
dobbiamo fare uno specifico import
IMPORTAZIONE PREDEFINITA
import React from 'react';
IMPORTAZIONE NOMINATIVA(specifichiamo cosa vogliamo estrarre dalla libreria)
import { useState } from "react";

useState
consente di definire i valori come stato, dove le modifiche a questi valori devono riflettersi nella funzione del componente che viene richiamata dinuovo, è ben diverso da una normale varibile let
creiamo un tipo speciale di variabile le cui modifiche richiameranno la funzione del componente

useState(title) questo hook restituisce sempre un array con due elementi esatti

IN DEFINITIVA QUANDO USO LO STATE?
se si dispone di dati che possono cambiare e le cui modifiche devono riflettersi sull'interfaccia utente,
allora è necessario lo stato, perchè le variabili normali non funzionano con lo stato
react rivaluta solo il componente di cui è variato lo stato, non tutti
---
--EXERCISE8 WORKING WITH "STATE"
App.js
import React, {useState} from 'react';
import './styles.css';

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
export default function App() {
    let price = "$100";// creata io
    
    const [pricePointer, setPrice] = React.useState(price);
    
    const clickHandler = () => {
        setPrice("$75");
    }
    
    return (
        <div>
            <p>{pricePointer}</p>// dev'essere il valore che punta a quello iniziaele
            <button onClick = {clickHandler}>Apply Discount</button>
        </div>
    );
}

styles.css
#code
---
--A CLOSER LOOK TO THE "USESTATE" HOOK
ExpenseItem viene richiamato 4 volte(in Expenses), ogni elemento riceve un proprio stato separato dagli altri
se cambiamo un title non cambiano anceh gli altri, ognuno ha uno stato indipendente
anche se usiamo un componente più di una volta gli stati saranno comunque separati
ovviamente non vogliamo che cambiando qualcosa, cambi anche qualcos'altro
senza lo stato la nostra interfaccia utente non cambierebbe mai
lo stato e l'event listener sono concetti importantissimi!
https://it.legacy.reactjs.org/docs/handling-events.html

Gli eventi React vengono dichiarati utilizzando camelCase, anziché in minuscolo.
In JSX, il gestore di eventi (event handler) viene passato come funzione, piuttosto che stringa.
---
--STATE CAN BE UPDATED IN MANY WAYS!
Thus far, we update our state upon user events (e.g. upon a click).
That's very common but not required for state updates! You can update states for whatever reason you may have.
Later in the course, we'll see Http requests that complete (where we then want to update the state based on the Http response we got back) but you could also be updating state because a timer (set with setTimeout()) expired for example.
---
--RESPONDING TO EVENTS/UPLOADING THE SCREEN/USING HOOKS(react.dev)
https://it.legacy.reactjs.org/docs/handling-events.html
https://react.dev/learn#responding-to-events
responding to EVENTS:
you can respond to events by declaring event handler functions made inside your components
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

updating the SCREEN:
1. import { useState } from 'react';

2. declare a state variable
const [count, setCount] = useState(0);

You’ll get two things from useState: 
-the current state (count)
-the function that lets you update it (setCount).
You can give them any names, but the convention is to write [something, setSomething].
The first time the button is displayed, count will be 0 because you passed 0 to useState().
When you want to change state, call setCount() and pass the new value to it.
Clicking this button will increment the counter:

3. 
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

4. App.js finished
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

using HOOKS:
Functions starting with use are called Hooks.
useState is a built-in Hook provided by React.
You can find other built-in Hooks in the API reference.
You can also write your own Hooks by combining the existing ones.

Hooks are more restrictive than other functions.
You can only call Hooks at the top of your components (or other Hooks).
If you want to use useState in a condition or a loop, extract a new component and put it there.
---
--ADDING FORM INPUTS
possibilità di raccogliere i dati dell'utente
finora i componenti riguardavano l'output delle spese, ora mi servono gli input
dentro components nuova cartella NewExpense, sarà la spesa inserita in input dall'utente
nuovi componenti NewExpense.js/.css per la nuova spesa inserita
nuovi componenti ExpenseForm.js/.css per il form
mi serviranno 3 campi di input per il form:
1. titolo
2. importo https://www.w3schools.com/tags/att_input_step.asp HTML input step attribute
3. data
in un primo momento vedrò il form ma non registrerò ancora i dati, quello lo farò dopo
---
--LISTENING TO USER INPUT
lavoriamo sulla raccolta degli input dall'utente
per cominciare dobbiamo aggiungere degli ascoltatori che ascoltino ogni pressione dei tasti/modifica degli input
---
--WORKING WITH MULTIPLE STATES
console.log(event.target.value);// ottengo ciò che ho inserito
ora cosa voglio fare con questo valore?
memorizzarlo
come gestire più stati?
stati separati che possono essere gestiti e aggiornati separatamente
---
--USING ONE STATE INSTEAD(AND WHAT'S BETTER)

  MULTIPLE STATES(tengo gli stati separati tra loro)
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  ONE STATE( raggruppo gli stati in un unico oggetto)
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

   const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput, 
      enteredTitle: event.target.value,o
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };
---
--UPDATING THE STATE THAT DEPENDS ON THE PREVIOUS STATE
si dovrebbe utilizzare la sintassi di questa funzione ogni volta che l'aggiornamento dello stato dipende dallo stato precedente
setUserInput((prevState) => {
  return { ...prevState, enteredTitle: event.target.value };
});
---
--EXERCISE9 USING STATE WITH FORM INPUTS
You're working on a text messaging app and your task is to validate the text entered by a user whilst the user is typing.
If the text message entered is valid (for this example: if it's at least 3 characters long), the text "Valid message" should be displayed below the input field. If it's invalid (i.e., shorter than 3 characters), the text "Invalid message" should be displayed.
App.js
import React from 'react';
 
import './styles.css';
 
// don't change the Component name "App"
export default function App() {
    const [messageValidity, setMessageValidity] = React.useState('Invalid');// stato di partenza, parte invalid
    
    function messageChangeHandler(event) {
        const value = event.target.value;
        (value.trim().lenght < 3) ? setMessageValidity('Invalid') :setMessageValidity('Valid')
    }
    
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={messageChangeHandler} />
            <p>{messageValidity} message</p>
        </form>
    );
}

styles.css
#code
---
--EXERCISE10 UPDATING STATE BASED ON OLDER STATE
App.js
import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [counter, setCounter] = React.useState(0);
    
    function counterHandler() {
        setCounter(prevCounter => prevCounter + 1);
    }
    
    return (
      <div>
        <p id="counter">{counter}</p>
        <button onClick={counterHandler}>Increment</button>
      </div>
    );
}

styles.css
#code
---
--ALTERNATIVE: CREATING A SHARED HANDLER FUNCTION
FUNZIONI SINGOLE E SEPARATE

const titleChangeHandler = (event) => {
  setEnteredTitle(event.target.value);
};

const amountChangeHandler = (event) => {
  setEnteredAmount(event.target.value);
};

const dateChangeHandler = (event) => {
  setEnteredDate(event.target.value);
};

<input type="text" onChange={titleChangeHandler} />
<input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
<input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />

UNICA FUNZIONE
const inputChangeHandler = (identifier, value) => {
  if (identifier === "title") {
    setEnteredTitle(value);
  } else if (identifier === "date") {
    setEnteredDate(value);
  } else {
    setEnteredAmount(value);
  }
};

<input type="text" onChange={ (event) => inputChangeHandler("title", event.target.value)}
<input type="text" onChange={ (event) => inputChangeHandler("amount", event.target.value)}
<input type="text" onChange={ (event) => inputChangeHandler("date", event.target.value)}

HIGHER ORDER FUNCTION
A higher order function is a function that takes a function as an argument, or returns a function
identifier è il valore che è stato modificato
const inputChangeHandler2 = (identifier, value) => (event) => {
  if (identifier === "title") {
    setEnteredTitle(event.value);
  } else if (identifier === "date") {
    setEnteredDate(event.value);
  } else {
    setEnteredAmount(event.value);
  }
};

<input type="text"onChange={inputChangeHandler("title")}/>
<input type="text"onChange={inputChangeHandler("amount")}/>
<input type="text"onChange={inputChangeHandler("date")}/>

manteniamo la versione con funzioni singole
---
--HANDLING FORM SUBMISSION
<button type="submit">+ Add Expense</button>
il modulo deve essere inviato quando premo il bottone + Add Expense
il sumbit genera un evento che possiamo "ascoltare" -> evento di INVIO del form

const submitHandler = (event) => {
  event.preventDefault();

  const expenseData = {
    title: enteredTitle,
    amount: enteredAmount,
    date: new Date(enteredDate),
  };
  console.log(expenseData);
};
<form onSubmit={submitHandler}>
voglio reagire a questo sumbit creando una funzione che verrà eseguita ogni volta all'invio del form
---
--ADDING TWO-WAY BINDING
ora voglio poter eliminare gli input inseriti in modo che ripartano vuoti
two-way perchè:
per gli ingressi non ci limitiamo ad ascoltare le modifiche, possiamo anche passare un nuovo valore all'ingresso, in modo da poterlo resettare o modificare programmaticamente
lo facciamo aggiungendo all'input l'attributo 
value
---
--CHILD-TO-PARENT COMPONENT COMMUNICATION(BOTTOM-UP)
obbiettivo finale: aggiungere la nuova spesa all'elenco delle spese

finora da padre a figlio
in Expenses posso passare title, amount e date dal componente Expense al componente figlio ExpenseItem tramite le props

ma come faccio da figlio a padre?

supponiamo di voler passare i dati delle spese raccolti in ExpenseForm a NewExpense che viene poi utilizzato da App
devo assicurarmi di passare i dati di ExpenseForm a NewExpense(child to parent) 
e poi da NewExpense a App(child to parent)
MA non posso saltare i componenti intermedi
gli oggetti di scena possono essere passati solo da genitore a figlio

aggiungiamo un nuovo oggetto al modulo delle spese NewExpense
onSaveExpense è una funzione che sarà attivata quando invieremo il form
devo definirla per poterla utilizzare(come per le funzioni handler in ExpenseForm)

ora devo utilizzarla nel componente personalizzato
in ExpenseForm aggiungo le props e utilizzo in submitHandler la funzione prima definita in NewExpense()
props.onSaveExpenseData();
possiamo eseguirla anche se non è definita perchè stiamo passando un puntatore

alla fine sarà App ad avere bisogno della nuova spesa per aggiungerla all'array di spese

in definitiva:
nel parent(App) definisco la funzione handler prima del return
const addExpenseHandler = (expense) => {
  console.log("In App.js");
  console.log(expenses);
};

e dopo il return passo il puntatore al gestore(handler) onAddExpense al componente figlio
<NewExpense onAddExpense={addExpenseHandler} />

nel child(New Expense) passo le props come argomento e inoltre le utilizzo con il metodo onAddExpense per aggiungere
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // copia dell'oggetto, estraggo le coppie chiave-valore
      id: Math.random().toString(), // aggiungo id random
    };
    props.onAddExpense(expenseData);
  };
}

utilizzato gli oggeti di scena per ricevere una funzione dal componente genitore, da richiamare nel figlio
stessa cosa ho fatto poi da NewExpense a ExpenseForm
---
--LIFTING THE STATE UP
ogni volta che spostiamo i dati da un componente figlio a un genitore per usarli/passarli a un altro figlio

Expenses e NewExpense sono fratelli e non possono comunicare tra loro
si utilizza quindi il componente padre più vicino(App) che ha accesso diretto/indiretto a entrambi quei figli
posso memmorizzare lo sttao nel componente più vicino, quindi nel componente genitore, che ha accesso a entrambi i component i coinvolti, sollevando il nostro stato -> lifting the state up, passando quindi i dati di stato generati dalla NewExpense a App
come in NewExpense

schema di come comunicano i componenti fratelli
NewExpense --lifting the state up--> App --passing data via props--> Expenses
NewExpense --X--> Expenses NO

l'obbiettivo è sempre quello di sollevarlo più in alto possibile nell'albero dei componenti fino a ottenere
un componente che abbia accesso sia ai componenti che generano dati sia a quelli che ne hanno bisgno, non per forza è il componente App
---
--DERIVED/COMPUTED STATE
stato derivato o calcolato, o di valori derivati o calcolati
Expenses
---
--CONTROLLED VS UNCONTROLLED COMPONENTS & STATELESS VS STATEFUL COMPONENTS
controlled
ExpensesFilter is controlled by Expenses
un valore utilizzato nel componente, come il valore selezionato nel menù a tendina, viene passato
vs
uncontrolled
gli altri che non sono controllati da nessun componente

stateful/smart/containers
gestiscono stati interni(es Expenses gestisce lo stato del fitro per l'anno)
solitamente ne abbiamo solo un paio così, poi lo stato viene diffuso e distribuito attraverso oggetti di scena
vs
stateless/dumb/presentational
usano solo props e danno JSX come output
non hanno stati interni ma servono solo a produrre dati(es ExpenseItem se non consideriamo il cambio del title lui non dovrebbe gestire niente ma servirebbe solo a produrre output)
PER AVERE UN'APPLICAZIONE DIVISA IN PEZZETTI RIUTILIZZABILI si prediligono gli stateless agli stateful
---
--QUIZ2 WORKING WITH EVENTS & STATE
Domanda 1:
How should you NOT listen to events when working with React?
Adding a
That's the correct choice because this is how you should NOT set up event listening. This would be imperative code, you're not using React's features with this code and you would trigger some function that lives outside of React components and hence wouldn't be able to interact with React component state.

Domanda 2:
Which value should you pass to event listener props like onClick?
A pointer at the function that should execute when the event occurs

Domanda 3:
How can you communicate from one of your components to a parent (i.e. higher level) component?
You can accept a function via props and call it from inside the lower-level(child) component to then trigger some action in the parent component(which passed the function)

Domanda 4:
How can you change what a component displays on the screen?
Create some "state" value(via useState) which you can then change and output in JSX

Domanda 5:
Why do you need this extra "state" concept instead of regular JS variables which you change and use?
Because standard JS variables don't cause React components to be re-evaluated

Domanda 6:
Which statement about useState is NOT correct?
It receives an (optional) initial state value as an argument - TRUE
Calling useState again will update the satte value - FALSE
It returns an array with exactly two elements - TRUE

Domanda 7:
How can you update component state (created via useState)?
You can call the state updating function which useState also returned

Domanda 8:
How much state may you manage in one single component?
You can have as many state slices as you need/want

Domanda 9:
What's wrong about this code snippet?
const [counter, setCounter] = useState(1);
...
setCounter(counter + 1);
If you update state that depends on the previous state, you should use the "function form"(prevState) of teh state updating function instead
---
-SEZ 6 -RENDERING LISTS & CONDITINAL CONTENT:
--RENDERING LISTS OF DATA
rendere la lista di dati dinamica, aggiungendo elementi alla lista, filtrandoli per anno
Expenses, App
ARRAY.PROTOTYPE.MAP()
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array

callbackFn
A function to execute for each element in the array, funzione passata come argomento

const array1 = [1, 4, 9, 16];

// Pass a function to map, a callback
const map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

abbiamo ottenuto una lista dinamica, che dipende direttamente dall'array expenses
---
--EXERCISE11 RENDERING LISTS OF DATA(IMPORTANTE ESEMPIO)
App.js
import React from 'react';
import Todo from './Todo';
import './styles.css';

// don't change the Component name "App"
export default function App() {
    
    const DUMMY_TODOS = [
        {
        text:'Learn React',
        },
        {
        text:'Practice React',
        },
        {
        text:'Profit!',
        },
    ];

    return (
        <ul>
          {DUMMY_TODOS.map((todo)=>(
              <Todo 
                text={todo.text} />
              ))}
        </ul>
    );
}

Todo.js
import React from 'react';

export default function Todo({text}) {
    return <li>
    <h2>{text}</h2>
    </li>;
}

styles.css
#code
---
--USING STATEFUL LISTS
come possiamo aggiornare la lista?
App
---
--UNDERSTANDING "KEYS"
Expenses
risolviamo il warning
Warning: Each child in a list should have a unique "key" prop.
se ispezioniamo gli elementi sul browser (Elements) vedremo che le nostre spese altro non sono che <div>
<div class="card expense-item"></div>
<div class="card expense-item"></div>
<div class="card expense-item"></div>
<div class="card expense-item"></div>
aggiungendo una spesa(come abbiamo visto la aggiungiamo come primo elemento della lista e come tale viene renderizzato nell'interfaccia), nonostante ciò vediamo osservando i <div> nell'ispezione, che è l'ultimo a lampeggiare(significa che è stato aggiunto/modificato), questo non ha senso perchè abbiamo detto che l'abbiamo aggiunto all'inizio della lista, anche se espandendo il primo <div> vedrò comunque che è quello giusto
si è posizionato quiindi come primo sia a livello estetico che a livello di <div>
MA l'ultimo ha lampeggiato
perchè?
quando aggiungo un nuovo elemento, react lo posiziona come ultimo nei div, poi aggiorna tutti gli elementi e sostituisce il loro contenuto in modo che corrisponda nuovamente all'ordine prestabilito(nel nostro caso che sia il primo nella lista)
non è ottimale
questo accade perchè per react tutti questi elementi "sembrano" simili, vede solo che l'array è cambiato, ceh è stato aggiunto un elemento, quindi semplicemente aggiunge un <div> alla fine e poi percorre tutti gli elementi e aggiorna il contenuto di ognuno per farlo corrispondere dinuovo al contenuto secondo l'ordine in cui sono disposti nell'array
-> tutti gli array vengono visitati e aggiornati, non è ottimale, può portare a dei bug se gli elementi sono statici e abbiamo uno stato gestito al loro interno
es.
se il primo elemento A ha un certo stato, aggiungendo un nuovo elemento B, il primo A verrebbe sovrascritto con il primo B
qualsiasi modifica di stato del primo A andrebbe persa -> problemi di prestazioni e bug

react al momento  controlla solo la lunghezza dell'array e poi controlla il numero di elementi
siccome per lui si assomigliano tutti, non sa dove aggiungere il nuovo elemento

ecco che le keys entrano in gioco
va nel luogo in cui è stato emesso l'elenco di articoli(in Expenses items.map(ecc)) e aggiungiamo l'OGGETTO KEY
si può aggiungere sia a componenti personalizzati che a elementi HTML incorporati
key identifica l'elemento che deve essere aggiunto - valore univoco per ogi voce dell'elenco(es id, nel nostro caso avevamo come proprietà anche l'id, univoco, nel caso in cui non avessi un id potrei usare un index passandolo a map) 
dopo aver aggiunto key, vedrò che lampeggia il primo <div> quando aggiungo un elemento, com'è corretto che sia, ora react è in grado di rinconoscere sia la lunghezza dell'array sia di capire dove collocare l'elemento
molto più efficiente
quindi
quando creo un elenco devo SEMPRE mettere una key
---
--OUTPUTTING CONDITIONAL CONTENT
costante per filtrare le spese in base all'anno selezionato
Expenses
resa dell'output in diverse condizioni
rendere funzionante il filtro per l'anno
se non esistono spese per quell'anno voglio visualizzare un messaggio per l'utente
filteredExpenses
---
--EXERCISE12 OUTPUTTING CONDITIONAL CONTENT
App.js
import React from 'react';
import "./styles.css";

// don't change the Component name "App"
export default function App() {
    const [isDeleting, setIsDeleting] = React.useState(false);
    
    // gestore delete
    const deleteHandler = () => {
        setIsDeleting(true);
    }

    // gestore proceed
    const procedeHandler = () => {
        setIsDeleting(false);
    }
    
    // variabile per gestire qua la condizione e non nel return
    let warning;
    
    // condizione
    if(isDeleting){
        warning = (
            <div id = "alert">
            <h2>Are you sure?</h2>
            <p>These changes can't be reverted!</p>
            <button onClick={procedeHandler}>Procede</button>
            </div>
            );
    }
    
    return (
      <div>
      {warning}
      <button onClick={deleteHandler}>Delete</button>
      </div>    
    );
}

styles.css
#code
---
--ADDING CONDITIONAL RETURN STATEMENTS
ExpensesList, Expenses
spostare la logica dell'elenco in un nuovo componente ExpensesList
così da rendere più snello Expenses
---
--DEMO APP: ADDING A CHART
nuova cartella Chart
Chart, ChartBar
---
--ADDING DYNAMIC STYLES
Chart, ChartBar
attributo style per stile dinamico
---
--WRAP UP & NEXT STEP
Chart, ChartBar, ExpensesChart, Expenses
passare i dataPoints
ExpensesChart lo uso in Expenses
---
--FIXING A SMALL BUG
The demo application has a small bug at the moment: When adding multiple values, those values are added as strings instead of numbers.
Fixing it is easy though, simply make sure you enforce a number conversion:

In ExpenseForm.js, just change

const expenseData = {
  title: enteredTitle,
  amount: enteredAmount,
  date: new Date(enteredDate),
};
to

const expenseData = {
  title: enteredTitle,
  amount: +enteredAmount,
  date: new Date(enteredDate),
};
in the submitHandler function.
---
--QUIZ3 OUTPUTTING LISTS & CONDITIONAL CONTENT
Domanda 1:
What does this code snippet do?
someArray.map((element) => <p>{element}</p>)
---
-SEZ 7 -STYLING REACT COMPONENTS:



TO DO
---
-SEZ 8 -DEBUGGING REACT APPS:



TO DO
---
-SEZ 9 -TIME TO PRACTICE:A COMPLETE PRACTICE PROJECT:



TO DO
---
-SEZ 10 -DIVING DEEPER: WORKING WITH FRAGMENTS, PORTALS & "REFS":



TO DO
---
-SEZ 11 -ADVANCED: HANDLING SIDE EFFECTS, USING REDUCERS & USING THE CONTEXT API:
--WHAT ARE "SIDE EFFECTS" & INTRODUCING USEEFFECT
What is an "Effect"(or a "Side Effect")?(effetti collaterali, codice collaterale)
Main Job: Render UI & React to User Input(renderizzare interfaccia e reagire agli input)

Quando invochi useEffect, stai sostanzialmente dicendo a React di eseguire la tua funzione “effetto” dopo aver applicato i cambiamenti al DOM. Gli effetti vengono dichiarati all’interno dei componenti in modo che abbiano accesso alle sue props e state. Di default, React esegue gli effetti ad ogni renderizzazione — inclusa la prima.

Evaluate & render JSX
Manage state & props
React to (user) events & input
Re-evaluate component upon state & prop changes
This all is "baked into" React via the "tools" and features(es useState(), Hooks, Props ecc)

Side effects: anything else
Store data in browser storage
Send http request to backend servers
Set & manage timers
These tasks must happen outside of the normal component evaluation and render cycle, especially since they might block/delay rendering(es http requests)
questi sonon compiti che vanno oltre al semplice valutare i componenti e restituire JSX, oltre la resa di una UI

Handling side effects with the useEffect() hook
useEffect (() => {...}, [dependencies]);
primo argomento () => {...} funzione che dovrebbe essere eseguita dopo ogni valutazione del componente se le dipendenze specificate sono cambiate, side effect code va scritto qua
secondo argomento [dependencies] array di dipendenze, ogni volta che ne cambia una, allora viene eseguita la funzione
quindi la funzione verrà eseguita SOLO quando cambiano le dipendenze, non al render del componente
---
--USING THE USEEFFECT() HOOK
progetto scaricato da file allegati
npm install
npm run start
progetto 03-starting-project
cartelle Home, Login, MainHeader, UI
App
login fittizio per il momento
una volta effettuato l'accesso dovrei inviare la richiesta al be e recuperare alcuni dati di accesso, es un token che identifica l'utente come autenticato, voglio assicurarmene
al momento una volta effettuato il login perdo i dati perchè è bloccato nello stato
const [isLoggedIn, setIsLoggedIn] = useState(false);
per il momento quando ricarico l'applicazione, l'intero script si ravvia e tutte le varibili vengono perse
quindi
sarebbe utile archiviare i dati da qualche parte
inoltre vogliamo controllare se i dati erano persistenti, ossia se già esitevano, in questo caso l'utente non deve reinserire i dettagli perchè risulta già loggato -> useEffect
iniziamo con l'archiviazione dei dati nel loginHandler, dove voglio memorizzare quelle informazini nella memoria del browser
usiamo l'archiviazione locale con un meccanismo integrato nel browser grazie a:
localStorage, è un oggetto globale che è disponibile nel set del browser e fornisce all'elemento qualsiasi identificatore di nostra scelta, come ad esempio "isLoggedIn" per riconoscere che è loggato
localStorage.setItem("isLoggedIn", "1");
primo argomento: stringa, identificatore isLoggedIn ad esempio
secondo argomento: stringa, per memorizzare, 1 per loggato, 0 per non loggato ad esempio ma potrei chiamarlo come voglio
ecco perchè isLoggedIn, 1
ora salvo e andando sul browser:
F12 - application - local storage - vedo il mio localhost 3000 - isLoggedIn 1
utilizziamo lo useEffect
*
---
--USEEFFECT & DEPENDENCIES
in Login.js
voglio rieseguire la funzione non solo all'avvio dell'app, ma al variare di certe dipendenze
voglio contrassegnare il form come valido/non valido a seconda di una logica che si attiva 
ogni volta che viene inviato un messaggio di posta elettronica o la password è stata modificata
ecco che serve una dipendenza
---
--WHAT TO ADD & NOT TO ADD AS DEPENDENCIES
1. You DON'T need to add state updating functions (as we did in the last lecture with setFormIsValid): 
React guarantees that those functions never change, hence you don't need to add them as dependencies (you could though)
2. You also DON'T need to add "built-in" APIs or functions like fetch(), localStorage etc (functions and features built-into the browser and hence available globally): These browser APIs / global functions are not related to the React component render cycle and they also never change
3. You also DON'T need to add variables or functions you might've defined OUTSIDE of your components (e.g. if you create a new helper function in a separate file): Such functions or variables also are not created inside of a component function and hence changing them won't affect your components (components won't be re-evaluated if such variables or functions change and vice-versa)

You must add all "things" you use in your effect function if those "things" could change because your component (or some parent component) re-rendered.

EXAMPLE
import { useEffect, useState } from 'react';
 
let myTimer;

const MyComponent = (props) => {
  const [timerIsActive, setTimerIsActive] = useState(false);
 
  const { timerDuration } = props; // using destructuring to pull out specific props values
 
  useEffect(() => {
    if (!timerIsActive) {
      setTimerIsActive(true);
      myTimer = setTimeout(() => {
        setTimerIsActive(false);
      }, timerDuration);
    }
  }, [timerIsActive, timerDuration]);
};

1. timerIsActive is added as a dependency because it's component state that may change when the component changes (e.g. because the state was updated)

2. timerDuration is added as a dependency because it's a prop value of that component - so it may change if a parent component changes that value (causing this MyComponent component to re-render as well)

3. setTimerIsActive is NOT added as a dependency because it's that exception: State updating functions could be added but don't have to be added since React guarantees that the functions themselves never change

4. myTimer is NOT added as a dependency because it's not a component-internal variable (i.e. not some state or a prop value) - it's defined outside of the component and changing it (no matter where) wouldn't cause the component to be re-evaluated

5. setTimeout is NOT added as a dependency because it's a built-in API (built-into the browser) - it's independent from React and your components, it doesn't change
---
--USING THE USEEFFECT CLEANUP FUNCTION
in Login.js
useEffect che deve essere "ripulito"
return () => {};
---
--USEEFFECT SUMMARY
Login.js
1. senza dipendenze stamperebbe a ogni modifica del componente, quando scrivo, clicco ecc, non solo la prima volta
useEffect(() => {
  console.log("EFFECT RUNNING");
});

2. stampa solo al primo render dell'app
useEffect(() => {
  console.log("EFFECT RUNNING");
}, []);

3. stampa solo al variare di una delle dipendenze, in questo caso a ogni modifica della password
useEffect(() => {
  console.log("EFFECT RUNNING");

  return () => {
    console.log("EFFECT CLEANUP");
  };
}, [enteredPassword]);
---
--ADDING NESTED PROPERTIES AS DEPENDENCIES TO USEEFFECT
1. Destructiring: usiamo il destructuring così come dipendenza passiamo specifiche proprietà invece che l'intero oggetto
const { someProperty } = someObject;
useEffect(() => {
  // code that only uses someProperty ...
}, [someProperty]);

2. Dot notation: funzionerebbe anche accedendo alle proprietà con la dot notation
useEffect(() => {
  // code that only uses someProperty ...
}, [someObject.someProperty]);
This works just fine as well!

3. Intero oggetto: da evitare questo perchè la funzione verrebbe eseguitaogni volta che una qualsiasi delle propeietà dell'oggetto cambia, non 1 sola
useEffect(() => {
  // code that only uses someProperty ...
}, [someObject]);
---
*
-SPIEGAZIONE SU LIFECYCLE CLASS/FUNCTIONAL COMPONENTS E DIFFERENZA LIBRERIA - FRAMEWORK
react è una libreria
Libreria espone dei metodi ma si basa sulla sintassi di un altro linguaggio(es js), posso fare la stessa cosa in molti modi
react unisce con JSX html e js in un'unica soluzione

Per garantire la SINGLE PAGE APPLICATION, ossia che non si re renderizzi mai la pagina, ha bisogno di manipolare il DOM, come lo fa? grazie agli event handler, x agganciare azioni, eventi, a QUESTA azione corrisponde QUESTA reazione
 
React comprende che qualcosa è cambiato grazie agli event handler, onClick onChange ecc scatenano degli event handler, passano un evento, cosa accade? una reazione

A react serve qualcosa x capire cosa è cambiato, come uno storico del cambiamento, ossio lo stato, il prevState è un'istantanea dello stato precedente, quando un handler scatta, di conseguenza modifica uno stato, al suo cambiamento viene introdotto il VIRTUAL DOM, è un DOM parallelo che react si crea e che utilizza x confrontarlo con quello effettivo

event -> azione -> reazione -> cambiamento stato -> si riflette sul virtual dom -> tramite handler sa che qualcosa è stato cambiato

Lo comprende e non fa altro che confrontare i due DOM, comprende quale pezzo è cambiato, così aggiorna solo quel pezzo e non tutta la pagina, tutti questi cambiamenti, azioni ecc possiamo vederle come persone, con un loro ciclo di vita, un componente è come un umano, nasce, cresce, corre, muore

Il componente nasce = viene mostrato in pagina
cresce/corre = veine aggiornato
muore = viene smontato

Questi sono momenti prestabiliti nel ciclo di vita del componente, questi determinati momenti sichiamano in modo diverso in funzione del fatto che sia CLASS COMPONENT o FUNCTIONAL COMPONENT

CLASS COMPONENT: per le classi i metodi si chiamano component 
-WILL MOUNT = componente verrà mostrato, quando richiesta la sua creazione(scatta primad del render)
-DID MOUNT = componente visibile in pagina,(scatta dopo il render), sicuro che lo vedo al did mount
-WILL UPDATE =  prima dell'aggiornametno
-DID UPDATE = dopo l'aggiornamento
-WILL MOUNT = prima di essere stato smontato
-DID MOUNT = dopo essere stato smontato, quando non è più presente nel DOM, quando "passo" da una pagina all'altra (es la home page viene smontata quando passo a un'altra pagina)

COSA SI INTENDE CON SINGLE PAGE APPLICATION?
nelle function(rimosso after render)
non cambia mai pagina, ho una sola pagina html anche se all'atto pratico passo da una all'altra, richiedo solo il bundle, in una sola pagina scarico tutto, poi vedo le pagine, ogni pagina è un componente, un pezzo del puzzle, unico puzzle fatto di tanti pezzi, ho 1 sola pagina html(index.html che vedo all'inizio appena starto il progetto), tutti i miei componenti vanno sotto App, unico, sono solo tanti pezzi ma tutti dello stesso puzzle, vedo poi il passaggio da un componente all'altro, ma tutti sono sotto App
ho solo 1 file html, la index.html, dove c'è
<div id="root"></div>
poi in index.js
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
// ecco il collegamento con id root della index.html
// importa inoltre App.js che a sua volta si collega con gli altri componenti
Infatti da qui è solo un router, reindirizzamento di file js in js a cui corrisponde dell'html, carico 1 solo file poi spacchettato in componenti che vengono mostrati piuttosto che non

FUNCTIONAL COMPONENT: i metodi gestiscono SOLO AFTER RENDER, scattano solo dopo il render, rimosso prima del render per non incorrere in side effects dati dal fatto che sto cercando di fare qualcosa con un componente che ancora non è stato montato, il lifecycle dei functional components è gestito SOLO dallo useEffect, non abbiamo più i metodi will/did mount, update e ammount

Infatti useEffect è un unico metodo x tutti i metodi del lifecycle
MA va differenziato in qualche modo, come?
Per fare in modo che scatti in un momento piuttosto che un altro, utilizziamo le DIPENDENZE

useEffect(() => {
  getAllPeople();
}, []);
indica che deve essere eseguito solo quando il componente viene montato per la prima volta

useEffect(() => {
  getAllPeople();
});
solo callback, indica che deve essere eseguuito ogni volta che renderizzo il componente, ogni volta che ricarico la pagina

useEffect(() => {
  getAllPeople();
}, [stato1, stato2]);
come dipendenza va usato qualcosa ceìhe MUTA, ceh cambia, quindi in questo caso verrà eseguito solo se 1/più delle dipendenze passate cambiano

useEffect(() => {
  return () => {};
}, []);
quando il componente viene smontato, durante l'ammount
eseguito solo nel momento dell'ammont, quando viene smontato
quindi posso usare lo stesso che x il mount([] vuote)
quando voglio fare qualcosa nel momento in cui ho chiuso una pagina, allora il componente viene smomtato quindi uso il return dela callback perchè viene usato quando il componente viene smontato
POSSO METTERE QUANTI USEEFFECT VOGLIO

DIVERSAMENTE
angular è un framework
framework impone pattern architetturale con determinata sintassi e maniera (basato su mvc nel caso di angular)
---
-SEZ 12 -PRACTICE PROJECT: BUILDING A FOOD ORDER APP:



TO DO
---
-SEZ 13 -A LOOK BEHIND THE SCENES OF REACT & OPTIMIZATION TECHNIQUES:



TO DO
---
-SEZ 14 -AN ALTERNATIVE WAY OF BUILDING COMPONENTS: CLASS-BASED COMPONENTS:



TO DO
---
-SEZ 15: -SENDING HTTP REQUESTS(E.G CONNECTING TO A DATABASE)
--HOW TO(NOT) CONNECT TO A DATABASE
Browser-side apps don't directly talk to databases
React App ---X---> DB(SQL, NoSQL ecc.)
Le credenziali del DB verrebbero esposte nel browser e sarebbero visibili a chiunque semplicemente dagli strumenti da sviluppatore
Problema se si tratta du dati sensibili
Ecco perchè non si comunica direttamente con il DB all'interno di react
Utilizziamo una Backend App(NodeJS, PHP ecc.) che si trova su un server diverso che non finirà mai nel codice visibile con F12, le credenziali di siurezza si trovano qui
Quindi
React(Frontend) App <------> Backend App <------> DB
---
--USING THE STAR WARS API
https://swapi.dev/
---
--OUR STARTING APP & BACKEND
progetto scaricato da file allegati
npm install
npm run start
progetto 04-httpRequests-project
file Movie, MoviesList
App
metto gli scripts nel package.json se non ci sono
creo il .gitignore

Movie ritorna le sue proprietà
MoviesList ritorna i singoli componenti Movie
App renderizza MoviesList(inizialmente dati fittizzi const dummyMovies, MA voglio recuperarli da DB)
---
--SENDING A GET REQUEST
Js axios
Axios: Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses and enables client-side protection against XSRF. It also has the ability to cancel requests.

Using the fetch api
The Fetch API provides a JavaScript interface for accessing and manipulating parts of the protocol, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

App.js
---
--USING ASYNC/AWAIT
App.js
---
--HANDLING LOADING & DATA STATES  
App.js
per capire se stiamo caricando e se abbiamo film o meno, introduciamo un altro pezzo di stato
---
--HANDLING HTTP ERRORS
App.js
per gestire errori tecnici come l'assenza di connessione rete/richiesta non gestita correttamente
e per gestire le risposte del server(es http status 100, 200, 404 ecc)
---
--USING THE USEEFFECT() FOR REQUESTS
App.js
voglio che i dati vengano recuperati appena carico la pagina
la fetch alla fine cambia lo stato del mio componente

USECALLBACK() evita il re-rendering dei componenti, evita il ciclo infinito
in modo da lanciare la richiesta HTTP immediatamente al render del componente e non solo dopo un pulsante
You need to pass two things to useCallback:
A function definition that you want to cache between re-renders.
A list of dependencies including every value within your component that’s used inside your function.
---
--PREPARING THE PROJECT FOR THE NEXT STEPS
AddMovie.js
App.js
ADD MOVIE
vogliamo creare una POST per l'inserimento di nuovi dati
usiamo un altro servizio di API, quella di star wars consente solo la lettura dei dati
Firebase
servizio che fornisce un be fittizio, un db fittizio a cui fare richieste
go to console
creo un progetto react-http
creazione - realtime database - create database - start in test mode
DAL FE NON PARLEREMO MAI DIRETTAMENTE CON IL DB, parleremo con Firebase che parlerà con un db dietro le quinte
uso l'indirizzo che mi fornisce e lo sostituisco a quello di star wars
https://react-http-488dc-default-rtdb.firebaseio.com/movies.json
---
--SENDING A POST REQUEST
App.js
inviamo i dati che inseriamo via POST a Firebase
utilizziamo fetch specificando come secondo argomento il metodo POST
quando aggiungo un film
sul db in tempo reale vedo la richiesta che ho inviato
cliccando su movies apre un codice criptico che una volta aperto mostra le info inviate

-movies
-NaGK-61zIvHrJH_iNml
openingText:"Lei può essere ciò che vuole, lui è solo Ken."
releaseDate:"2023"
title:"Barbie"

aprendo F12 
{name: '-NaGK-61zIvHrJH_iNml'}
name: "-NaGK-61zIvHrJH_iNml"
[Prototype]: Object

provando ora la GET
Cannot read properties of undefined (reading 'map')
quindi creo un array LOADEDMOVIES per poter vedere i film aggiunti
ora la fetch movies GET funziona

ora con F12 vedrò dei 3 film che ho aggiunto
{name: '-NaGKuGyumYPfShjfKjC'}
{name: '-NaGdcG-I0u_jKioBVpC'}
{name: '-NaGdz3BEwXB7h-oVvPn'}
---
-SEZ 16 -BUILDING CUSTOM REACT HOOKS:



TO DO
---
-SEZ 17 -WORKING WITH FORMS & USER INPUT:



TO DO
---
-SEZ 18 -PRACTICE PROJECT:ADDING HTTP & FORMS TO THE FOOD ORDER APP:



TO DO
---
-SEZ 19 -DIVING INTO REDUX(AN ALTERNATIVE TO THE CONTEXT API):



TO DO
---
-SEZ 20 -ADVANCED REDUX:



TO DO
---
-SEZ 21: -BUILDING A MULTI-PAGE SPA WITH REACT:
finora l'ulr non cambiava mai nel passare da "una pagina" all'altra
--MODULE INTRODUCTION
React si basa sul concetto di SIGLE PAGE APPLICATION
lato client cambia ciò che l'utente vede, ma tecnicamente è sempre la stessa pagina
entra in gioco il routing per il passaggio tra diversi url ma restando sempre nella stessa pagina
MULTI PAGES IN SINGLE-PAGE APPS
---
--ROUTING: MULTIPLE PAGES IN SINGLE-PAGE APPLICATIONS
percorso diverso -> contenuto diverso
page change = new requests + response

per interfacce utente più complesse costruiamo delle SPAs
SINGLE PAGE APPLICATIONS
si invia 1 sola richiesta iniziale HTML e poi viene scaricato questo file HTML
il cambiamento della pagina viene gestito client-sided da react
cambia così il contenuto visibile senza un ulteriore file HTML
---
--PROJECT SETUP & INSTALLING REACT ROUTER
progetto scaricato da file allegati
npm i
npm run start
progetto 05-reactRouter-project
App
metto gli scripts nel package.json se non ci sono
creo il .gitignore

per il momento progetto base
installo pacchetto aggiuntivo

npm i react-router-dom
---
--DEFINING ROUTES
App.js
Home.js

https://example.com/homepage
protocollo://dominio/rotta

cartella pages come esempio i cui componenti saranno caricati tramite il routing
file Home
http://localhost:3000
---
--ADDING A SECOND ROUTE
App.js
Products.js
http://localhost:3000/products
---
--EXPLORING AN ALTERNATIVE WAY OF DEFINING ROUTES
App.js

usiamo questa
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
]);

esiste anche questa
importando createRoutesFromElements, Route
const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>
);
const router = createBrowserRouter(routeDefinitions);
---
--NAVIGATING BETWEEN PAGES WITH LINKS
per evitare di modificare manualmente l'url forniamo dei link nella pagina
App.js
Home.js
Products.js

metodo classico <a href=""></a>
Go to <a href="/products">the list of products</a>.
NON VA BENE: problema di questo approccio, vedo che l'icona del caricamento per un attimo diventa una croce e poi ritorna a caricare
questo perchè stiamo inviando una nuova richiesta al server, carichiamo dinuovo l'intera applicazione, 
non ha senso farlo perchè già abbiamo caricato tutto allo start dell'applicazione, lavoro extra inutile, perdiamo i vantaggi della spa

quindi entra in gioco un altro componente di react
Link
impedisce al browser di inviare altre richieste http
l'url cambierà ma senza inviare richieste
infatti l'icona di aggiornamento non subisce alcuna modifica
---
--LAYOUTS & NESTED ROUTES
cartella components in cui aggiungo un componente
MainNavigation.js
MainNavigation.module.css
sarà la "barra" di navigazione principale, conterrà i collegamenti alle varie pagine
non la metto in pages perchè non è una rotta
App.js
creo un layout che avvolga tutte queste rotte e carichi i componenti
un componente 
Root.js

Outlet
https://reactrouter.com/en/main/components/outlet
An <Outlet> should be used in parent route elements to render their child route elements. 
This allows nested UI to show up when child routes are rendered. 
If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

Root.module.css
(poi cancellato perchè ho messo nella index.css)

QUINDI
App ritorna RooterProvider che ha come prop router, da const router - RootLayout(che wrappa HomePage e ProductsPage)
RootLayout ritorna MainNavigation e come main Outlet(che definisce dove devono essere visualizzati i children)
MainNavigation ritorna i link ai componenti HomePage e ProductsPage
---
--SHOWING ERROR PAGES WITH ERRORELEMENT
pagina di errore predefinite nel caso di errore
in pages creo Error.js

sposto lo stile di Root.module.css del main nella index.css così posso evitare di importarlo ovunque

aggiungo la prop errorElement nella const router
per rendere la pagina di errore come fallback
---
--WORKING WITH NAVIGATION LINKS(NAVLINK)
MainNavigation.js
NavLink al posto di Link, ha un comportamento speciale che mi permette di avere come proo className una funzione
in cui definisco il comportamento del link in attività
potrei anche usare la prop style per definire lo stile in linea, ma meglio nel file css
---
--NAVIGATING PROGRAMMATICALLY
modo predefinito
quello di permettere agli utenti di navigare liberamente tra i link come fatto finora, tornare indietro

routing imperativo
se è scaduto un timer, se un form è stato inviato
Home.js
importiamo useNavigate, un hook di react
è una funzione che consente un'azione di navigazione direttamente nel codice
in questo caso il bottone porta a quella pagina e non ho possibilità di tornare indietro
---
--DEFINING & USING DYNAMIC ROUTES/ROUTES PARAMETERS
Products.js
elenco di prodotti su cui è possibile fare click per visualizzarne i dettagli

in pages creo il file ProductDetail.js

App.js
aggiungo una nuova rotta a ProductDetailPage
però ogni prodotto avrà i suoi dettagli
{ path: "/products/product-1", element: <ProductDetailPage /> },
{ path: "/products/product-2", element: <ProductDetailPage /> },
{ path: "/products/product-3", element: <ProductDetailPage /> },
{ path: "/products/product-4", element: <ProductDetailPage /> },
non avrebbe molto senso perchè non so in anticipo quanti prodotti avrò, dovrei modificare sempre, è un codice statico

ecco perchè entrano in gioco le dynamic routes/parametri di percorso di react-router-dom
segmento di percorso dinamico, in base all'id in questo caso
{ path: "/products/:productId", element: <ProductDetailPage /> },

ProductDetail.js
importo useParams
The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.
---
--ADDING LINKS FOR DYNAMIC ROUTES
Products.js
aggiungere link reali per passare da un prodotto all'altro
importo Link
---
--UNDERSTANDING RELATIVE & ABSOLUTE PATHS
App.js
Home.js
Products.js
ProductDetail.js

percorsi assoluti iniziano con /
dopo il nome del dominio
/products

percorsi relativi non iniziano con /
dopo il percorso della rotta, dopo il percorso attivo in quel momento
products

dopo aver modificato tutti i link da assoluti a relativi vedrò il percorso cambiare nella barra di ricerca
---
--WORKING WITH INDEX ROUTES
App.js
il percorso della HomePage è come se non ci fosse
path: ""
abbiamo 2 percorsi diversi perchè vogliamo avvolgere tutto nel RootLayout
l'alternativa al percorso vuoto è
index: true

quindi stiamo indicando il percorso predefinito se il percorso delle rotto padre è attivo
verrà caricata solo se il percorso inizia con /
---
--ONWARD TO A NEW PROJECT SETUP
progetto scaricato da file allegati
progetto 06-reactRouter-project

cartella backend-api(codice già scritto per be fittizio)
cartella react-frontend(dove lavoriamo)
components già fatti
EventForm.js/.module.css
EventItem.js/.module.css
EventsList.js/.module.css
EventsNavigation.js/.module.css
MainNavigation.js/.module.css
App.js

file how-to.use

AVVIARE SERVER BE E FE
npm i in entrambe le cartelle, dove c'è un package.json va SEMPRE fatto l'install

2 terminali diversi perchè devono essere entrambi attivi assieme
cd backend-api
npm i
npm start

cd frontend
npm i
npm i react-router-dom
npm start

creo i .gitignore per i node_modules
---
--TIME TO PRACTICE: PROBLEM
App.js
challenge exercise
cartella pages EditEventPage, ErrorPage, EventDetailPage, EventsPage, HomePage, NewEventPage, RootLayout, EventsRootLayout

EventsNavigation ho cambiato la navigazione da a href a NavLink to per renderla spa e non inviare altre richieste, infatti si vedeva l'icona del caricamento che si interrompeva con a
---
--TIME TO PRACTICE: SOLUTION
App.js
piccola modifica alle rotte
---
--DATA FETCHING WITH A LOADER()
funzione di caricamento
EventsPage.js sostituito
App.js aggiunta prop loader a EventsPage
---
--USING DATA FROM A LOADER IN THE ROUTE COMPONENT
come accedere ai dati restituiti dal loader
devo andare nel componente in cui serve
EventsPage.js

useLoaderData
https://reactrouter.com/en/main/hooks/use-loader-data
After route actions are called, the data will be revalidated automatically and return the latest result from your loader.
---
--MORE LOADER() DATA USAGE
dove possiamo usare useLoaderData?
SI
direttamente in EventsPage.js che viene resa dalla rotta in cui abbiamo aggiunto il loader in App.js
oppure direttamente in EventsList(esempio commentato)
NO
in RootLayout NO perchè starei cercando di accedere ai dati da un percorso definito a livelo inferiore, in cui i dati ancora non esistono, basta vedere l'ordine in cui sono definiti i percorsi const router in App.js
è possibile invece accedervi dai componenti dello stesso livello o superiore

1.
useLoaderData in EventsList
EventsPage.js
import EventsList from "../components/EventsList";

const EventsPage = () => {
  return <EventsList />;
}

export default EventsPage;

EventsList.js
import { useLoaderData } from "react-router-dom";
import classes from "./EventsList.module.css";

function EventsList() {

  const events = useLoaderData();

  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <a href="...">
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default EventsList;


2.
useLoaderData in EventsPage(usiamo questo)
EventsPage.js
import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

const EventsPage = () => {

  const events = useLoaderData();

  return <EventsList events={events} />;
};
export default EventsPage;

EventsList.js
import classes from "./EventsList.module.css";

function EventsList({ events }) {

  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <a href="...">
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default EventsList;
---
--WHY SHOULD LOADER() CODE BE STORED?
aver aggiunto loader in App.js ha reso il componente più gonfio, non consigliato perchè potrei doverne aggiungerne altri

è consigliato scrivere il codice del loader direttamente nel relativo componente, nel nostro caso EventsPage.js
export function loader()
così sarà disponibile dall'esterno e basterà chiamarlo

il componente EventsPage resta comunque snello perchè la funzione è esterna
---
--WHEN ARE LOADER() FUNCTIONS EXECUTED?
eseguito quando si sta per visitare la pagina, prima della resa del componente

potremmo impostare un timeout nel backend-api - routes - events.js
stoppo e riavvio be per vedere la modifica
solo dopo 1.5 sec si vedranno gli eventi
sono sicura che il componente è già stato renderizzato

è così che si caricano i dati
inoltre il loader viene eseguito su browser e non su server
quindi si possono usare le API del browser nelle funzioni
---
--REFLECTING THE CURRENT NAVIGATION STATE IN THE UI
come avere un feedback per capire che sta caricando
hook per lo stato delle transizioni
useNavigation
non viene usato sul componente di cui sono in attesa(EventsPage) ma in un componente che già è stato caricato(RootLayout) in modo che sia visibile, sennò non lo vedrei xk il componente è in loading

RootLayout.js
---
--RETURNING RESPONSES IN LOADER()S
EventsPage.js
App.js
il loader può restituire qualsiasi tipo di dato, una response ad esempio
---
--WHICH KIND OF CODE GOES INTO LOADER()S
non si possono usare gli hooks di react(useState ecc) perchè funzionano solo nei componenti react, e loader non lo è
---
--ERROR HANDLING WITH CUSTOM ERRORS
gestione degli errori
da fare quando acquisiamo dei dati
isError
EventsPage.js
ErrorPage.js
---
--EXTRACTING ERROR DATA & THROWING RESPONSES
ErrorPage.js
EventsPage.js
PageContent.js

in components creo PageContent.js/.module.css
lo uso in ErrorPage.js

EventsPage.js
JSON.stringify Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
per passare un oggetto{message: "Text}

ErrorPage.js
useRouteError

OUTPUT DEGLI ERRORI:

Se l'errore riguarda il db spento(indipendentemente dagli url)
An error occurred!
Something went wrong!

const response = await fetch("http://localhost:8080/eventsasasas"); 
Se l'errore è dovuto all'url sbagliato nella fetch degli eventi(EventsPage)
ma nel browser http://localhost:3000/events
An error occurred!
Could not fetch events.

http://localhost:3000/aaaaaa
Se l'errore riguarda la ricerca di un url che non esiste nel browser
Not found
Could not find resource or page.

ORA RISISTEMO L'URL CORRETTO NELLA FETCH
---
--THE JSON() UTILITY FUNCTION
EventsPage.js
ErrorPage.js

Costruiamo delle RESPONSE per la gestione degli errori
le response possono essere costruite manualmente
if (!response.ok) {
  throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    status: 500,
  });
}ecc

oppure response costruita con JSON UTILITY importandola, a cui passo i dati che saranno inclusi nella risposta senza convertirli a mano
if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
}ecc

inoltre non è più necessario il json parse in ErrorPage
if (error.status === 500) {
  // con response manualmente
  message = JSON.parse(error.data).message;
  // con json utility
  message = error.data.message;
}

otteniamo lo stesso output di errori di prima
---
--DYNAMIC ROUTES & LOADER()S
(come fatto per EventsPage con il loader)
EventsList.js
EventDetailPage.js
App.js

voglio visualizzare il componente dell'elemento evento, non solo l'id
utilizzo il LOADER
utilizzo useLoaderData
---
--THE USEROUTELOADERDATA() HOOK & ACCESSING DATA FROM OTHER ROUTES
useRouteLoaderData
https://reactrouter.com/en/main/hooks/use-route-loader-data

EventItem.js
<Link to="edit">Edit</Link>

EditEventPage.js
aggiungo il componente EventForm
uso useRouteLoaderData()

ora il button edit porta al form

il form deve essere già precompilato con i dati dell'evento che vogliamo modificare
dobbiamo recuperare gli stessi dati che abbiamo recuperato per la pagina EventDetailPage

App.js
modifico le rotte, questa rotta non rende alcun elemento, ma solo dei children
ROTTE ANNNIDATE
{
  path: ":eventId",
  id:"event-detail",
  loader: eventDetailLoader,// così che vanga caricato subito

  children: [
    {
      index: true,
      element: <EventDetailPage />,
      // loader: eventDetailLoader,
    },
    {
      path: "edit",
      element: <EditEventPage />,
    },
  ],
},**

EditEventPage.js
uso useRouteLoaderData()
prende come argomento l'id della rotta

EventForm.js
aggiungo i defaultValue così che sia precompilato

ecco come accedere a un loader di livello superiore da un percorso che non ha un loader
il loader può essere riutilizzato su tutte le rotte che necessitano di quegli stessi dati

**
This hook makes the data at any currently rendered route available anywhere in the tree. This is useful for components deep in the tree needing data from routes much farther up, as well as parent routes needing the data of child routes deeper in the tree.

anche in EventDetailPage.js
const data = useRouteLoaderData("event-detail");
// prende l'id della rotta del componente da cui deve prendere i dati
// i dati sono presenti nella pagina dei detail, e i voglio anche qui in edit
// utile x componenti deep che hanno bisogno di dati da componenti più in alto nell'albero delle rotte
---
--PLANNING DATA SUBMISSION
NewEventPage.js
per inviare i dati al be, aggiungere un evento

a differenza di edit, qua non avrò il form con i dati precompilati

quando clicco su SAVE -> dati inviai a api be

così come usiamo i loader per caricare i dati
qui possiamo aggiungere actions per inviare i dati
---
--WORKING WITH ACTION() FUNCTIONS
App.js
aggiungo alla rotta di NewEventPage una action, come avevo fatto con i loader**

come in EventsPage.js il loader
action fa riferimento alla funzione che scrivo in 
NewEventPage.js
infatti non vogliamo scrivere codice in App, ma direttamente nel componente in cui serve, poi la esporto
posso estrarre i dati direttamente dal modulo
vado in EventForm.js e mi assicuro che tutti gli input/text area abbiano l'attributo name, sarà usato per estrarre i dati

EventForm.js
mi assicuro che ci siano i name
sostituisco form con il componente Form(da react-router-dom)
fa in modo che l'invio predefinito del browser di una richiesta al be venga omesso, INVECE prenderà la richiesta che sarebbe stata inviata al be e la passerà alla action che conterrà tutti i dati inviati come parte del modulo
aggiungo quindi
method="post"
in questo caso fa riferimento all'azione del componente stesso
potrebbe anche esserci una action="/altro-percorso" che punta alla funzione in quel percorso

torniamo in NewEventPage.js
nella action dobbiamo entrare in possesso della richiesta catturata dal router e inviarla alla action
la funzione action, come il loader, viene eseguita da un router e riceve come argomento un oggetto che possiede request e params

usiamo il redirect

**posso quindi aggiungere la action
import { action as newEventAction } from "./pages/NewEventPage";

{
  path: "new",
  element: <NewEventPage />,
  action: newEventAction,
},

creo un nuovo evento(con l'indirizzo dell'immagine)
---
--SUBMITTING DATA PROGRAMMATICALLY
EventItem.js
startDeleteHandler





-JSON.STRINGIFY E JSON.PARSE
The JSON.stringify() static method converts a JavaScript value to a JSON string

The JSON.parse() static method parses a JSON string, constructing the JavaScript value or object described by the string
---
-DOVE INCLUDERE GLI SCRIPTS NEI FILE HTML?
gli script vanno al fondo dell html, nel footer di solito, perchè può dare problemi renderizzare gli script prima di aver caricato l'html -> rende fluido, evita bug
---
-TABLE HTML
td table data
tr table row
th table head
---
-IL BROWSER LEGGE DIRETTAMENTE IL JSX?
no legge solo html, css, js
quindi entra in gioco bubble, una libreria che consente l'interpretazione del jsx per il browser
---
-DOPPIO RENDER IN LOCALE
in locale react fa 2 volte il render, ecco perchè vedo 2 volte la stessa cosa
---
-PROGETTI esame, useeffect_1(VEDI APPUNTI NEI FILE)
get, post, update, fetch al be in locale e in remoto con api online, stati, useEffect, hadlers


custom hook aggregatore di funzioni, hook personalizzato, classe che vive di vita propria con proprio stato, fa delle azioni


-RISORSE
freeCodeCamp guida
https://www.freecodecamp.org/italian/news/la-guida-per-principianti-a-react

cos'è react
https://www.geekandjob.com/wiki/react

git docente
https://github.com/academind/react-complete-guide-code 

https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595350#overview 01 getting started
https://codesandbox.io/s/vanilla-js-demo-forked-n7gglf?file=/index.html vanilla-js-demo
https://codesandbox.io/s/react-vs-vanilla-demo-uc08fv?file=/public/index.html react-vs-vanilla-demo
https://codesandbox.io/s/first-react-app-start-7ec9fd first-react-app-start da aggiungere quarto bottone
https://codesandbox.io/s/first-react-app-zj5cx1 first-react-app risultato
https://create-react-app.dev/ create react app

https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8211776#content 02 js refresher

https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595388#content 03 react basics & working with components
creating a new react project
https://github.com/academind/react-complete-guide-code/tree/03-react-basics-working-with-components/code code
https://codesandbox.io/s/cmp-basics-start-4959mq?file=/src/index.css cmp-basic-start
https://runebook.dev/it/docs/react/fragments fragments

https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/38348444#content 04 time to practice:component basics

https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595950#content 05 react state & working with events

https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25597068#content 06 rendering lists & conditional content

07

08

09

10

https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599204#content 11 advanced: handling side effects, using reducers & using the context API

12

13

14

https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599778#content 15 sending http requests(e.g. Connecting to a Database)

https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599852#content 16 building custom react hooks

17

18

19

20 

https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/35733824#content 21 building a multi-page spa with react router

28 react + typescript

create react app
https://create-react-app.dev/

CodeSandbox
https://codesandbox.io/s/react-new?utm_source=dotnew

vite.js
https://vitejs.dev/guide/

documentazione
https://react.dev/

devtools
https://react.dev/learn/react-developer-tools

axios
https://github.com/axios/axios

firebase console
https://console.firebase.google.com/?_gl=1*1xaib8k*_ga*NjYwNDExNzguMTY5MDI5ODMyNA..*_ga_CW55HF8NVT*MTY5MDI5ODMyNC4xLjEuMTY5MDI5ODQ0NC4wLjAuMA..&pli=1

react router
https://reactrouter.com/en/main