import { API_KEY } from "../constants/constants";

const makeApiCall = async (url) => {
    const response = await fetch(url);

    if (response.status !== 200) {
        throw new Error("Can not fetch data");
    }

    const data = await response.json();
    return data;
};

export const getExchangeRate = (from, to) => {
    return makeApiCall(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from}&to_currency=${to}&apikey=${API_KEY}`);
};

export const getDailySeries = (from, to) => {
    return makeApiCall(`https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${from}&to_symbol=${to}&apikey=${API_KEY}`);
};
