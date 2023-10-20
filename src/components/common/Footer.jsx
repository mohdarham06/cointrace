import React from 'react'

import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";


// import { RiInstagramLine  } from "react-icons/ri";
// import { RiTwitterLine } from "react-icons/ri";
// import { RiFacebookFill } from "react-icons/ri";
// import { RiDiscordLine } from "react-icons/ri";



const Footer = () => {
    return (
        <footer className='footer-section'>

            <div className="footer-content">
                <div className="social-icons">
                    <FiInstagram />
                    <FiFacebook />
                    <FiTwitter />
                    <FiYoutube />

                    {/* <RiInstagramLine />
                    <RiFacebookFill />
                    <RiTwitterLine />
                    <RiDiscordLine /> */}


                    
                </div>

                <div className="footer-text">
                    <p>Privacy</p>
                    <p>Terms of Use</p>
                </div>
            </div>


        </footer>
    )
}

export default Footer