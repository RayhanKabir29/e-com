import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { id, name, price, image } = props.product;

  return (
    <>
      <div className="card mb-3 me-2">
        <img src={image} alt="" className="card-img-top hover-shadow card-img" />

        <div className="card-body">
          <h5>Product Name: {name}</h5>
          <p>Price: {price}</p>

          <Link to={`/product/${id}`}>See Details</Link>
          <Button onClick={() => props.handleAddToCart(props.product)}>
            add to cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default Product;
