import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoIosCall, IoMdMail, IoMdPin } from "react-icons/io";
import "./About.css";

const AboutUs = () => {
  return (
    <div className="about-us my-5">
      <div className="container">
        <Row xs={1} md={2} className="g-4 px-4">
          <Col>
            {" "}
            {/* Header for AboutUs page */}{" "}
            <p className="about-title">
              We sell <br /> Products <br /> Around the world{" "}
            </p>{" "}
          </Col>{" "}
          <Col
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              className="img-about"
              src="https://dyopath.com/wp-content/uploads/2020/06/EDICATION-IMG.png"
              alt=""
            />
          </Col>{" "}
        </Row>{" "}
        <p className="second-title"> Our origins </p>
        <p className="text">
          Pandora Ecommerce is all about fashion & jewelry.We’ re a leading
          fashion & jewelry platform focused on helping our clients{" "}
        </p>{" "}
        <div className="my-5">
          <p className="service-title pb-4">
            Why Clients Choose Pandora for Shopping{" "}
          </p>{" "}
          <Row xs={1} md={2} className="g-4">
            <Col>
              <img
                className="img-fluid"
                src="https://dyopath.com/wp-content/uploads/2020/06/Education-2-img.png"
                alt=""
              />
            </Col>{" "}
            <Col>
              {" "}
              {/* Some boolet points */}{" "}
              <div className="service-info">
                <p className="service-sub">
                  <span className="icon">
                    <BsFillCheckCircleFill />
                  </span>
                  Innovative{" "}
                </p>{" "}
                <p className="service-text">
                  Solved for multi - location shipping complexity to give back
                  to veterans who gave all they had.{" "}
                </p>{" "}
              </div>{" "}
              <div className="service-info">
                <p className="service-sub">
                  <span className="icon">
                    <BsFillCheckCircleFill />
                  </span>
                  Safe{" "}
                </p>{" "}
                <p className="service-text">We protect sensitive data. </p>{" "}
              </div>{" "}
              <div className="service-info">
                <p className="service-sub">
                  <span className="icon">
                    <BsFillCheckCircleFill />
                  </span>
                  Collaborative{" "}
                </p>{" "}
                <p className="service-text">
                  Origins Ecommerce is all about Jwelary{" "}
                </p>{" "}
              </div>{" "}
            </Col>{" "}
          </Row>{" "}
        </div>{" "}
        <div className="about-info-box">
          <div className="info-box">
            <IoMdPin className="fas" />
            <h3 className="info-box-title"> Our Address </h3>{" "}
            <p> mirpur - 10 Dhaka - 1216 </p>{" "}
          </div>{" "}
          <div className="info-box mt-4">
            <IoMdMail />
            <h3> Email Us </h3>{" "}
            <p>
              pandora @gmail.com <br />
              contact @example.com{" "}
            </p>{" "}
          </div>{" "}
          <div className="info-box mt-4">
            <IoIosCall />
            <h3> Call Us </h3>{" "}
            <p>
              +880 1991543963 <br />
              +880 1630750346{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default AboutUs;
