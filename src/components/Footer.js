import React from "react";
import "./css/style.css";

const Footer = () => {
  return (
    <div className="footer">
      <a href="/termsOfUse" className="link">
        Terms of use{" "}
      </a>
      <a href="/ContactUs" className="link">
        Contact us{" "}
      </a>
      <a href="/About" className="link">
        About{" "}
      </a>
    </div>
  );
};

export default Footer;
