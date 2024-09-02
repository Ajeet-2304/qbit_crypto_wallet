// import React from 'react';
import { FaWallet } from "react-icons/fa";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import { PiArrowsDownUpBold } from "react-icons/pi";
import { MdCandlestickChart } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";

import '../css/Footer.css';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
    <>
        <footer>
            <div className="icon">
                <Link style={{color:'#fff'}} to={'/'}><FaWallet/></Link>
            </div>
            <div className="icon">
                <Link style={{color:'#fff'}} to={'/notification'}><FaEnvelopeCircleCheck/></Link>
            </div>
            <div className="icon">
                <Link to={'/withdraw'} style={{color:'#fff'}}><PiArrowsDownUpBold/></Link>
            </div>
            <div className="icon">
                <Link style={{color:'#fff'}} to={'/chart'}><MdCandlestickChart/></Link>
            </div>
            <div className="icon">
                <Link style={{color:'#fff'}} to={'/profile'}><LuUser2/></Link>
            </div>
        </footer>
    </>
  )
}

export default Footer