import React from 'react'

import Hero from '../components/sections/Home';
import Market from '../components/sections/Market';
import Features from '../components/sections/Features';
import Join from '../components/sections/Join';
import Footer from '../components/common/Footer';

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