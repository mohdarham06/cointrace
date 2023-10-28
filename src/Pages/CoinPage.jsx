import React from 'react'

import Coin from '../components/sections/Coin';
import BackButton from '../components/BackButton';


const CoinPage = () => {


    return (
        <>
            <div className="header header--sticky" >
                <BackButton />
            </div>

            <main>

                <Coin />

            </main>
        </>
    )
}

export default CoinPage