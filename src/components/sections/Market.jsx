import React from 'react'

import MarketDataFetcher from '../../services/MarketDataFetcher';

import { MdOutlineArrowBackIos } from 'react-icons/md';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

import { useSearchParams } from "react-router-dom";


const Market = () => {

    const [marketPageParams, setMarketPageParams] = useSearchParams({ marketpage: 1 });
    const currentPage = Number(marketPageParams.get("marketpage")) || 1;

    

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
        <section id='market' className='market section'>
            <div className="market-container">

                <h2 className='market-section-heading'>Market Update</h2>
                <div className="coin-list-info">
                    <div>Coin</div>
                    <div>Price</div>
                    <div>24h Change</div>
                    <div>Market Cap</div>
                </div>


                <MarketDataFetcher
                    currentPage={currentPage}
                />



                <div className="pagination-container">
                    <div className="pagination-box">

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


            </div>
        </section>
    )
}

export default Market