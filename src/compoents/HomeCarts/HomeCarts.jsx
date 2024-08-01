import { Button, Card, Row, Col } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProductData from "../../Data/ProductData/ProductData";
import "./HomeCarts.css";

const HomeCarts = () => {
  const navigate = useNavigate();

  const handleClick = (name) => {
    navigate(`/farmer-dashboard/productList/${name}`); // Navigate to detailed page
  };

  return (
    <div className="container_home">
      <Row>
        {ProductData.slice(0, 8).map((product, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="custom-col">
            <Card
              className="mb-4 small-card"
              onClick={() => handleClick(product.name)}
              style={{ cursor: "pointer" }}
            >
              <Card.Img
                variant="top"
                src={product.photos[0]} // Use the first photo
                className="small-card-img"
              />
              <Card.Body>
                <Card.Title className="small-card-title ">
                  {product.name}
                </Card.Title>
                <Card.Text className="small-card-text">
                  {product.description}
                </Card.Text>
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
                <Card.Text className="small-card-text">
                  <small className="text-muted">
                    <span className="owner-Name">Cost/Day:</span>{" "}
                    {product.costPerDay}
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
    </div>
  );
};

export default HomeCarts;
