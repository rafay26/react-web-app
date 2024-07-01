import React from 'react';
import { Element } from 'react-scroll';
import { Container } from 'react-bootstrap';
import About from './About';
import Contact from './Contact';
import { Carousel } from 'react-bootstrap';
import GradientBackground from './GradientBackground';

const Home = () => {
  return (
    <div>
      <Element name="home" className="home-container">
      <GradientBackground>
      <div className="container mt-4">
        <h1>Welcome to our Real Estate SPA!</h1>
        <p className="lead">
          Explore our beautiful real estate listings.
        </p>

        
        <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.corporatefinanceinstitute.com/assets/real-estate.jpeg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Beautiful Home</h3>
                <p>Explore our latest listings.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2022/11/home-and-tech-social.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Luxury Apartment</h3>
                <p>Find your dream apartment.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/3288103/pexels-photo-3288103.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Modern Villa</h3>
                <p>Discover modern living spaces.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
     
      </div>
    </GradientBackground>
 
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default Home;





