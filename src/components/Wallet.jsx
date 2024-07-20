import {useState} from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { LuArrowUpToLine } from "react-icons/lu";
import { LuArrowDownToLine } from "react-icons/lu";
import { BsArrowRepeat } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
// import { RiBtcFill } from "react-icons/ri";
// import { FaEthereum } from "react-icons/fa";
// import { SiBnbchain } from "react-icons/si";
// import { RiXrpFill } from "react-icons/ri";
import Bitcoin from '../assets/bitcoin.512.png';
import Etherium from '../assets/ethereum.png';
import BNB from '../assets/BNB.png';
import XRP from '../assets/xrp.png';
import '../css/Wallet.css';
import {Link} from 'react-router-dom';

const Wallet = () => {
    const [hideBalance, setHideBalance] = useState(false);
    const [valueHide, setValueHide] = useState("6000");
    // const [flip, setFlip] = useState(false);
  return (
    <>
        <div className="wallet">
            <div className="userBalance">
                <div className="balanceContainer leftContainer">
                    <div className="amountHeading">
                        <span>Total Balance</span>
                        <div className="balVisibility">
                            {
                                hideBalance == true ? <IoEyeOutline onClick={()=>{setHideBalance(false) || setValueHide("6000") }}/>  : <IoEyeOffOutline onClick={()=>{setHideBalance(true) || setValueHide("****")}}/> 
                            }
                        </div>
                    </div>
                    <div className="amountValue">
                        <div className="value">
                            <span className='totalValue'>$ {valueHide}</span>
                        </div>
                    </div>
                    
                </div>
                <div className="currencies rightContainer">
                    <div className="currentCurrency">
                        <select name="currency" id="currency">
                            <option value="inr">INR</option>
                            <option value="usd">USD</option>
                        </select>
                    </div>
                    <div className="currentChange">
                        <span>+$ 123(2.56%)</span>
                    </div>
                </div>
                
            </div>
            {/* Deposit & Withdraw */}
            <div className="transactionContainer" >
                <button className='depositBtn'><LuArrowDownToLine/> Deposit</button>
                <button className='reverse' >
                    <span><BsArrowRepeat/></span>
                </button>
                <Link to={'/withdraw'}>
                    <button className='withdrawBtn'> <LuArrowUpToLine/> Withdraw</button>
                </Link>
                
                
            </div>

            {/* Assets */}
            <div className="assets">
                <div className="assetsContainer">
                    <div className="assetsHeading">
                        <span className='heading'>My Assets</span>
                        <span className='searchIcon'><CiSearch className='sIcon'/></span>
                    </div>
                    <div className="assetsItem">
                        <div className='btc'>
                            <div className="leftDiv">
                                {/* <span className='icon'><RiBtcFill/></span> */}
                                <span className='icon'><img src={Bitcoin} alt="btc" width={'50px'} height={'50px'}/></span>
                                <div className="title">
                                    <span className='title'>BTC</span>
                                    <span className='quantity'>4.485BTC</span>
                                </div>
                            </div>
                            
                            <div className="rightDiv">
                                <span className='value'>$97,305</span>
                                <span className='change'>+4.6%</span>
                            </div>
                            
                            
                        </div>
                        <div className='btc eth'>
                            <div className="leftDiv">
                                {/* <span className='icon'><FaEthereum className='ethIcon'/></span> */}
                                <span className='icon'><img src={Etherium} alt="eth" width={'50px'} height={'50px'}/></span>
                                <div className="title">
                                    <span className='title'>ETH</span>
                                    <span className='quantity'>4.485BTC</span>
                                </div>
                            </div>
                            
                            <div className="rightDiv">
                                <span className='value'>$97,305</span>
                                <span className='change'>+4.6%</span>
                            </div>
                            
                            
                        </div>
                        <div className='btc bnb'>
                            <div className="leftDiv">
                                {/* <span className='icon'><SiBnbchain className='bnbIcon'/></span> */}
                                <span className='icon'><img src={BNB} alt="bnb" width={'50px'} height={'50px'}/></span>
                                <div className="title">
                                    <span className='title'>BNB</span>
                                    <span className='quantity'>4.485BTC</span>
                                </div>
                            </div>
                            <div className="rightDiv">
                                <span className='value'>$97,305</span>
                                <span className='change'>+4.6%</span>
                            </div>
                        </div>
                        <div className='btc xrp'>
                            <div className="leftDiv">
                                {/* <span className='icon'><RiXrpFill className='xrpIcon'/></span> */}
                                <span className='icon'><img src={XRP} alt="xrp" width={'50px'} height={'50px'}/></span>
                                <div className="title">
                                    <span className='title'>XRP</span>
                                    <span className='quantity'>4.485BTC</span>
                                </div>
                            </div>
                            <div className="rightDiv">
                                <span className='value'>$97,305</span>
                                <span className='change'>+4.6%</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    </>
  )
}

export default Wallet


// style={flip == true ? {rotateY:'180deg'} : {rotateY:'0deg'}}
// onClick={setFlip(true)}