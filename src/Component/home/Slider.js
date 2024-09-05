import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../../Images/slider.jpg";
// Import Swiper styles
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Container } from "react-bootstrap";

const Slider = () => {
  return (
    <div>
      {/* <header class="header">
        <div class="container">
          <div class="header-content">
            <h4
              style={{ color: "white" }}
              className="header-subtitle "
              id="Home"
            >
              Welcome
            </h4>
            <h1 style={{ color: "white" }} className="header-title ">
              Lets Go Transport,{" "}
            </h1>
            <h6 class="header-mono" style={{ color: "white" }}>
              We Helps Companies To Transfer Everythink .
            </h6>

            <Link to="/register">
              <button class="btn btn-primary btn-rounded">
                <i class="ti-printer pr-2"></i>Sign up
              </button>
            </Link>
          </div>
        </div>
      </header> */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="header">
          <img
            style={{ opacity: "0.6", height: "100%", width: "100%" }}
            alt="slider image"
            src={image}
          />
          {/* <div style={{ position: "absolute", top: "100px" }}>dsadsadsad</div> */}
          <div>
            <div class="header-content">
              <h4
                style={{ color: "white" }}
                className="header-subtitle "
                id="Home"
              >
                Welcome
              </h4>
              <h1 style={{ color: "white" }} className="header-title ">
                Lets Go Transport,{" "}
              </h1>
              <h6 class="header-mono" style={{ color: "white" }}>
                We Helps Companies To Transfer Everythink .
              </h6>
              <Link to="/register">
                <button class="btn btn-primary btn-rounded">
                  <i class="ti-printer pr-2"></i>Sign up
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
