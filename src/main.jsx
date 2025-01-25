// import { StrictMode } from 'react'
import Contact from "./Components/Contact.jsx"
import { createRoot } from "react-dom/client";
import "./App.css";
import Productpages from "./Routes/Productpages.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./Routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import HairCareStore from "./Store/Store.js";
import ALL from "./Components/ALL.jsx";
import ProductDetail from "./Routes/ProductDetail.jsx";
import Men from "./Components/Men.jsx";
import Login from "./Components/Login.jsx";
import Create from "./Components/Create.jsx";
import FavoriteItem from "./Components/FavoriteItem.jsx";
import Checkout from "./Components/Checkout.jsx";
import AddtoCart from "./Routes/Addtocart.jsx";

const router = createBrowserRouter([

  { path: "/", element: <App /> },
  { path: "/productpages", element: <Productpages /> },
  { path: "/All", element: <ALL /> },
  { path: "/productdetail/:id", element: <ProductDetail /> },
  { path: "/Men", element: <Men /> },
  { path: "/Contact", element: <Contact /> },
  { path: "/Login", element: <Login /> },
  { path: "/Create", element: <Create /> },
  { path: "/AddtoCart", element: <AddtoCart /> },
  { path: "/FavoriteItem", element: < FavoriteItem/> },
  { path: "/Checkout", element: < Checkout/> },


 


]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={HairCareStore}>
    <RouterProvider router={router} />
  </Provider>
  // </StrictMode>,
);
