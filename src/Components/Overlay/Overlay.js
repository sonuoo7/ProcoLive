import React from "react";
import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Overlay.css"; // Import your custom CSS file for styling the carousel
import heroImg1 from "../../assests/images/hero-img1.png";
import { Container } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center">Content Title</h1>
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
          <p>Content description
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloribus odit natus, amet voluptatem maxime animi odio illo at possimus, cum delectus nulla! Assumenda illo, vero obcaecati blanditiis expedita numquam.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default CarouselComponent;
