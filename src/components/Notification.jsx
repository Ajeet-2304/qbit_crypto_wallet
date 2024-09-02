// import React from 'react'
import '../css/Notification.css';
import appIcon from '../assets/crypto-wallet.png';
const Notification = () => {
    return (
        <>
            <div className="notification">
                
                {/* heading */}
                <div className="notify-heading">
                    <span>Notification</span>
                </div>

                {/* cards */}
                <div className="notification-cards">
                    <div className='notification-card'>
                        <div className="notify-leftDiv">
                            <div className='notify-icon'><img src={appIcon} alt="app icon" width={'25px'} height={'25px'} /></div>
                            <div className="timeStamp">
                                <span>5min ago</span>
                            </div>
                        </div>
                        <div className="notify-rightDiv">
                            <span className='value'>$97,305</span>
                            <span className='change'>+4.6%</span>
                        </div>
                    </div>

                    <div className='notification-card'>
                        <div className="notify-leftDiv">
                            <div className='notify-icon'><img src={appIcon} alt="app icon" width={'25px'} height={'25px'} /></div>
                            <div className="timeStamp">
                                <span>5min ago</span>
                            </div>
                        </div>
                        <div className="notify-rightDiv">
                            <span className='value'>$97,305</span>
                            <span className='change'>+4.6%</span>
                        </div>
                    </div>

                    <div className='notification-card'>
                        <div className="notify-leftDiv">
                            <div className='notify-icon'><img src={appIcon} alt="app icon" width={'25px'} height={'25px'} /></div>
                            <div className="timeStamp">
                                <span>5min ago</span>
                            </div>
                        </div>
                        <div className="notify-rightDiv">
                            <span className='value'>$97,305</span>
                            <span className='change'>+4.6%</span>
                        </div>
                    </div>

                    <div className='notification-card'>
                        <div className="notify-leftDiv">
                            <div className='notify-icon'><img src={appIcon} alt="app icon" width={'25px'} height={'25px'} /></div>
                            <div className="timeStamp">
                                <span>5min ago</span>
                            </div>
                        </div>
                        <div className="notify-rightDiv">
                            <span className='value'>$97,305</span>
                            <span className='change'>+4.6%</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Notification