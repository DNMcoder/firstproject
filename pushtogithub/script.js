function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("from-currency").value;
    let result;
    if (fromCurrency === "USD") {
        result = amount * 0.82; 
    } else if (fromCurrency === "EUR") {
        result = amount / 0.82; 
    }
    document.getElementById("result").innerHTML = result.toFixed(2) + " " + (fromCurrency === "USD" ? "EUR" : "USD");
}