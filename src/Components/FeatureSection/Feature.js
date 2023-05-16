import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Feature.css"; // Import your CSS file here
import { Link } from "react-router-dom";

const WebifyContent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="content">
            <ul className="features-list">
              <li>
                <div className="feature-box1 p-4">
                  <i className="ri-star-fill"></i>
                  <h5>Time Management</h5>
                  <br />
                  <p className="text-center">
                    A ProCo teaches clients effective time management strategies
                    that optimize their productivity and minimize wasted time.
                  </p>
                </div>
              </li>
              <li>
                <div className="feature-box2 p-4">
                  <i className="ri-star-fill"></i>
                  <h5>Mindset Shifts:</h5>
                  <br />
                  <p className="text-center">
                    A ProCo helps clients cultivate a growth mindset and
                    overcome limiting beliefs that hold them back from achieving
                    their goals.
                  </p>
                </div>
              </li>
              <li>
                <div className="feature-box3 p-4">
                  <i className="ri-star-fill"></i>
                  <h5>Strategic Planning</h5>
                  <br />
                  <p>
                    A ProCo helps clients develop a strategic plan that aligns
                    with their values, strengths, and vision for the future.
                  </p>
                </div>
              </li>
              <li>
                <div className="feature-box4 p-3">
                  <i className="ri-star-fill"></i>
                  <h5>Work-Life Balance</h5>
                  <br />
                  <p>
                    A ProCo helps clients achieve a healthy work-life balance by
                    setting boundaries, managing stress, and prioritizing
                    self-care.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={6}>
          <div className="sidebar">
            <h1>Build websites with Webify</h1>
            <p>
              A ProCo, short for Productivity Coach, is a trained professional
              who specializes in helping individuals and teams optimize their
              productivity, improve their work habits, and achieve their
              professional goals. A ProCo understands the unique challenges that
              professionals face, such as managing multiple priorities, avoiding
              distractions, and staying motivated.
            </p>
            <p>
              Our team of productivity coaches works with top clients to develop
              customized productivity plans and provide ongoing support and
              guidance to ensure success. A ProCo is not just a coach but also a
              mentor, motivator, and accountability partner, who empowers their
              clients to achieve their full potential and live a fulfilling
              professional life. If you are looking to boost your productivity
              and take your career to the next level, consider working with a
              ProCo.
            </p>
            <Link className="btn" to="https://resume.proco.co.in/">
              Take 1-min Tour
            </Link>
            {/* Add your tour content here */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WebifyContent;
