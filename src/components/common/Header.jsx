import React from 'react'

import { RiTwitterLine } from "react-icons/ri";
import { RiDiscordLine } from "react-icons/ri";

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isChecked, setIsChecked] = useState(false);


    // sticky header
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
    const desktopScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const mobileScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsChecked(false);
        }
    };

    // go to Top
    const scrollToTop = () => {
        window.scrollTo({
            top: (0, 0),
            behavior: "smooth",
        });
    };


    // Toggle Mobile Navbar
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
        console.log(isChecked)
    };



    // current page
    const headerNavItems = document.querySelectorAll('.desktop__nav__item');
    const mobileNavItems = document.querySelectorAll('.mobile__nav__item');
    const sections = document.querySelectorAll('section[id]');

    function currentPageUpdate() {
        const scrollY = window.scrollY || window.pageYOffset;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 80;
            const sectionHeight = section.offsetHeight;

            if ((scrollY >= sectionTop) && (scrollY < sectionTop + sectionHeight)) {
                // header items
                headerNavItems.forEach((item) => item.classList.remove('active'));
                headerNavItems[index].classList.add('active');
                // mobile items
                mobileNavItems.forEach((item) => item.classList.remove('active'));
                mobileNavItems[index].classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', currentPageUpdate);


    return (
        <header className='header'>

            {/* Desktop */}
            <div className={'header__desktop ' + (isSticky ? 'header--sticky' : '')}>
                <div onClick={scrollToTop} className="header__brand">
                    <Link to='/'>COINTRACE</Link>
                </div>

                <nav className='header__desktop__nav'>
                    <ul className='desktop__nav__list'>
                        <li className='desktop__nav__item active' onClick={() => desktopScrollToSection('home')}>Home</li>
                        <li className='desktop__nav__item' onClick={() => desktopScrollToSection('market')}>Market</li>
                        <li className='desktop__nav__item' onClick={() => desktopScrollToSection('features')}>Choose Us</li>
                        <li className='desktop__nav__item' onClick={() => desktopScrollToSection('join')}>Join</li>
                    </ul>
                </nav>

                <div className='header__social-icons'>
                    <RiTwitterLine />
                    <RiDiscordLine />
                </div>
            </div>


            {/* Mobile */}
            <div className={"header__mobile " + (isSticky ? 'header--sticky' : '')}>
                <div onClick={scrollToTop} className="header__brand">
                    <Link to='/'>COINTRACE</Link>
                </div>
                <label htmlFor="menu-checkbox" className="menu-button">
                    <input
                        id="menu-checkbox"
                        type="checkbox"
                        checked={isChecked}
                        onChange={toggleCheckbox}
                    ></input>
                    <span className="top"></span>
                    <span className="mid"></span>
                    <span className="bot"></span>
                </label>
            </div>

            <nav className={`mobile__nav ${isChecked ? 'visible' : 'hidden'}`}>
                <ul className="mobile__nav__list">
                    <li className="mobile__nav__item active" onClick={() => mobileScrollToSection('home')}>Home</li>
                    <li className="mobile__nav__item" onClick={() => mobileScrollToSection('market')}>Market</li>
                    <li className="mobile__nav__item" onClick={() => mobileScrollToSection('features')}>Choose Us</li>
                    <li className="mobile__nav__item" onClick={() => mobileScrollToSection('join')}>Join</li>
                </ul>
            </nav>

        </header>
    )
}

export default Header