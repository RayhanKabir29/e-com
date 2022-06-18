import { Button, Container, Row } from "react-bootstrap";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const [product, setProduct] = useState({});
  const { ProductId } = useParams();

  useEffect(() => {
    fetch(`/product.json`)
      .then((res) => res.json())
      .then((data) => {
        const productDetails = data.products.find((pd) => pd.id == ProductId);
        setProduct(productDetails);
      });
  }, []);
  return (
    <>
      <Container>
        <Row>
          <div className="col-md-6">
            <div className="card mb-3">
              <img
                src={product.image}
                alt=""
                className="card-img-top hover-shadow"
                height="180px"
              />

              <div className="card-body">
                <h5>Product Name: {product.name}</h5>
                <h6>Category: {product.category}</h6>
                <p>Desc: {product.description}</p>
                <p>Price: {product.price}</p>

                <Button onClick={() => props.handleAddToCart(props.product)}>
                  add to cart
                </Button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
