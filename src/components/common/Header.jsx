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
        <header className={isSticky ? 'sticky-header' : ''}>

            <div onClick={scrollToTop} className="brand">
                <Link to='/'>COINTRACE</Link>
            </div>

            <nav>
                <ul className='header-ul'>
                    <li onClick={() => scrollToSection('home')}>Home</li>
                    <li onClick={() => scrollToSection('market')}>Market</li>
                    <li onClick={() => scrollToSection('features')}>Choose Us</li>
                    <li onClick={() => scrollToSection('join')}>Join</li>
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