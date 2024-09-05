import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import d1 from "./../../Images/16,100+ Truck Driver Stock Photos, Pictures & Royalty-Free Images.jfif";
import d2 from "./../../Images/Why Being a Company Driver Is Better Than an Owner Operator.jfif";
import d3 from "./../../Images/woman.jfif";
import d4 from "./../../Images/Bing Image Creator.jfif";
import d5 from "./../../Images/Portrait of confident truck driver on parking lot looking at camera_.jfif";
import d6 from "./../../Images/16_100+ Caminhoneiro fotos de stock, imagens e fotos royalty-free.jfif";
import d7 from "./../../Images/Proud Trucker and His Truck Stock Image - Image of caucasian, industry_ 99255397.jfif";
import d8 from "./../../Images/woman2.jfif";

const DriverCards = () => {
  return (
    <div>
      <Row>
        <div
          id="Drivers"
          className="d-flex justify-content-center my-2"
          style={{ color: "black", fontSize: "35px", fontWeight: "bold" }}
        >
          <span style={{ color: "royalblue", marginRight: "5px" }}>Our</span>{" "}
          Truckers
        </div>
      </Row>
      <div className=" driverbackground">
        <Container className="my-2">
          <Row className=" ">
            <Col className="d-flex flex-wrap justify-content-center">
              <div className="card m-2">
                <img src={d4} alt="d1" className="driver" />

                <div class="card__content">
                  <p class="card__title">Driver Information</p>
                  <p class="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>

              <div className="card m-2">
                <img src={d2} alt="d1" className="driver" />

                <div class="card__content">
                  <p class="card__title">Driver Information</p>
                  <p class="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>

              <div className="card m-2">
                <img src={d3} alt="d1" className="driver" />

                <div class="card__content">
                  <p class="card__title">Driver Information</p>
                  <p class="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>

              <div className="card m-2">
                <img src={d1} alt="d1" className="driver" />

                <div class="card__content">
                  <p class="card__title">Driver Information</p>
                  <p class="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>

              <div className="card m-2">
                <img src={d5} alt="d1" className="driver" />

                <div class="card__content">
                  <p class="card__title">Driver Information</p>
                  <p class="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>

              <div className="card m-2">
                <img src={d6} alt="d1" className="driver" />

                <div class="card__content">
                  <p class="card__title">Driver Information</p>
                  <p class="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>

              <div className="card m-2">
                <img src={d7} alt="d1" className="driver" />

                <div class="card__content">
                  <p class="card__title">Driver Information</p>
                  <p class="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>

              <div className="card m-2">
                <img src={d8} alt="d1" className="driver" />

                <div class="card__content">
                  <p class="card__title">Driver Information</p>
                  <p class="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DriverCards;
