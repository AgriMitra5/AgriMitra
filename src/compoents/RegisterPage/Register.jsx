import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    aadhar: "",
    email: "",
    password: "",
    roleId: "1", // Default roleId
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const validateField = (field, value) => {
    let error = "";

    switch (field) {
      case "name":
        if (!value) error = "Name is required.";
        break;
      case "mobile":
        if (!value) error = "Mobile number is required.";
        else if (!/^\d{10}$/.test(value))
          error = "Mobile number must be exactly 10 digits.";
        break;
      case "aadhar":
        if (!value) error = "Aadhar number is required.";
        else if (!/^\d{12}$/.test(value))
          error = "Aadhar number must be exactly 12 digits.";
        break;
      case "email":
        if (!value) error = "Email is required.";
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
          error = "Invalid email address.";
        break;
      case "password":
        if (!value) error = "Password is required.";
        else if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
        )
          error =
            "Password must be at least 8 characters long, contain at least one uppercase letter, one special character, and one number.";
        break;
      case "termsAccepted":
        if (!value) error = "You must accept the terms and conditions.";
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error,
    }));

    return error === "";
  };

  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    if (id === "mobile" || id === "aadhar") {
      const maxLength = id === "mobile" ? 10 : 12;
      const formattedValue = value.replace(/\D/g, "").slice(0, maxLength);
      setFormData((prevData) => ({
        ...prevData,
        [id]: formattedValue,
      }));
      validateField(id, formattedValue);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: newValue,
      }));
      validateField(id, newValue);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = Object.keys(formData).every((field) =>
      validateField(field, formData[field])
    );

    if (isFormValid) {
      try {
        const response = await axios.post("http://localhost:8080/register", {
          name: formData.name,
          mobileNo: formData.mobile,
          aadharNo: formData.aadhar,
          email: formData.email,
          password: formData.password,
          roleId: formData.roleId,
        }, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 201) {
          setMessage("Registration successful!");
        } else {
          setMessage("Registration failed.");
        }
      } catch (error) {
        setMessage(error.response ? error.response.data.message : "An error occurred.");
      }
    } else {
      setMessage("Please fix the validation errors before submitting.");
    }
  };

  return (
    <div className="container mt-5 border p-10">
      {/* Logo */}
      <div className="text-center mb-4">
        <img
          className="logo_img"
          src={logo}
          alt="Logo"
          style={{ width: "150px" }}
        />
      </div>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Mobile Number Field */}
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
            id="mobile"
            placeholder="Enter mobile number"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
        </div>

        {/* Aadhar Card Number Field */}
        <div className="form-group">
          <label htmlFor="aadhar">Aadhar Card Number</label>
          <input
            type="text"
            className={`form-control ${errors.aadhar ? "is-invalid" : ""}`}
            id="aadhar"
            placeholder="Enter Aadhar number"
            value={formData.aadhar}
            onChange={handleChange}
          />
          {errors.aadhar && <div className="invalid-feedback">{errors.aadhar}</div>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        {/* Role ID Field */}
        <div className="form-group">
          <label htmlFor="roleId">Role ID</label>
          <select
            className={`form-control ${errors.roleId ? "is-invalid" : ""}`}
            id="roleId"
            value={formData.roleId}
            onChange={handleChange}
          >
            <option value="1">Owner</option>
            <option value="2">Farmer</option>
          </select>
          {errors.roleId && <div className="invalid-feedback">{errors.roleId}</div>}
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="form-group form-check">
          <input
            type="checkbox"
            className={`form-check-input ${errors.termsAccepted ? "is-invalid" : ""}`}
            id="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="termsAccepted">
            I accept all terms and conditions
          </label>
          {errors.termsAccepted && <div className="invalid-feedback">{errors.termsAccepted}</div>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary" disabled={!formData.termsAccepted}>
          Submit
        </button>
      </form>

      {/* Display Message */}
      {message && <div className="text-center mt-3"><p>{message}</p></div>}

      {/* Login Link */}
      <div className="text-center mt-3">
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
