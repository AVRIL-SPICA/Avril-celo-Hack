import React from 'react'
import "./Navbar.css"
import Logo from "../assets/lg.png"
import { useNavigate } from 'react-router-dom';

const Navbar = () =>  {
  const navigate = useNavigate();
  const btnHandler = () => {
    navigate('/signup');
  };
    return (
        <section>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="navbar">
            <nav>
              <ul>
                <li>About us</li>
                <li>Find creatives</li>
                <li>Hire Creatives</li>
                <li>Jobs</li>
                <li>
                  <span>LOGIN</span>
                  <button onClick={btnHandler}>Sign Up</button>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      );
      
}

export default Navbar