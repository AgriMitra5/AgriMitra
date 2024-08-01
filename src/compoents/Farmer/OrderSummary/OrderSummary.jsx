import React from "react";
import { useLocation } from "react-router-dom";
import "./OrderSummary.css";

const OrderSummary = () => {
  const location = useLocation();
  const { product, numberOfDays, costPerDay, totalCost, userName, userMobile } =
    location.state || {};

  if (!product) {
    return <div>No order details available</div>;
  }

  const handlePayment = () => {
    window.location.href = "https://pages.razorpay.com/pl_IXSwu7hiqjMGNx/view";
  };

  return (
    <div className="order-summary container">
      <h1>Order Summary</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="section farmer-details">
            <h2>Farmer Details</h2>
            <p>
              <strong>Name:</strong> {userName}
            </p>
            <p>
              <strong>Mobile Number:</strong> {userMobile}
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="section owner-details">
            <h2>Owner Details</h2>
            <p>
              <strong>Product Name:</strong> {product.name}
            </p>
            <p>
              <strong>Owner:</strong> {product.renterName}
            </p>
            <p>
              <strong>Location:</strong> {product.location}
            </p>
            <p>
              <strong>Number of Days:</strong> {numberOfDays}
            </p>
            <p>
              <strong>Cost per Day:</strong> ${costPerDay}
            </p>
          </div>
        </div>
      </div>
      <div className="section final-amount">
        <h2>Final Amount</h2>
        <p>
          <strong>Total Cost:</strong> ${totalCost}
        </p>
      </div>
      <button
        className="btn btn-primary payment-button"
        onClick={handlePayment}
      >
        Go for Payment
      </button>
    </div>
  );
};

export default OrderSummary;
