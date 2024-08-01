import React from "react";
import logo from "../assets/logo.png";
import "./Register.css";

const Register = () => {
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
      <form>
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
          />
        </div>

        {/* Mobile Number Field */}
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            className="form-control"
            id="mobile"
            placeholder="Enter mobile number"
          />
        </div>

        {/* Aadhar Card Photo Upload Field */}
        <div className="form-group">
          <label htmlFor="aadhar">Aadhar Card Photo</label>
          <input
            type="file"
            className="form-control"
            id="aadhar"
            accept="image/*"
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="termsCheck" />
          <label className="form-check-label" htmlFor="termsCheck">
            I accept all terms and conditions
          </label>
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
