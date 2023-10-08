import React from 'react'
import { RiTwitterLine } from "react-icons/ri";
import { RiDiscordLine } from "react-icons/ri";


const Header = () => {


    return (
        <header>
            <div className="brand">COINTRACE</div>

            <nav>
                <ul className='header-ul'>
                    <li>Home</li>
                    <li>Market</li>
                    <li>Choose Us</li>
                    <li>Join</li>
                </ul>
            </nav>

            <div className='social-icons'>
                <RiTwitterLine />
                <RiDiscordLine />
            </div>

        </header>
    )
}

export default Header