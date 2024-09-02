// import React from 'react'
import '../css/Profile.css';
import { BiSolidEdit } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { RiFileCopyFill } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { IoDiamond } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const Profile = () => {
  return (
    <>
        <div className="profile">
            <div className="profile-heading">
                <span>Account Center</span>
            </div>
            <div className="userCard">
                <div className="userName">
                    <span><FaUser/><span style={{paddingLeft:'3vw'}}>User</span></span>
                    
                    <span><BiSolidEdit/></span>
                </div>
                <div className="userId">
                    <span>ID</span>
                    <span>11111111 <span><RiFileCopyFill/></span></span>
                </div>
                <div className="userInfo">
                    <span>Registration Info</span>
                    <span>user@gmail.com <span><IoEyeSharp/></span></span>
                </div>
            </div>
            <div className="accountData">
                <div className="verification innerCard">
                    <span><span><BiSolidEdit/></span> Verifications</span>
                    <span>Verified <IoIosArrowForward/></span>
                </div>
                <div className="security innerCard">
                    <span><span><RiShieldKeyholeFill/></span> Security</span>
                    <span><IoIosArrowForward/></span>
                </div>
                <div className="vip innerCard">
                    <span><span><IoDiamond/></span> VIP Privilege</span>
                    <span><span>Regular</span> <IoIosArrowForward/></span>
                </div>
                <div className="twitter innerCard">
                    <span><span><FaXTwitter/></span> Twitter</span>
                    <span><span>Unlinked</span> <IoIosArrowForward/></span>
                </div>
            </div>

            <div className="buttons">
                <button>Switch Account</button>
                <button>Log Out</button>
            </div>
        </div>
    </>
  )
}

export default Profile