import React from 'react'

import Loader from '../components/Loader'
import CryptoList from '../components/CryptoList';

import { useState, useEffect } from 'react';

import { marketDataUrl } from './Api';
import axios from 'axios';

// props from Market Section
const MarketDataFetcher = ({ currentPage }) => {
    const [cryptoData, setCryptoData] = useState([]);
    const [cryptoLoading, setCryptoLoading] = useState(true);


    useEffect(() => {
        async function getMarketData() {
            try {
                const response = await axios.request(marketDataUrl(currentPage));
                console.log(response.data);
                setCryptoData(response.data);
                setCryptoLoading(false);

            } catch (error) {
                console.error(error);
            }
        }
        getMarketData()
    }, [currentPage])


    
    return (
        <>
            {cryptoLoading && <Loader />}

            <CryptoList cryptoData={cryptoData}/>
        </>
    )
}

export default MarketDataFetcher