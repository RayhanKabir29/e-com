import { React, useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <>
      <div className="products-container">
        <Container>
          <Row>
            {products.map((product) => (
              <Product product={product} key={product.id}></Product>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Products;
