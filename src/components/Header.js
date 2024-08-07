import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Usercontext from "../utils/Usercontext";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnNameReact,setBtnNameReact]=useState("Login");
  const onlinestatus= useOnlineStatus();
  const {loggedInUser
  } =useContext(Usercontext);
  
    const cartItems =useSelector((store)=>store.cart.items)
    console.log(cartItems);
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-100">
        <div className="logo-container">
          <img
            className="w-56"
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              online Status:{onlinestatus?"✅":"🔴"}
            </li>
            <li className="px-4" >
             <Link to="/"> Home </Link></li>
            <li className="px-4">
             <Link to="/about"> About us</Link></li>
            <li className="px-4">
             <Link to="/contact"> Contact us</Link></li>
             <li className="px-4">
             
             </li>
            <li className="px-4 font-bold text-2xl">
               <Link to="/Cart"> 🛒[{cartItems.length}]</Link></li>
            <button className="Login"
            onClick={()=>{
              btnNameReact==="Login"
              ?setBtnNameReact("Logout")
              :setBtnNameReact("Login");

            }}
            >{btnNameReact}</button>
             <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header; 