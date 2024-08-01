import React, { useState } from "react";
import "./FarmerLeft.css";

const FarmerLeft = ({ onFilterChange }) => {
  const [location, setLocation] = useState("");
  const [productName, setProductName] = useState("");
  const [renterName, setRenterName] = useState("");

  const handleFilterChange = () => {
    onFilterChange({ location, productName, renterName });
  };

  return (
    <div className="filter-container">
      <h1>Filter Products</h1>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          className="form-control"
          id="location"
          placeholder="Enter location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            handleFilterChange();
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="productName"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
            handleFilterChange();
          }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="owner">Owner Name</label>
        <input
          type="text"
          className="form-control"
          id="Owner"
          placeholder="Enter Owner name"
          value={renterName}
          onChange={(e) => {
            setRenterName(e.target.value);
            handleFilterChange();
          }}
        />
      </div>
    </div>
  );
};

export default FarmerLeft;
