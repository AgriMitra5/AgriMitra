import { Button, Card, Carousel } from 'react-bootstrap';
import React from 'react'
import Photo1 from '../assets/fphoto1.jpeg'
import Photo2 from '../assets/fphoto2.jpg'

const HomeCarts = () => {

    const products = [
        {
          imgSrc: Photo1,
          name: 'Affordable Tractor',
          description: 'High-quality tractor available for rent at affordable prices.',
          renterName: 'John Doe',
          location: 'California, USA',
        },
        {
          imgSrc: Photo1,
          name: 'Modern Plow',
          description: 'Access top-tier plow technology without the hefty investment.',
          renterName: 'Jane Smith',
          location: 'Texas, USA',
        },
        {
          imgSrc: Photo1,
          name: 'Innovative Seeder',
          description: 'Innovative seeder to enhance your farming efficiency and yield.',
          renterName: 'Bob Johnson',
          location: 'Florida, USA',
        },
      ];
  return (
    <Carousel fade>
    {products.map((product, index) => (
      <Carousel.Item key={index}>
        <Card className="product-card">
          <Card.Img variant="top" src={product.imgSrc} alt={`Product ${index}`} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text><strong>Renter:</strong> {product.renterName}</Card.Text>
            <Card.Text><strong>Location:</strong> {product.location}</Card.Text>
            <Button variant="primary">Rent Now</Button>
          </Card.Body>
        </Card>
      </Carousel.Item>
    ))}
  </Carousel>
  )
}




export default HomeCarts