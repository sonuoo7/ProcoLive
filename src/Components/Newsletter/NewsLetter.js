import React from "react";
import "./NewsLetter.css";
import { Row, Col } from "react-bootstrap";
// import backgroundImage from "../../assests/images/p/rocologo.jpg";

const NewsLetter = () => {
  return (
    <section>
      <div className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Subscribe our Newsletter</h2>
            <div className="subscribe">
              <input type="text" placeholder="Email" />
              <button className="btn align-content-center">Subscribe</button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default NewsLetter;
