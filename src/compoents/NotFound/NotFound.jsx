import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './NotFound.css'; 

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 text-center">
      <div className="col-md-12">
        <h1>404</h1>
        <h2>Page Not Found !</h2>
        <p>
          Sorry, the page you are looking for does not exist.
        </p>
        <button
          type="button"
          className="btn btn-primary mt-4"
          onClick={handleBackToHome}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};


export default NotFound;
