const apiKey = "64e16d0dd6f557d3df47ea8fc9a0b298";

const getWeather = async (city) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const   
 weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;   

  }
};

const displayWeather = (data) => {
  if (!data) {
    document.getElementById("weather-info").textContent = "Error: City not found.";
    return;
  }
  const temp = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius
  const description = data.weather[0].description;
  const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  const weatherInfo = document.getElementById("weather-info");
  weatherInfo.innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${temp}°C</p>
    <p>Description: ${description}</p>
    <img src="${icon}" alt="${description}">
  `;

  // Code to generate and display the graph (using a library like Chart.js) would go here
  // You can replace this with your preferred library and logic
  // Example using Chart.js (needs separate inclusion)
  const ctx = document.getElementById("weatherGraph").getContext("2d");
  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Temperature"],
      datasets: [{
        label: "Temperature",
        data: [temp],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:   
 true
          }
        }]
      }
    }
  });
};

const getWeatherButton = document.getElementById("getWeather");
getWeatherButton.addEventListener("click", async () => {
  const city = document.getElementById("city").value;
  const weatherData = await getWeather(city);
  displayWeather(weatherData);
});