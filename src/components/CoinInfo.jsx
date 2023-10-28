import React from 'react'

import MissingImage from '../assets/missingimage.png';



// coin from CoinDataFetcher
const CoinInfo = ({ coin }) => {

    const formatNumberScale = (number) => {
        if (number >= 1e12) {
            return `${(number / 1e12).toFixed(2)} T`; // Convert to trillions
        } else if (number >= 1e9) {
            return `${(number / 1e9).toFixed(2)} B`; // Convert to billions
        } else if (number >= 1e6) {
            return `${(number / 1e6).toFixed(2)} M`; // Convert to millions
        } else if (number >= 1e3) {
            return `${(number / 1e3).toFixed(2)} K`; // Convert to thousands
        } else {
            return `${number}`; // Keep it as is if less than 1,000
        }
    };

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const renderPriceChange = (priceChange) => {
        if (priceChange) {
            const className = 'coin-price-change ' + (priceChange >= 0 ? 'green-change' : 'red-change');
            const formattedPercentage = priceChange.toFixed(2) + " %"
            return (
                <td className={className}>
                    {priceChange >= 0 ? ("+" + formattedPercentage) : formattedPercentage}
                </td>
            )
        } else {
            return <td className='coin-price-change'>--</td>
        }
    }


    return (
        <div className="coin-container">

            <div className="coin-content">
                <h2 className="coin-info-item coin-name">{coin.name ? coin.name : "--"}</h2>

                <div className='coin-info-item'>
                    <div className="coin-label-content">
                        <div className="coin-rank">
                            {coin.market_cap_rank ? ("Popularity: #" + coin.market_cap_rank) : "Popularity: --"}
                        </div>
                        <div className="price-label">Current Price</div>
                    </div>

                    <div className='coin-name-price'>
                        <span>
                            <img className="coin-icon" src={coin.image.large ? coin.image.large : MissingImage} alt={coin.id} />
                            <div>
                                <div className='coin-name'>{coin.name ? coin.name : "--"}</div>
                                <div className='coin-symbol'>{coin.symbol ? (coin.symbol.toUpperCase()) : null}</div>
                            </div>
                        </span>

                        <p className="coin-price">
                            {coin.market_data.current_price.usd ? ("$ " + numberWithCommas(coin.market_data.current_price.usd.toFixed(2))) : "--"}
                        </p>
                    </div>
                </div>

                <div className='coin-info-item'>
                    <h3>Price Change</h3>
                    <div className='price-change-content'>
                        <table>
                            <thead>
                                <tr>
                                    <th>1h</th>
                                    <th>24h</th>
                                    <th>7d</th>
                                    <th>14d</th>
                                    <th>30d</th>
                                    <th>1yr</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {renderPriceChange(coin.market_data.price_change_percentage_1h_in_currency.usd)}
                                    {renderPriceChange(coin.market_data.price_change_percentage_24h_in_currency.usd)}
                                    {renderPriceChange(coin.market_data.price_change_percentage_7d_in_currency.usd)}
                                    {renderPriceChange(coin.market_data.price_change_percentage_14d_in_currency.usd)}
                                    {renderPriceChange(coin.market_data.price_change_percentage_30d_in_currency.usd)}
                                    {renderPriceChange(coin.market_data.price_change_percentage_1y_in_currency.usd)}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="coin-info-item">
                    <div className="coin-stats-grid">
                        <div className="grid-cell">
                            <div className='stat-box'>
                                <div className="stat-label">24 Hour High</div>
                                <div>
                                    {coin.market_data.high_24h.usd ? ("$ " + coin.market_data.high_24h.usd.toFixed(2)) : "--"}
                                </div>
                            </div>

                            <div className='stat-box'>
                                <div className="stat-label">24 Hour Low</div>
                                <div>
                                    {coin.market_data.low_24h.usd ? ("$ " + coin.market_data.low_24h.usd.toFixed(2)) : "--"}
                                </div>
                            </div>
                        </div>

                        <div className="grid-cell">
                            <div className='stat-box'>
                                <div className="stat-label">Market cap</div>
                                <div>
                                    {coin.market_data.market_cap.usd ? ("$ " + formatNumberScale(coin.market_data.market_cap.usd.toFixed(2))) : "--"}
                                </div>
                            </div>

                            <div className='stat-box'>
                                <div className="stat-label">Circulating Supply</div>
                                <div>
                                    {coin.market_data.circulating_supply ? ("$ " + formatNumberScale(coin.market_data.circulating_supply.toFixed(2))) : "--"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="coin-info-item">
                    <div className="discription-container">
                        <h3 className='discription-label'>About</h3>

                        <p className="coin-discription"
                            dangerouslySetInnerHTML={{ __html: coin.description.en ? coin.description.en : "--" }}
                        ></p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CoinInfo