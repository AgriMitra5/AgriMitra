import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return re.test(email);
  };

  const validateField = (field, value) => {
    let error = "";

    switch (field) {
      case "email":
        if (!value) error = "Email is required.";
        else if (!validateEmail(value)) error = "Invalid email address.";
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
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate the field immediately after change
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields before submission
    const isFormValid = Object.keys(formData).every((field) =>
      validateField(field, formData[field])
    );

    if (isFormValid) {
      // Submit form data
      console.log("Form submitted", formData);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => {
                handleChange(e);
                validateField("email", e.target.value); // Validate immediately after change
              }}
            />
            {errors.email && (
              <div className="invalid-feedback" style={{ color: 'red' }}>
                {errors.email}
              </div>
            )}
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Write your message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
      <div className="contact-info">
        <h3>Let's talk about everything.</h3>
        <p>We believe in the power of communication and collaboration. Whether you have a suggestion to improve our platform, a partnership proposal, or just want to learn more about AgriMitra, we're here to listen and engage.</p>

        <p>For more information about our services and how we can assist you, feel free to browse our website or reach out to us directly.</p>

        <p>Thank you for choosing AgriMitra, your trusted partner in modern farming solutions.</p>
      </div>
    </div>
  );
};

export default ContactUs;
