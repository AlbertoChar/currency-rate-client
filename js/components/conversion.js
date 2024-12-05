import { performConversion } from '../services/apiService.js';

export const handleConversionButtonClick = (convertButton, amountInput, inputCurrencyDropdown, outputCurrencyDropdown, conversionResult) => {
    const showErrorPopup = (message) => {
        const errorPopup = $('#error-popup');
        const errorMessage = $('#error-message');
        errorMessage.text(message);
        errorPopup.removeClass('hidden');
    };

    $('#close-popup').on('click', () => {
        $('#error-popup').addClass('hidden');
    });

    convertButton.on('click', async () => {
        const amount = parseFloat(amountInput.val());
        const from = inputCurrencyDropdown.val();
        const to = outputCurrencyDropdown.val();

        if (isNaN(amount) || !from || !to) {
            const errorMsg = 'Please fill all fields correctly.';
            conversionResult
                .removeClass('success')
                .addClass('error')
                .text(errorMsg);
            showErrorPopup(errorMsg);
            return;
        }

        const result = await performConversion(amount, from, to);
        if (result) {
            conversionResult
                .removeClass('error')
                .addClass('success')
                .text(`${amount} ${from} = ${result.rates[to]} ${to}`);
        } else {
            const errorMsg = 'Error performing conversion.';
            conversionResult
                .removeClass('success')
                .addClass('error')
                .text(errorMsg);
            showErrorPopup(errorMsg);
        }
    });
};
