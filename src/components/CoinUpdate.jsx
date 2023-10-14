import React from 'react'



const CoinUpdate = ({ coin }) => {

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

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    
    return (
        <div className="coin-container">

            <div className='coin-info'>
                <div>
                    {coin.image ? <img className="coin-icon" src={coin.image.large} alt={coin.id} /> : null}
                </div>

                <div className="coin-name">{coin.name ? coin.name : "--"}</div>

                <div className="coin-rank">
                    {coin.market_cap_rank ? ("Popularity: #" + coin.market_cap_rank) : "--"}
                </div>
            </div>





            <div className='coin-data'>
                <h3>Market Stats</h3>


                <div className="data-grid">
                    <div className="grid-cell">
                        <div>
                            <div className="data-label">Current price</div>
                            <p className="coin-price">
                                {coin.market_data.current_price.usd ? ("$ " + numberWithCommas(coin.market_data.current_price.usd.toFixed(2))) : "--"}
                            </p>
                        </div>


                        <div>
                            <div className="data-label">Price change (24h)</div>
                            <p className={"coin-price-change " + (coin.market_data.price_change_percentage_24h ?
                                (coin.market_data.price_change_percentage_24h >= 0 ? "green" : "red") : "")}
                            >
                                {coin.market_data.price_change_percentage_24h ?
                                    (coin.market_data.price_change_percentage_24h >= 0
                                        ? ("+" + coin.market_data.price_change_percentage_24h.toFixed(2) + " %")
                                        : (coin.market_data.price_change_percentage_24h.toFixed(2) + " %")
                                    ) : "--"}
                            </p>
                        </div>


                        <div>
                            <div className="data-label">Circulating Supply</div>
                            <p className="coin-supply">
                                {coin.market_data.circulating_supply ? ("$ " + formatNumberScale(coin.market_data.circulating_supply.toFixed(2))) : "--"}
                            </p>
                        </div>
                    </div>





                    <div className="grid-cell">
                        <div>
                            <div className="data-label">Market cap</div>
                            <p className="coin-market-cap">
                                {coin.market_data.market_cap.usd ? ("$ " + formatNumberScale(coin.market_data.market_cap.usd.toFixed(2))) : "--"}
                            </p>
                        </div>


                        <div>
                            <div className="data-label">Price change (7d)</div>
                            <p className={"coin-price-change " + (coin.market_data.price_change_percentage_7d ? (coin.market_data.price_change_percentage_7d >= 0
                                ? "green" : "red") : "")}
                            >

                                {coin.market_data.price_change_percentage_7d ? (coin.market_data.price_change_percentage_7d.toFixed(2) + " %") : "--"}
                            </p>
                        </div>


                        <div>
                            <div className="data-label">Max Supply</div>
                            <p className="coin-supply">
                                {coin.market_data.total_supply ? ("$ " + formatNumberScale(coin.market_data.total_supply.toFixed(2))) : "--"}
                            </p>
                        </div>

                    </div>
                </div>


            </div>


        </div>
    )
}

export default CoinUpdate