import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./FarmerRight.css";

const FarmerRight = ({ products }) => {
  const navigate = useNavigate();

  const handleClick = (name) => {
    navigate(`/farmer-dashboard/productList/${name}`); // Navigate to detailed page
  };

  return (
    <Row>
      {products.map((product, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3} className="custom-col">
          <Card
            className="mb-4 small-card"
            onClick={() => handleClick(product.name)}
            style={{ cursor: "pointer" }}
          >
            <Card.Img
              variant="top"
              src={product.photos[0]}
              className="small-card-img"
            />
            <Card.Body className="small-card-body">
              <Card.Title className="small-card-title">
                {product.name}
              </Card.Title>
              <Card.Text className="small-card-text">
                <small className="text-muted">
                  <span className="owner-Name">Owner:</span>{" "}
                  {product.renterName}
                </small>
              </Card.Text>
              <Card.Text className="small-card-text">
                <small className="text-muted">
                  <span className="owner-Name">Location:</span>{" "}
                  {product.location}
                </small>
              </Card.Text>
              <Button variant="primary" size="sm">
                Rent Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default FarmerRight;
