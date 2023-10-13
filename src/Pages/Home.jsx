import React from 'react'

import Hero from '../components/sections/Hero';
import Market  from '../components/sections/Market';
import Join from '../components/sections/Join';
import Footer from '../components/sections/Footer';

const Home = () => {
    return (
        <>
            <main>
                <Hero />

                <Market />

                <Join />
            </main>
            <Footer />
        </>
    )
}

export default Home