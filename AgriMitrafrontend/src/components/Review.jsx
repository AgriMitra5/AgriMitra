import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Review.css";
import f1 from "../components/images/farmer1.jpg";
import f2 from "../components/images/farmer4.jpg";
import f3 from "../components/images/farmer3.webp";
import f4 from "../components/images/farmer2.png";
import f5 from "../components/images/farmer5.jpg";
// Add more images as needed

const reviews = [
  {
    id: 1,
    photo: f1,
    name: "सुरेश जाधव",
    description:
      "हे एक उत्कृष्ट उत्पादन आहे. मला वापरायला खूप आनंद झाला. अत्यंत शिफारस!",
    rating: 5, // Rating out of 5
  },
  {
    id: 2,
    photo: f2,
    name: "सुमित्रा शिंदे",
    description: "अद्भुत सेवा आणि गुणवत्ता. नक्कीच पुन्हा येईन.",
    rating: 4,
  },
  {
    id: 3,
    photo: f3,
    name: "शंकर देशमुख",
    description: "एक उत्कृष्ट अनुभव. उत्पादनाने माझ्या अपेक्षा ओलांडल्या.",
    rating: 5,
  },
  {
    id: 4,
    photo: f4,
    name: "रामनाथ पाटील",
    description:
      "हे एक उत्कृष्ट उत्पादन आहे. मला वापरायला खूप आनंद झाला. अत्यंत शिफारस!",
    rating: 3,
  },
  {
    id: 5,
    photo: f5,
    name: "प्रकाश गायकवाड",
    description: "अद्भुत सेवा आणि गुणवत्ता. नक्कीच पुन्हा येईन.",
    rating: 4,
  },
];

const Review = () => {
  const renderStars = (rating) => {
    const fullStars = "★".repeat(rating);
    const emptyStars = "☆".repeat(5 - rating);
    return fullStars + emptyStars;
  };

  return (
    <div className="review-container ">
      {reviews.map((review) => (
        <Card key={review.id} style={{ width: "180px", margin: "10px" }}>
          <Card.Img variant="top" src={review.photo} />
          <Card.Body>
            <Card.Title>{review.name}</Card.Title>
            <Card.Text className="rating_start">
              {renderStars(review.rating)}{" "}
              <span className="rating_star_num">({review.rating}/5)</span>
            </Card.Text>
            <Card.Text>{review.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Review;
