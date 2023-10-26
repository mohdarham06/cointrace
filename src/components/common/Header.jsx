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

            <div className="header__desktop">
                <div onClick={scrollToTop} className="header__brand">
                    <Link to='/'>COINTRACE</Link>
                </div>

                <nav className='header__desktop__nav'>
                    <ul className='desktop__nav__list'>
                        <li className='desktop__nav__item' onClick={() => scrollToSection('home')}>Home</li>
                        <li className='desktop__nav__item' onClick={() => scrollToSection('market')}>Market</li>
                        <li className='desktop__nav__item' onClick={() => scrollToSection('features')}>Choose Us</li>
                        <li className='desktop__nav__item' onClick={() => scrollToSection('join')}>Join</li>
                    </ul>
                </nav>

                <div className='header__social-icons'>
                    <RiTwitterLine />
                    <RiDiscordLine />
                </div>
            </div>



            <div className="header__mobile">
                <div onClick={scrollToTop} className="header__brand">
                    <Link to='/'>COINTRACE</Link>
                </div>
                <nav className="header__mobile__nav">
                    <ul className="mobile__nav__list">
                        <li className="mobile__nav__item">mobile</li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header