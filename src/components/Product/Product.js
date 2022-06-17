import React from "react";
import { Button } from "react-bootstrap";

const Product = (props) => {
  const { name, price, category, image } = props.product;
  return (
    <>
      <div className="col-md-3">
        <div className="card mb-3">
          <img
            src={image}
            alt=""
            className="card-img-top hover-shadow"
            style={{ height: "220px" }}
          />

          <div className="card-body">
            <h5>{name}</h5>
            <h6>Category: {category}</h6>
            <p>Price: {price}</p>
            <Button className="me-3">Details</Button>
            <Button>add to cart</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
