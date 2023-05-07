import React from "react";
import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Overlay.css"; // Import your custom CSS file for styling the carousel
import heroImg1 from "../../assests/images/hero-img1.png";
import { Container } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <Container>

    <div className="carousel-wrapper">
      <Carousel
        autoPlay={false}
        interval={1500}
        infiniteLoop={true}
        transitionTime={500}
        showStatus={false}
        showThumbs={false}
        stopOnHover={true}
      >

        <div>
          <img src="image1.jpg" alt="Image 1" />
        </div>
        <div>
          <img src={heroImg1} alt="Image 2" />
        </div>
        <div>
          <img src="image3.jpg" alt="Image 3" />
        </div>
      </Carousel>
      <div className="content-wrapper">
        {/* Add your content here */}
        <h1>Content Title</h1>
        <p>Content description</p>
      </div>
    </div>
        </Container>
  );
};

export default CarouselComponent;
