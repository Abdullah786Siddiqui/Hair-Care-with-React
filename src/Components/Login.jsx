import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <Header/>
    <div className="container w-25 ">
  <h3 className="text-center mt-3">SIGN IN</h3>
  

    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="email" className="form-control" id="email" placeholder="Plese Enter Your Email"/>
      <small className="text-danger" id="email-error"></small>

    </div>

    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="password" placeholder="Plese Enter Your Password"/>
      <small className="text-danger" id="password-error"></small>

    </div>

  

    <button id="Continue" className="btn bg-success fw-bolder d-block w-100">Continue</button>
   
    <p className="login-error text-danger text-center fw-semibold" ></p>
    <div id="new" className="mt-1 text-center">Create a new <Link to={"/Create"} >Create Account</Link></div>
    <div  className="loader d-flex justify-content-center mt-3">
    <div style={{display: "none" }} className="loading" > </div>
    <p style={{display: "none"}} className="mt-5 text-muted load">loading..</p>
    </div>
 

    
 
</div> 
<Footer/>
</>

  )
}

export default Login