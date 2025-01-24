import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const FavoriteItem = () => {
  let products = useSelector((Store) => Store.cartProduct.favoriteitem);
  console.log(products);

  return (
    <>
      <Header />
      <h3 id="product-heading" className="text-center mt-3">Your Favorite Items</h3>
      <p id="product-description" className="text-center">Browse through your favorite products and shop now!</p>


      <div className="container">
        <div className="row">
          {products.map((product) => {
            return(
              <div className="col-lg-4 col-md-4 col-sm-6 mb-4  ">
              <div className="card h-100 ">
                <Link
                  to={`/productdetail/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="image-container position-relative">
                    <img
                      src={product.imageUrl}
                      className="card-img-top normal-img"
                      alt="Product"
                    />
                  </div>
                  <div className="card-body text-center  ">
                    <h5 className="card-title  ">{product.title}</h5>
                    <p className="card-text fw-bold">{`Rs : ${product.price}`}</p>

                    <span className="btn btn-outline-success fw-bolder w-100">
                      BUY NOW
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            )
           
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FavoriteItem;
