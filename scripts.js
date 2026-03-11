document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.querySelector(".convert-button");
    const currencySelect = document.querySelector(".currency-select");
    const inputCurrencyEl = document.querySelector(".input-currency");
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");
    const currencyNameEl = document.getElementById("currency-name");
    const currencyImg = document.querySelector(".currency-img");

    function getInputValue() {
      const value =
      Number(inputCurrencyEl.value);
      return isNaN(value) ? 0 : value;
    }

    function convertValues() {
        const inputCurrencyValue = getInputValue();

        const dolarToday = 5.2;
        const euroToday = 6.2;
        const libraToday = 6.5;
        const bitcoinToday = 220000;

        if (currencySelect.value === "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarToday);

        } else if (currencySelect.value === "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroToday);

        } else if (currencySelect.value === "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libraToday);

        } else if (currencySelect.value === "bitcoin") {
            const bitcoinValue =
            inputCurrencyValue / bitcoinToday;
                currencyValueConverted.innerHTML = `₿ ${bitcoinValue.toFixed(8)}`;

                
        }
        

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue);
    }

    function changeCurrency() {
        if (!currencyNameEl || !currencyImg) return;

        const selected = currencySelect.value;

        if (selected === "dolar") {
            currencyNameEl.innerHTML = "Dólar americano";
            currencyImg.src = "./assets/dolar.png";

        } else if (selected === "euro") {
            currencyNameEl.innerHTML = "Euro";
            currencyImg.src = "./assets/euro.png";

        } else if (selected === "libra") {
            currencyNameEl.innerHTML = "Libra esterlina";
            currencyImg.src = "./assets/libra.png";

        } else if (selected === "bitcoin") {
            currencyNameEl.innerHTML = "Bitcoin";
            currencyImg.src = "./assets/bitcoin.png";
        }

        convertValues()
    }

    currencySelect.addEventListener("change", changeCurrency);

    if (convertButton) {
        convertButton.addEventListener("click", convertValues);
    }
});