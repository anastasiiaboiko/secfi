import "../css/Chart.css";
import { useEffect } from "react";
import { getDailySeries } from "../services/services";
import {
    LineChart,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    ResponsiveContainer,
} from "recharts";
import { convertChartData } from "../utils/dataConverter";

const Chart = ({
    baseCurrency,
    targetCurrency,
    dailySeries,
    setDailySeries,
}) => {
    // Draw chart from example data on initial render
    useEffect(() => {
        getDailySeries(baseCurrency, targetCurrency)
            .then((data) => {
                setDailySeries(convertChartData(data));
            })
            .catch((error) => {
                console.log("Error:", error.message);
            });
    }, []);

    return (
        <div className="chart-container" data-testid="recharts">
            <ResponsiveContainer width="95%" height={400}>
                <LineChart data={dailySeries}>
                    <XAxis dataKey="date" />
                    <YAxis domain={["dataMin", "dataMax"]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="high" stroke="#ce93d8" />
                    <Line type="monotone" dataKey="low" stroke="#66bb69" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
