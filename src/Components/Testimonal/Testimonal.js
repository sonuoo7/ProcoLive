import React from "react";
import Carousel from "react-bootstrap/Carousel";
import testimonialImage1 from "../../assests/images/kids-learning.png"; // Import testimonial image 1
import testimonialImage2 from "../../assests/images/branding.png"; // Import testimonial image 2
import testimonialImage3 from "../../assests/images/graphics-design.png"; // Import testimonial image 3
import "./Testimonal.css";
import { Container } from "react-bootstrap";

const testimonialData = [
  {
    content:
      "“We had so many different requirements for the tool that we easily knocked out 99% of them because they didn’t have the customizations and the features that we needed”",
    image: testimonialImage1,
    name: "Bob Mathews",
    position: "System Engineer",
    signature: "signature-url-1",
  },
  {
    content:
      "“The tool provided by the team helped us streamline our workflow and increase our productivity by 30%. The customizable features and ease of use were exactly what we needed.”",
    image: testimonialImage2,
    name: "Alice Johnson",
    position: "Product Manager",
    signature: "signature-url-2",
  },
  {
    content:
      "“The customer support from the team has been exceptional. Their prompt response and willingness to address our concerns have made our experience with the tool truly remarkable.”",
    image: testimonialImage3,
    name: "John Doe",
    position: "CEO",
    signature: "signature-url-3",
  },
];

const Testimonial = () => {
  return (
    <Container>
      <h1 className="text-center m-5 ">Testimonial</h1>
      <Carousel
        autoPlay={true}
        interval={1500}
        infiniteLoop={true}
        transitionTime={500}
        showStatus={false}
        showThumbs={false}
        stopOnHover={true}
      >
        {testimonialData.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className="tb-testimonial">
              <div
                className="tb-testimonial-left"
                style={{ marginLeft: "20px" }}
              >
                <div className="tb-testimonial-logo">
                  <img src="" alt="logo" />
                </div>
                <div className="tb-testimonial-text tb-f18-lg tb-line1-6">
                  <p>{testimonial.content}</p>
                </div>
                <div className="tb-testimonial-meta">
                  <div className="tb-testimonial-signature">
                    <img src={testimonial.signature} alt="signature" />
                  </div>
                  <h3 className="tb-f16-lg tb-font-name tb-testimonial-name tb-m0">
                    {testimonial.name}
                  </h3>
                  <div className=" tb-mb-6 tb-testimonial-position tb-f13-lg">
                    {testimonial.position}
                  </div>
                </div>
              </div>
              <div
                className="tb-testimonial-right"
                style={{ marginLeft: "100px" }}
              >
                <img src={testimonial.image} alt="testimonial" />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Testimonial;
