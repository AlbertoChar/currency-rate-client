export const fetchRates = async () => {
    try {
        const response = await $.ajax({
            url: 'http://localhost:3000/api/rates',
            method: 'GET',
        });
        return response.rates;
    } catch (error) {
        console.error('Error fetching rates:', error);
        return {};
    }
};

export const performConversion = async (amount, from, to) => {
    try {
        const response = await $.ajax({
            url: 'http://localhost:3000/api/convert',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ amount, from, to }),
        });
        return response;
    } catch (error) {
        console.error('Error performing conversion:', error);
        return null;
    }
};

export const fetchHistoricalRates = async (baseCurrency) => {
    try {
        const response = await $.ajax({
            url: 'http://localhost:3000/api/historical',
            method: 'GET',
            data: { base: baseCurrency },
        });
        return response;
    } catch (error) {
        console.error('Error fetching historical rates:', error);
        return [];
    }
};
