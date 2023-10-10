import React from 'react'

import Footer from '../components/sections/Footer'

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';


const Coin = () => {
    const { coinId } = useParams();
    const [coinData, setCoinData] = useState([]);


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
                setCoinData(response.data);
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
                    <div className="coin-data-container">

                        <div className="coin-icon">
                            {coinData.image ? <img src={coinData.image.large} alt={coinData.id} /> : null}
                        </div>

                        <div className="coin-rank">
                            {coinData.market_cap_rank ? coinData.market_cap_rank : null}
                        </div>

                    </div>
                </section>

            </main>


            <Footer />
        </>
    )
}

export default Coin