import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsChat, BsGear, BsRocket, BsShield } from "react-icons/bs";
import { Link } from "react-router-dom";
import '../../assests/css/style.css'
import featureShape from "../../assests/img/list-feature-image-2.png"
import clock from "../../assests/img/header-clock.png"
// import "./assests/css/animate.css";
// import "./assests/css/responsive.css";
// import "./assests/css/bootstrap.min.css";
// import "./assests/css/fontawesome.min.css";
// import "../../assests/css/faliton.css";
// import "../../assests/js/TweenMax"

const Resume = () => {
  return (
    <>
      <div className="header-area style-two" id="home">
        <div className="header-two-shape">
          <img src="assets/img/header-shape.png" alt="" />
        </div>
        <div className="header-area-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="header-inner">
                  <h1 className="title wow FadeInDown">
                    Best digital watch for your daily life
                  </h1>
                  <div className="btn-wrapper">
                    <Link
                      to="#"
                      className="boxed-btn btn-rounded reverse-color"
                    >
                      <i className="fas fa-shopping-cart"></i> Order Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-right-image">
          <div className="right-image-with-icon header-right-image-animation">
            <div className="icon-1 bell">
              <i className="fas fa-bell"></i>
            </div>
            <div className="icon-2 car">
              <i className="fas fa-car"></i>
            </div>
            <div className="icon-3 facebook">
              <i className="fab fa-facebook"></i>
            </div>
            <img src={clock} alt="header right image" />
          </div>
        </div>
      </div>

      <section className="list-feature-area padding-top-110 padding-bottom-115 style-02">
        <div className="shape">
          <img src={featureShape} alt="feature shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-content-area">
                <div className="img-wrap">
                  <img src={featureShape} alt="list feature" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-content-area">
                <h3 className="title">
                  More then watch that fill your needs in time
                </h3>
                <div className="list-feature-wrap">
                  <ul>
                    <li>
                      <div className="single-list-feature-item">
                        <div className="icon">
                          <i className="flaticon-alarm-clock"></i>
                        </div>
                        <div className="content">
                          <h4 className="title">Alarm Counter</h4>
                          <p>
                            {" "}
                            Intention age nay otherwise but breakfast. Around
                            garden beyond to extent by.{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-list-feature-item">
                        <div className="icon">
                          <i className="flaticon-chat-1"></i>
                        </div>
                        <div className="content">
                          <h4 className="title">Live Chat</h4>
                          <p>
                            {" "}
                            Intention age nay otherwise but breakfast. Around
                            garden beyond to extent by.{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-list-feature-item">
                        <div className="icon">
                          <i className="flaticon-heart"></i>
                        </div>
                        <div className="content">
                          <h4 className="title">Heartbeat Check</h4>
                          <p>
                            {" "}
                            Intention age nay otherwise but breakfast. Around
                            garden beyond to extent by.{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-list-feature-item">
                        <div className="icon">
                          <i className="flaticon-route"></i>
                        </div>
                        <div className="content">
                          <h4 className="title">Location Trace</h4>
                          <p>
                            {" "}
                            Intention age nay otherwise but breakfast. Around
                            garden beyond to extent by.{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="amazing-feature-area padding-top-110 padding-bottom-100 style-two"
        id="about"
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center">
                <h2 className="title">Amazing Features</h2>
                <p>
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolor tempor incididunt ut labore et dolore
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6}>
              <div className="single-amazing-feature-item">
                <div className="icon">
                  <BsChat />
                </div>
                <div className="content">
                  <Link to="#">
                    <h4 className="title">Live Chat</h4>
                  </Link>
                  <p>
                    Fat decisively pursuit regular so calling. West he plan girl
                    been my then up no.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="single-amazing-feature-item">
                <div className="icon">
                  <BsGear />
                </div>
                <div className="content">
                  <Link to="#">
                    <h4 className="title">Easy Configure</h4>
                  </Link>
                  <p>
                    Fat decisively pursuit regular so calling. West he plan girl
                    been my then up no.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="single-amazing-feature-item">
                <div className="icon">
                  <BsRocket />
                </div>
                <div className="content">
                  <Link to="#">
                    <h4 className="title">User Friendly</h4>
                  </Link>
                  <p>
                    Fat decisively pursuit regular so calling. West he plan girl
                    been my then up no.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="single-amazing-feature-item">
                <div className="icon">
                  <BsShield />
                </div>
                <div className="content">
                  <Link to="#">
                    <h4 className="title">High Security</h4>
                  </Link>
                  <p>
                    Fat decisively pursuit regular so calling. West he plan girl
                    been my then up no.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <section className="list-feature-area padding-top-110 padding-bottom-115 list-feature-bg">
        <div className="container">
          <div className="row reorder-xs">
            <div className="col-lg-6">
              <div className="right-content-area white">
                <h3 className="title">
                  More then watch that fill your needs in time
                </h3>
                <div className="list-feature-wrap white">
                  <ul>
                    <li>
                      <div className="single-list-feature-item">
                        <div className="icon">
                          <i className="flaticon-alarm-clock"></i>
                        </div>
                        <div className="content">
                          <h4 className="title">Alarm Counter</h4>
                          <p>
                            {" "}
                            Intention age nay otherwise but breakfast. Around
                            garden beyond to extent by.{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-list-feature-item">
                        <div className="icon">
                          <i className="flaticon-chat-1"></i>
                        </div>
                        <div className="content">
                          <h4 className="title">Live Chat</h4>
                          <p>
                            {" "}
                            Intention age nay otherwise but breakfast. Around
                            garden beyond to extent by.{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-list-feature-item">
                        <div className="icon">
                          <i className="flaticon-heart"></i>
                        </div>
                        <div className="content">
                          <h4 className="title">Heartbeat Check</h4>
                          <p>
                            {" "}
                            Intention age nay otherwise but breakfast. Around
                            garden beyond to extent by.{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-list-feature-item">
                        <div className="icon">
                          <i className="flaticon-route"></i>
                        </div>
                        <div className="content">
                          <h4 className="title">Location Trace</h4>
                          <p>
                            {" "}
                            Intention age nay otherwise but breakfast. Around
                            garden beyond to extent by.{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="left-content-area">
                <div className="img-wrap">
                  <img
                    src="assets/img/list-feature-image-2.png"
                    alt="list feature"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="block-feature-area padding-top-120" id="feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-block-feature">
                <div className="icon">
                  <i className="flaticon-charging"></i>
                </div>
                <div className="content">
                  <h4 className="title">Battery Backup</h4>
                  <p>
                    {" "}
                    Intention age nay otherwise but breakfast. Around garden
                    beyond to extent by.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-block-feature">
                <div className="icon">
                  <i className="flaticon-wifi"></i>
                </div>
                <div className="content">
                  <h4 className="title">Support Wifi</h4>
                  <p>
                    {" "}
                    Intention age nay otherwise but breakfast. Around garden
                    beyond to extent by.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-block-feature">
                <div className="icon">
                  <i className="flaticon-rocket-1"></i>
                </div>
                <div className="content">
                  <h4 className="title">Backups</h4>
                  <p>
                    {" "}
                    Intention age nay otherwise but breakfast. Around garden
                    beyond to extent by.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-block-feature">
                <div className="icon">
                  <i className="flaticon-compass"></i>
                </div>
                <div className="content">
                  <h4 className="title">GPS Control</h4>
                  <p>
                    {" "}
                    Intention age nay otherwise but breakfast. Around garden
                    beyond to extent by.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-block-feature">
                <div className="icon">
                  <i className="flaticon-photo-camera"></i>
                </div>
                <div className="content">
                  <h4 className="title">Camera</h4>
                  <p>
                    {" "}
                    Intention age nay otherwise but breakfast. Around garden
                    beyond to extent by.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-block-feature">
                <div className="icon">
                  <i className="flaticon-fingerprint-2"></i>
                </div>
                <div className="content">
                  <h4 className="title">Battery Backup</h4>
                  <p>
                    {" "}
                    Intention age nay otherwise but breakfast. Around garden
                    beyond to extent by.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 ">
              <div className="bottom-image text-center margin-top-40 fadeInUp wow">
                <img
                  src="assets/img/feature-blcok-img.png"
                  alt="block feature image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="intro-video-area intro-video-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="intro-video-wrap">
                <Link
                  to="https://www.youtube.com/watch?v=HVFgMNclzcw"
                  className="video-play-btn mfp-iframe"
                >
                  <i className="fas fa-play"></i>
                </Link>
                <h2 className="title">About Our Features</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className="product-area padding-top-110 padding-bottom-90"
        id="product"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="title">Our Products</h2>
                <p>
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolor tempor incididunt ut labore et dolore{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="product-carousel">
                <div className="single-product-item">
                  <div className="thumb">
                    <img src="assets/img/product/01.jpg" alt="product image" />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link to="#">Smart Watch</Link>
                    </h4>
                    <div className="price-wrap">
                      <span className="price">$34</span> <del>$55</del>
                    </div>
                    <Link to="#" className="boxed-bt">
                      Buy Now
                    </Link>
                  </div>
                </div>
                <div className="single-product-item">
                  <div className="thumb">
                    <img src="assets/img/product/02.jpg" alt="product image" />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link to="#">V7t watch</Link>
                    </h4>
                    <div className="price-wrap">
                      <span className="price">$34</span> <del>$55</del>
                    </div>
                    <Link to="#" className="boxed-bt">
                      Buy Now
                    </Link>
                  </div>
                </div>
                <div className="single-product-item">
                  <div className="thumb">
                    <img src="assets/img/product/03.jpg" alt="product image" />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link to="#">t2f Watch</Link>
                    </h4>
                    <div className="price-wrap">
                      <span className="price">$34</span> <del>$55</del>
                    </div>
                    <Link to="#" className="boxed-bt">
                      Buy Now
                    </Link>
                  </div>
                </div>
                <div className="single-product-item">
                  <div className="thumb">
                    <img src="assets/img/product/04.jpg" alt="product image" />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link to="#">i21 Watch</Link>
                    </h4>
                    <div className="price-wrap">
                      <span className="price">$34</span> <del>$55</del>
                    </div>
                    <Link to="#" className="boxed-bt">
                      Buy Now
                    </Link>
                  </div>
                </div>
                <div className="single-product-item">
                  <div className="thumb">
                    <img src="assets/img/product/05.jpg" alt="product image" />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link to="#">f25 Watch</Link>
                    </h4>
                    <div className="price-wrap">
                      <span className="price">$34</span> <del>$55</del>
                    </div>
                    <Link to="#" className="boxed-bt">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="testimonial-area testimonial-bg padding-top-110 padding-bottom-120"
        id="testimonial"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center white">
                <h2 className="title">What users Says</h2>
                <p>
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolor tempor incididunt ut labore et dolore{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
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
                        <i className="fas fa-quote-left"></i>{" "}
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
                        <i className="fas fa-quote-left"></i>{" "}
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
                        <i className="fas fa-quote-left"></i>{" "}
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
                        <i className="fas fa-quote-left"></i>{" "}
                      </div>
                    </div>
                    <div className="content">
                      <h4 className="name">Mark Anthony</h4>
                      <span className="post">Director</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-area padding-top-110 padding-bottom-120" id="faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="title">Frequently Asked Questions</h2>
                <p>
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolor tempor incididunt ut labore et dolore{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row reorder-xs">
            <div className="col-lg-7">
              <div className="accordion-wrapper">
                <div id="accordion">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <a
                          className=""
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Agreed but expect repair she nay sir silent person
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        My possible peculiar together to. Desire so better am
                        cannot he up before points. Remember mistaken opinions
                        it pleasure of debating. Court front maids forty if
                        aware their at. Chicken use are pressed removed.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          It surprise informed mr advanced do outweigh.
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        My possible peculiar together to. Desire so better am
                        cannot he up before points. Remember mistaken opinions
                        it pleasure of debating. Court front maids forty if
                        aware their at. Chicken use are pressed removed.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Appetite welcomed interest the goodness boy not
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        My possible peculiar together to. Desire so better am
                        cannot he up before points. Remember mistaken opinions
                        it pleasure of debating. Court front maids forty if
                        aware their at. Chicken use are pressed removed.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFour">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Expenses as material breeding insisted building to
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        My possible peculiar together to. Desire so better am
                        cannot he up before points. Remember mistaken opinions
                        it pleasure of debating. Court front maids forty if
                        aware their at. Chicken use are pressed removed.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFive">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          No in he real Wandered or strictly raillery stanhill a
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      aria-labelledby="headingFive"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        My possible peculiar together to. Desire so better am
                        cannot he up before points. Remember mistaken opinions
                        it pleasure of debating. Court front maids forty if
                        aware their at. Chicken use are pressed removed.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="right-content-area">
                <div className="img-wrapper">
                  <img src="assets/img/faq-image.png" alt="faq image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-area contact-bg padding-120" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-info-area">
                <h3 className="title">Contact Us</h3>
                <p>
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolor tempor incididunt ut labore et dolore{" "}
                </p>
                <ul className="contact-info-list ">
                  <li className="single-info-item">
                    <div className="icon">
                      <i className="fas fa-home"></i>
                    </div>
                    <div className="content">
                      <span className="details"> 143 castle road 517 </span>
                      <span className="details"> 143 castle road 517</span>
                    </div>
                  </li>
                  <li className="single-info-item">
                    <div className="icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="content">
                      <span className="details"> +3 123 456 789</span>
                      <span className="details"> +3 123 456 789</span>
                    </div>
                  </li>
                  <li className="single-info-item">
                    <div className="icon">
                      <i className="far fa-envelope"></i>
                    </div>
                    <div className="content">
                      <span className="details">
                        {" "}
                        <Link
                          to="/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="d2bbbcb4bd92abbda7a0bfb3bbbefcb1bdbf"
                        >
                          [email&#160;protected]
                        </Link>{" "}
                      </span>
                      <span className="details">
                        {" "}
                        <Link
                          to="/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="f79e999198b78e9882859a969e9bd994989a"
                        >
                          [email&#160;protected]
                        </Link>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-area">
                <form
                  action="index.html"
                  id="get_in_touch"
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="email"
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          id="subject"
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="form-group textarea">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          cols="30"
                          placeholder="Message"
                          rows="10"
                        ></textarea>
                      </div>
                      <button className="submit-btn" type="submit">
                        Submit Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="back-to-top base-color-2">
        <i className="fas fa-rocket"></i>
      </div>
    </>
  );
};

export default Resume;
