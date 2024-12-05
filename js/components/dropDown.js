export const populateDropdowns = (rates, ...dropdowns) => {
    dropdowns.forEach((dropdown) => {
        $.each(rates, (currency) => {
            dropdown.append(new Option(currency, currency));
        });
    });
};

export const populateHistoricalTable = (data) => {
    const historicalTableBody = $('#historical-table tbody');
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

export const showErrorPopup = (message) => {
    const errorPopup = $('#error-popup');
    const errorMessage = $('#error-message');
    errorMessage.text(message);
    errorPopup.removeClass('hidden');
};

export const getCellClass = (value, { min, max }) => {
    if (value === max) return 'highlight-green';
    if (value === min) return 'highlight-red';
    return '';
};
