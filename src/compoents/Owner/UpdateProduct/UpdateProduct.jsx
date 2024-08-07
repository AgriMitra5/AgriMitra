import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Retrieve the product from state
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    costPerDay: "",
  });
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description,
        location: product.location,
        costPerDay: product.costPerDay,
      });
      setImages(product.photos.map((photo) => ({ name: photo, url: photo })));
    }
  }, [product]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 3) {
      setError("You can only upload up to 3 images.");
      return;
    }

    setError("");
    setImages(files.map((file) => ({ file, url: URL.createObjectURL(file) })));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (images.length !== 3) {
      setError("You must upload exactly 3 images.");
      return;
    }

    // Proceed with form submission logic
    console.log("Form submitted with data:", formData);
    console.log("Form submitted with images:", images);

    // Clean up object URLs
    images.forEach((image) => URL.revokeObjectURL(image.url));

    // Redirect to the owner dashboard
    navigate("/owner-dashboard/showproducts");
  };

  return (
    <div className="container mt-5 border p-4">
      <h2 className="text-center mb-4">Update Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Product Name Field */}
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
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
            value={formData.description}
            onChange={handleInputChange}
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
            value={formData.location}
            onChange={handleInputChange}
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
            value={formData.costPerDay}
            onChange={handleInputChange}
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
                  src={image.url}
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

export default UpdateProduct;
