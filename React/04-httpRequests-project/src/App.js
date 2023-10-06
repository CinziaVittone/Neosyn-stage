import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  // dati fittizi passati direttamente da qui, voglio recuperarli da DB, userò la star wars API

  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  // SENDING A GET REQUEST, FETCH API, USESTATE
  const [movies, setMovies] = useState([]);
  // HANDLING LOADING & DATA STATES
  // 1. quando il componente viene caricato i dati non vengono caricati subito
  const [isLoading, setIsLoading] = useState(false);
  // HANDLING HTTP ERRORS
  // E1. per gestire ad es rete assente, richiesta sbagliata ecc
  const [error, setError] = useState(null); // inizialmente non ho errori

  // andrà collegata al bottone con l'evento onClick
  // async function fetchMoviesHandler() {
  // USECALLBACK WRAPPA LA DEFINIZIONE DELLA FUNZIONE, evita il re-rendering dei componenti, evita il ciclo infinito**, restiuisce la funzione
  const fetchMoviesHandler = useCallback(async () => {
    // 2. diventa true quando inizia ad essere eseguita la funzione fetch()
    setIsLoading(true);
    // E2. per assicurarmi di cancellare eventuali errori precedenti
    setError(null);
    // fetch("https://swapi.dev/api/films/")
    //   .then((res) => {
    //     // ritorna una PROMISE
    //     return res.json(); // trasforma in json
    //   })
    //   .then((data) => {

    // E3. try-catch per gestire errori
    try {
      // USING ASYNC/AWAIT
      // const response = await fetch("https://swapi.dev/api/films/");
      // HANDLING HTTP ERRORS https://swapi.dev/api/film/
      // FIREBASE
      const response = await fetch(
        "https://react-http-488dc-default-rtdb.firebaseio.com/movies.json"
      ); // .json sennò richieste falliscono in firebase
      // ora results non c'è più, era una proprietà della api star wars

      // E4. genero un errore personalizzato con un message nel caso qualcosa vada storto
      // controllo che la response sia ok ancora prima di analizzare il corpo della risposta
      if (!response.ok) throw new Error("Something went wrong!😵");
      // in questo caso il restante codice dentro try non verrà eseguito

      const data = await response.json();

      // LOADEDMOVIES, per vedere ricaricando il film che ho aggiunto
      const loadedMovies = []; // inizialmente vuoto
      // dobbiamo adattare le proprietà, quelle che abbiamo scelto di usare in AddMovie in const movie, e l'id
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title, // data[alla posizione key].title
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        }); // aggiunge coppie chiave-valore
      }

      // devo trasformare le proprietà, il formato che voglio con le prop che mi interessano
      // online infatti ad esempio è release_date, io ho releaseDate
      // data.results.map non c'è più results
      // const trasformedMovies = data.map((movieData) => {
      //   return {
      //     // id SEMPRE e poi quelle che mi servono, come in Movie.js
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });
      // setMovies(trasformedMovies);
      setMovies(loadedMovies);
    } catch (error) {
      // se non scrivo nulla semplicemente gestisce l'errore ma non mi da alcun messaggio in console
      // E5. l'errore verrà visualizzato sotto forma del message
      setError(error.message);
    }
    // 3. torna false quando finisce di caricare perchè ormai abbiamo i dati
    // lo metto fuori dal try-catch in modo che venga eseguito sia con che senza errori
    setIsLoading(false);
  }, []); // ottengo i dati, devo accedere a results che è l'array di films

  // USING THE USEEFFECT() FOR REQUESTS
  // lo usiamo perchè in effetti function fetchMoviesHandler() alla fine cambia lo stato del componente
  // va anche bene, a patto che non sia direttamente la function App sennò creerei un ciclo infinito
  // molto utile per quella parte del codice che esegue il render
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]); // verrà eseguito solo se viene eseguita la funzione, **ciclo infinito però, ecco perchè useCallback()

  // ADD MOVIE, gestore che registra il film, via POST
  const addMovieHandler = async (movie) => {
    // per il momento li stampa solo il console
    // console.log(movie);
    const response = await fetch(
      "https://react-http-488dc-default-rtdb.firebaseio.com/movies.json",
      {
        // di default è GET quindi specifico il metodo POST
        method: "POST",
        // body è la risorsa che viene generata
        body: JSON.stringify(movie), // utilizzo l'oggetto JSON e il suo metodo stringify che trasforma un oggetto/array js in un json
        // intestazione che descrive il contenuto che sarà inviato(NON indispensabile)
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data); // {name: '-NaGK-61zIvHrJH_iNml'}
  };

  // VARIABILE CONTENT
  // controllo direttamente qua invece che nel return
  let content = <p>Found no movies.😓</p>;
  // if (movies.length > 0) {
  //   content = <MoviesList movies={movies} />;
  // }

  // if(senza else) con una sola istruzione può essere scritto sulla stessa riga
  // if (movies.length > 0) content = <MoviesList movies={movies} />;
  // if (error) content = <p>{error} </p>;
  // if (isLoading) content = <p>Loading...⏳</p>;

  // operatore binario
  movies.length > 0 && (content = <MoviesList movies={movies} />);
  error && (content = <p>{error} </p>);
  isLoading && (content = <p>Loading...⏳</p>);

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies🎞️</button>...
      </section>
      <section>
        {/* <MoviesList movies={dummyMovies} /> */}
        {/* 4. vogliamo eseguire il rendering dell'elenco solo se non stiamo più caricando e se l'array di film contiene film*/}
        {/* se non sto caricando isLoading false && elenco esiste ALLORA ... */}
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />} */}
        {/* 5. contenuti di riserva se non sto caricando && se non trova film && se non ci sono errori */}
        {/* {!isLoading && movies.length === 0 && !error && (
          <p>Found no movies.😓</p>
        )} */}
        {/* 6. mentre carico isLoading true ALLORA ... */}
        {/* {isLoading && <p>Loading...⏳</p>} */}
        {/* E6. se non sto caricando && errore true ALLORA ...*/}
        {/* {!isLoading && error && <p>{error}</p>} */}

        {/* VARIABILE CONTENT */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
