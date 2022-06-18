import { React, useState, useEffect } from "react";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  useEffect(() => {
    fetch("./product.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilterProduct(data.products);
      });
  }, []);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const handleSearch = (e) => {
    const searchText = e.target.value;
    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterProduct(matchedProducts);
  };
  return (
    <>
      <Container>
        <Form className="mb-3">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={handleSearch}
          />
        </Form>
        <Row>
          <Col md={9}>
            {filterProduct.map((product) => (
              <Product
                product={product}
                key={product.id}
                handleAddToCart={handleAddToCart}
              ></Product>
            ))}
          </Col>
          <Col md={3}>
            <Cart cart={cart}></Cart>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Products;
