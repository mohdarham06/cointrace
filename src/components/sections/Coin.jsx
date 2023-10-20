import React from 'react'

import CoinDataFetcher from '../../services/CoinDataFetcher';


const Coin = () => {


    return (
        <section className="coin-section">

            <CoinDataFetcher />

        </section>

    )
}

export default Coin