import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const getYear = date.getFullYear();
  return (
    <footer className="footer sm:flex justify-between p-10 bg-neutral text-neutral-content">
      <div>
        <span className="footer-title">Company</span>
        <Link to="/emailjs" className="link link-hover">
          Contact
        </Link>
        <Link to="/" className="link link-hover">
          About us
        </Link>
        <Link to="/" className="link link-hover">
          name: Bits Computer
        </Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <span className="link link-hover">Terms of use</span>
        <span className="sm:w-1/3 text-start w-1/2">
          © {getYear} Bits Computer. All rights reserved. Unlawful reproduction
          or distribution of this website's content without permission is
          strictly prohibited.
        </span>
      </div>
    </footer> 
  );
};

export default Footer;
