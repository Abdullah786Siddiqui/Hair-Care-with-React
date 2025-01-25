import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <>
      <div className="col-lg-4 col-md-4 col-sm-6 mb-4  ">
        <div className="card h-100 ">
          <Link to={`/productdetail/${product.id}`} style={{textDecoration: "none"}}>
            <div className="image-container position-relative">
              {/* Normal image */}
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
    </>
  );
};
export default ProductCard;
