import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
// import "../assests/css/Contact.css";
// import Ask from '../FAQ/AskCard' 
// import AskCard from "../FAQ/AskCard";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // Initialize useHistory hook

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      // Submit form data
      console.log(values);
      setSubmitted(true);
    },
  });

  const handleGoBack = () => {
    // Function to handle Go Back to Home button click
    navigate("/"); // Replace "#home" with the ID of your home section
  };

  if (submitted) {
    return (
      <Container className=" contact-form">
        <h2 className="text-center mb-5">Thank You!</h2>
        <p className="text-center">
          Your form has been submitted successfully.
        </p>
        <div className="text-center">

        <Button
          className="btn"
          variant="secondary"
          onClick={handleGoBack}
          >
          Go Back to Home
        </Button>
          </div>
      </Container>
    );
  }

  return (
    <Container className=" contact-form">
      <Row>
        <Col md={6}>
          <h2 className="heading text-center mb-3">Contact Us</h2>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.name && formik.errors.name}
              />
              {formik.touched.name && formik.errors.name && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.name}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.email && formik.errors.email}
              />
              {formik.touched.email && formik.errors.email && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group
              controlId="formBasicMessage"
              className=""
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                col={4}
                placeholder="Enter your message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.message && formik.errors.message}
              />
              {formik.touched.message && formik.errors.message && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Button className=".btn mt-3" variant="secondary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          {/* Replace the iframe below with your location map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3085072.881082397!2d-122.67532956389637!3d37.77663778640273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e036c799d21%3A0x91495c992fcb63c1!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1605057303372!5m2!1sen!2sus"
            width="100%"
            height="500"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Location Map"
          />
        </Col>
      </Row>
      {/* <AskCard/> */}
    </Container>
  );
};
export default Contact;
