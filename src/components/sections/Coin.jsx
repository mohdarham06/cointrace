import React from 'react'

import Loader from '../Loader';
import CoinInfo from '../CoinInfo';

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { coinDataUrl } from '../../services/Api';
import axios from 'axios';

// onCoinDataLoaded from CoinPage
const Coin = ({ onCoinDataLoaded }) => {
    const { coinId } = useParams();
    const [coin, setCoin] = useState([]);
    const [cryptoLoading, setCryptoLoading] = useState(true);


    const [loadingFailed, setLoadingFailed] = useState(false);
    const maxRetries = 3;
    let retryCount = 0;


    async function getMarketData() {
        try {
            setCryptoLoading(true);
            setLoadingFailed(false);
            const response = await axios.request(coinDataUrl(coinId));
            console.log(response.data);
            setCoin(response.data);
            setCryptoLoading(false);
            // Callback to notify the parent component about the loaded coin data
            onCoinDataLoaded(response.data);

            console.log('success');

        } catch (error) {
            console.error(error);

            if (retryCount < maxRetries) {
                setTimeout(() => {
                    retryCount++;
                    getMarketData();
                    console.log(`retry: ${retryCount}`);
                }, 4000);
            } else {
                setCryptoLoading(false);
                setLoadingFailed(true);
                console.log('loading failed');
            }
        }
    }
    useEffect(() => {
        getMarketData();
    }, [coinId])



    return (
        <section id='coin' className="section section--coin">

            {cryptoLoading && <Loader />}

            {(loadingFailed && !cryptoLoading) ?
                <div className="error-container">
                    Loading Failed. Try Again!
                    <div
                        onClick={getMarketData}
                        className="retry-btn"
                    >
                        Reload
                    </div>
                </div>
                : null
            }

            {(!cryptoLoading && !loadingFailed) && <CoinInfo coin={coin} />}

        </section>

    )
}

export default Coin