import React from 'react'

import Hero from '../components/sections/Hero';
import Market from '../components/sections/Market';
import Join from '../components/sections/Join';
import Footer from '../components/sections/Footer';
import Features from '../components/sections/Features';

const Home = () => {
    return (
        <>
            <main>
                <Hero />

                <Market />

                <Features />
                
                <Join />
            </main>
            <Footer />
        </>
    )
}

export default Home