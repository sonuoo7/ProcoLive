import { Container, Row, Col } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";
import './Testi.css'

const Testimonial = () => {
  return (
    <section
      className="testimonial-area testimonial-bg padding-top-110 padding-bottom-120"
      id="testimonial"
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <div className="section-title text-center white">
              <h2 className="title">What users Says</h2>
              <p>
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolor tempor incididunt ut labore et dolore{" "}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="testimonial-carousel">
              <div className="single-testimonial-item">
                <div className="description">
                  They provide innovative solutions with the best. tempor
                  incididunt utla bore et dolor tempor incididunt .
                </div>
                <div className="author-meta">
                  <div className="thumb">
                    <img
                      src="assets/img/testimonial/01.png"
                      alt="testimonial image"
                    />
                    <div className="icon">
                      {" "}
                      <FaQuoteLeft />
                    </div>
                  </div>
                  <div className="content">
                    <h4 className="name">Mark Anthony</h4>
                    <span className="post">Director</span>
                  </div>
                </div>
              </div>
              <div className="single-testimonial-item">
                <div className="description">
                  They provide innovative solutions with the best. tempor
                  incididunt utla bore et dolor tempor incididunt .
                </div>
                <div className="author-meta">
                  <div className="thumb">
                    <img
                      src="assets/img/testimonial/02.png"
                      alt="testimonial image"
                    />
                    <div className="icon">
                      {" "}
                      <FaQuoteLeft />
                    </div>
                  </div>
                  <div className="content">
                    <h4 className="name">Mark Anthony</h4>
                    <span className="post">Director</span>
                  </div>
                </div>
              </div>
              <div className="single-testimonial-item">
                <div className="description">
                  They provide innovative solutions with the best. tempor
                  incididunt utla bore et dolor tempor incididunt .
                </div>
                <div className="author-meta">
                  <div className="thumb">
                    <img
                      src="assets/img/testimonial/03.png"
                      alt="testimonial image"
                    />
                    <div className="icon">
                      {" "}
                      <FaQuoteLeft />
                    </div>
                  </div>
                  <div className="content">
                    <h4 className="name">Mark Anthony</h4>
                    <span className="post">Director</span>
                  </div>
                </div>
              </div>
              <div className="single-testimonial-item">
                <div className="description">
                  They provide innovative solutions with the best. tempor
                  incididunt utla bore et dolor tempor incididunt .
                </div>
                <div className="author-meta">
                  <div className="thumb">
                    <img
                      src="assets/img/testimonial/04.png"
                      alt="testimonial image"
                    />
                    <div className="icon">
                      {" "}
                      <FaQuoteLeft />
                    </div>
                  </div>
                  <div className="content">
                    <h4 className="name">Mark Anthony</h4>
                    <span className="post">Director</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Testimonial;