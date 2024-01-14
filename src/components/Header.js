import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {

  const [btnName, setBtnName] = useState("Login")
    return (
      <div className="header">
        <div className="logo-Container">
          <img className="logo" src= {LOGO_URL}/>
        </div>
        <div className="nav-item">
          <ul>
            <li>
            <Link to="/" className="home-link">Home </Link>
            </li>
            <li>
             <Link to="/about" className="about-link">About Us </Link>
            </li>
            <li>
            <Link to="/contact" className="contact-link">Contact Us </Link>
            </li>
            <li>Cart</li>
            <button className="login" onClick={() => {
             btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}>
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    );
  }

export default Header;