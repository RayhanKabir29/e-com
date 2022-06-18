import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const [product, setProduct] = useState({});
  const { ProductId } = useParams();
  console.log(ProductId);
  useEffect(() => {
    fetch(`/product.json`)
      .then((res) => res.json())
      .then((data) => {
        const productDetails = data.products.find((pd) => pd.id == ProductId);
        setProduct(productDetails);
      });
  }, []);
  return (
    <div>
      <h1>This is Product Details: {product.name}</h1>
    </div>
  );
};

export default ProductDetails;
