import React from 'react';
// import  ReactDOM from 'react';
import { Routes, Route } from 'react-router-dom';
import Chef from './container/Chef/Chef';
// import Header from "./container/Header/Header"
import AboutUs from "./container/AboutUs/AboutUs"
import Profile from "./container/Profile/Profile"
// import { Navbar } from './components';
import SignUp from './container/SignUp/SignUp';
import Partners from './container/Partners/partners';
import Joblist from "./container/joblist/joblist"
import  Nft  from "./container/jobNft/nft"
import Footer from "./container/Footer/Footer"
import Chat from './container/Chat/Chat';
import Web3 from './web3/web3';
import Payment from './container/Payment/Payment';
import Wallet from "./container/wallet/Wallet";
import './App.css';
import Home from "./container/Profile/Pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<AboutUs />} />
        <Route path="/hire-creatives" element={<Chef />} />
        <Route path="*" element={<Chef />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Joblist" element={<Joblist />} />
        <Route path= "/nft" element ={<Nft />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path= "/Chat" element={<Chat />} />
        <Route path="/web3" element={<Web3 />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<Payment />} />

      </Routes>
    </>

  );
};

export default App;
