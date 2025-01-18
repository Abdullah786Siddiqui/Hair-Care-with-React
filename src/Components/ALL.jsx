import { useState } from "react";
import products from "../data/cards";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
const ALL = () => {
   let [filterProduct,setFilterProduct]=useState(products)
 
  let handleInput = (e)=>{
    setFilterProduct( products.filter((data)=> data.category.toLowerCase().includes( e.target.value.toLowerCase())))
 
  }

  

  return (
   
    <>
    <Header/>
    <div className="container mt-3 animate-bottom">
        <h1  className="text-center mb-3 unfound">HAIR CARE PRODUCTS</h1> 
        <p className="text-center text-muted">The fan-favorite hair care products</p>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <input type="text" onChange={handleInput}  id="searchInput" className="form-control search-box mb-3" placeholder="Search for products..."/>
          </div>
        </div>

    <div className="container mt-2">
    <div className="row">
    {filterProduct.map((product)=>{
      
    return(
       
      <div className="col-lg-4 col-md-4 col-sm-6 mb-4  " key={product.id}>
     
      <div className="card h-100">
      <Link 
        to={`/productdetail/${product.id}`} style={{textDecoration: "none"}}>
        <div className="image-container position-relative">
          {/* Normal image */}
          <img
            src={product.imageUrl}
            className="card-img-top normal-img"
            alt="Product"
          />
          {/* Hover image */}
          {/* <img
            src={product.hoverImageUrl}
            className="card-img-top hover-img position-absolute top-0 start-0 w-100 h-100"
            alt="Hover image"
            style={{ opacity: 0 }}
          /> */}
        </div>
        <div className="card-body text-center ">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.price}</p>

          <span class="btn btn-outline-success fw-bolder w-100">BUY NOW</span>
          
        </div>
        </Link>
      </div>
    </div> )
    })}

    </div>
</div>
</div>
   
  <Footer/>
  </>
  )
}

export default ALL