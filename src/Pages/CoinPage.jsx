import React from 'react'


import Coin from '../components/sections/Coin';
import BackButton from '../components/BackButton';

import { useState } from 'react';


const CoinPage = () => {
    const [coinData, setCoinData] = useState([]);

    const handleCoinDataLoaded = (data) => {
        setCoinData(data);
    };



    return (
        <>
            <header className="header--sticky header--coin-page" >
                <BackButton />
                <h2 className="header__coin-name">{coinData.name ? coinData.name : ""}</h2>
            </header>

            <main>

                <Coin onCoinDataLoaded={handleCoinDataLoaded} />

            </main>
        </>
    )
}

export default CoinPage