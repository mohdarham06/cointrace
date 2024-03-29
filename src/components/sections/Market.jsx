import React from 'react'

import Loader from '../Loader';
import CoinList from '../CoinList';

import { useState, useEffect } from 'react';

import { MdOutlineArrowBackIos } from 'react-icons/md';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

import { marketDataUrl } from '../../services/Api';
import axios from 'axios';
import { useSearchParams } from "react-router-dom";


const Market = () => {
    const [marketPageParams, setMarketPageParams] = useSearchParams({ marketpage: 1 });
    const currentPage = Number(marketPageParams.get("marketpage")) || 1;

    const [cryptoData, setCryptoData] = useState([]);
    const [cryptoLoading, setCryptoLoading] = useState(true);

    const [loadingFailed, setLoadingFailed] = useState(false);
    const maxRetries = 3;
    let retryCount = 0;


    async function getMarketData() {
        try {
            setCryptoLoading(true);
            setLoadingFailed(false);
            
            const response = await axios.request(marketDataUrl(currentPage));
            console.log(response.data);
            setCryptoData(response.data);
            setCryptoLoading(false);

            console.log('success');

        } catch (error) {
            console.error(error);

            if (maxRetries > retryCount) {
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
        getMarketData()
    }, [currentPage])



    // Pagination Buttons
    const paginationButtons = [];
    const maxButtons = 5;
    const startPage = Math.max(1, (currentPage - Math.floor(maxButtons / 2)));
    const endPage = startPage + maxButtons - 1;

    for (let i = startPage; i <= endPage; i++) {
        if (i > 0) {
            paginationButtons.push(
                <button
                    key={i}
                    onClick={() => setMarketPageParams({ marketpage: i })}
                    className={'number-pagination ' + (i === currentPage ? 'activePagi' : '')}
                >
                    {i}
                </button>
            );
        }
    }




    return (
        <section id='market' className='section section--market'>
            <div className="market__container">

                <h2 className='market__section-heading'>Market Update</h2>

                <div className="market__content">

                    <div className="market__list_label">
                        <div>Coin</div>
                        <div>Price</div>
                        <div>24h Change</div>
                        <div>Market Cap</div>
                    </div>


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

                    <CoinList cryptoData={cryptoData} />
                </div>
            </div>


            <div className="market__pagination">
                <div className="pagination__container">

                    <button className='arrow-pagination previous-pagination'
                        onClick={() => {
                            if (currentPage <= 1) return;
                            setMarketPageParams({ marketpage: currentPage - 1 })
                        }}>
                        <MdOutlineArrowBackIos />
                    </button>


                    {paginationButtons}


                    <button className='arrow-pagination next-pagination'
                        onClick={() => {
                            setMarketPageParams({ marketpage: currentPage + 1 })
                        }}>
                        <MdOutlineArrowForwardIos />
                    </button>

                </div>
            </div>
        </section>
    )
}

export default Market