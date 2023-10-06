import React, { useState, useEffect } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // USEEFFECT SUMMARY
  // 1. senza dipendenze stamperebbe a ogni modifica del componente, quando scrivo, clicco ecc, non solo la prima volta
  // useEffect(() => {
  //   console.log("EFFECT RUNNING");
  // });

  // 2. stampa solo al primo render dell'app
  // useEffect(() => {
  //   console.log("EFFECT RUNNING");
  // }, []);

  // 3. stampa solo al variare di una delle dipendenze, in questo caso a ogni modifica della password
  useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, [enteredPassword]);

  // USEEFFECT CON DIPENDENZE, eseguito in risposta a qualcosa
  /**
   * voglio contrassegnare il form come valido/non valido a seconda di una logica che si attiva
   * ogni volta che viene inviato un messaggio di posta elettronica o la password è stata modificata
   * sto lavorando in locale
   */
  useEffect(() => {
    // vedo che si genera ogni volta che scrivo un carattere, NON VA BENE sto inviando troppe richieste
    // mi basta controllare che l'email sia valida quando finisco di scrivere o dopo un tot di tempo, ecco perchè setTimeOut
    // console.log("Checking form validity!");

    // finchè l'utente continua a digitare cancello i timer
    const identifier = setTimeout(() => {
      console.log("Checking form validity!"); // lo vedo subito 1 volta ricaricando la pagina
      // gestisco qua la validità del form
      setFormIsValid(
        // event.target.value.includes("@") && enteredPassword.trim().length > 6
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500); // solo dopo questo tempo aggiorna la validità e vedo il console.log(la somma di tutti i caratteri scritti sempre, li verifica tutti)
    // CLEANUP FUNCTION
    // appena digito un carattere stampa CLEANUP e Checking form validity! perchè riesegue la funzione
    return () => {
      console.log("CLEANUP");
      // ogni volta che la cleanup viene eseguita il timer viene azzerato
      // così siamo pronti a reimpostare un nuovo timer per la riesecuzione della funzione
      // il timeout fa si che, digitando molto velocemente, il Checking form validity! venga stampato solo dopo che non digito per 500 millisecondi
      // verifica la validità solo dopo lo scadere del timer, codice eseguito solo 1 volta -> come 1 SOLA RICHIESTA HTTP
      // invece il CLEANUP viene stampato per ogni carattere
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);
  // se il form è valido(setFormIsValid()) lo posso omettere, se la mail ha subito modifiche, se la password ha subito modifiche
  // se nessuno dei 3 ha subito modifiche, la funzione non viene rieseguita

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes("@")
    // );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    // così non verrebbe mai abilitato il login, ecco perchè serve la dipendenza, per fare in modo che lo useEfect sia eseguito più di una volta
    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes("@")
    // );
    // la soluzione sarebbe togliere le [] da useEffect in modo che venga rieseguito a ogni render del componente MA sarebbe un ciclo infinito
    // ecco perchè usiamo le dipendenze
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
