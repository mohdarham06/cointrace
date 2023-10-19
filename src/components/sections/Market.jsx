import React from 'react'

import MarketData from '../MarketData'
import Loader from '../Loader'

import { MdOutlineArrowBackIos } from 'react-icons/md';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

import { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams, useSearchParams } from "react-router-dom";



// cryptoData from App
const Market = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [cryptoLoading, setCryptoLoading] = useState(true);
    // const [currentPage, setCurrentPage] = useState(1);

    const [currentPageParams, setCurrentPageParams] = useSearchParams({ marketpage: 1 });
    const currentPage = Number(currentPageParams.get("marketpage"))
    console.log(currentPage)
    console.log(currentPageParams.get("marketpage"))


    const options = {
        method: 'GET',
        url: 'https://coingecko.p.rapidapi.com/coins/markets',
        params: {
            vs_currency: 'usd',
            page: currentPage,
            per_page: '10'
        },
        headers: {
            'X-RapidAPI-Key': 'd9b652efb4msh6e4040368154c25p1c68bejsn16303a787b72',
            'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
        }
    }

    useEffect(() => {
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
                    onClick={() => setCurrentPageParams({ marketpage: i })}
                    className={'number-pagination ' + (i === currentPage ? 'activePagi' : '')}
                >
                    {i}
                </button>
            );
        }
    }




    return (
        <section className='market-section'>
            <div className="market-container">

                <h2 className='market-section-heading'>Market Update</h2>

                <div className="coin-list-info">
                    <div>Coin</div>
                    <div>Price</div>
                    <div>24h Change</div>
                    <div>Market Cap</div>
                </div>

                {cryptoLoading && <Loader />}
                <MarketData cryptoData={cryptoData} />



                <div className="pagination-container">

                    <div className="pagination-box">
                        <button className='arrow-pagination previous-pagination'
                            onClick={() => {
                                if (currentPage <= 1) return;
                                setCurrentPageParams(currentPage - 1)
                            }}>
                            <MdOutlineArrowBackIos />
                        </button>

                        {paginationButtons}

                        <button className='arrow-pagination next-pagination'
                            onClick={() => {
                                setCurrentPageParams(currentPage + 1)
                            }}>
                            <MdOutlineArrowForwardIos />
                        </button>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Market