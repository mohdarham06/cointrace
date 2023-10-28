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

    // // current page
    // const navItems = document.querySelectorAll('.desktop__nav__item');
    // const sections = document.querySelectorAll('section[id]');

    // function currentPageUpdate() {
    //     const scrollY = window.scrollY || window.pageYOffset;

    //     sections.forEach((current, index) => {
    //         const sectionTop = current.offsetTop - 80;
    //         const sectionHeight = current.offsetHeight;

    //         if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
    //             navItems.forEach((item) => item.classList.remove('active'));
    //             navItems[index].classList.add('active');
    //         }
    //     });
    // }
    // window.addEventListener('scroll', currentPageUpdate);


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

                <label for="check" class="menuButton">
                    <input id="check" type="checkbox"></input>
                        <span class="top"></span>
                        <span class="mid"></span>
                        <span class="bot"></span>
                </label>

                <nav className="header__mobile__nav active">
                    <ul className="mobile__nav__list">
                        <li className="mobile__nav__item">Home</li>
                        <li className="mobile__nav__item">Market</li>
                        <li className="mobile__nav__item">Choose Us</li>
                        <li className="mobile__nav__item">Join</li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header