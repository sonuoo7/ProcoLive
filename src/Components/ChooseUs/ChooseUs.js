import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./ChooseUs.css";

import ReactPlayer from "react-player";
import { Tilt } from "react-tilt";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section>
      <Container>
        <h2
          className="text-center chooseus"
          data-aos="fade-up-right"
          data-aos-duration="2000"
        >
          Why Choose Us
        </h2>
        <Row>
          
            <Col lg="6" md="6">
              <Tilt className="Tilt" options={{ max: 25 }}>
              <div
                className="choose__img"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                {showVideo ? (
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=5psbLib5FOE"
                    playing={true}
                    loop={true}
                    muted={false}
                    width="100%"
                    height="100%"
                  />
                ) : (
                  <img src={chooseImg} alt="" className="w-100" />
                )}
                {!showVideo && (
                  <span className="play__icon">
                    <i
                      className="ri-play-circle-fill"
                      onClick={() => setShowVideo(!showVideo)}
                    ></i>
                  </span>
                )}
              </div>
                </Tilt>
            </Col>
          <Col lg="6" md="6">
            <div className="choose__content">
              <div className="choose__content-row">
                <div className="choose__icon">
                  <i className="ri-compass-3-fill"></i>
                </div>
                <div
                  className="choose__text"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <h3>Expert Guidance</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam feugiat ante velit, sit amet feugiat quam tristique
                  </p>
                </div>
              </div>
              <div className="choose__content-row">
                <div className="choose__icon">
                  <i className="ri-star-fill"></i>
                </div>
                <div
                  className="choose__text"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <h3>Customer Satisfaction</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam feugiat ante velit, sit amet feugiat quam tristique
                    quis.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
