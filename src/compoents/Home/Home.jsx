import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Photo1 from '../assets/fphoto3.jpg';
import Photo2 from '../assets/fphoto2.jpg';
import Photo3 from '../assets/fphoto1.jpeg';
import './Home.css'
const Home = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={Photo1} alt=""/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Photo2} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Photo3} alt=""  />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Home