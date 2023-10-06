// import { Link } from "react-router-dom";

// const EventsPage = () => {
//   const EVENTS = [
//     { id: "e1", title: "Cinema" },
//     { id: "e2", title: "Work" },
//     { id: "e3", title: "Holiday" },
//     { id: "e4", title: "Running" },
//     { id: "e5", title: "Horse Riding" },
//     { id: "e6", title: "Theatre" },
//     { id: "e7", title: "Supermarket" },
//     { id: "e8", title: "BF's Wedding" },
//   ];

//   return (
//     <>
//       <h1>Events Page</h1>
//       <ul>
//         {EVENTS.map((ev) => (
//           <li key={ev.id}>
//             <Link to={ev.id}>{ev.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };
// export default EventsPage;

// DATA FETCHING WITH A LOADER(), vedi App.js
import EventsList from "../components/EventsList";
// USING DATA FROM A LOADER IN THE ROUTE COMPONENT
// dove possiamo usare useLoaderData?
// direttamente qui che è il componente reso dalla rotta in cui abbiamo aggiunto il loader in App.js
// oppure direttamente in EventsList, qua commentato come sarebbe
import { json, useLoaderData } from "react-router-dom";

const EventsPage = () => {
  // usando il loader in App.js rendiamo il componente più snello, più rapido a caricarsi
  // const events = useLoaderData();
  const data = useLoaderData();
  // ERROR HANDLING WITH CUSTOM ERRORS
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  const events = data.events; // data ha la prop events
  // After route actions are called, the data will be revalidated automatically and return the latest result from your loader.

  return <EventsList events={events} />;
  // return <EventsList />;
};

export default EventsPage;

// WHY SHOULD LOADER() CODE BE STORED?
export const loader = async () => {
  // ciò che voglio ottenere
  // la fetch è una PROMISE che si risolve in una RESPONSE
  const response = await fetch("http://localhost:8080/events"); // API backend
  // await perchè aspetta che venga eseguita la fetch e poi va avanti
  if (!response.ok) {
    // ERROR HANDLING WITH CUSTOM ERRORS
    // return { isError: true, message: "Could not fetch events." };

    // response costruiua MANUALMENTE
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    // per differenziare gli errori
    // JSON.stringify Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

    // response costruita con JSON UTILITY importandola, a cui passo i dati che saranno inclusi nella risposta senza convertirli a mano
    throw json({ message: "Could not fetch events." }, { status: 500 });
    // inoltre non è più necessario il json parse in ErrorPage
  } else {
    // dati resi disponibili in questo componente e dovunque serva
    // react router controlla se la promise viene restituita e ottiene i dati da essa

    // il loader può restituire qualsiasi tipo di dato, una response ad esempio
    // const res = new Response("any data", { status: 201 });
    return response;
  }
};
// questo loader deve essere registrato in App nelle rotte (eventsLoader)
