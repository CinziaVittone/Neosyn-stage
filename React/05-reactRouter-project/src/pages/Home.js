import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  // NAVIGATING PROGRAMMATICALLY
  const navigate = useNavigate();

  // funzione gestore della navigazione, sarà attivata dal button
  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        {/* Go to <a href="/products">the list of products</a>. */}
        Go to <Link to="products">the list of products</Link>.
      </p>
      <p>
        {/* NAVIGATING PROGRAMMATICALLY */}
        <button onClick={navigateHandler}>Navigate programmatically</button>
      </p>
    </>
  );
};

export default HomePage;
