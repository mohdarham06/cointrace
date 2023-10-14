import React from 'react'


import { Link } from 'react-router-dom';

import { RiTwitterLine } from "react-icons/ri";
import { RiDiscordLine } from "react-icons/ri";


const Header = () => {


    return (
        <header>
            <div className="brand"> <Link to='/'>COINTRACE</Link> </div>

            <nav>
                <ul className='header-ul'>
                    <li> <Link to='/'>Home</Link> </li>
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