import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  /**
   *al momento il login è gestito solo in questo modo
    una volta effettuato il login perdo i dati perchè è bloccato nello stato
    dovrei inviare la richiesta al be e recuperare alcuni dati di accesso, es un token che identifica l'utente come autenticato, voglio assicurarmene
    vorrei archiviare i dati in modo da non perderli quando faccio il login
    inoltre vogliamo controllare se i dati erano persistenti
    per il momento quando ricarico l'applicazione, l'intero script si riavvia e tutte le varibili vengono perse
   */

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // primo argomento una funzione, secondo argomento array di dipendenze
  useEffect(() => {
    // sto archiviando i dati in locale
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  // eseguita ogni volta che ricarico il componente
  // [] eseguita solo all'avvio dell'app, utile se voglio che lo esegua solo 1 volta
  // [dependencies] eseguita solo se le dipendende sono cambiate
  /**
   * ora sulla app dopo aver effettuato il login, anche ricaricando la pagina non torno nel login ma resto loggato
   * perchè ho impostato così lo useEffect SOLO all'avvio dell'app, memorizza lo stato
   * se vado a cancellare il mio stato isLoggedIn da application, ricaricando la pagina tornerò al login
   * in questo caso interviene il logoutHandler
   */

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    /**
     *sarebbe utile archiviare i dati da qualche parte
      inoltre vogliamo controllare se i dati erano persistenti, ossia se già esitevano, 
      in questo caso l'utente non deve reinserire i dettagli perchè risulta già loggato -> useEffect
      iniziamo con l'archiviazione dei dati nel loginHandler, dove voglio memorizzare quelle informazioni nella memoria del browser
      usiamo l'archiviazione locale con un meccanismo integrato nel browser grazie a:
      localStorage, è un oggetto globale che è disponibile nel set del browser,
      fornisce all'elemento qualsiasi identificatore di nostra scelta, come ad esempio "isLoggedIn" per riconoscere che è loggato
      primo argomento: stringa, identificatore isLoggedIn ad esempio
      secondo argomento: stringa, per memorizzare, 1 per loggato, 0 per non loggato ad esempio ma potrei chiamarlo come voglio
      ecco perchè isLoggedIn, 1
      ora salvo e andando sul browser:
      F12 - application - local storage - vedo il mio host 3000 - isLoggedIn 1
     */
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");// quando effettuo il logout rimuove il dato archiviato prima
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {/* !isLoggedIn è la negazione */}
        {/* && allora esegue quello */}
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
