// import React from 'react'
import { BiCategory } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import "../css/Navbar.css";
const Navbar = () => {
  return (
    <>
            <nav >
                <div className="menuIcon">
                    <BiCategory />
                </div>
                <div className="navHeading">
                    <span>My Wallet</span>
                </div>
                <div className="userIcon">
                    <FaUser/>
                </div>
            </nav>
    </>
  )
}

export default Navbar