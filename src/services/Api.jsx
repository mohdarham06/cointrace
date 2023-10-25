

export const feedDataUrl = () => ({
    method: 'GET',
    url: 'https://coingecko.p.rapidapi.com/coins/markets',
    params: {
        vs_currency: 'usd',
        page: '1',
        per_page: '4'
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


