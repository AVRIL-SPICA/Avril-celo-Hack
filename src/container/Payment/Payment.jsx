import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import {images} from '../../constants'
import './Payment.css';

const SignUp = () => {
  const navigate = useNavigate();

        const btnHandler = () => {
          navigate('about');
        };
        return(
        <>
            <div className="container">
                <div className="card">
                    <div className="form">
                    <img src={images.metamask}/>           

                    <div className="left-side" >
                            
                        </div>


                        
                        {/* <div className="right-side">
                        <img src={images.celo}/>
                        </div> */}

                    </div>
                </div>
            </div>
    
    
    
        </>
        );
        }
      
export default SignUp;
