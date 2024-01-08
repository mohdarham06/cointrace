

import Home from './pages/Home';
import CoinPage from './pages/CoinPage';
import NotFound from './pages/NotFound';

import './styles/coinpage.css'
import './styles/notfound.css';
import './styles/backbutton.css';
import './styles/loader.css';
import './styles/mediaqueries.css'

import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';



function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/coin' >
                    <Route index element={<CoinPage />} />
                    <Route path=':coinId' element={<CoinPage />} />
                </Route>

                <Route path='*' element={<NotFound />} />


            </Routes>
        </>
    );
}

export default App;
