import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";
import { Button, Container, Form } from "react-bootstrap";

const AddProduct = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 3) {
      setError("You can only upload up to 3 images.");
      return;
    }

    setError("");
    setImages(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (images.length !== 3) {
      setError("You must upload exactly 3 images.");
      return;
    }

    // Proceed with form submission logic
    console.log("Form submitted with images:", images);

    // Redirect to the owner dashboard
    navigate("/owner-dashboard/showproducts");
  };

  return (
    <div className="container mt-5 border p-4">
      <h2 className="text-center mb-4">Product Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Product Name Field */}
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            placeholder="Enter product name"
          />
        </div>

        {/* Description Field */}
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="Enter description"
          ></textarea>
        </div>

        {/* Location Field */}
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            placeholder="Enter location"
          />
        </div>

        {/* Cost Per Day Field */}
        <div className="form-group">
          <label htmlFor="costPerDay">Cost Per Day</label>
          <input
            type="text"
            className="form-control"
            id="costPerDay"
            placeholder="Enter cost per day"
          />
        </div>

        {/* Photos Upload Field */}
        <div className="form-group">
          <label htmlFor="photos">Upload Photos (exactly 3)</label>
          <input
            type="file"
            className="form-control"
            id="photos"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          {error && <div className="text-danger mt-2">{error}</div>}
        </div>

        <div className="text-center">
          {/* Display uploaded images */}
          {images.length > 0 && (
            <div className="uploaded-images mt-3">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`Uploaded preview ${index + 1}`}
                  className="img-thumbnail"
                />
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
