import React from "react";
import FooterForMe from "./FooterForMe";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
        <ul class="social-icon">
          <li class="social-icon__item">
            <a class="social-icon__link" href="#">
              <i class="fa-solid fa-house"></i>
            </a>
          </li>
          <li class="social-icon__item">
            <a class="social-icon__link" href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li class="social-icon__item">
            <a class="social-icon__link" href="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li class="social-icon__item">
            <a class="social-icon__link" href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
        <div className="d-flex justify-content-center footercontent">
          <a href="#Home" style={{ textDecoration: "none", color: "white" }}>
            <div className="mx-2">Home</div>
          </a>
          <a style={{ textDecoration: "none", color: "white" }} href="#Drivers">
            <div className="mx-2">Drivers</div>
          </a>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="#Our Cars"
          >
            {" "}
            <div className="mx-2">Our Cars</div>
          </a>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="#Why Choose Us"
          >
            <div className="mx-2">Why Choose Us</div>
          </a>
        </div>
      </footer>
      <FooterForMe />
    </div>
  );
};

export default Footer;
