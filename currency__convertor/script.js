const cur1 = document.querySelector(".cur-1");
const cur2 = document.querySelector(".cur-2");
const cur1Input = document.querySelector(".cur-1-input");
const cur2Input = document.querySelector(".cur-2-input");

const baseRate = document.querySelector(".base");
const switchCur = document.querySelector(".switch-cur");

const countries = [
  {
    name: "AED",
    flagURL: "https://www.worldometers.info/img/flags/ae-flag.gif",
  },
  {
    name: "EUR",
    flagURL: "https://www.worldometers.info/img/flags/au-flag.gif",
  },
  {
    name: "GBP",
    flagURL: "https://www.worldometers.info/img/flags/uk-flag.gif",
  },
  {
    name: "USD",
    flagURL: "https://www.worldometers.info/img/flags/us-flag.gif",
  },
];

// https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD
const apiURL = "https://v6.exchangerate-api.com/v6/";
const key = "093352694b431c8342cff984";


async function grtExchangeRate(){
    const cur1Value = cur1.value
    const cur2Value = cur2.value

    const res = await fetch(`${apiURL}${key}/latest/${cur1Value}`);
    const data = await res.json()
    const rate = data.conversion_rates[cur2Value]
    baseRate.innerHTML = `1${cur1Value} = ${rate.toFixed(2)} ${cur2Value}`
    cur2Input.value = (cur1Input.value * rate).toFixed(2)

}

grtExchangeRate()

cur1.addEventListener("change", ()=>{
    grtExchangeRate()
    getFlag()
})


cur2.addEventListener("change", ()=>{
    grtExchangeRate()
    getFlag()
})

cur1Input.addEventListener("input",grtExchangeRate)
cur2Input.addEventListener("input",grtExchangeRate)


function getFlag(){
    countries.forEach((country)=>{
        if(cur1.value == country.name){
            const imgSrc = document.querySelector(".from img") 
            imgSrc.setAttribute("src", country.flagURL)
        }else if(cur2.value == country.name){
            const imgSrc = document.querySelector(".to img") 
            imgSrc.setAttribute("src", country.flagURL)
        }
    })
}