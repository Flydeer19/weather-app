function showDate (date) {
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let currentDay = days[date.getDay()];
    let currentHour = date.getHours();
        if (currentHour < 10) {
            currentHour = `0${currentHour}`;
        }
    let currentMinute = date.getMinutes();
        if (currentMinute < 10) {
        currentMinute = `0${currentMinute}`;
        }
    let dateResult = `${currentDay} ${currentHour}:${currentMinute}`;
    return dateResult;
}

let currentDate = document.querySelector("#current-day");
currentDate.innerHTML = showDate((new Date()));



function showCity(event) {
    event.preventDefault();
    let inputCity = document.querySelector("#input-field").value;
    inputCity = inputCity.toLowerCase();
    inputCity = inputCity.trim();
    inputCity = inputCity.charAt(0).toUpperCase() + inputCity.slice(1);
    let displayedCity = document.querySelector("#city");
    displayedCity.innerHTML = `${inputCity}`;
    // if (inputCity === "moscow" || inputCity === "saint petersburg") {
    //     city.innerHTML = `${inputCity} </br> 404-country`;
    // } else {
    // inputCity = inputCity.charAt(0).toUpperCase() + inputCity.slice(1);
    // city.innerHTML = `${inputCity}`; 
    // }
}

let searchBar = document.querySelector("#search-bar");
searchBar.addEventListener("submit", showCity);

function showTemperatureCelcias () {
    let currentTemperature = document.querySelector("#current-temperature");
    currentTemperature.innerHTML = "19";
}

function showTemperatureFahrenheit () {
    let currentTemperature = document.querySelector("#current-temperature");
    currentTemperature.innerHTML = "66";
}

let celcias = document.querySelector("#celcias");
let fahrenheit = document.querySelector("#fahrenheit");
let currentTemperature = document.querySelector("#current-temperature");

celcias.addEventListener("click", showTemperatureCelcias);
fahrenheit.addEventListener("click", showTemperatureFahrenheit);


