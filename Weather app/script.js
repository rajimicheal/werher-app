const apiKey = '6091be950cd97181a2890459b3104275'; // Replace with your OpenWeatherMap API key

document.querySelector('.search button').addEventListener('click', () => {
    const city = document.querySelector('.search input').value;
    getWeather(city);
});

function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.querySelector('.city').innerText = data.name;
                document.querySelector('.temp').innerText = `${data.main.temp}°c`;
                document.querySelector('.humidity').innerText = `${data.main.humidity}%`;
                document.querySelector('.wind').innerText = `${data.wind.speed} Km/h`;
                document.querySelector('.weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            } else {
                alert('City not found!');
            }
        })
        .catch(error => console.error('Error fetching the weather data:', error));
}
