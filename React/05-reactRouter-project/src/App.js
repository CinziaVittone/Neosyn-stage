import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";
// funzione fornita dal pacchetto per definire le rotte
// componente provider

// https://example.com/homepage
// protocollo://dominio/rotta

// approccio di definizione delle rotte basato sugli oggetti
// si passa un array di oggetti, coppie chiave-valore di definizione delle rotte
// creo un layout radice genitore che avvolga tutte queste rotte figlie e carichi i componenti, RootLayout
const router = createBrowserRouter([
  {
    // RELATIVE & ABSOLUTE PATHS
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />, // in caso di errore porta qua, es se cerco una rotta che non esiste
    children: [
      // { path: "", element: <HomePage /> },
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      // ogni prodotto ha i suoi dettagli
      // { path: "/products/product-1", element: <ProductDetailPage /> },
      // { path: "/products/product-2", element: <ProductDetailPage /> },
      // { path: "/products/product-3", element: <ProductDetailPage /> },
      // { path: "/products/product-4", element: <ProductDetailPage /> },

      // DYNAMIC ROUTES, segmento di percorso dinamico, in base all'id in questo caso
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
  // potrei averne anche altri di wrapper layout
]);
// path: percorso(endpoint), element: componente

// EXPLORING AN ALTERNATIVE WAY OF DEFINING ROUTES
// import createRoutesFromElements, Route
// Route fa da wrapper
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
