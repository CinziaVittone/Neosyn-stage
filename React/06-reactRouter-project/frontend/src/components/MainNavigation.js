import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {/* ho cambiato la navigazione da a href a Link to, renderla spa e non altre richieste */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              // per evitare che attivi tutti quelli che iniziano con /events
              end
            >
              Events Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events/new"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              New Event Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events/:eventId/edit"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Edit Event Page
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
