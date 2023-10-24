

// `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
export const trendingDataUrl = () => ({
    method: 'GET',
    url: 'https://coingecko.p.rapidapi.com/coins/markets',
    params: {
        vs_currency: 'usd',
        page: '1',
        per_page: '6'
    },
    headers: {
        'X-RapidAPI-Key': 'd9b652efb4msh6e4040368154c25p1c68bejsn16303a787b72',
        'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
    }
})


export const marketDataUrl = (currentPage) => ({
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
})


export const coinDataUrl = (coinId) => ({
    method: 'GET',
    url: `https://coingecko.p.rapidapi.com/coins/${coinId}`,
    params: {
        market_data: 'true',
        localization: 'false',
        tickers: 'false',
        community_data: 'false',
        developer_data: 'false',
        sparkline: 'false'
    },
    headers: {
        'X-RapidAPI-Key': 'd9b652efb4msh6e4040368154c25p1c68bejsn16303a787b72',
        'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
    }
})


// export const chartDataUrl = (id, days = 365, currency) =>
//     `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;
