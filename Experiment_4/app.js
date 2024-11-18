// Async function to fetch weather data and display temperature
async function fetchWeatherData(city) {
    const apiKey = '64e16d0dd6f557d3df47ea8fc9a0b298'; // Your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Check if the city was found
        if (data.cod !== 200) {
            throw new Error(`City not found: ${data.message}`);
        }

        const temperature = data.main.temp; // Temperature in Celsius

        // Display the temperature
        displayTemperature(temperature);
    } catch (error) {
        alert('Error fetching weather data: ' + error.message);
    }
}

// Function to display temperature on the page
function displayTemperature(temperature) {
    const temperatureInfo = document.getElementById('temperatureInfo');
    temperatureInfo.innerHTML = `Current Temperature: ${temperature}°C`;
}

// Function to get weather based on user input
function getWeather() {
    const city = document.getElementById('cityInput').value.trim();  // Trim spaces around the city name
    if (city) {
        fetchWeatherData(city);
    } else {
        alert('Please enter a city name');
    }
}
