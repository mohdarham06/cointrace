import React from 'react'

import Loader from '../Loader';
import CoinInfo from '../CoinInfo';

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { coinDataUrl } from '../../services/Api';
import axios from 'axios';


const Coin = () => {

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
        <section id='coin' className="coin section">

            {coinLoading && <Loader />}

            {coinLoading ? null : <CoinInfo coin={coin} />}

        </section>

    )
}

export default Coin