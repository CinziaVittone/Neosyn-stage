import { Outlet } from "react-router-dom";
// An <Outlet> should be used in parent route elements to render their child route elements.
import MainNavigation from "../components/MainNavigation";
// import classes from "./Root.module.css";// importo le classi del css e con la dot notation accedo a quello che mi interessa

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      {/* non serve più il className ora che ho direttamente main nella index.css */}
      {/* <main className={classes.content}> */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
