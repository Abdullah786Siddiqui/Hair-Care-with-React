import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import ProductCard from "../Routes/ProductCard";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ProductAction } from "../Store/Store";
import { useEffect } from "react";
import Reaction from "../Components/Reaction"


const Productpages = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const FilterProduct = useSelector((store) => store.Product);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    let category = queryParams.get("category");
    dispatch(ProductAction.filterPost(category));
  }, [location]);

  return (
    <>
      <Header />
      <Outlet />
      {FilterProduct.length > 0 && (
        <div className="text-center my-3">
          <h1 id="product-heading">{FilterProduct[0].category}</h1>
          <p id="product-description">
            The fan-favorite skin & face wash products
          </p>
        </div>
      )}
      <div className="container" >
        <div className="row">
          {FilterProduct.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            
            />
          ))}
        </div>
        </div>
        <Reaction/>
     

      <Footer />
    </>
  );
};

export default Productpages;
