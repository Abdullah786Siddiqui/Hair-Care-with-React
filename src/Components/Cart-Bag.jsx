import { useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import { CartAction } from "../Store/Store";

import { useDispatch } from "react-redux";
const CartBag = ({ product }) => {
  let selectRef = useRef();
  let [count, setcount] = useState(product.price);



  let handleselect = (value) => {
    let total = product.price * value
    setcount(total);

    return;
  };

  const dispatch = useDispatch();
  let handledelete = () => {
    dispatch(CartAction.RemoveProduct(product.id));
  };
  return (
    <div className="cont mt-4">
      <div className="card border shadow-none">
        <div className="card-body">
          <div className="d-flex align-items-start border-bottom pb-3">
            <div className="me-4">
              <img
                src={product.imageUrl}
                alt=""
                className="avatar-lg rounded"
              />
            </div>
            <div className="flex-grow-1 align-self-center overflow-hidden">
              <div>
                <h5 className="text-truncate font-size-18">
                  <a href="#" className="text-dark">
                    {product.title}
                  </a>
                </h5>
                <p className="text-muted mb-0">
                  <i className="bx bxs-star text-warning"></i>
                  <i className="bx bxs-star text-warning"></i>
                  <i className="bx bxs-star text-warning"></i>
                  <i className="bx bxs-star text-warning"></i>
                  <i className="bx bxs-star-half text-warning"></i>
                </p>
                <p className="mb-0 mt-1">
                  Color : <span className="fw-medium">Gray</span>
                </p>
              </div>
            </div>
            <MdDelete className="fs-3 deletebtn" onClick={handledelete} />
            <div className="flex-shrink-0 ms-2">
              <ul className="list-inline mb-0 font-size-16">
                <li className="list-inline-item">
                  <a href="#" className="text-muted px-1">
                    <i className="mdi mdi-trash-can-outline"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-muted px-1">
                    <i className="mdi mdi-heart-outline"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="row">
              <div className="col-md-4">
                <div className="mt-3">
                  <p className="text-muted mb-2">Price</p>
                  <h5 className="mb-0 mt-2">
                    <span className="text-muted me-2">
                      <del className="font-size-16 fw-normal">
                        {" "}
                        {` Rs${count * 2}`}
                      </del>
                    </span>
                    {count}
                  </h5>
                </div>
              </div>
              <div className="col-md-5">
                <div className="mt-3">
                  <p className="text-muted mb-2">Quantity</p>
                  <div className="d-inline-flex">
                    <select
                      ref={selectRef}
                      onChange={() => handleselect(selectRef.current.value)}
                      className="form-select form-select-sm w-xl"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mt-3">
                  <p className="text-muted mb-2">Total</p>
                  <h5> {count}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Repeat similar blocks for other products */}
    </div>
  );
};

export default CartBag;
