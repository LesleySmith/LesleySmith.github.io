// window.onload = function() {
//     // Set up our HTTP request
//     async function getWeatherData(zipcode, units) {
//         const weatherAPIKey = config.WEATHER_API_KEY
//         const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=${units}&APPID=${weatherAPIKey}`
//         let data = {}

//         //Attempt to fetch the data from the url, and wait for the response.
//         await fetch(url)
//             .then(response => {
//                 data = response.json()
//             })
//         return data
//     }

//     async function returnCurrentWeather(zipcode = 60647, units = 'imperial') {
//         var weatherContainer = document.querySelector('#weatherContainer');

//         const weatherData = await getWeatherData(zipcode, units);

//         let city = weatherData.name;
//         let tempMin = weatherData.main.temp_min;
//         let tempMax = weatherData.main.temp_max;

//         weatherContainer.innerHTML = `
//             <div class="jumbotron">
//                 <h2>Current Weather</h2>
//                 <br>

//                 <div class="row">
//                 <div class="col-md-6 row-design">
//                     <h3>The City:</h3>
//                     <hr class="style">
//                         <h4 class="city">${city}</h4>
//                 </div>

//                 <div class="col-md-6 row-design">
//                 <h3>Temperature:</h3>
//                     <hr class="style">
//                     <h4 class="min">${tempMin}</h4>
//                     <br>
//                     <h4 class="max">${tempMax}</h4>
//                 </div>
//             </div>
//         `
//     }

//     returnCurrentWeather();
// }
