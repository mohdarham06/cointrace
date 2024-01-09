

export const feedDataUrl = () => ({
    method: 'GET',
    url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&locale=en`,
})


export const marketDataUrl = (currentPage) => ({
    method: 'GET',
    url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false&locale=en`,
})


export const coinDataUrl = (coinId) => ({
    // Default url
    // url: `https://api.coingecko.com/api/v3/coins/${coinId}`,
    method: 'GET',
    // Custom url
    url: `https://api.coingecko.com/api/v3/coins/${coinId}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
})


