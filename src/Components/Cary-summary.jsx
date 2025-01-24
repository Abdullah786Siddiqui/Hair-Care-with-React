import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const CarySummary = () => {
  const totalval = useSelector((Store) => Store.cartProduct.totalPrice);
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-5 mt-lg-0">
        <div className="card shadow-none">
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
                    <td className="text-end fw-bold">{`Rs ${totalval}`}</td>
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
                      <span className="fw-bold">{`Rs ${totalval}`}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="cont">
        <Link to={"/Checkout"} className="btn btn-info mb-3 cont2 d-block w-75 border-1 p-1 rounded-1 mx-5">Checkout</Link>
        <button onClick={() => navigate(-2)} className="w-75 mx-5 cont2 border-1 p-1 rounded-1">
          Continue
        </button>
      </div>
    </>
  );
};

export default CarySummary;
