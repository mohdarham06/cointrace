import React from 'react'
import MarketUpdate from '../MarketUpdate'


// cryptoData from App
const Market = ({ cryptoData }) => {


    return (
        <section className='market-section'>

            <h2 className='section-headings'>Market Update</h2>
            <MarketUpdate cryptoData={cryptoData} />

            <div className="sysstum"></div>
            
        </section>
    )
}

export default Market