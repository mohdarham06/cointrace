import React from 'react'

import MarketUpdate from '../MarketUpdate'
import Loader from '../Loader'

import { useState, useEffect } from 'react';
import axios from 'axios';


// cryptoData from App
const Market = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [cryptoData, setCryptoData] = useState([]);
    const [cryptoLoading, setCryptoLoading] = useState(true);



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


    const paginationButtons = [];
    for (let i = 1; i <= 5; i++) {
        paginationButtons.push(
            <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={'number-pagination ' + (i === currentPage ? 'activePagi' : '')}
            >
                {i}
            </button>
        )
    }



    return (
        <section className='market-section'>

            <h2 className='section-headings'>Market Update</h2>

            <div className="coin-list-info">
                <div>Coin</div>
                <div>Price</div>
                <div>24h Change</div>
                <div>Market Cap</div>
            </div>

            {cryptoLoading && <Loader />}
            <MarketUpdate cryptoData={cryptoData} />
            


            <div className="pagination-container">
                {/* <button className='previous-pagination'
                    onClick={() => {
                        if (currentPage <= 1) return;
                        setCurrentPage(currentPage - 1)
                    }}>
                    Previous {currentPage}
                </button> */}

                {paginationButtons}

                {/* <button className='next-pagination'
                    onClick={() => {
                        setCurrentPage(currentPage + 1)
                    }}>
                    Next {currentPage}
                </button> */}
            </div>
        </section>
    )
}

export default Market