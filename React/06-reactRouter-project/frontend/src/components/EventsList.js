// import { useLoaderData } from "react-router-dom";

import { Link } from "react-router-dom";
import classes from "./EventsList.module.css";

// function EventsList() {// se uso il loader
function EventsList({ events }) {
  // const events = useLoaderData();

  // trasformo a href in Link to
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            {/* in App ho definito l'id come path per EventDetailPage */}
            <Link to={event.id}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
