import React, { useState } from "react";
import { Carousel, Col, Row, Button, Form } from "react-bootstrap";
import { NavLink, useParams, useNavigate } from "react-router-dom"; // Added useNavigate
import ProductData from "../../../Data/ProductData/ProductData"; // Adjust the path as necessary
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  const { name } = useParams();
  const navigate = useNavigate(); // Initialize navigate
  const product = ProductData.find((p) => p.name === name);

  const [numberOfDays, setNumberOfDays] = useState(1);
  const [costPerDay, setCostPerDay] = useState(product.costPerDay || 0);
  const [totalCost, setTotalCost] = useState(0);

  const updateTotalCost = (days, cost) => {
    const numericDays = parseFloat(days) || 0;
    const numericCost = parseFloat(cost) || 0;
    setTotalCost(numericDays * numericCost);
  };

  const handleDaysChange = (e) => {
    const days = e.target.value;
    setNumberOfDays(days);
    updateTotalCost(days, costPerDay);
  };

  const handleCostChange = (e) => {
    const cost = e.target.value;
    setCostPerDay(cost);
    updateTotalCost(numberOfDays, cost);
  };

  const formattedTotalCost =
    typeof totalCost === "number" ? totalCost.toFixed(2) : "0.00";

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleOrderSummary = () => {
    navigate(`/farmer-dashboard/productList/${name}/order-summary`, {
      state: {
        product,
        numberOfDays,
        costPerDay,
        totalCost,
      },
    });
  };

  return (
    <div className="product-detail-page">
      <Row>
        <Col md={6}>
          <div className="carousel-container">
            <Carousel>
              {product.photos.map((photo, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={photo}
                    alt={`Slide ${index}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="calculator-container">
              <h2>Calculate Here</h2>
              <Form>
                <Form.Group controlId="numberOfDays">
                  <Form.Label>Number of Days</Form.Label>
                  <Form.Control
                    type="number"
                    value={numberOfDays}
                    onChange={handleDaysChange}
                  />
                </Form.Group>
                <Form.Group controlId="costPerDay">
                  <Form.Label>Cost per Day</Form.Label>
                  <Form.Control
                    type="number"
                    value={costPerDay}
                    onChange={handleCostChange}
                  />
                </Form.Group>
                <Form.Group controlId="totalCost">
                  <Form.Label>Total Cost</Form.Label>
                  <Form.Control
                    type="text"
                    value={`$${formattedTotalCost}`}
                    readOnly
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="details-container">
            <h1>{product.name}</h1>
            <p className="product_description">{product.description}</p>
            <p className="product_owner_name">
              <strong>Owner:</strong> {product.renterName}
            </p>
            <p className="product_location">
              <strong>Location:</strong> {product.location}
            </p>
            <p className="product_cost">
              <strong>Cost per day:</strong> {product.costPerDay}
            </p>
            <Button variant="primary" className="availability-button">
              Check Availability
            </Button>

            <Button
              variant="success"
              className="book-button"
              onClick={handleOrderSummary}
            >
              Order Summary
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailPage;
