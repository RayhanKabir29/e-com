import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { id, name, price, category, image } = props.product;

  // const handleClick = () => {
  //   history.push(url);
  // };
  return (
    <>
      <div className="col-md-4">
        <div className="card mb-3">
          <img
            src={image}
            alt=""
            className="card-img-top hover-shadow"
            style={{ height: "220px" }}
          />

          <div className="card-body">
            <h5>Product Name: {name}</h5>
            <h6>Product Code :{id}</h6>
            <h6>Category: {category}</h6>
            <p>Price: {price}</p>
            {/* <Button className="me-3" onClick={handleClick}>
              Details
            </Button> */}
            <Link to={`/product/${id}`}>See Details</Link>
            <Button onClick={() => props.handleAddToCart(props.product)}>
              add to cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
