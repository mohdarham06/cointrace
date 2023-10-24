import React from 'react'

import Loader from '../Loader';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { trendingDataUrl } from '../../services/Api';
import axios from 'axios';



const Hero = () => {
    const [cryptoUpdates, setCryptoUpdates] = useState([]);
    const [cryptoLoading, setCryptoLoading] = useState(true);



    useEffect(() => {
        async function getMarketData() {
            try {
                const response = await axios.request(trendingDataUrl());
                console.log(response.data);
                setCryptoUpdates(response.data);
                setCryptoLoading(false);

            } catch (error) {
                console.error(error);
            }
        }
        getMarketData()
    }, [])



    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        // remove main
        <section id='home' className='home section'>
            <div className="home-container">

                <h1 className='section-heading'>
                    TRACK AND TRADE
                    <br />
                    <span>CRYPTO CURRENCIES</span>
                </h1>



                <div className="crypto-feed-container">
                    {cryptoLoading && <Loader />}


                    <div className="feed-content">
                        {
                            cryptoUpdates.map((coin) => (
                                <Link
                                    to={`/coin/${coin.id}`}
                                    className='feed-coin'
                                    key={coin.id} >

                                    <div>
                                        {coin.image ? <img className='coin-icon' src={coin.image} alt={coin.id} /> : null}
                                    </div>

                                    <div>
                                        <span className='coin-name'>{coin.name ? coin.name : null}</span>
                                        {" "}
                                        <span className={'price-change ' + (coin.price_change_percentage_24h ?
                                            (coin.price_change_percentage_24h >= 0 ? 'green' : 'red') : '')}
                                        >
                                            {coin.price_change_percentage_24h ?
                                                (coin.price_change_percentage_24h >= 0
                                                    ? ("+" + coin.price_change_percentage_24h.toFixed(2) + "%")
                                                    : (coin.price_change_percentage_24h.toFixed(2) + "%")
                                                ) : "--"}
                                        </span>
                                    </div>

                                    <p className='current-price'>
                                        {coin.current_price ? ("$ " + numberWithCommas(coin.current_price.toFixed(2))) : "--"}
                                    </p>
                                </Link>
                            ))
                        }
                    </div>


                </div>
            </div>
        </section>

    )
}

export default Hero