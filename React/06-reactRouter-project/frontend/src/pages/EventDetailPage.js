import { Link, json, useParams, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  // const params = useParams();
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <h1>Event Detail Page</h1>
      {/* dati fittizi */}
      {/* <p>Event id: {params.eventId}</p>
      <p>
        <Link to="..">Go back</Link>
      </p> */}
      {/* dati reali, prop event={dati dell'event che voglio visualizare} */}
      {/* ho bisogno di CARICARE-LOADER quindi i dati dell'event** */}
      <EventItem event={data.event} />
    </>
  );
};
export default EventDetailPage;

// ** funzione asincrona
// prop request contiene un ogg request
// prop params contiene un ogg params(parametri della rotta)
export const loader = async ({ request, params }) => {
  // accediamo ai valori
  const id = params.eventId; // nelle rotte avevo definito eventId come path
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
};
// questo loader deve essere registrato in App nelle rotte (eventDetailLoader)
