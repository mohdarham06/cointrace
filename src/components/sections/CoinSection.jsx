import React from 'react'

import Loader from '../Loader';
import CoinUpdate from '../CoinUpdate';

import '../../styles/coin.css'

import { BiArrowBack } from "react-icons/bi";

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from 'axios';


const CoinSection = () => {

    const { coinId } = useParams();
    const [coin, setCoin] = useState([]);
    const [coinLoading, setCoinLoading] = useState(true);

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);
    }


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
        <section className="coin-section">

            {coinLoading && <Loader />}

            <div className='back-button' onClick={navigateBack}>
                <BiArrowBack />
            </div>

            {coinLoading ? null : <CoinUpdate coin={coin} />}

        </section>

    )
}

export default CoinSection