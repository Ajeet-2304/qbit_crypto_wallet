// import React from 'react';
import { FaWallet } from "react-icons/fa";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import { PiArrowsDownUpBold } from "react-icons/pi";
import { MdCandlestickChart } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";

import '../css/Footer.css';
const Footer = () => {
    return (
    <>
        <footer>
            <div className="icon">
                <FaWallet/>
            </div>
            <div className="icon">
                <FaEnvelopeCircleCheck/>
            </div>
            <div className="icon">
                <PiArrowsDownUpBold/>
            </div>
            <div className="icon">
                <MdCandlestickChart/>
            </div>
            <div className="icon">
                <LuUser2/>
            </div>
        </footer>
    </>
  )
}

export default Footer