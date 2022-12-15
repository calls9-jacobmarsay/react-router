import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  return (
    <section>
      <h1>Product Title</h1>
      <p>Product description</p>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetails;
