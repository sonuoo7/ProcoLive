import React from "react";
import CountUp from "react-countup";
import { Container, Row, Col } from "react-bootstrap";

const Video = () => {
  return (
    <div style={{ position: "relative" }}>
      <video
        src={"https://www.youtube.com/watch?v=jRWR0Ob6mLI"} // replace with the actual path to your video file
        autoPlay
        loop
        muted
        className="w-100"
        style={{ zIndex: -1 }}
      />
      <Container className="position-absolute top-50 start-50 translate-middle">
        <div className="content text-center">
          <h1 className="heading">
            Your wellness builds upon the agency daily.
          </h1>
          <p className="content__paragraph">
            At ProCo, our team of productivity coaches provides personalized
            support and guidance to help you overcome obstacles, cultivate
            healthy habits, and prioritize your mental wellness.
          </p>
          <Row className="justify-content-center">
            <Col md={4} className="mx-3">
              <div className="single__counter">
                <span className="counter">
                  <CountUp start={0} end={25} duration={3} suffix="K" />
                </span>
                <p className="counter__title">Completed Projects</p>
              </div>
            </Col>
            <Col md={4} className="mx-3">
              <div className="single__counter">
                <span className="counter">
                  <CountUp start={0} end={95} duration={3} suffix="M" />
                </span>
                <p className="counter__title">Ideas Raised Funds</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={4} className="mx-3">
              <div className="single__counter">
                <span className="counter">
                  <CountUp start={0} end={12} duration={3} suffix="M" />
                </span>
                <p className="counter__title">Patient Around World</p>
              </div>
            </Col>
            <Col md={4} className="mx-3">
              <div className="single__counter">
                <span className="counter">
                  <CountUp start={0} end={5} duration={2} suffix="K" />
                </span>
                <p className="counter__title">Categories Served</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Video;
