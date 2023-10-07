import React from 'react'

const MarketUpdate = ({ cryptoData }) => {

    return (
        <section>
            <h2>Market Update</h2>
            <div className='coin-list'>
                {
                    cryptoData.map((coin) => (
                        <div className='coin' key={coin.id} >
                            <span>
                                <img className='coin-icon' src={coin.image} alt="" />
                                <div className='coin-name'>{coin.name}</div>
                            </span>

                            <p>{coin.current_price}</p>

                            <p>0.88%</p>


                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default MarketUpdate