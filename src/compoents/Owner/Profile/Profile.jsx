import React, { useState } from "react";
import { useNavigate } from "react-router";
// import logo from "../assets/logo.png";
import axios from "axios";
// import "./Profile.css"; // Assuming you'll create a Profile.css for custom styles

const Profile = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "name":
        if (!value) {
          newErrors.name = "Name is required.";
        } else {
          delete newErrors.name;
        }
        break;
      case "mobile":
        if (!value) {
          newErrors.mobile = "Mobile number is required.";
        } else if (!/^\d{0,10}$/.test(value)) {
          newErrors.mobile = "Mobile number can only contain digits.";
        } else if (value.length !== 10) {
          newErrors.mobile = "Mobile number must be exactly 10 digits.";
        } else {
          delete newErrors.mobile;
        }
        break;
      case "email":
        if (!value) {
          newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = "Email address is invalid.";
        } else {
          delete newErrors.email;
        }
        break;
      case "aadhar":
        if (!value) {
          newErrors.aadhar = "Aadhar number is required.";
        } else if (!/^\d{12}$/.test(value)) {
          newErrors.aadhar = "Aadhar number must be exactly 12 digits.";
        } else {
          delete newErrors.aadhar;
        }
        break;
      case "location":
        if (!value) {
          newErrors.location = "Location is required.";
        } else {
          delete newErrors.location;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "mobile" || id === "aadhar") {
      // Restrict mobile and aadhar to digits only
      const newValue = value.replace(/\D/g, '');
      if (id === "mobile") {
        setMobile(newValue.slice(0, 10));
        validateField(id, newValue.slice(0, 10));
      }
      if (id === "aadhar") {
        setAadhar(newValue.slice(0, 12));
        validateField(id, newValue.slice(0, 12));
      }
    } else {
      if (id === "name") setName(value);
      if (id === "email") setEmail(value);
      if (id === "location") setLocation(value);

      validateField(id, value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submitting
    validateField("name", name);
    validateField("mobile", mobile);
    validateField("email", email);
    validateField("aadhar", aadhar);
    validateField("location", location);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.put("http://localhost:8080/profile", {
          name: name,
          mobileNo: mobile,
          email: email,
          aadharNo: aadhar,
          location: location, 
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });

        if (response.status === 200) {
          alert("Profile updated successfully!");
          // Perform any additional actions like navigating to another page
        } else {
          alert("Profile update failed: " + response.data.message);
        }
      } catch (error) {
        alert("Profile update failed: " + error.message);
      }
    }
  };

  return (
    <div className="container mt-5 border p-10">
      {/* Logo */}
      {/* <div className="text-center mb-4">
        <img
          className="logo_img"
          src={logo}
          alt="Logo"
          style={{ width: "150px" }}
        />
      </div> */}
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">
            Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleInputChange}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name}</div>
          )}
        </div>

        {/* Mobile Number Field */}
        <div className="form-group">
          <label htmlFor="mobile">
            Mobile Number <span className="text-danger">*</span>
          </label>
          <input
            type="tel"
            className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
            id="mobile"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={handleInputChange}
          />
          {errors.mobile && (
            <div className="invalid-feedback">{errors.mobile}</div>
          )}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">
            Email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleInputChange}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        {/* Aadhar Field */}
        <div className="form-group">
          <label htmlFor="aadhar">
            Aadhar Card Number <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${errors.aadhar ? "is-invalid" : ""}`}
            id="aadhar"
            placeholder="Enter your Aadhar card number"
            value={aadhar}
            onChange={handleInputChange}
          />
          {errors.aadhar && (
            <div className="invalid-feedback">{errors.aadhar}</div>
          )}
        </div>

        {/* Location Field */}
        <div className="form-group">
          <label htmlFor="location">
            Location <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${errors.location ? "is-invalid" : ""}`}
            id="location"
            placeholder="Enter your location"
            value={location}
            onChange={handleInputChange}
          />
          {errors.location && (
            <div className="invalid-feedback">{errors.location}</div>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Update Profile
        </button>
      </form>

      <div className="text-center mt-3">
        <button onClick={() => navigate(-1)} className="btn btn-secondary">
          Back
        </button>
      </div>
    </div>
  );
};

export default Profile;
