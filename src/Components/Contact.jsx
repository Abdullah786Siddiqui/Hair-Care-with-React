
import Header from "./Header";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const Contact = () => {

  const Navigate =useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    reValidateMode: "onSubmit",
  });

  let onSubmit = () => {
    alert("Thanks for your Contact");
    Navigate("/")

    reset();
  };

  return (
    <>
      <Header />
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Please fill out the form below or contact
          us directly.
        </p>
      </header>

      {/* <!-- Main Section --> */}
      <div className="container my-5">
        <div className="row g-4">
          {/* <!-- Contact Details --> */}
          <div className="col-md-4">
            <div className="contact-details">
              <h5>Contact Information</h5>
              <p>
                <strong>Address:</strong> 123 Hair Care Street, Beauty City
              </p>
              <p>
                <strong>Email:</strong> info@haircare.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (234) 567-890
              </p>
              <p>
                <strong>Working Hours:</strong> Mon-Fri, 9AM - 6PM
              </p>
            </div>
          </div>

          {/* <!-- Contact Form --> */}
          <div className="col-md-8">
            <h5>Send Us a Message</h5>
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: "Name is Required",
                    minLength: {
                      value: 3,
                      message: "Name must bhi written in 3 character",
                    },
                  })}
                  className="form-control"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <small className="text-danger">{errors.name.message}</small>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
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
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <small className="text-danger">{errors.email.message}</small>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  {...register("subject", {
                    required: "Subject is Required",
                  })}
                  className="form-control"
                  id="subject"
                  placeholder="Enter the subject"
                />
                {errors.subject && (
                  <small className="text-danger">
                    {errors.subject.message}
                  </small>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  {...register("message", {
                    required: "Messege is Required",
                  })}
                  id="message"
                  rows="5"
                  placeholder="Write your message here"
                ></textarea>
                {errors.message && (
                  <small className="text-danger">
                    {errors.message.message}
                  </small>
                )}
              </div>
              <button type="submit" className="btn btn-primary submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
