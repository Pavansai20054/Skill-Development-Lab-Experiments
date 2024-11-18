### Here is the 10th Experiment of Skill Development Lab:

## Here is the question :

#### Create a service in react that fetches the weather information from [OpenWeatherMap](https://Openweathermap.org) and the display the current and historical weather information using graphical representation using chart.js

# Weather Forecast App

This is a simple weather forecast app built with React that fetches weather data from the OpenWeatherMap API.

## Steps to Set Up the Project

### Step 1: Create an OpenWeatherMap Account and Generate API Key

1. Visit the [OpenWeatherMap](https://openweathermap.org/) website and click on "Sign Up" or "Log In" to create an account or log into your existing account.
2. Once logged in, navigate to your account dashboard.
3. In the dashboard, locate the **API Keys** section and click on "Create Key" or "API Keys" to generate a new API key.
4. Provide a name for your API key (e.g., "WeatherApp") and click on the "Generate" or "Create" button.
5. Your API key will be displayed. Make sure to **copy** it as you'll need it later.

### Step 2: Set Up a New React Project

1. Open your terminal or command prompt.
2. Run the following command to create a new React project:

   ```bash
   npx create-react-app weather_app
   ```
3. Once the project is created, navigate into the project directory:

    ```bash
    cd weather_app
    ```

### Step 3: Install Required Packages

1. In the project directory, install the necessary packages by executing the following command:

    ```bash
    npm install axios
    ```
We will use the axios library to make HTTP requests to the OpenWeatherMap API.

### Step 4: Create a Weather Component

1. Inside the src directory, create a new file called Weather.js and open it in your code editor.
2. Add the following code to define a functional component named Weather:

    ```javascript
    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const fetchData = async () => {
        try {
        const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=64e16d0dd6f557d3df47ea8fc9a0b298` // change api id
        );
        setWeatherData(data);
        } catch (error) {
        console.error(error);
        }
    };

    useEffect(() => {
        if (city) fetchData();
    }, [city]);

    return (
        <div>
        <form onSubmit={(e) => { e.preventDefault(); fetchData(); }}>
            <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit">Get Weather</button>
        </form>
        {weatherData ? (
            <>
            <h2>{weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp} °C</p>
            <p>Description: {weatherData.weather[0].description}</p>
            <p>Feels like: {weatherData.main.feels_like} °C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Pressure: {weatherData.main.pressure}</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            </>
        ) : (
            <p>Loading weather data...</p>
        )}
        </div>
    );
    };

    export default Weather;
    ```

**Note:** Remember to change the API in apiid

### Step 5: Connect the Weather Component to Your App

1. Open the App.js file in the src directory.
2. Replace the existing code with the following code:

    ```javascript
    import React from 'react';
    import Weather from './Weather';

    const App = () => {
    return (
        <div>
        <h1>Weather Forecast App</h1>
        <Weather />
        </div>
    );
    };

    export default App;
    ```

### Step 6: Run the App

1. In the terminal, navigate to the project directory (if you're not already there) and run:

    ```bash
    npm start
    ```
2.Open your browser and visit http://localhost:3000 to see the weather forecast app in action.

## Built with:
- **React** - Frontend library for building user interfaces
- **Axios** - Promise-based HTTP client for making requests to the API
- **OpenWeatherMap API** - API to fetch weather data

## License
This project is licensed under the MIT License - see the LICENSE file for details.


### Key Changes:
1. I’ve added step-by-step instructions for setting up the OpenWeatherMap API, installing dependencies, and creating the necessary components in the React app.
2. The instructions guide you to replace the API key in the `Weather.js` file with your actual OpenWeatherMap API key.
3. The final steps involve running the React app and testing it locally.

Feel free to update this `README.md` as necessary! Let me know if you need further assistance.

### Contact
**Gmail:** pavansai87654321@gmail.com
