const url = `https://api.weatherapi.com/v1/forecast.json?key=58bfe70145024c918aa154724222403&q=Amsterdam&days=1&aqi=no&alerts=no`

getWeather()
async function getWeather(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    calcAan(data);
}

function calcAan(data){
    tempMin = (data.forecast.forecastday[0].day.mintemp_c)
    console.log(tempMin)
    document.getElementById('tempMinTxt').innerHTML = "Minimum = " + tempMin + " C"
    tempMax = (data.forecast.forecastday[0].day.maxtemp_c)
    document.getElementById('tempMaxTxt').innerHTML = "Maximum = " + tempMax + " C"
    plotKorteBroek(tempMax)
}

function plotKorteBroek(tempMax) {
    if (tempMax >= 20) {
        document.getElementById('korteBroekTxt').innerHTML = " je kan een korte broek aan"
        document.getElementById('antwoordTxt').innerHTML = "Ja"
    } else {
        document.getElementById('korteBroekTxt').innerHTML = " je kan geen korte broek aan"
        document.getElementById('antwoordTxt').innerHTML = "Nee"
    }
}


