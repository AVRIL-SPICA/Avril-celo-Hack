/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./Signup.css";
// import avill "../assets/Frame 14.png"
import Blick from "../assets/Frame 14.png"

function signup() {
    return (
        <section>
        <div className='signup'>
            <h2 className='headetag'>Sign Up <br/> let's get you started</h2>
            {/* <p className='ptag'>let's get you started</p> */}
            <form action="">
                <label htmlFor="email">Email</label> <br />
                <input placeholder='ladegbayestella@gmail.com' type="text" /> <br />

                <label htmlFor="password">Password</label> <br />
                <input placeholder='**********' type="text" />  <br />

                <label htmlFor="password"> Confirm password</label> <br />
                <input placeholder='**********' type="text" />
                <div>
                   
                     <p>  <input type="checkbox" name="" id="" />By creating account you agree to <b>terms & condition</b> <br/> and <b>PrivacyPolicy</b>  </p>
                </div>
                 
                 <button>Create account</button> <br/>
                  <span>Already have account? <a href="#">Login</a></span>
            </form>

         
        </div>
        <img src={Blick} alt="" className='block' />
        </section>
    )
}

export default signup;