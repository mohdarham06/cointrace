

import Header from './components/sections/Header';
import Footer from './components/sections/Footer'

import axios from 'axios';



function App() {

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
    };

    async function getMarketData() {
        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    getMarketData()




    
    return (
        <div className="App">

           <Header />




            <main>
            </main>

            {/* <Footer /> */}


        </div>
    );
}

export default App;
