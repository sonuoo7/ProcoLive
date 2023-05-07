import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Page.css";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";

const PagesComponent = () => {
  return (
    <div className="pages-container">
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <div
              className="image-container"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <img className="img1" src={courseImg1} alt="image 1" />
              <img className="img2" src={courseImg2} alt="image 2" />
              <img className="img3" src={courseImg3} alt="image 3" />
              <img className="img4" src={courseImg1} alt="image 4" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div
              className="content-container"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <h2 className="text-center mb-5">
                We're designers, directors, strategists, & awkward dancers.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consectetur commodo ex vitae maximus. Donec fermentum, sem eu
                dapibus commodo, nibh lectus laoreet massa, id fermentum nulla
                arcu non quam. Morbi in sem euismod, posuere velit eu, commodo
                elit. Nam vehicula quam ligula, vel convallis metus accumsan id.
                Duis dignissim congue nibh, vel euismod tellus gravida vitae. In
                hac habitasse platea dictumst. Ut lacinia, magna vel dignissim
                commodo, tellus urna vehicula augue, eu dignissim nisi velit
                eget lectus.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PagesComponent;
