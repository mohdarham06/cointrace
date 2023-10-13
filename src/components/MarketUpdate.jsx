import React from 'react'

import { Link } from 'react-router-dom';



// cryptoData from Market
const MarketUpdate = ({ cryptoData }) => {

    const formatNumberScale = (marketCap) => {
        if (marketCap >= 1e12) {
            return `${(marketCap / 1e12).toFixed(2)} T`; // Convert to trillions
        } else if (marketCap >= 1e9) {
            return `${(marketCap / 1e9).toFixed(2)} B`; // Convert to billions
        } else if (marketCap >= 1e6) {
            return `${(marketCap / 1e6).toFixed(2)} M`; // Convert to millions
        } else if (marketCap >= 1e3) {
            return `${(marketCap / 1e3).toFixed(2)} K`; // Convert to thousands
        } else {
            return `${marketCap}`; // Keep it as is if less than 1,000
        }
    };

    return (

        <div className='coin-list'>
            {
                cryptoData.map((coin) => (
                    <Link
                        to={`/coin/${coin.id}`}
                        className='coin'
                        key={coin.id} >

                        <span>
                            {coin.image ? <img className='coin-icon' src={coin.image} alt={coin.id} /> : null}
                            <div>
                                <div className='coin-name'>{coin.name ? coin.name : "--"}</div>
                                <div className='coin-symbol'>{coin.symbol ? (coin.symbol.toUpperCase()) : null}</div>
                            </div>
                        </span>

                        <p className='current-price'>
                            {coin.current_price ? ("$ " + coin.current_price.toFixed(2)) : "--"}
                        </p>

                        <p className={'price-change ' + (coin.price_change_percentage_24h ?
                            (coin.price_change_percentage_24h >= 0 ? 'green' : 'red') : '')}
                        >
                            {coin.price_change_percentage_24h ?
                                (coin.price_change_percentage_24h >= 0
                                    ? ("+" + coin.price_change_percentage_24h.toFixed(2) + " %")
                                    : (coin.price_change_percentage_24h.toFixed(2) + " %")
                                ) : "--"}
                        </p>

                        <p className='market-cap'>{coin.market_cap ? ("$ " + formatNumberScale(coin.market_cap)) : "--"}</p>

                    </Link>
                ))
            }
        </div>
    )
}

export default MarketUpdate

