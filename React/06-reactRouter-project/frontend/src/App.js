// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";

import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";

import EventsRootLayout from "./pages/EventsRootLayout";

// as alias, nome con cui lo dovrò richiamare
import { loader as eventsLoader } from "./pages/EventsPage";
import { loader as eventDetailLoader } from "./pages/EventDetailPage";

// as alias
import { action as newEventAction } from "./pages/NewEventPage";

const router = createBrowserRouter([
  // aggiungendo questo, posso togliere / dagli altri
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // aggiungendo questo, posso togliere events dagli altri
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            // path: "",
            index: true,
            element: <EventsPage />,
            // DATA FETCHING WITH A LOADER(), vedi App.js
            // accetta funzione come valore, eseguita quando sto x visitare il percorso, appena prima che il comp venga reso

            //WHY SHOULD LOADER() CODE BE STORED?
            // loader: async () => {
            //   // ciò che voglio ottenere
            //   const response = await fetch("http://localhost:8080/events"); // API backend
            //   // await perchè aspetta che venga eseguita la fetch e poi va avanti, è una PROMISE
            //   if (!response.ok) {
            //   } else {
            //     const resData = await response.json();
            //     return resData.events; // dati resi disponibili in questo componente e dovunque serva
            //     // react router controlla se la promise viene restituita e ottiene i dati da essa
            //   }
            // },
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader, // così che vanga caricato subito
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                // loader: eventDetailLoader,
              },
              {
                path: "edit",
                element: <EditEventPage />,
              },
            ],
          },
          // ROTTE ANNIDATE
          // wrappa edit
          // {
          //   path: ":eventId",
          //   element: <EventDetailPage />,
          //   loader: eventDetailLoader,
          // },
          {
            path: "new",
            element: <NewEventPage />,
            action: newEventAction,
          },
          // diventa child di EventDetailPage e il suo path diventa solo edit
          // {
          //   path: ":eventId/edit",
          //   element: <EditEventPage />,
          // },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
