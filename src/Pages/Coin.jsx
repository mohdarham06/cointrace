import React from 'react'

import Footer from '../components/sections/Footer'
import Loader from '../components/Loader';

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';


const Coin = () => {
    const { coinId } = useParams();
    const [coin, setCoin] = useState([]);
    const [coinLoading, setCoinLoading] = useState(true);



    const options = {
        method: 'GET',
        url: `https://coingecko.p.rapidapi.com/coins/${coinId}`,
        params: {
            market_data: 'true',
            localization: 'false',
            tickers: 'false',
            community_data: 'false',
            developer_data: 'false',
            sparkline: 'false'
        },
        headers: {
            'X-RapidAPI-Key': 'd9b652efb4msh6e4040368154c25p1c68bejsn16303a787b72',
            'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
        }
    };

    useEffect(() => {
        async function getCoinData() {
            try {
                const response = await axios.request(options);
                console.log(response.data);
                setCoin(response.data);
                setCoinLoading(false)
            } catch (error) {
                console.error(error);
            }
        }
        getCoinData();
    }, [])



    return (
        <>
            <main>
                <section className="coin-section">
                {coinLoading && <Loader />}

                    <div className="coin-data-container">

                        <div className="coin-icon">
                            {coin.image ? <img src={coin.image.large} alt={coin.id} /> : null}
                        </div>

                        <div className="coin-rank">
                            {coin.market_cap_rank ? coin.market_cap_rank : null}
                        </div>

                    </div>
                </section>

            </main>


            <Footer />
        </>
    )
}

export default Coin