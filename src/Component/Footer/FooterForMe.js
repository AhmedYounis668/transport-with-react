import React from "react";

const FooterForMe = () => {
  return (
    <div className="FooterForMe">
      <div>Developed By Ahmed Younis Mern Stack Developer</div>
      <div>
        <a
          href="https://portofillio-mern-stack.web.app/#"
          style={{ color: "white", textDecoration: "none" }}
          target="_blanck"
        >
          <i style={{ cursor: "pointer" }} class="fa-solid fa-user mx-2"></i>{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-younis-163l998/"
          style={{ color: "white", textDecoration: "none" }}
          target="_blanck"
        >
          <i
            style={{ cursor: "pointer" }}
            class="fa-brands fa-linkedin mx-2"
          ></i>{" "}
        </a>
        <a
          href="https://github.com/AhmedYounis668"
          style={{ color: "white", textDecoration: "none" }}
          target="_blanck"
        >
          <i style={{ cursor: "pointer" }} class="fa-brands fa-github mx-2"></i>
        </a>
      </div>
    </div>
  );
};

export default FooterForMe;
