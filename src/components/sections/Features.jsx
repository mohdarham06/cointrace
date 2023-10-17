import React from 'react'

import { BsWallet2 } from "react-icons/bs";
import { BsDatabaseAdd } from "react-icons/bs";
import { BsShieldCheck } from "react-icons/bs";
import { BsClipboardData } from "react-icons/bs";
import { BsLightningCharge } from "react-icons/bs";
import { BsCollection } from "react-icons/bs";

const Features = () => {
    return (
        <section className='features-section'>
            <div className="">
                <h2 className="section-heading">
                    WHY
                    <span>WE ARE THE BEST</span>
                </h2>


                <div className="features-grid">
                    <div className="grid-cell">
                        <div className="feature">
                            <div className="feature-icon"><BsWallet2 /></div>
                            <h3 className='feature-label'>Connect your wallet</h3>
                            <p className="feature-info">Use Trust Wallet, Metamask or to connect to the app.</p>
                        </div>

                        <div className="feature">
                            <div className="feature-icon"><BsDatabaseAdd /></div>
                            <h3 className='feature-label'>Select your quantity</h3>
                            <p className="feature-info">Upload your crypto and set a title, description and price.</p>
                        </div>

                        <div className="feature">
                            <div className="feature-icon"><BsShieldCheck /></div>
                            <h3 className='feature-label'>Confirm transaction</h3>
                            <p className="feature-info">Earn by selling your crypto on our marketplace.</p>
                        </div>
                    </div>

                    <div className="grid-cell"></div>

                    <div className="grid-cell">
                        <div className="feature">
                            <div className="feature-icon"><BsClipboardData /></div>
                            <h3 className='feature-label'>Track Your Crypto</h3>
                            <p className="feature-info">Effortlessly organize and track your crypto holdings.</p>
                        </div>

                        <div className="feature">
                            <div className="feature-icon"><BsLightningCharge /></div>
                            <h3 className='feature-label'>Instant Crypto Trades</h3>
                            <p className="feature-info">Execute instant crypto trades at current market rates.</p>
                        </div>

                        <div className="feature">
                            <div className="feature-icon"><BsCollection /></div>
                            <h3 className='feature-label'>Drive your collection</h3>
                            <p className="feature-info">We make it easy to Discover, Invest and manage.</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Features