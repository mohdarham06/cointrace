import React from 'react'

import CoinDataFetcher from '../../services/CoinDataFetcher';


const Coin = () => {


    return (
        <section id='coin' className="coin section">

            <CoinDataFetcher />

        </section>

    )
}

export default Coin