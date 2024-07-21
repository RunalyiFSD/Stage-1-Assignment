document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
                document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity} %`;
                document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
            } else {
                alert('City not found. Please enter a valid city name.');
            }
        })
        .catch(error => console.error('Error:', error));
});
