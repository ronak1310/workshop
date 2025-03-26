const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "48ea2cda9af395d7b2abe4b8cf4903ab";

let form = document.querySelector("form");
let city = document.querySelector("#city");
let cityName = document.querySelector("#cityName");
let temp = document.querySelector("#temp");
let tempMin = document.querySelector("#tempMin");
let tempMax = document.querySelector("#tempMax");
let humidity = document.querySelector("#humidity");
let feelslike = document.querySelector("#feelslike");
let weather = document.querySelector("#weather");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityValue = city.value.trim();

    if (cityValue === "") {
        return alert("Invalid input");
    }

    let getWeatherInfo = async () => {
        try {
            let res = await fetch(`${API_URL}?q=${cityValue}&appid=${API_KEY}&units=metric`);
            if (!res.ok) {
             return alert("Invalid city name");
            }

            let resData = await res.json();

          
            let tempValue = resData.main.temp;
            let tempMinValue = resData.main.temp_min;
            let tempMaxValue = resData.main.temp_max;
            let humidityValue = resData.main.humidity;
            let feelslikeValue = resData.main.feels_like;
            let weatherValue = resData.weather[0].description;

            
            cityName.innerHTML = `City: ${cityValue.toUpperCase()}`;
            temp.innerHTML = `Temp: ${tempValue}°C`;
            tempMin.innerHTML = `Min Temp: ${tempMinValue}°C`;
            tempMax.innerHTML = `Max Temp: ${tempMaxValue}°C`;
            humidity.innerHTML = `Humidity: ${humidityValue}%`;
            feelslike.innerHTML = `Feels Like: ${feelslikeValue}°C`;
            weather.innerHTML = `Weather: ${weatherValue}`;
        } catch (error) {
            alert(error.message);
        }
    };

    getWeatherInfo();
});
