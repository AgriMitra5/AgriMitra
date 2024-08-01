import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Photo1 from "../assets/fphoto3.jpg";
import Photo2 from "../assets/fphoto2.jpg";
import Photo3 from "../assets/fphoto1.jpeg";
import "./Home.css";
import HomeCarts from "../HomeCarts/HomeCarts";
import Review from "../Reviews/Review";
import { CardSubtitle, Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="  border mt-3 mb-5">
        <Carousel fade>
          <Carousel.Item>
            <img src={Photo1} alt="" />
            <Carousel.Caption>
              <h3>Harvest Success with Affordable Rentals</h3>
              {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Photo2} alt="" />
            <Carousel.Caption>
              <h3>Farm Smarter: Rent the Best, Forget the Rest</h3>
              {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Photo3} alt="" />
            <Carousel.Caption>
              <h3>Cultivate Innovation: Rent, Farm, Prosper</h3>
              {/*<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="mt-5 border p-3">
        <h3>Some Products :</h3>
        <HomeCarts />
      </div>
      <div className="mt-5 border p-4">
        <h2>What People Say About Us !</h2>
        <Review />
      </div>
    </>
  );
};

export default Home;
