import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Feature.css"; // Import your CSS file here

const WebifyContent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="content">
            <ul className="features-list">
              <li>
                <div className="feature-box1">
                  <i className="ri-star-fill"></i>
                  <h5>Weekend - Super Creative</h5>
                  <br />
                  <p className="text-center">
                    We can change the way your business thinks and behaves
                    long-term in order to combat the threat of digital
                    disruption. sadlasdhlafallan Lorem ipsum dolor sit amet,
                  </p>
                </div>
              </li>
              <li>
                <div className="feature-box2">
                  <i className="ri-star-fill"></i>
                  <h5>Timer - Avant Garde</h5>
                  <br />
                  <p className="text-center">
                    We can change the way your business thinks and behaves
                    long-term in order to combat the threat of digital
                    disruption. sadlasdhlafallan Lorem ipsum dolor sit amet,
                  </p>
                </div>
              </li>
              <li>
                <div className="feature-box3">
                  <i className="ri-star-fill"></i>
                  <h5>Watch - Feature-driven</h5>
                  <br />
                  <p>
                    We can change the way your business thinks and behaves
                    long-term in order to combat the threat of digital
                    disruption. sadlasdhlafallan Lorem ipsum dolor sit amet,
                  </p>
                </div>
              </li>
              <li>
                <div className="feature-box4">
                  <i className="ri-star-fill"></i>
                  <h5>Local_pizza - Fox in the Box</h5>
                  <br />
                  <p>
                    We can change the way your business thinks and behaves
                    long-term in order to combat the threat of digital
                    disruption. sadlasdhlafallan Lorem ipsum dolor sit amet,
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
              Webify is the all-in-one WordPress theme to build a beautiful
              online presence for you. Our team discussed every single detail to
              make sure Webify is the most versatile and unique theme created so
              far.
            </p>
            <p>
              It’s more than a WordPress theme. It’s like a design tool that
              lets you create websites of any niche, easily. Each and every
              block is created with A/B testing and UX research. Take a look at
              all the pages and elements and see how beautiful your website will
              become. No coding required, of course!
            </p>
            <button className="btn">Take 1-min Tour</button>
            {/* Add your tour content here */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WebifyContent;
