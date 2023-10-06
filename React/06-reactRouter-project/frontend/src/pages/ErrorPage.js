import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();

  // se l'errore riguarda il db spendo(indipendentemente dagli url)
  // An error occurred!
  // Something went wrong!
  let title = "An error occurred!";
  let message = "Something went wrong!";

  // const response = await fetch("http://localhost:8080/eventsasasas");
  // se l'errore è dovuto all'url sbagliato nella fetch degli eventi(EventsPage)
  // ma nel browser http://localhost:3000/events
  // An error occurred!
  // Could not fetch events.
  if (error.status === 500) {
    // con response manualmente
    // message = JSON.parse(error.data).message;
    // con json utility
    message = error.data.message;
  }
  // JSON.parse riconverte a oggetto

  // http://localhost:3000/aaaaaa
  // se l'errore riguarda un url che non esiste nel browser
  // Not found
  // Could not find resource or page.
  if (error.status === 404) {
    title = "Not found";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
