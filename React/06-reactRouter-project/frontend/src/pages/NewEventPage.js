import { json, redirect } from "react-router";
import EventForm from "../components/EventForm";

const NewEventPage = () => {
  return (
    <>
      <h1>New Event Page</h1>
      {/* senza dati precompilati */}
      <EventForm />
    </>
  );
};
export default NewEventPage;

// come in EventsPage.js il loader
// invia richieste al be e viene richiamata da action() in App.js
// nella action dobbiamo entrare in possesso della richiesta catturata dal router e inviarla alla action
// la funzione action, come il loader, viene eseguita da un router e riceve come argomento un oggetto che possiede request e params
export const action = async ({ request, params }) => {
  // oggetto che include i dati del form
  const data = await request.formData();
  // get per accedere ai diversi valori inviati
  // corripondono ai name dati nel form
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      // dati gestiti ed estratti correttamente nel be
      "Content-Type": "application/json",
    },
    // per essere inviati al be i dati vanno convertiti
    // The JSON.stringify() static method converts a JavaScript value to a JSON string,
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw json({ message: "Could not save event.", status: 500 });
  }
  // reindirizzo l'utente su una pagina diversa
  return redirect("/events");
};
// posso estrarre i dati direttamente dal modulo
// vado in EventForm.js e mi assicuro che tutti gli input abbiano l'attributo name
// sostituisco form con il componente Form
