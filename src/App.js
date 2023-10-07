

import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Market from './components/sections/Market';
import Footer from './components/sections/Footer';


import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

    const [cryptoData, setCryptoData] = useState([]);


    // CoinGecko Api
    const options = {
        method: 'GET',
        url: 'https://coingecko.p.rapidapi.com/coins/markets',
        params: {
            vs_currency: 'usd',
            page: '1',
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
                setCryptoData(response.data)
                console.log(response.data);

            } catch (error) {
                console.error(error);
            }
        }
        getMarketData()
        // [] at load time
    }, [])






    return (
        <>
            <Header />

            <main>
                <Hero cryptoData={cryptoData} />

                <Market cryptoData={cryptoData} />
            </main>



            <Footer />
        </>
    );
}

export default App;
