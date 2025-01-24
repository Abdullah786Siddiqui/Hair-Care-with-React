import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";

const Login = () => {
  const Navigate = useNavigate();
  const [profile, setprofile] = useState(false); // To control modal visibility
  let [loader, setloader] = useState(false); // To show loader
  let [errormessege, seterrormessege] = useState(false); // To show error message

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onSubmit",
  });

  let onSubmit = (data) => {
    let GetData = JSON.parse(localStorage.getItem("formdata"));

    if (GetData.email === data.email && GetData.password === data.password) {
      seterrormessege(false);
      setloader(true); // Show loader

      setTimeout(() => {
        setloader(false); // Hide loader after 2 seconds
        setprofile(true); // Show modal after loader
        setTimeout(() => {
          setprofile(false); // Hide modal after 2 seconds
          Navigate("/"); // Redirect to home page
        }, 1000);
      }, 2000); // Wait for 2 seconds before hiding the loader
    } else {
      seterrormessege(true);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-4 login">
        <h3 className="text-center mt-3">SIGN IN</h3>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email format",
                    },
                  })}
                  className="form-control"
                  id="email"
                  placeholder="Please Enter Your Email"
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
                  placeholder="Please Enter Your Password"
                />
                {errors.password && (
                  <small className="text-danger">{errors.password.message}</small>
                )}
              </div>

              <button
                id="Continue"
                type="submit"
                className="btn bg-success fw-bolder d-block w-100"
              >
                Continue
              </button>
            </form>
          </div>
        </div>

        {errormessege && (
          <p className="text-danger text-center fw-semibold">
            Invalid UserEmail & Password
          </p>
        )}

        <div id="new" className="mt-1 text-center">
          Create a new <Link to={"/Create"}>Create Account</Link>
        </div>

        {loader && (
          <div className="loader d-flex justify-content-center mt-3">
            <div className="loading"></div>
            <p className="mt-5 text-muted load">Logging in...</p>
          </div>
        )}
      </div>

      <Modal size="sm" show={profile} onHide={() => setprofile(false)}className="mt-5" backdrop={false}>
        <h6 className="p-2 modal-css m-0 text-center fw-bold">
          <span className="fw-bolder text-success">Login Successful</span>
        </h6>
      </Modal>

      <Footer />
    </>
  );
};

export default Login;
