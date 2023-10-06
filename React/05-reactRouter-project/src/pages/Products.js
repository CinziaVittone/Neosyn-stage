import { Link } from "react-router-dom";

const ProductsPage = () => {
  // array di oggetti
  const PRODUCTS = [
    { id: "p1", title: "Product 1" },
    { id: "p2", title: "Product 2" },
    { id: "p3", title: "Product 3" },
  ];

  return (
    <>
      <h1>The Products Page</h1>
      <p>
        {/* Return to <a href="/">home page</a>. */}
        {/* Return to <Link to="/">home page</Link>. */}
      </p>
      <ul>
        {/* STATIC LINKS */}
        {/* <li>
          <Link to="/products/product-1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/product-2">Product 2</Link>
        </li> */}

        {/* ADDING LINKS FOR DYNAMIC ROUTES */}
        {/* metodo map degli array - mappo i prodotti rendendo un elemento li per ogni prodotto dell'array
        usiamo la key - li wrappa Link */}
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            {/* come key uso id che ho definito sopra nell'array PRODUCTS */}
            {/* TEMPLATE LITERAL ${id dinamico} e {title dinamico}*/}
            {/* <Link to={`/products/${prod.id}`}>{prod.title}</Link> */}
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
