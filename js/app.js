
const quote = new API(''); /* Add your API Key from Crypto Compare Web Site  */
const ui = new UIInterface();



// Read form
const formQuote = document.querySelector('#formQuote');


//evenlistener

formQuote.addEventListener('submit', (e) => {
    e.preventDefault();


    // Currency Selected
    const elCoinSelect = document.querySelector('#coin');
    const currentCoinSelected = elCoinSelect.options[elCoinSelect.selectedIndex].value;

    //Cryptocurrency selected
    const elCryptoCurrencySelect = document.querySelector('#cryptoCurrency');    
    const cryptoCurrencySelected = elCryptoCurrencySelect.options[elCryptoCurrencySelect.selectedIndex].value;
    
    
    //Check both fields are not empty
    if(currentCoinSelected === '' || cryptoCurrencySelected === '') {
        ui.showAlert('All fields are required, try again please...', 'alert bg-danger text-center');
    } else {
        quote.getValues(currentCoinSelected, cryptoCurrencySelected)
            .then(data => {
                // console.log(data)
                ui.showQuoteResult(data.result.RAW, currentCoinSelected, cryptoCurrencySelected);
            })
    }
});
