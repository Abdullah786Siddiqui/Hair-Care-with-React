import React from "react";
import { RiTwitterXFill } from "react-icons/ri";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      className="container-fluid  px-5 pt-4 footer-gradient  "
      style={{ position: "sticky", bottom: "10" }}
    >
      <footer>
        <div className="row">
          <div className="col-md-5">
            <h5 className="mt-2 text-white footer">
              <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
                Hair Care
              </Link>
            </h5>
            <hr width="90px" />
            <p className="mr text-white">
              Together we're building a safe, welcoming space in beauty and
              beyond. <br />
              This is makeup made to feel good in, without hiding what <br />{" "}
              makes you unique
            </p>
          </div>

          <div className="col-md-2 text-white">
            <h5 className="mt-2 footer text-white">Quick Link</h5>
            <hr width="95px" />
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              Hair Care
            </Link>
            <br />

            <Link
              to={"/Contact"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Contact Us
            </Link>
            <br />
          </div>

          <div className="col-md-2">
            <h5 className="mt-2 text-white footer">Shop Now</h5>
            <hr width="100px" />
            <Link
              to={"/productpages?category=Sunscreen"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Sunscreen
            </Link>
            <br />

            <Link
              to={"/productpages?category=Hair Spray"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Hair Spray
            </Link>
            <br />

            <Link
              to={"/productpages?category=Serum"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Serums
            </Link>
            <br />

            <Link
              to={"/productpages?category=Facewash"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Facewash
            </Link>
            <br />

            <Link
              to={"/productpages?category=Hair Growth Oil"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Hair Growth Oil
            </Link>
          </div>

          <div className="col-md-3 footer">
            <h5 className="mt-2 text-white footer">Contact Us</h5>
            <hr width="100px" />
            <p style={{ fontSize: "14px", color: "white" }}>
              <i className="fa-solid fa-location-dot "></i> #12, Main
              Office-Karachi
            </p>
            <p style={{ fontSize: "14px", color: "white" }}>
              <i className="fa-solid fa-phone"></i> 0300-123456
            </p>
            <a
              href="https://mail.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "14px",
                color: "white",
                textDecoration: "none",
              }}
            >
              <i className="fa-solid fa-envelope"></i> www.haircare@gmail.com
            </a>
          </div>
        </div>
        <div className="text-center mt-4 text-white">
          &copy; 2024 - E-commerce Website All rights reserved
          <br />
          <div className="mt-2">
            <a href="https://www.facebook.com/">
              <FaFacebook id="facebook" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram id="insta" />
            </a>
            <a href="https://twitter.com/">
              <RiTwitterXFill id="X" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
