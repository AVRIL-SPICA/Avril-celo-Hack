import React from 'react';
import { FaFacebook } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"
import { FiInstagram } from "react-icons/fi"

import './Footer.css';

const Footer = () => (
  <div className='app__footer'>
    <div className="app">

      <div className="app_footer1">
        <h3>connect with us</h3>
        <FaFacebook size={29} color='white' />
        <AiFillTwitterCircle size={29} color='white' />
        <FiInstagram size={29} color='white' />
      </div>

      <div className="app_footer2">
        <h3>About us</h3>
        <ul>
          <li>find creatives</li>
          <li>hire creatives</li>
          <li>jobs</li>
        </ul>
      </div>

      <div className="app_footer2">
        <h3>Find creative</h3>
        <ul>
          <li>global talents</li>
          <li>blockchain</li>
          <li>web3</li>
        </ul>
      </div>

      <div className="app_footer2">
        <h3>Hire creative</h3>
        <ul>
          <li>Tech</li>
          <li>Finance</li>
          <li>crypto</li>
        </ul>
      </div>

      <div className="app_footer2">
        <h3>Jobs</h3>
        <ul>
          <li>full-Time</li>
          <li>part-Time</li>
          <li>Internship</li>
        </ul>
      </div>

      <div className="app_footer2">
        <h3>NEWSLETTERS</h3>
        <ul>
          <li>join our weekly mailing list</li>
          <button>your Email</button> <br />
          <button className='btn1'>subscribe</button>
        </ul>
      </div>

    </div>

    <hr />
    
<p className='copyright'>Copyright Avril, 2023 </p>


  </div>
);

export default Footer;
