const apiKey = "a3bc7fa5b68e7428382b555016a9e1fc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const srchBox = document.querySelector(".search input");
const srchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "clear.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "mist.png";
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "snow.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png";
    }
}

srchBtn.addEventListener("click", () => {
    checkWeather(srchBox.value);
});