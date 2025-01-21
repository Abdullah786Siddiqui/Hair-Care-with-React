import React from "react";
import { useSelector } from "react-redux";

const CarySummary = () => {

  
  const products = useSelector((Store) => Store.cartProduct);
  let totalPrice = 0
  
  {products.forEach((product) => {
    totalPrice += product.price
  })}
  return (
    <div className="mt-5 mt-lg-0 ">
      <div className="card  shadow-none">
        <div className="card-header bg-transparent border-bottom py-3 px-4">
          <h5 className="font-size-16 mb-0">
            Order Summary <span className="float-end">#MN0124</span>
          </h5>
        </div>
        <div className="card-body p-4 pt-2">
          <div className="table-responsive">
            <table className="table mb-0">
              <tbody>
                <tr>
                  <td>Sub Total :</td>
                 
                    <td className="text-end fw-bold">{`Rs ${totalPrice}`}</td>
                
                </tr>
                <tr>
                  <td>Discount :</td>
                  <td className="text-end">- $ 78</td>
                </tr>
                <tr>
                  <td>Shipping Charge :</td>
                  <td className="text-end">$ 25</td>
                </tr>
                <tr>
                  <td>Estimated Tax :</td>
                  <td className="text-end">$ 18.20</td>
                </tr>
                <tr className="bg-light">
                  <th>Total :</th>
                  <td className="text-end">
                    <span className="fw-bold">{`Rs ${totalPrice}`}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarySummary;
