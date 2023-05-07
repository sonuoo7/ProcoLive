import React from "react";
import { FaComments, FaCog, FaRocket, FaShieldAlt } from "react-icons/fa";
// import "../Features/Features.css";
import { Link } from "react-router-dom";

const Featuresection = () => {
  return (
    <div
      className="amazing-feature-area padding-top-110 padding-bottom-100 style-two"
      id="about"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h2 className="title">Amazing Features</h2>
              <p>
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolor tempor incididunt ut labore et dolore{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-amazing-feature-item">
              <div className="icon">
                <FaComments />
              </div>
              <div className="content">
                <Link to="#">
                  <h4 className="title">Live Chat</h4>
                </Link>
                <p>
                  Fat decisively pursuit regular so calling. West he plan girl
                  been my then up no.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-amazing-feature-item">
              <div className="icon">
                <FaCog />
              </div>
              <div className="content">
                <Link to="#">
                  <h4 className="title">Easy Configure</h4>
                </Link>
                <p>
                  Fat decisively pursuit regular so calling. West he plan girl
                  been my then up no.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-amazing-feature-item">
              <div className="icon">
                <FaRocket />
              </div>
              <div className="content">
                <Link to="#">
                  <h4 className="title">User Friendly</h4>
                </Link>
                <p>
                  Fat decisively pursuit regular so calling. West he plan girl
                  been my then up no.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-amazing-feature-item">
              <div className="icon">
                <FaShieldAlt />
              </div>
              <div className="content">
                <Link to="#">
                  <h4 className="title">High Security</h4>
                </Link>
                <p>
                  Fat decisively pursuit regular so calling. West he plan girl
                  been my then up no.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featuresection;
