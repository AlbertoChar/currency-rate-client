import { fetchHistoricalRates } from '../services/apiService.js';
import { getCellClass } from './dropdown.js';

export const handleHistoricalButtonClick = (historicalButton, historicalCurrencyDropdown, historicalTableBody) => {
    historicalButton.on('click', async () => {
        const baseCurrency = historicalCurrencyDropdown.val();

        if (!baseCurrency) {
            alert('Please select a base currency for historical rates.');
            return;
        }

        const historicalRates = await fetchHistoricalRates(baseCurrency);
        populateHistoricalTable(historicalRates, historicalTableBody);
    });
};

export const populateHistoricalTable = (data, historicalTableBody) => {
    historicalTableBody.empty();
    const ratesByCurrency = { USD: [], ILS: [], EUR: [], GBP: [] };

    data.forEach((entry) => {
        const { rates } = entry;
        Object.keys(ratesByCurrency).forEach((currency) => {
            if (rates[currency] !== undefined) {
                ratesByCurrency[currency].push(rates[currency]);
            }
        });
    });

    const minMax = {};
    Object.keys(ratesByCurrency).forEach((currency) => {
        minMax[currency] = {
            min: Math.min(...ratesByCurrency[currency]),
            max: Math.max(...ratesByCurrency[currency]),
        };
    });

    data.forEach((entry) => {
        const { date, rates } = entry;
        const row = `<tr>
            <td>${date}</td>
            <td class="${getCellClass(rates.USD, minMax.USD)}">${rates.USD || '-'}</td>
            <td class="${getCellClass(rates.ILS, minMax.ILS)}">${rates.ILS || '-'}</td>
            <td class="${getCellClass(rates.EUR, minMax.EUR)}">${rates.EUR || '-'}</td>
            <td class="${getCellClass(rates.GBP, minMax.GBP)}">${rates.GBP || '-'}</td>
        </tr>`;
        historicalTableBody.append(row);
    });
};
