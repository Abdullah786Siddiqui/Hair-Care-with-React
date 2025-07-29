import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section id="features" className="features section mt-5">
      <div className="container section-title" data-aos="fade-up">
        <h2 className="text-center text-info">Features</h2>
        <p className="text-center text-muted">
          Discover unique features that cater to your specific needs with
          precision and care.
        </p>
      </div>

      <div className="container animate-bottom">
        <div className="row gy-4 align-items-center features-item">
          <div
            className="col-lg-5 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>Why Choose Our Hair Care Products</h3>
            <p>
              Our hair care products are designed to gently cleanse and nourish
              your hair while being safe for all hair types. Infused with
              natural ingredients like argan oil and aloe vera, they provide
              essential vitamins and moisture for healthy, shiny hair.
            </p>
            <Link
              to={"/All"}
              className="btn btn-outline-success fw-bolder Started"
            >
              Get Started
            </Link>
          </div>
          <div
            className="col-lg-7 order-1 order-lg-2 d-flex align-items-center"
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            <div className="image-stack">
              <img src="/lamp1.jpg" alt="" className="stack-front" />
              <img src="/lamp2.jpg" alt="" className="stack-back" />
            </div>
          </div>
        </div>

        <div className="row gy-4 align-items-stretch justify-content-between features-item mb-5">
          <div
            className="col-lg-6 d-flex align-items-center features-img-bg"
            data-aos="zoom-out"
          >
            <Link to={"/productdetail/24"}>
              <img
                src="/HairGrowthPowderjar max orange.webp"
                className="img-fluid"
                style={{ cursor: "pointer" }}
              />
            </Link>
          </div>
          <div
            className="col-lg-5 text-start d-flex justify-content-center flex-column"
            data-aos="fade-up"
          >
            <h3>Revive Your Hair Naturally</h3>
            <div className="text-start">
              <p>
                Here’s a refined single-paragraph version of your text: Discover
                the transformative power of nature with our premium Sulfate-Free
                Hair Care Range. Crafted with 100% natural ingredients, our
                formulas are designed to nourish and repair your hair from root
                to tip, leaving it irresistibly soft, shiny, and healthy.
                Infused with essential oils and vitamins, our products restore
                vitality while being gentle on your hair,
              </p>
              
              <Link
                to={"/All"}
                className="btn btn-outline-success fw-bolder align-self-start Shop-Now"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
