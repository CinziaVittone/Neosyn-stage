// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// importo tutte le classi del css e poi ci accedo con la dot notationx
import classes from "./MainNavigation.module.css";
// creo il collegamento in Home
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* Link è un elemento di ancoraggio */}
            {/* isActive è un booleano, true allora chiama active dal css, altrimenti niente */}
            {/* <Link to="/">Home</Link> */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              //potrei anche usare la prop style per definire lo stile in linea, ma meglio nel file css
              //   style={({ isActive }) => ({
              //     textAlign: isActive ? "center" : "left",
              //   })}
              
              // per evitare che consideri attivi tutti i link che iniziano con /
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
