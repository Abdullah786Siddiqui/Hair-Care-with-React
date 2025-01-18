import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
    <Header/>
    <header className="contact-header">
    <h1>Contact Us</h1>
    <p>We'd love to hear from you! Please fill out the form below or contact us directly.</p>
  </header>

  {/* <!-- Main Section --> */}
  <div className="container my-5">
    <div className="row g-4">
      {/* <!-- Contact Details --> */}
      <div className="col-md-4">
        <div className="contact-details">
          <h5>Contact Information</h5>
          <p><strong>Address:</strong> 123 Hair Care Street, Beauty City</p>
          <p><strong>Email:</strong> info@haircare.com</p>
          <p><strong>Phone:</strong> +1 (234) 567-890</p>
          <p><strong>Working Hours:</strong> Mon-Fri, 9AM - 6PM</p>
        </div>
      </div>

      {/* <!-- Contact Form --> */}
      <div className="col-md-8">
        <h5>Send Us a Message</h5>
        <form className="contact-form">
          <div className="mb-3">
            <label for="name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name"/> 
      <small className="text-danger" id="contact-error-name"></small>


          </div>
          <div className="mb-3">
            <label for="email" className="form-label">Your Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
      <small className="text-danger" id="contact-error-email"></small>

          </div>
          <div className="mb-3">
            <label for="subject" className="form-label">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="Enter the subject"/>
      <small className="text-danger" id="contact-error-subject"></small>

          </div>
          <div className="mb-3">
            <label for="message" className="form-label">Your Message</label>
            <textarea className="form-control" id="message" rows="5" placeholder="Write your message here" ></textarea>
      <small className="text-danger" id="contact-error-textarea"></small>

          </div>
          <button type="submit"  className="btn btn-primary submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
  <Footer/>
  </>
  )
}

export default Contact