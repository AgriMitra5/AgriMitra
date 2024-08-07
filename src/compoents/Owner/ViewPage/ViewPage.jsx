import React from "react";
import { useParams } from "react-router-dom";
import productData from "../../../Data/ProductData/ProductData"; // Adjust the path as necessary
import { Container, Row, Col, Card } from "react-bootstrap";
import "./ViewPage.css";

const ViewPage = () => {
  const { name } = useParams(); // Retrieve the product name from URL parameters

  // Find the product based on the name
  const product = productData.find((p) => p.name === name);

  if (!product) {
    return <div>Product not found</div>; // Handle the case where the product doesn't exist
  }

  return (
    <Container className="view-page mt-4">
      <h1 className="mb-4 text-center">Product Details</h1>
      <Row>
        <Col md={4}>
          <div className="images-container">
            {product.photos.map((photo, index) => (
              <Card key={index} className="mb-3">
                <Card.Img
                  variant="top"
                  src={photo}
                  alt={`Product ${index + 1}`}
                  className="product-image"
                />
              </Card>
            ))}
          </div>
        </Col>
        <Col md={8}>
          <div className="details-container">
            <h2>{product.name}</h2>
            <p>
              <strong>Description:</strong> {product.description}
            </p>
            <p>
              <strong>Owner:</strong> {product.renterName}
            </p>
            <p>
              <strong>Location:</strong> {product.location}
            </p>
            <p>
              <strong>Cost per Day:</strong> ${product.costPerDay}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewPage;
