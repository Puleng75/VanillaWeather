function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    cityElement.inneHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
}


function searchCity(city) {
    let apiKey = "e08ff04e756ab6a30t3eb7172o1c9fa9";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}
function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
   

    searchCity(searchInput.value);

}
    let searchFormElement = document.querySelector("#search-form");

    searchFormElement.addEventListener("submit", handleSearchSubmit);

    searchCity("Lisbon");