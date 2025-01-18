import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Create = () => {
  return (
    <>
    <Header/>
    <div className="container w-25">
    <h3 className="text-center  signup mt-3">SIGN UP</h3>
    <form id="Signup-form">
  
      <div className="mb-3">
        <label for="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Plese Enter Your Name"/>
        <small className="text-danger" id="name-error"></small>
      </div>
  
      <div className="mb-3">
        <label for="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" placeholder="Plese Enter Your Email"/>
        <small className="text-danger" id="email-error"></small>
  
      </div>
  
      <div className="mb-3">
        <label for="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Plese Enter Your Password"/>
        <small className="text-danger" id="password-error"></small>
  
      </div>
  
      <div className="mb-3">
        <label for="number" className="form-label">Phone Number</label>
        <input type="text" className="form-control" id="number" placeholder="Plese Enter Your Number"/>
        <small className="text-danger" id="number-error"></small>
  
      </div>
  
      <button id="create" className="btn bg-success fw-bolder d-block w-100">Create Account</button>
      <div className="text-success text-center" id="result-cont">
        <div  className="loader d-flex justify-content-center mt-3">
      <div style={{display: "none" }} className="loading" > </div>
        <p style={{display: "none"}} className="mt-5 text-muted load">loading..</p>
        </div>
       
      </div>
     
  
  
    </form>
   
  </div> 
  <Footer/>
  </>
  )
}

export default Create