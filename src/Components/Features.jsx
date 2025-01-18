import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <section id="features" className="features section mt-5">
      <div className="container section-title" data-aos="fade-up">
        <h2 className="text-center text-info">Features</h2>
        <p className="text-center text-muted">
          Discover unique features that cater to your specific needs with precision and care.
        </p>
      </div>

      <div className="container animate-bottom">
        <div className="row gy-4 align-items-center features-item">
          <div className="col-lg-5 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <h3>Why Choose Our Hair Care Products</h3>
            <p>
              Our hair care products are designed to gently cleanse and nourish your hair while being safe for all hair types.
              Infused with natural ingredients like argan oil and aloe vera, they provide essential vitamins and moisture for healthy, shiny hair.
            </p>
            <Link to={"/All"} className="btn btn-outline-success fw-bolder Started">Get Started</Link>
          </div>
          <div className="col-lg-7 order-1 order-lg-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
            <div className="image-stack">
              <img src="public/lamp1.jpg" alt="" className="stack-front" />
              <img src="public/lamp2.jpg" alt="" className="stack-back" />
            </div>
          </div>
        </div>

        <div className="row gy-4 align-items-stretch justify-content-between features-item mb-5">
          <div className="col-lg-6 d-flex align-items-center features-img-bg" data-aos="zoom-out">
            <Link to={"/productdetail/24"}><img 
              src="public/HairGrowthPowderjar max orange.webp" 
              className="img-fluid" 
              style={{ cursor: 'pointer' }} 
             
            /></Link>
          </div>
          <div className="col-lg-5 d-flex justify-content-center flex-column" data-aos="fade-up">
            <h3>Revive Your Hair Naturally</h3>
            <p>Discover the power of nature with our premium Sulfate-Free Hair Care Range. Crafted with 100% natural ingredients, it nourishes your hair from root to tip, making it softer, shinier, and healthier.</p>
            <ul>
              <li><i className="bi bi-check"></i> <span>Nourish and repair your hair with our sulfate-free, natural formulas.</span></li>
              <li><i className="bi bi-check"></i> <span>Infused with essential oils and vitamins for shiny, healthy hair.</span></li>
              <li><i className="bi bi-check"></i> <span>Safe for all hair types – free from parabens and harsh chemicals.</span></li>
            </ul>
            <Link to={"/All"} className="btn btn-outline-success fw-bolder align-self-start Shop-Now">Shop Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
