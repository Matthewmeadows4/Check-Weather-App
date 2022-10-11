let api = 'https://api.openweathermap.org/data/2.5/weather?q='
let apiKey = '&APPID=a974d530e0c6b4faf7a5fd4337e8ef8c';
let units = '&units=imperial';


async function getWeather(){
   let input = document.getElementById('city');
   const weaApi_URL = api + input.value + apiKey + units
   const response = await fetch(weaApi_URL)
   const data = await response.json()
   document.getElementById('cityName').textContent = input.value
   document.getElementById('weather').textContent = data.main.temp
}

getWeather();

