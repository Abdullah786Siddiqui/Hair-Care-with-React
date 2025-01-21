import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Reaction from "./Reaction";
import products from "../data/cards";
import { Link } from "react-router-dom";
const Men = () => {
  
  const Product = products.filter((product) => [16, 17, 18].includes(product.id));



  return (
    <>
      <Header />
      <div class="container mt-3">
        <h1 id="product-heading" class="text-center mb-3">
          Hair Care
        </h1>
        <p id="product-description" class="text-center"></p>
        <div class="row" id="product-list">
          <div class="">
            <div class="">
              <a class=" view-details " data-id="19">
                <div class="image-container position-relative">
                  {/* <!--normal image--> */}
                  <img
                    src="/public/1100x750---Landing-Page---Main-Banner---Desktop---MEN-FW_d64677c2-ca30-4ba3-b965-32fee04c15be.webp"
                    class="card-img-top normal-img"
                  />
                  {/* <!--hover image--> */}
                  <img
                    src="/public/1100x750---Landing-Page---Main-Banner---Desktop---MEN-FW_d64677c2-ca30-4ba3-b965-32fee04c15be.webp"
                    class="card-img-top hover-img position-absolute top-0 start-0 w-100 h-100 "
                    alt="Hover image"
                  />
                </div>
              </a>
            </div>
          </div>

          <div class="container text-center mt-3 ">
            <div class="">
              <a class=" view-details "></a>
              <h1 class="text-center ">
                WE'RE MEN, OF COURSE WE USE CONATURAL
              </h1>
              <p class="text-center  mt-3">
                Elevate your grooming routine with Conatural MEN, the leading
                choice in men's skincare. Designed specifically for the needs of
                the modern man, our face washes deliver powerful results while
                keeping your skin fresh, clean, and revitalized. Most commercial
                facewashes are formulated with soap based formulas or with
                sulphates. These formulas, while effective at cleaning the skin,
                are not suited to the skins pH or barrier function and long term
                use can cause skin problems. Our formulas are pH balanced,
                sulphate free and have a high level of natural extracts to
                combat specific skin concerns. Discover our Acne Defence
                Facewash targeted to combat acne with Neem and Chamomile, Hydra
                Power Facewash with hydrating cucumber and cooling technology
                and Oil Control facewash to take control of excess oil and
                impurities.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
        {Product.map((Product)=>(
          <div className="col-lg-4 col-md-4 col-sm-6 mb-4  ">
        <div className="card h-100 ">
          <Link to={`/productdetail/${Product.id}`} style={{textDecoration: "none"}}>
            <div className="image-container position-relative">
              {/* Normal image */}
              <img
                src={Product.imageUrl}
                className="card-img-top normal-img"
                alt="Product"
              />
              {/* Hover image */}
              {/* <img
              src={product.hoverImageUrl}
              className="card-img-top hover-img position-absolute top-0 start-0 w-100 h-100"
              alt="Hover image"
              style={{ opacity: 0 }}
            /> */}
            </div>
            <div className="card-body text-center  ">
              <h5 className="card-title  ">{Product.title}</h5>
              <p className="card-text">{Product.price}</p>

              <span class="btn btn-outline-success fw-bolder w-100">
                BUY NOW
              </span>
            </div>
          </Link>
        </div>
      </div>
        ))}
         </div>
         </div>
        
        

        <div class="row mt-5 ">
          <div class="col-md-6">
            <div class="image-container position-relative">
              {/* <!--normal image--> */}
              <img
                src="/public/serumspack copy.webp"
                class="card-img-top normal-img"
              />
              {/* <!--hover image--> */}
              <img
                src="/public/serumspack copy.webp"
                class="card-img-top hover-img position-absolute top-0 start-0 w-100 h-100 "
                alt="Hover image"
              />
            </div>
          </div>
          
         

          <div class="col-md-6">
            <div class="text-center  ">
              <h4>ABOUT THE RANGE</h4>
              <p className="pt-4">
                At Conatural, we understand that today's man demands skincare
                products that work as hard as he does. That's why we're proud to
                introduce our new line of skincare essentials, specially
                formulated for the unique needs of men's skin. Our philosophy is
                simple: effective skincare shouldn't be complicated with a
                10-step routine. Whether you're battling breakouts, dryness, or
                greasy and shiny skin, we've got you covered with formulations
                that get results. Each one of our face washes is specially
                formulated to address common concerns such as excess oil,
                clogged pores, rough texture, acne and dehydration, leaving your
                skin smooth, refreshed and ready to take on the day.
              </p>
           </div>
      </div>
      </div>
    </div>
      <Reaction />
      <Footer />
    
    </>
  );
};

export default Men;
