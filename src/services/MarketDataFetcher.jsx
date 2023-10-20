import React from 'react'

import Loader from '../components/Loader'
import CryptoList from '../components/CryptoList';

import { useState, useEffect } from 'react';
import axios from 'axios';

// props from Market Section
const MarketDataFetcher = ({ currentPage, perPageCoins }) => {
    const [cryptoData, setCryptoData] = useState([]);
    const [cryptoLoading, setCryptoLoading] = useState(true);


    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://coingecko.p.rapidapi.com/coins/markets',
            params: {
                vs_currency: 'usd',
                page: currentPage,
                per_page: perPageCoins
            },
            headers: {
                'X-RapidAPI-Key': 'd9b652efb4msh6e4040368154c25p1c68bejsn16303a787b72',
                'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
            }
        }

        async function getMarketData() {
            try {
                const response = await axios.request(options);
                console.log(response.data);
                setCryptoData(response.data);
                setCryptoLoading(false);

            } catch (error) {
                console.error(error);
            }
        }
        getMarketData()
        // [] at load time
    }, [currentPage])


    
    return (
        <>
            {cryptoLoading && <Loader />}

            <CryptoList cryptoData={cryptoData}/>
        </>
    )
}

export default MarketDataFetcher