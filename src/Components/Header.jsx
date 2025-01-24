import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Header = () => {
   const products = useSelector((Store) => Store.cartProduct.cart);
  
   useEffect(() => {
    window.scrollTo(0, 0);
  }, [products.length]); 
  return (
    <header  className=" fixed-top">
      <div className="main-cont">
        <div className="navbar1 bg-light p-1 d-flex justify-content-between">
          <div className="name-div d-flex justify-content-center w-100">
            <h2 className="logo text-info">
              <Link to={"/"} className="navbar-brand">
                Hair Care
              </Link>
            </h2>
          </div>
          <div className="icon-div d-flex fs-4 align-items-center">
            <Link to={"/"}><FaRegHeart className="mx-1 text-black fs-4" /></Link>
            <Link to={"/Login"}><FaRegUser className="mx-2 text-black" /></Link>
          <Link to={"/AddtoCart"} className="action_container" >
                   
                     <span className="action_name text-black"><FaCartShopping /></span>
                     <span className="bag-item-count">{products.length}</span>
                 </Link >
            
             
            
            
          </div>
        </div>
        <div className="navbar navbar-expand-md bg-light   ">
          <div style={{ display: "none" }} className=" " id="social">
            <i className="fa-brands fa-facebook   "></i>
            <i className="fa-brands fa-instagram " id="insta"></i>
            <i className="fa-brands fa-twitter " id="twiter"></i>
          </div>
          {/* <!-- Hamburger Button --> */}
          <button
            className="navbar-toggler mx-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          {/* <!-- Navbar Menu --> */}
          <div
            className="collapse navbar-collapse justify-content-center  "
            id="navbarNav"
          >
            <ul className="navbar-nav  ">
              {/* <!-- 1st Dropdown --> */}
              <li className="nav-item dropdown">
                <Link to={"/All"} className="nav-link all">
                  ALL
                </Link>
              </li>
              {/* <!-- 2nd Dropdown --> */}
              <li className="nav-item dropdown ">
                <a
                  className="nav-link  dropdown-toggle "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  HAIR CARE
                </a>
                <ul
                  className="dropdown-menu px-2"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link
                      to={"/productpages?category=Shampoo"}
                      className="dropdown-item shampoo"
                    >
                      Shampoo
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/productpages?category=Mask"}
                      className="dropdown-item mask"
                    >
                      Mask
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/productpages?category=Lotion"}
                      className="dropdown-item lotion"
                    >
                      Lotion
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/productpages?category=Serum"}
                      className="dropdown-item serum"
                    >
                      Serum
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <!-- 3rd Dropdown --> */}
              <li className="nav-item dropdown ">
                <a
                  className="nav-link  dropdown-toggle "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  HAIR STYLE
                </a>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      to={"/productpages?category=Hair Spray"}
                      className="dropdown-item volume-spray"
                    >
                      Hair Spray
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/productpages?category=Gel"}
                      className="dropdown-item gel"
                    >
                      Gel
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <!-- 4rth Dropdown --> */}
              <li className="nav-item dropdown ">
                <a
                  className="nav-link  dropdown-toggle "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  SKIN CARE
                </a>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      to={"/productpages?category=Sunscreen"}
                      className="dropdown-item sunscreen"
                    >
                      Sunscreens{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/productpages?category=Facewash"}
                      className="dropdown-item facewash"
                    >
                      Face wash{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <!-- 5th Dropdown --> */}
              <li className="nav-item dropdown ">
                <a
                  className="nav-link   dropdown-toggle "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  HAIR LOSS
                </a>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      to={"/productpages?category=Hair Growth Oil"}
                      className="dropdown-item  Hair-Growth-Oil "
                    >
                      Hair Growth Oil
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/productpages?category=Cream"}
                      className="dropdown-item cream"
                    >
                      Hair cream
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <!-- 6th Dropdown --> */}
              <li className="nav-item dropdown">
                <Link to={"/Men"} className="nav-link  dropdown-toggle men">MEN</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to={"/Contact"} className="nav-link  dropdown-toggle contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
