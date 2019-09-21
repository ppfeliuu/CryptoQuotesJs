class UIInterface {

    constructor() {
        this.init();
    }

    init() {
        this.buildSelect()
    }

    buildSelect() {
        quote.getCoinList()
            .then(coins => {

                const select = document.querySelector('#cryptoCurrency');

                for(const [key, value] of Object.entries(coins.coins.Data)) {

                    const optCryptoCurrency = document.createElement('option');
                    optCryptoCurrency.value = value.Symbol;
                    optCryptoCurrency.appendChild(document.createTextNode(value.CoinName));

                    select.appendChild(optCryptoCurrency);

                }
                
            })
    }

    showAlert(msg, cls) {
        const div = document.createElement('div');
        div.className = cls;
        div.appendChild(document.createTextNode(msg));

        //Seleccionar mensaje

        const divAlert = document.querySelector('.message');
        divAlert.appendChild(div);

        setTimeout(() => {
            document.querySelector('.message div').remove();
        }, 3000);
        

    }

    showQuoteResult(res, coin, crypto) {

        const previousResult = document.querySelector('#quoteResult > div');

        if (previousResult) {
            previousResult.remove();
        }

        const dataCoin = res[crypto][coin];

        let price = dataCoin.PRICE.toFixed(2),
            percentPerDay = dataCoin.CHANGEPCTDAY.toFixed(2),
            lastUpdate = new Date(dataCoin.LASTUPDATE * 1000).toLocaleDateString('es-ES');


        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Quote result:</h2>
                    <p>${dataCoin.FROMSYMBOL} price to currency ${dataCoin.TOSYMBOL}: ${price}</p> 
                    <p>Change percent per day: % ${percentPerDay}</p>
                    <p>Last update: ${lastUpdate}</p>
                </div>
            </div>
        `;

        this.showHideSpinner('block');

        setTimeout(() => {
            document.querySelector('#quoteResult').innerHTML = templateHTML;

            this.showHideSpinner('none');
        }, 3000)

        
    }

    showHideSpinner(v) {
        const spinner = document.querySelector('.content-spinner');
        spinner.style.display = v;
    }
}