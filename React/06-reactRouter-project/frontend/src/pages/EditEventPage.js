import { useRouteLoaderData } from "react-router";
import EventForm from "../components/EventForm";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-detail");
  // prende l'id della rotta del componente da cui deve prendere i dati
  // i dati sono presenti nella pagina dei detail, e i voglio anche qui in edit
  // utile x componenti deep che hanno bisogno di dati da componenti più in alto nell'albero delle rotte

  return <EventForm event={data.event} />;
};
export default EditEventPage;
