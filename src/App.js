


import Header from './components/sections/Header';
import Home from './pages/Home';
import Coin from './pages/Coin';
import NotFound from './pages/NotFound';

import { Routes, Route } from 'react-router-dom';


// import { useState, useEffect } from 'react';
// import axios from 'axios';


function App() {

    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/coin' >
                    <Route index element={<NotFound />} />
                    <Route path=':coinId' element={<Coin />} />
                </Route>

                <Route path='*' element={<NotFound />} />


            </Routes>
        </>
    );
}

export default App;
