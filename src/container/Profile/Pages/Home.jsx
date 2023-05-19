import React from 'react';
import Navbar from '../../../Navbar/Navbar';
import '../../../Styles/Home.css';
import '../../../Styles/globals.css';
import Avrill from "../../../assets/Frame 44621.png"
import circ from "../../../assets/Frame3.png"
// import Signup from '../../authentication/signup';
import Joblist from '../../joblist/joblist';
import Nft from '../../jobNft/nft';
import Web3 from '../../../web3/web3';
import Footer from '../../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Wallet from '../../wallet/Wallet';
const Home = () => {
    const navigate = useNavigate();
    const btnHandler = () => {
        navigate('/signup');
      };

      const btnClick = () => {
        navigate('/payment');
      };
    return (
        <>
            <Navbar />
            <section className="hero">
                <div>
                    {/* <h1>AVRILL</h1> */}
                    <img src={Avrill} alt="" className='hero__avril' />
                    <img src={circ} alt="" className='hero__circ' />
                    <div className='hero__wrapper'>
                        <p className='hero__wrapper__p'>Welcome to our Web3 job platform,
                            the ideal setting for creative people to get in touch
                            with potential clients and advance their careers.</p> <br />
                        <button className='hero__wrapper__button'>Find more</button>
                    </div>
                </div>

            </section>
            <div className='Aboutus'>
                <p>At Avril, we believe that creativity knows no bounds.
                    We created a platform to facilitate connections between companies of all sizes
                    and creatives around the world because of this. We have a network of talented
                    people</p>
                <div className='btn__grid'>
                    <button className='btn1' onClick={btnClick}>Connect Wallet</button>
                    <button className='btn2' onClick={btnHandler}>Join creative</button>
                </div>
          
            </div>
            <Joblist/>
            <Nft/>
            <Web3/>

            {/* <Signup /> */}
            <Footer/>
        </>
    );
}

export default Home;
