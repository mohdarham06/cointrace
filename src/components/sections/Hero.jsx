import React from 'react'

import Loader from '../Loader';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../styles/hero.css'



const Hero = () => {
    const [cryptoUpdates, setCryptoUpdates] = useState([]);
    const [cryptoLoading, setCryptoLoading] = useState(true);


    const options = {
        method: 'GET',
        url: 'https://coingecko.p.rapidapi.com/coins/markets',
        params: {
            vs_currency: 'usd',
            page: '1',
            per_page: '4'
        },
        headers: {
            'X-RapidAPI-Key': 'd9b652efb4msh6e4040368154c25p1c68bejsn16303a787b72',
            'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
        }
    }

    useEffect(() => {
        async function getMarketData() {
            try {
                const response = await axios.request(options);
                console.log(response.data);
                setCryptoUpdates(response.data);
                setCryptoLoading(false);

            } catch (error) {
                console.error(error);
            }
        }
        getMarketData()
        // [] at load time
    }, [])



    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        // remove main
        <section className='hero-section'>
            <h1 className='hero-heading'>
                TRACK AND TRADE
                <br />
                <span>CRYPTO CURRENCIES</span>
            </h1>



            <div className="crypto-feed-container">
                {cryptoLoading && <Loader />}
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

        </section>

    )
}

export default Hero