class API {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async getCoinList() {
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`

        const urlGetCoins = await fetch(url);

        const coins = await urlGetCoins.json();

        
        return {
            coins
        }
    }

    async getValues(moneda, criptomoneda) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apiKey}`;

        const urlConvertir = await fetch(url);

        const result = await urlConvertir.json();

        return {
            result
        }
    }
}