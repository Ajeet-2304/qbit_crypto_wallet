// import { BiCategory } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import Bitcoin from "../assets/bitcoin.512.png";
import Mastercard from "../assets/mc_symbol_opt_53_1x.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import "../css/Withdraw.css";
import '../css/Navbar.css';
const Withdraw = () => {
    return (
        <>
            <div className="withdraw">
                {/* <nav >
                    <div className="menuIcon">
                        <a href="/"><IoIosArrowBack/></a>
                        
                    </div>
                    <div className="navHeading">
                        <span>My Wallet</span>
                    </div>
                    <div className="userIcon">
                        <FaUser/>
                    </div>
                </nav> */}
                <div className="selectAssets">
                    <div className="topDiv">
                        <div className="heading">
                            <span>Select Assets</span>
                        </div>
                        <div className="crypto">
                            <select name="crypto" id="currencies">
                                <option value="btc">BTC</option>
                                <option value="eth">ETH</option>
                                <option value="bnb">BNB</option>
                                <option value="xrp">XRP</option>
                            </select>
                        </div>
                    </div>
                    <div className="bottomDiv">
                        <div className="item">
                            <div className="icon">
                                <img src={Bitcoin} alt="btc" width={"40px"} height={"40px"} />
                            </div>
                            <div className="title">
                                <span style={{ fontSize: "16px" }}>BTC</span>
                                <span
                                    style={{
                                        fontSize: "12px",
                                        color: "#2a2a2a",
                                        textAlign: "center",
                                    }}
                                >
                                    Bitcoin
                                </span>
                            </div>
                        </div>

                        <div className="value">
                            <span>4.485 BTC</span>
                            <span>Available</span>
                        </div>
                    </div>
                </div>
                {/* Withdraw Methods */}
                <div className="withdrawMethod">
                    <div className="heading">
                        <span style={{ color: "#000" }}>Withdraw Method</span>
                        <button>Add</button>
                    </div>
                    <div className="cards">
                        <div className="card1">
                            <div className="brand">
                                <span>Master card</span>
                                <img src={Mastercard} alt="mastercard" />
                            </div>
                            <div className="detail">
                                <div className="balance">
                                    <span>$35,350</span>
                                </div>
                                <div className="userDetails">
                                    <span>Ajeet Vishwakarma</span>
                                    <span>****3459</span>
                                </div>
                            </div>
                        </div>
                        <div className="card2 card1">
                            <div className="brand">
                                <span>Master card</span>
                                <img src={Mastercard} alt="mastercard" />
                            </div>
                            <div className="detail">
                                <div className="balance">
                                    <span>$35,350</span>
                                </div>
                                <div className="userDetails">
                                    <span>Ajeet Vishwakarma</span>
                                    <span>****3459</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Withdraw Amount */}
                <div className="withdrawAmount">
                    <div className="topDiv">
                        <span>Withdraw Amount</span>
                        <button>All</button>
                    </div>
                    <div className="bottomDiv">
                        <span>BTC 3.845</span>
                        <span>224,568.22 USD</span>
                    </div>
                </div>
                {/* Transaction Fees */}
                <div className="transactionFees">
                    <span>Transaction Fees</span>
                    <span>0.000001 BTC <IoMdInformationCircleOutline/></span>
                </div>
                {/* Withdraw Button */}
                <div className="withdrawBtn">
                    <button>Withdraw</button>
                </div>

            </div>
        </>
    );
};

export default Withdraw;

{
    /* <div className="selectAssets">
  <div className="leftDiv">
  <div className="heading">
      <span>Select Assets</span>
  </div>  
  <div className="item">
      <div className="icon">
          <img src={Bitcoin} alt="btc" width={'40px'} height={'40px'}/>
      </div>
      <div className="title">
          <span style={{fontSize:'16px'}}>BTC</span>
          <span style={{fontSize:'12px',color:'#2a2a2a',textAlign:'center'}}>Bitcoin</span>
          
      </div>
      
  
  </div>
  </div>
  <div className="rightDiv">
  <div className="crypto">
      <select name="crypto" id="currencies">
          <option value="btc">BTC</option>
          <option value="eth">ETH</option>
          <option value="bnb">BNB</option>
          <option value="xrp">XRP</option>
      </select>
  </div>
  <div className="value">
      <span>4.485 BTC</span>
      <span>Available</span>
  </div>
  </div>
  </div> */
}
