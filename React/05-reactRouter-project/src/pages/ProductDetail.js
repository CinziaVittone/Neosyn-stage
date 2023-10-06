import { Link, useParams } from "react-router-dom";
// hook che fornisce un oggetto params

// componente comune a tutti i prodotti, poi ognuno avrà le sue specifiche
const ProductDetailPage = () => {
  // oggetto js che contiene ogni segmento di percorso dinamico che abbiamo definito(segnaposto productId)
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>Product id: {params.productId}</p>
      {/* .. sale di un livello, torna indietro */}
      <p><Link to="..">Back</Link></p>
    </>
  );
};

export default ProductDetailPage;
