import React from 'react'

import Hero from '../components/sections/Hero';
import Market  from '../components/sections/Market';
import Footer from '../components/sections/Footer';

const Home = () => {
    return (
        <>
            <main>
                <Hero />

                <Market />
            </main>
            <Footer />
        </>
    )
}

export default Home