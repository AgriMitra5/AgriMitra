import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ShowProducts.css";
import productData from "../../../Data/ProductData/ProductData"; // Adjust the import path as needed

const ShowProducts = () => {
  const navigate = useNavigate(); // Hook for navigation

  const products = productData.map((product) => ({
    ...product,
    price: (Math.random() * 100).toFixed(2), // Adding a random price for demonstration
    image: product.photos[0], // Fetching the first image from the photos array
  }));

  const handleAddProduct = () => {
    navigate("/owner-dashboard/showproducts/add-product"); // Redirect to AddProduct page
  };

  const handleUpdateProduct = (product) => {
    navigate(`/owner-dashboard/showproducts/update-product/${product.name}`, {
      state: { product },
    });
  };

  const handleViewPage = (productName) => {
    navigate(`/owner-dashboard/showproducts/view-product/${productName}`);
  };

  return (
    <div className="main_container mt-5">
      <div className="header">
        <h1>Show Products</h1>
        <Button
          variant="success"
          onClick={handleAddProduct}
          className="add-button"
        >
          Add Product
        </Button>
      </div>
      <div className="product-list">
        {products.slice(0, 5).map((product, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <img
                src={product.image} // Using the first image
                alt="Product"
                className="product-image"
              />
              <div className="product-details">
                <p>
                  <strong>Name:</strong> {product.name}
                </p>
                <p>
                  <strong>Description:</strong> {product.description}
                </p>
                <p>
                  <strong>Price:</strong> ${product.price}
                </p>
              </div>
            </div>
            <div className="card-actions">
              <Button
                onClick={() => handleViewPage(product.name)}
                variant="primary"
                className="mr-2"
              >
                View
              </Button>
              <Button variant="danger" className="mr-2">
                Delete
              </Button>
              <Button
                onClick={() => handleUpdateProduct(product)}
                variant="success"
              >
                Update
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowProducts;
