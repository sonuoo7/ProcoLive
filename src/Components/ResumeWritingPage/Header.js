import React from "react";
import chooseImg from "../../assests/img/header-clock.png";
import {
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { FaShoppingCart, FaBell } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="header-area style-two" id="home">
        <div className="header-two-shape">
          <img className="m-5" src={""} alt="" />
        </div>
        <div className="header-area-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="header-inner">
                  <h1 className="title wow fadeInDown">
                    Best digital watch for your daily life
                  </h1>
                  <div className="btn-wrapper">
                    <button href="#" className="btn">
                      <FaShoppingCart /> Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-right-image">
          <div className="right-image-with-icon header-right-image-animation">
            <div className="icon-1 bell">
              <FaBell />
            </div>
            <div className="icon-2 car">
              <Link to="www.google.co.in">
                {" "}
                <FaGoogle />
              </Link>
            </div>
            <div className="icon-3 Linkedin">
              <FaLinkedin />
            </div>
            <img src={chooseImg} alt="header right image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
