import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    aadhar: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const validateField = (field, value) => {
    let error = "";

    switch (field) {
      case "name":
        if (!value) error = "Name is required.";
        break;
      case "mobile":
        if (!value) error = "Mobile number is required.";
        else if (!/^\d{0,10}$/.test(value)) error = "Mobile number can only contain digits and must be exactly 10 digits.";
        else if (value.length !== 10) error = "Mobile number must be exactly 10 digits.";
        break;
      case "aadhar":
        if (!value) error = "Aadhar number is required.";
        else if (!/^\d{0,12}$/.test(value)) error = "Aadhar number can only contain digits and must be exactly 12 digits.";
        else if (value.length !== 12) error = "Aadhar number must be exactly 12 digits.";
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
    const { id, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    if (id === "mobile") {
      // Restrict mobile to digits only and max length 10
      const formattedValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prevData) => ({
        ...prevData,
        [id]: formattedValue,
      }));
      validateField(id, formattedValue);
    } else if (id === "aadhar") {
      // Restrict aadhar to digits only and max length 12
      const formattedValue = value.replace(/\D/g, '').slice(0, 12);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = Object.keys(formData).every((field) =>
      validateField(field, formData[field])
    );

    if (isFormValid) {
      // Submit form data
      console.log("Form submitted", formData);
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
          <label htmlFor="name">
            Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <div className="invalid-feedback" style={{ color: "red" }}>
              {errors.name}
            </div>
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
            placeholder="Enter mobile number"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && (
            <div className="invalid-feedback" style={{ color: "red" }}>
              {errors.mobile}
            </div>
          )}
        </div>

        {/* Aadhar Card Number Field */}
        <div className="form-group">
          <label htmlFor="aadhar">
            Aadhar Card Number <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${errors.aadhar ? "is-invalid" : ""}`}
            id="aadhar"
            placeholder="Enter Aadhar number"
            value={formData.aadhar}
            onChange={handleChange}
          />
          {errors.aadhar && (
            <div className="invalid-feedback" style={{ color: "red" }}>
              {errors.aadhar}
            </div>
          )}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">
            Email address <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="invalid-feedback" style={{ color: "red" }}>
              {errors.email}
            </div>
          )}
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">
            Password <span className="text-danger">*</span>
          </label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <div className="invalid-feedback" style={{ color: "red" }}>
              {errors.password}
            </div>
          )}
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="form-group form-check">
          <input
            type="checkbox"
            className={`form-check-input ${
              errors.termsAccepted ? "is-invalid" : ""
            }`}
            id="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="termsAccepted">
            I accept all terms and conditions <span className="text-danger">*</span>
          </label>
          {errors.termsAccepted && (
            <div className="invalid-feedback" style={{ color: "red" }}>
              {errors.termsAccepted}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

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
