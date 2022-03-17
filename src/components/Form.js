import "../css/Form.css";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    LinearProgress,
} from "@mui/material";
import { CURRENCY } from "../constants/constants";

const Form = ({
    baseCurrency,
    setBaseCurrency,
    targetCurrency,
    setTargetCurrency,
    amount,
    setAmount,
    exchangeRate,
    setExchangeRate,
    handleConvertClick,
    isLoading,
}) => {
    return (
        <div className="form-container">
            <TextField
                id="outlined-basic"
                value={amount}
                label="Amount"
                variant="standard"
                onChange={(e) => {
                    setAmount(e.target.value);
                }}
            />
            <FormControl variant="standard">
                <InputLabel id="base-currency">Base currency</InputLabel>
                <Select
                    labelId="base-currency"
                    id="base-currency-select"
                    value={baseCurrency}
                    label="Base currency"
                    onChange={(e) => {
                        setExchangeRate("");
                        setBaseCurrency(e.target.value);
                    }}
                >
                    {Object.entries(CURRENCY).map(([key, value]) => {
                        return (
                            <MenuItem key={key} value={key}>
                                {key} {value}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
            <FormControl variant="standard">
                <InputLabel id="target-currency">Target currency</InputLabel>
                <Select
                    labelId="target-currency"
                    id="target-currency-select"
                    value={targetCurrency}
                    label="Target currency"
                    onChange={(e) => {
                        setExchangeRate("");
                        setTargetCurrency(e.target.value);
                    }}
                >
                    {Object.entries(CURRENCY).map(([key, value]) => {
                        return (
                            <MenuItem key={key} value={key}>
                                {key} {value}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
            <Button
                variant="outlined"
                color="success"
                size="large"
                onClick={handleConvertClick}
            >
                Convert
            </Button>
            <div className="result">
                {isLoading ? (
                    <LinearProgress color="success" />
                ) : (
                    <span>
                        {`${amount} ${baseCurrency} = ${
                            exchangeRate * amount
                        } ${targetCurrency}`}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Form;
