// Exchange rates (Base: USD)
const rates = {
    USD:1, INR:83, EUR:0.92, GBP:0.79, JPY:155,
    AUD:1.52, CAD:1.36, CHF:0.88, CNY:7.25,
    SGD:1.35, NZD:1.65, ZAR:18.5, AED:3.67,
    SAR:3.75, KRW:1340, MYR:4.7, THB:36,
    PHP:56, IDR:15800, PKR:278,
    BDT:110, LKR:310, NPR:133,
    MXN:17, BRL:4.9, RUB:92,
    TRY:30, EGP:48
};

const currencyNames = {
    USD:"USD 🇺🇸", INR:"INR 🇮🇳", EUR:"EUR 🇪🇺", GBP:"GBP 🇬🇧",
    JPY:"JPY 🇯🇵", AUD:"AUD 🇦🇺", CAD:"CAD 🇨🇦", CHF:"CHF 🇨🇭",
    CNY:"CNY 🇨🇳", SGD:"SGD 🇸🇬", NZD:"NZD 🇳🇿", ZAR:"ZAR 🇿🇦",
    AED:"AED 🇦🇪", SAR:"SAR 🇸🇦", KRW:"KRW 🇰🇷", MYR:"MYR 🇲🇾",
    THB:"THB 🇹🇭", PHP:"PHP 🇵🇭", IDR:"IDR 🇮🇩", PKR:"PKR 🇵🇰",
    BDT:"BDT 🇧🇩", LKR:"LKR 🇱🇰", NPR:"NPR 🇳🇵",
    MXN:"MXN 🇲🇽", BRL:"BRL 🇧🇷", RUB:"RUB 🇷🇺",
    TRY:"TRY 🇹🇷", EGP:"EGP 🇪🇬"
};

const from = document.getElementById("from");
const to = document.getElementById("to");
const btn = document.getElementById("convertBtn");

for(let code in rates){
    from.innerHTML += `<option value="${code}">${currencyNames[code]}</option>`;
    to.innerHTML += `<option value="${code}">${currencyNames[code]}</option>`;
}

to.value = "INR";

btn.addEventListener("click", () => {
    document.getElementById("clickSound").play();

    let amount = document.getElementById("amount").value;
    let f = from.value;
    let t = to.value;

    if(amount === "" || amount <= 0){
        document.getElementById("result").innerText = "⚠ Enter valid amount";
        return;
    }

    let usd = amount / rates[f];
    let converted = (usd * rates[t]).toFixed(2);

    document.getElementById("result").innerText =
        `${amount} ${f} = ${converted} ${t}`;

    document.getElementById("successSound").play();
});
