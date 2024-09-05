import React from "react";

const Arrow = () => {
  return (
    <div>
      <a
        href="#"
        id="toTop"
        style={{ display: "block", textDecoration: "none", zIndex: "3000" }}
      >
        <span id="toTopHover"></span>To Top
      </a>
    </div>
  );
};

export default Arrow;
