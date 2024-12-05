import { fetchRates } from './services/apiService.js';
import { populateDropdowns } from './components/dropdown.js';
import { handleConversionButtonClick } from './components/conversion.js';
import { handleHistoricalButtonClick } from './components/historical.js';

$(document).ready(function () {
    const amountInput = $('#amount');
    const inputCurrencyDropdown = $('#input-currency');
    const outputCurrencyDropdown = $('#output-currency');
    const historicalCurrencyDropdown = $('#historical-currency');
    const conversionResult = $('#conversion-result');
    const convertButton = $('#convert-button');
    const historicalButton = $('#fetch-historical-button');
    const historicalTableBody = $('#historical-table tbody');

    handleConversionButtonClick(
        convertButton,
        amountInput,
        inputCurrencyDropdown,
        outputCurrencyDropdown,
        conversionResult
    );

    handleHistoricalButtonClick(
        historicalButton,
        historicalCurrencyDropdown,
        historicalTableBody
    );

    fetchRates().then((rates) => {
        populateDropdowns(
            rates,
            inputCurrencyDropdown,
            outputCurrencyDropdown,
            historicalCurrencyDropdown
        );
    });
});
