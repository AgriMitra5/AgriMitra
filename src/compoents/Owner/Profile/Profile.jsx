import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    mobile: "",
    email: "",
    aadhar: "",
    location: "",
  });

  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
    // Add your form submission logic here
    // Clear the form fields after submission
    setProfile({
      name: "",
      mobile: "",
      email: "",
      aadhar: "",
      location: "",
    });
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <Container>
      <h2 className="my-4">Profile</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group controlId="formMobile">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            name="mobile"
            value={profile.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number"
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group controlId="formAadhar">
          <Form.Label>Aadhar Card Number</Form.Label>
          <Form.Control
            type="text"
            name="aadhar"
            value={profile.aadhar}
            onChange={handleChange}
            placeholder="Enter your Aadhar card number"
          />
        </Form.Group>

        <Form.Group controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={profile.location}
            onChange={handleChange}
            placeholder="Enter your location"
          />
        </Form.Group>

        <Row className="mt-4">
          <Col>
            <Button variant="secondary" onClick={handleBack}>
              Back
            </Button>
          </Col>
          <Col className="text-right">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Profile;
