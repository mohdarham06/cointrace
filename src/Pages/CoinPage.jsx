import React from 'react'

import Coin from '../components/sections/Coin';
import BackButton from '../components/BackButton';


const CoinPage = () => {


    return (
        <>
            <header
                className="header header--sticky"
                style={{
                    zIndex: '50',
                    padding: '1.5rem 1.2rem'
                }}
            >
                <BackButton />
            </header>

            <main>

                <Coin />

            </main>
        </>
    )
}

export default CoinPage