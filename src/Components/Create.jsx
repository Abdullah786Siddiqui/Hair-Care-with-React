import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    reValidateMode: "onSubmit",
  });
  let [loader, setloader] = useState(false);

  let onSubmit = (data) => {
    let FormDataObj = JSON.stringify(data);
    let Formdata = localStorage.setItem("formdata", FormDataObj);
    setloader(true);
    setTimeout(() => {
      setloader(false )
      reset
    navigate("/login")

    }, 2000);
    
  };
  return (
    <>
      <Header />
      <div className="container w-25 mt-4 mb-5">
        <h3 className="text-center  signup mt-3">SIGN UP</h3>
        <form id="Signup-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
                minLength: {
                  value: 3,
                  message: "Name atleast 3 Character",
                },
              })}
              className="form-control"
              id="name"
              placeholder="Plese Enter Your Name"
            />
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              })}
              className="form-control"
              id="email"
              placeholder="Plese Enter Your Email"
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 4,
                  message: "Password must be 4 Characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password must be less than 20 characters",
                },
                pattern: {
                  value: /[A-Z]/,
                  message:
                    "Password must contain at least one uppercase letter",
                },
              })}
              className="form-control"
              id="password"
              placeholder="Plese Enter Your Password"
            />
            {errors.password && (
              <small className="text-danger">{errors.password.message}</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="number" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              {...register("number", {
                required: "Number is Required",
                minLength: {
                  value: 11,
                  message: "Password Must be 11 Character",
                },
              })}
              className="form-control"
              id="number"
              placeholder="Plese Enter Your Number"
            />
            {errors.number && (
              <small className="text-danger">{errors.number.message}</small>
            )}
          </div>

          <button
            id="create"
            className="btn bg-success fw-bolder d-block w-100"
            type="submit"
          >
            Create Account
          </button>
          {loader && (
            <div className="text-success text-center" id="result-cont">
              <div className="loader d-flex justify-content-center mt-3">
                <div className="loading"></div>
                <p className="mt-5 text-muted load">loading..</p>
              </div>
            </div>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Create;
