let api = 'https://api.openweathermap.org/data/2.5/weather?q='
let apiKey = '&APPID=a974d530e0c6b4faf7a5fd4337e8ef8c';
let units = '&units=imperial';


async function getWeather(){
   let input = document.getElementById('city');
   const weaApi_URL = api + input.value + apiKey + units
   const response = await fetch(weaApi_URL)
   const data = await response.json()
   document.getElementById('weather').textContent = 'The temperature in '+ input.value + ' is: '  + data.main.temp + ' degrees fahrenheit!'
}
//getWeather();


let inputText = document.getElementById("city");
inputText.addEventListener("keyup", function(event) {
   if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById("submit").click();
   }
});


function validate(){
   let weaInput = document.getElementById('city').value
   const regex = /^[a-zA-z ]+$/g;
   if (weaInput == ''){
      alert('Please enter something')
   }
   else if(!regex.test(weaInput)){
      alert('Hey! No special characters or numbers!')
   }
 
}


getWeather();