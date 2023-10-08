import React from 'react'

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
        <>
            <div className="coin-list-info">
                <div>Coin</div>
                <div>Price</div>
                <div>24h Change</div>
                <div>Market Cap</div>
            </div>
            <div className='coin-list'>
                {
                    cryptoData.map((coin) => (
                        <div className='coin' key={coin.id} >
                            <span>
                                <img className='coin-icon' src={coin.image} alt="" />
                                <div>
                                    <div className='coin-name'>{coin.name}</div>
                                    <div className="coin-symbol">{coin.symbol.toUpperCase()}</div>
                                </div>
                            </span>

                            <p className='current-price'>{"$ " + coin.current_price.toFixed(2)}</p>

                            <p className={'price-change ' + (coin.price_change_percentage_24h >= 0
                                ? 'green' : 'red')}
                            >
                                {coin.price_change_percentage_24h.toFixed(2) + " %"}
                            </p>


                            <p className='market-cap'>{"$ " + formatNumberScale(coin.market_cap)}</p>

                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default MarketUpdate