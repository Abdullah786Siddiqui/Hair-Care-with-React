import Header from "../Components/Header";
import Footer from "../Components/Footer";
import products from "../data/cards";
import { useParams } from "react-router-dom";
import Reaction from "../Components/Reaction"

const ProductDetail = () => {
  const { id } = useParams();

  let product = products.find((product) => product.id === parseInt(id));



  return (
    <>
      <Header />
      <div className="container  mt-5 p-3  bg-white rounded-2">
        <div className="row gy-4 align-items-center">
          {/* <!-- Product Image Section --> */}
          <div className="col-md-6 text-center">
            {/* <!-- Adjusting the image size --> */}
            <img
              src={product.imageUrl}
              alt="Product Image"
              className="img-fluid rounded-3"
              style={{ maxWidth: "100%", height: "auto", maxHeight: "300px" }}
            />
          </div>

          {/* <!-- Product Details Section --> */}
          <div className="col-md-6">
            <div className="d-flex flex-column gap-3">
              {/* <!-- Product Title --> */}
              <h2 className="text-center text-secondary" id="product-title">
                {product.title}
              </h2>

              {/* <!-- Product Price --> */}
              <h4 className="text-center text-secondary" id="product-price">
                {product.price}
              </h4>

              {/* <!-- Select Size Section --> */}
              <div>
                <p className="text-center  mb-2">Select a size</p>
                <div className="d-flex justify-content-center flex-wrap gap-2 ">
                  <button className="btn fw-bolder range">150ml</button>
                  <button className="btn fw-bolder range">100ml</button>
                  <button className="btn fw-bolder range">80ml</button>
                  <button className="btn fw-bolder range">60ml</button>
                  <button className="btn fw-bolder range">40ml</button>
                </div>
              </div>

              {/* <!-- Product Description --> */}
              <p className="text-muted text-center">
                Aqua, Cocamidopropyl Betaine, Sodium Cocoyl Isethionate, Decyl
                Glucoside, Glycerin, Polysorbate 80, Sodium Lauryl Sarcosinate,
                Pyrus Malus fruit extract, Sodium PCA
              </p>

              {/* <!-- Buttons Section --> */}
              <div className="d-flex justify-content-center gap-3">
                <button
                  className="btn fw-bolder w-100 w-md-auto cart"
                  id="add-to-cart"
                >
                  Add to Cart
                </button>
                <button className="btn btn-danger w-100 w-md-auto">
                  <span>🤍</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reaction-div">
      <Reaction/>

      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
