import React from 'react'
import MarketUpdate from '../MarketUpdate'


// cryptoData from App
const Market = ({ cryptoData }) => {

    
    return (
        <section className='market-section'>
            <h2>Market Update</h2>

            <MarketUpdate cryptoData={cryptoData} />
        </section>
    )
}

export default Market