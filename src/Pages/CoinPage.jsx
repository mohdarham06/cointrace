import React from 'react'

import Header from '../components/common/Header';
import Coin from '../components/sections/Coin';
import BackButton from '../components/BackButton';


const CoinPage = () => {


    return (
        <>
            <Header />
            <main>
                <BackButton />

                <Coin />

            </main>
        </>
    )
}

export default CoinPage