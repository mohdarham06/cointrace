import React from 'react'

import { RiTwitterLine } from "react-icons/ri";
import { RiDiscordLine } from "react-icons/ri";

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 130) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    // scroll To Section
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // go to Top
    const scrollToTop = () => {
        window.scrollTo({
            top: (0, 0),
            behavior: "smooth",
        });
    };

    return (
        <header className={'header ' + (isSticky ? 'header--sticky' : '')}>

            <div onClick={scrollToTop} className="header__brand">
                <Link to='/'>COINTRACE</Link>
            </div>

            <nav>
                <ul className='header__nav-list'>
                    <li className='header__nav-item' onClick={() => scrollToSection('home')}>Home</li>
                    <li className='header__nav-item' onClick={() => scrollToSection('market')}>Market</li>
                    <li className='header__nav-item' onClick={() => scrollToSection('features')}>Choose Us</li>
                    <li className='header__nav-item' onClick={() => scrollToSection('join')}>Join</li>
                </ul>
            </nav>

            <div className='header__social-icons'>
                <RiTwitterLine />
                <RiDiscordLine />
            </div>

        </header>
    )
}

export default Header