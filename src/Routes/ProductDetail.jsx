import Header from "../Components/Header";
import Footer from "../Components/Footer";
import products from "../data/cards";
import { useParams } from "react-router-dom";
import Reaction from "../Components/Reaction";
import { useDispatch } from "react-redux";
import { CartAction } from "../Store/Store";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
const ProductDetail = () => {
  const [smShow, setSmShow] = useState(false);
  const { id } = useParams();
  let dispatch = useDispatch();
  let product = products.find((product) => product.id === parseInt(id));
  let handleCartbtn = (id) => {
    dispatch(CartAction.SelectedProduct([id]));
    setSmShow(true);
    setTimeout(() => {
      setSmShow(false);
    }, 1000);
  };

  return (
    <>
      <Header />
      <div className="container  mt-4 p-3  bg-white rounded-2">
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
              {`Rs : ${product.price}`}
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
              {/* <!-- From Uiverse.io by SouravBandyopadhyay -->  */}
<div className="button w-50 cart bg-info fw-bold  "  onClick={() => handleCartbtn(product.id)} data-tooltip={`Price  $${product.price}`}>
  <div className="button-wrapper">
    <div className="text">Add To Cart</div>
    <span className="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-cart2"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
        ></path>
      </svg>
    </span>
  </div>
</div>

                
                <button className="btn btn-danger w-50 border-0 ">
                  <span>🤍</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} className="popup" backdrop={false}  >
       
          <h6 className="p-2 modal-css m-0 text-center fw-bold "> {product.title} <span className="fw-bolder text-success">is Added</span></h6>
        
      </Modal>

      <div className="reaction-div">
        <Reaction />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
