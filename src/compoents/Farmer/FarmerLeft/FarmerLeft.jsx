import React, { useState } from "react";
import "./FarmerLeft.css";

const FarmerLeft = ({ onFilterChange }) => {
  const [location, setLocation] = useState("");
  const [productName, setProductName] = useState("");
  const [renterName, setRenterName] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // For sorting

  const handleFilterChange = () => {
    onFilterChange({ location, productName, renterName, sortOrder });
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
          id="owner"
          placeholder="Enter Owner name"
          value={renterName}
          onChange={(e) => {
            setRenterName(e.target.value);
            handleFilterChange();
          }}
        />
      </div>

      {/* Sorting Options */}
      <div className="form-group">
        <label>Sort By Price</label> 
       
        <div>
          <input
            type="radio"
            id="sortLowToHigh"
            name="sortOrder"
            checked={sortOrder === "lowToHigh"}
            onChange={() => {
              setSortOrder("lowToHigh");
              handleFilterChange();
            }}
          />
          <label htmlFor="sortLowToHigh" className="ml-2">
            Low to High
          </label>
          
        </div>
        <div>
          <input
            type="radio"
            id="sortHighToLow"
            name="sortOrder"
            checked={sortOrder === "highToLow"}
            onChange={() => {
              setSortOrder("highToLow");
              handleFilterChange();
            }}
          />
          <label htmlFor="sortHighToLow" className="ml-2">
            High to Low
          </label>
        </div>
      </div>
    </div>
  );
};

export default FarmerLeft;
