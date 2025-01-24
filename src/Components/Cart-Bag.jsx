import { useRef } from "react";
import { MdDelete } from "react-icons/md";
import { CartAction } from "../Store/Store";
import { useDispatch, useSelector } from "react-redux";

const CartBag = ({ product }) => {
  let selectRef = useRef();
  const dispatch = useDispatch();

  // Get the item quantity and price from Redux state
  const itemInCart = useSelector((state) =>
    state.cartProduct.cart.find((item) => item.id === product.id)
  );

  let count = itemInCart ? itemInCart.price * itemInCart.quantity : product.price;

  // Handle dropdown change (Quantity Change)
  let handleselect = (value) => {
    const newQuantity = parseInt(value);

    // Dispatch the updated total action with item id and selected quantity
    dispatch(CartAction.updatedtotal({ itemId: product.id, newQuantity }));
  };

  let handledelete = () => {
    dispatch(CartAction.RemoveProduct(product.id));
  };

  return (
    <div className="cont mt-4 ">
      <div className="card border shadow-none">
        <div className="card-body">
          <div className="d-flex align-items-start border-bottom ">
            <div className="me-2">
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
              </div>
            </div>
            <MdDelete className="fs-3 me-2 mt-4 deletebtn" onClick={handledelete} />
          </div>

          <div>
            <div className="row">
              <div className="col-md-4">
                <div className="mt-3">
                  <p className="text-muted mb-2">Price</p>
                  <h5 className="mb-0 mt-2">
                    <span className="text-muted me-2">
                      <del className="font-size-16 fw-normal">
                        {" Rs" + product.price * 2}
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
                      value={itemInCart ? itemInCart.quantity : 1} // Set the selected quantity
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
    </div>
  );
};

export default CartBag;
