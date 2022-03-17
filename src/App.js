import "./App.css";
import Chart from "./components/Chart";
import Form from "./components/Form";
import { ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import { getExchangeRate, getDailySeries } from "./services/services";
import {
    convertChartData,
    convertExchangeRateData,
} from "./utils/dataConverter";

const App = () => {
    const [baseCurrency, setBaseCurrency] = useState("USD");
    const [targetCurrency, setTargetCurrency] = useState("EUR");
    const [amount, setAmount] = useState("1");
    const [exchangeRate, setExchangeRate] = useState("");
    const [dailySeries, setDailySeries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    // Get exchange rate and draw chart on "Convert" button click
    const handleConvertClick = () => {
        updateExchangeRate(baseCurrency, targetCurrency);
        updateDailySeries(baseCurrency, targetCurrency);
    };

    const updateExchangeRate = (base, target) => {
        setIsLoading(true);
        getExchangeRate(base, target)
            .then((data) => {
                setExchangeRate(convertExchangeRateData(data));
                setIsLoading(false);
            })
            .catch((error) => {
                console.log("Error:", error.message);
            });
    };

    const updateDailySeries = (base, target) => {
        getDailySeries(base, target)
            .then((data) => {
                setDailySeries(convertChartData(data));
            })
            .catch((error) => {
                console.log("Error:", error.message);
            });
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <div className="app">
                <h1>Secfi Currency Converter</h1>
                <div className="converter">
                    <Form
                        baseCurrency={baseCurrency}
                        setBaseCurrency={setBaseCurrency}
                        targetCurrency={targetCurrency}
                        setTargetCurrency={setTargetCurrency}
                        amount={amount}
                        setAmount={setAmount}
                        exchangeRate={exchangeRate}
                        setExchangeRate={setExchangeRate}
                        handleConvertClick={handleConvertClick}
                        isLoading={isLoading}
                    />
                    <Chart
                        baseCurrency={baseCurrency}
                        targetCurrency={targetCurrency}
                        dailySeries={dailySeries}
                        setDailySeries={setDailySeries}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
};

export default App;
