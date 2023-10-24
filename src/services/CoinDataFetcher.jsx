import React from 'react'

import Loader from '../components/Loader';
import CoinInfo from '../components/CoinInfo';

import { useState, useEffect } from 'react';

import { useParams } from "react-router-dom";
import { coinDataUrl } from './Api';
import axios from 'axios';


const CoinDataFetcher = () => {
    const { coinId } = useParams();
    const [coin, setCoin] = useState([]);
    const [coinLoading, setCoinLoading] = useState(true);
    
    
    useEffect(() => {
        async function getCoinData() {
            try {
                const response = await axios.request(coinDataUrl(coinId));
                console.log(response.data);
                setCoin(response.data);
                setCoinLoading(false)
            } catch (error) {
                console.error(error);
            }
        }
        getCoinData();
    }, [coinId])
    

    return (
        <>
            {coinLoading && <Loader />}

            {coinLoading ? null : <CoinInfo coin={coin}/>}
        </>
    )
}

export default CoinDataFetcher