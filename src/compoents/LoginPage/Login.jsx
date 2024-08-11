import React, { useState } from "react";
import { useNavigate } from "react-router";
import logo from "../assets/logo.png";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "mobileNumber":
        if (!value) {
          newErrors.mobileNumber = "Mobile number is required.";
        } else if (!/^\d{0,10}$/.test(value)) {
          newErrors.mobileNumber = "Mobile number can only contain digits.";
        } else if (value.length !== 10) {
          newErrors.mobileNumber = "Mobile number must be exactly 10 digits.";
        } else {
          delete newErrors.mobileNumber;
        }
        break;
      case "password":
        if (!value) {
          newErrors.password = "Password is required.";
        } else if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
        ) {
          newErrors.password = "Password must be 8 characters, with one uppercase letter, one special character, and one number.";
        } else {
          delete newErrors.password;
        }
        break;
      case "role":
        if (!value) {
          newErrors.role = "Please select a role.";
        } else {
          delete newErrors.role;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "mobileNumber") {
      // Restrict mobileNumber to digits only and max length 10
      const newValue = value.replace(/\D/g, '').slice(0, 10);
      setMobileNumber(newValue);
      validateField(id, newValue);
    } else {
      if (id === "username") setUsername(value);
      if (id === "password") setPassword(value);
      if (id === "role") setRole(value);

      validateField(id, value);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate all fields before submitting
    validateField("mobileNumber", mobileNumber);
    validateField("password", password);
    validateField("role", role);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post("http://localhost:8080/login", {
          name: username,
          mobileNo: mobileNumber,
          password: password,
          roleId: role === "Farmer" ? "2" : "1",
        });

        if (response.status === 200) {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("role", role);
          localStorage.setItem("userName", response.data.data.name);

          if (role === "Farmer") {
            navigate("/farmer-dashboard/productList");
          } else if (role === "Owner") {
            navigate("/owner-dashboard");
          }
        } else {
          alert("Login failed: " + response.data.message);
        }
      } catch (error) {
        alert("Login failed: " + error.message);
      }
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
      <form onSubmit={handleLogin}>
        {/* Username Field */}
        <div className="form-group">
          <label htmlFor="username">
            Username <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={handleInputChange}
          />
          {errors.username && (
            <div className="invalid-feedback">{errors.username}</div>
          )}
        </div>

        {/* Mobile Number Field */}
        <div className="form-group">
          <label htmlFor="mobileNumber">
            Mobile Number <span className="text-danger">*</span>
          </label>
          <input
            type="tel"
            className={`form-control ${errors.mobileNumber ? "is-invalid" : ""}`}
            id="mobileNumber"
            placeholder="Enter mobile number"
            value={mobileNumber}
            onChange={handleInputChange}
          />
          {errors.mobileNumber && (
            <div className="invalid-feedback">{errors.mobileNumber}</div>
          )}
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
            value={password}
            onChange={handleInputChange}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        {/* User Role Dropdown */}
        <div className="form-group">
          <label htmlFor="role">
            User Role <span className="text-danger">*</span>
          </label>
          <div className="custom-select-wrapper">
            <select
              className={`form-control ${errors.role ? "is-invalid" : ""}`}
              id="role"
              value={role}
              onChange={handleInputChange}
            >
              <option value="">Select your role</option>
              <option value="Farmer">Farmer</option>
              <option value="Owner">Owner</option>
            </select>
            {errors.role && (
              <div className="invalid-feedback">{errors.role}</div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>

      <div className="text-center mt-3">
        <p>
          Not have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
