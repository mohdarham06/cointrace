


import Header from './components/sections/Header';
import Home from './Pages/Home';
import Coin from './Pages/Coin';

import { Routes, Route } from 'react-router-dom';


// import { useState, useEffect } from 'react';
// import axios from 'axios';


function App() {

    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<Home />}>
                </Route>

                <Route path='/coin/:coinId' element={<Coin />}>
                </Route>

            </Routes>
        </>
    );
}

export default App;
