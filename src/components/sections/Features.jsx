import React from 'react'

import FeatureBox from '../FeatureBox';

import { BsWallet2 } from "react-icons/bs";
import { BsDatabaseAdd } from "react-icons/bs";
import { BsShieldCheck } from "react-icons/bs";
import { BsClipboardData } from "react-icons/bs";
import { BsLightningCharge } from "react-icons/bs";
import { BsCollection } from "react-icons/bs";

import BitHand from '../../assets/bitcoinhand.png'

const Features = () => {
    return (
        <section id='features' className='features-section'>
            <div className="features-container">
                <h2 className="section-heading">
                    WHY
                    <span>WE ARE THE BEST</span>
                </h2>


                <div className="features-grid">
                    <div className="grid-cell">
                        <FeatureBox
                            icon={<BsWallet2 />}
                            title="Connect Your Wallet"
                            info="Use Trust Wallet, Metamask or connect any wallet app."
                        />
                        <FeatureBox
                            icon={<BsDatabaseAdd />}
                            title="Select Your Quantity"
                            info="Upload your crypto and set a title, description and price."
                        />
                        <FeatureBox
                            icon={<BsShieldCheck />}
                            title="Confirm Transaction"
                            info="Earn by selling your crypto on our marketplace."
                        />
                    </div>

                    <div className="grid-cell">
                        <img className="feature-image" src={BitHand} alt="" />
                    </div>

                    <div className="grid-cell">
                        <FeatureBox
                            icon={<BsClipboardData />}
                            title="Track Your Crypto"
                            info="Effortlessly organize and track your crypto holdings."
                        />
                        <FeatureBox
                            icon={<BsLightningCharge />}
                            title="Instant Crypto Trades"
                            info="Execute instant crypto trades at current market rates."
                        />
                        <FeatureBox
                            icon={<BsCollection />}
                            title="Drive Your Collection"
                            info="We make it easy to discover, invest and manage."
                        />
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Features