import React from 'react'

import Coin from '../components/sections/Coin';
import BackButton from '../components/BackButton';


const CoinPage = () => {


    return (
        <>
            <header
                style={{
                    width: '100%'
                }}
                className="header--sticky header--go-back"
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