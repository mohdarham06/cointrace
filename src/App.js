

import Home from './pages/Home';
import CoinPage from './pages/CoinPage';
import NotFound from './pages/NotFound';

import './styles/header.css';
import './styles/hero.css';
import './styles/features.css';
import './styles/market.css';
import './styles/join.css';
import './styles/footer.css';
import './styles/coin.css';
import './styles/notfound.css';
import './styles/backbutton.css';
import './styles/loader.css';
import './styles/mediaqueries.css'


import { Routes, Route } from 'react-router-dom';



function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/coin' >
                    <Route index element={<NotFound />} />
                    <Route path=':coinId' element={<CoinPage />} />
                </Route>

                <Route path='*' element={<NotFound />} />


            </Routes>
        </>
    );
}

export default App;
