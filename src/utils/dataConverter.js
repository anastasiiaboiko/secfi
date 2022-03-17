export const convertChartData = (dailySeries) => {
    const data = dailySeries["Time Series FX (Daily)"];
    const dates = Object.keys(data);
    // Get last 30 days
    const currentDates = dates.slice(0, 30);

    // Format data for Recharts chart library
    return currentDates.reverse().map((date) => ({
        date,
        open: Number(data[date]["1. open"]),
        close: Number(data[date]["4. close"]),
        high: Number(data[date]["2. high"]),
        low: Number(data[date]["3. low"]),
    }));
}

export const convertExchangeRateData = (exchangeRate) => {
    const data = exchangeRate["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
    return data;
}