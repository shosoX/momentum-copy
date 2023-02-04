const API_KEY = "b0aa86106ae8b17a28b2ead637f1a8a5"

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json().then(data => {
        const location = document.querySelector('#geo-info')
        const weather = document.querySelector('#weather-info')
        const name = data.name
        location.innerText = `${name}의 날씨`
        weather.innerText = `온도: ${data.main.temp}°C, 체감온도: ${data.main.feels_like}°C`
    }))
    monjiUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${API_KEY}`
    fetch(monjiUrl).then(response => response.json().then(data => {
        const misemonji = document.querySelector('#misemonji-info')
        misemonji.innerText = `PM10: ${data.list[0].components.pm10}μg/m3`
    }))};

function onGeoError() {
    alert('where are you? :shrug:')
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);