import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { CartAction } from "../Store/Store";

const Checkout = () => {
  const products = useSelector((state) => state.cartProduct.cart);
  const totalPrice = useSelector((state) => state.cartProduct.totalPrice);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    reValidateMode: "onSubmit",
  });

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    dispatch(CartAction.clearCart());
    navigate("/");
  };

  let onSubmit = () => {
    if (products.length > 0) {
      if (localStorage.getItem("formdata")) {
        reset();
  
        handleShow();
      }else{
        navigate("/Create")
      }
    }else {
      alert("Your Cart is Empty");
      navigate(-3);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row mt-3 mb-5">
          {/* Cart Section */}
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">
                {products.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {products.length > 0 ? (
                products.map((product) => (
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center lh-sm"
                    key={product.id}
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-25"
                    />
                    <div>
                      <h6 className="my-0">{product.title}</h6>
                      <small className="text-muted">
                        Quantity: {product.quantity}
                      </small>
                    </div>
                    <span className="text-body-secondary">
                      Rs {product.price * product.quantity}
                    </span>
                  </li>
                ))
              ) : (
                <li className="list-group-item">Your cart is empty.</li>
              )}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (Rs)</span>
                <strong>{totalPrice}</strong>
              </li>
            </ul>
          </div>

          {/* Billing Section */}
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form
              className="needs-validation"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    {...register("name", {
                      required: "Name is Required",
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters",
                      },
                    })}
                  />
                  {errors.name && (
                    <small className="text-danger">{errors.name.message}</small>
                  )}
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    {...register("lastName", {
                      required: "Last name is Required",
                      minLength: {
                        value: 3,
                        message: "Last name must be at least 3 characters",
                      },
                    })}
                  />
                  {errors.lastName && (
                    <small className="text-danger">
                      {errors.lastName.message}
                    </small>
                  )}
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    {...register("email", {
                      required: "Email is Required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  {errors.email && (
                    <small className="text-danger">
                      {errors.email.message}
                    </small>
                  )}
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    {...register("Address", {
                      required: "Address is Required",
                    })}
                  />
                  {errors.Address && (
                    <small className="text-danger">
                      {errors.Address.message}
                    </small>
                  )}
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="form-label mb-4">
                    City
                  </label>
                  <select
                    className="form-select"
                    {...register("city", { required: "Please select a city" })}
                    id="country"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>Karachi</option>
                    <option>Punjab</option>
                    <option>Balochistan</option>
                    <option>Khyber</option>
                    <option>Jamshoro</option>
                  </select>
                </div>
                {errors.city && (
                  <small className="text-danger">{errors.city.message}</small>
                )}
              </div>

              {/* Payment Section */}
              <div className="mt-4">
                <h4 className="mb-3">Payment Method</h4>
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    {...register("paymentMethod", {
                      required: "Please select a payment method",
                    })}
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label" htmlFor="credit">
                    Credit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    {...register("paymentMethod", {
                      required: "Please select a payment method",
                    })}
                    type="radio"
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label" htmlFor="debit">
                    Debit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="cash"
                    name="paymentMethod"
                    {...register("paymentMethod", {
                      required: "Please select a payment method",
                    })}
                    type="radio"
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label" htmlFor="cash">
                    Cash
                  </label>
                </div>
                {errors.paymentMethod && (
                  <small className="text-danger">
                    {errors.paymentMethod.message}
                  </small>
                )}
              </div>

              <hr className="my-4" />
              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Order Place
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal for Confirmation */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Order Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your order has been successfully Place!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </>
  );
};

export default Checkout;
