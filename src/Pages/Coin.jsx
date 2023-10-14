import React from 'react'

import Loader from '../components/Loader';
import CoinUpdate from '../components/CoinUpdate';

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

                    {coinLoading ? null : <CoinUpdate coin={coin} />}

                </section>

            </main>


        </>
    )
}

export default Coin