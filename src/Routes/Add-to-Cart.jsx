
import { useSelector } from "react-redux";
import CartBag from "../Components/Cart-Bag";
import CarySummary from "../Components/Cary-summary";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const AddtoCart = () => {
  const products = useSelector((Store) => Store.cartProduct);
 
  return (
    <>
      <Header />
      <main>
        {products.length > 0 ? (
          <div className="container  cartmargin">
            <div className="row">
              <div className="col-xl-8">
                {products.map((product) => (
                  <CartBag product={product} key={product.id}  />
                ))}
              </div>

              <div className="col-xl-4  summary-fixed ">
                <CarySummary />
              </div>
            </div>
          </div>
        ) : (
          <div className="text-danger fs-5 fw-bold text-center m-5">
            NO Item in Cart
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default AddtoCart;
