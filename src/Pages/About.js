import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import aboutImg from "../assests/images/about-us.png";
import CountUp from "react-countup";
import Page from "../Components/Pag/Page";
import Video from "../Components/Services/Video";
// import Testimonial from "../Testimonal/Testimonal";
import AboutHeader from "../Components/AboutUs/AboutHeader";
import Services from "../Components/Services/Services";

const About = () => {
  return (
    <>
      <section>
        <Container className="mb-2">
          <AboutHeader />
          <Page />
         
      <Video />
        </Container>
      </section>
      <Services/>
    </>
  );
};

export default About;
