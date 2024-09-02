// import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../css/Layout.css';
const Layout = () => {
  return (
    <>
        <div className="layout">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="outlet">
                <Outlet/>
            </div>
            <div className="footer">
                <Footer/>
            </div>

        </div>
    </>
  )
}

export default Layout