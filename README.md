
# Weather Website [[ Link ]](https://ryomensukuna2003.github.io/Weather-app/)

The Weather Website is a React-based application that provides real-time weather information. It fetches data from the OpenWeatherMap API to display the current temperature, humidity, minimum temperature, and maximum temperature of a specified location.

## Introduction

The Weather Website is a React-based application that provides real-time weather information. It fetches data from the OpenWeatherMap API to display the current temperature, humidity, minimum temperature, and maximum temperature of a specified location.

## Features

- Real-time Weather Data: Retrieves and displays the current weather information.
- Temperature: Shows the current temperature in Celsius or Fahrenheit.
- Humidity: Indicates the humidity level in the specified location.
- Minimum and Maximum Temperature: Displays the minimum and maximum temperature of the day.

## Getting Started

To run the Weather Website locally, follow these steps:

1. Clone this repository: `git clone https://github.com/ Ryomensukuna2003/weather-website.git`
2. Navigate to the project directory: `cd weather-website`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your web browser and visit: `http://localhost:3000`

## Usage

1. Enter the desired location in the input field.
2. Press the search button or hit Enter to fetch the weather data for that location.
3. The weather information, including the temperature, humidity, and minimum/maximum temperature, will be displayed.

## API Key Setup

This project utilizes the OpenWeatherMap API to fetch weather data. To set up your API key:

1. Visit the [OpenWeatherMap website](https://openweathermap.org/) and create an account.
2. Generate an API key from your account dashboard.
3. Open the `src/utils/api.js` file in your project.
4. Replace `'YOUR_API_KEY'` with your actual API key.

## Contributing

Contributions are welcome! If you find any issues or would like to suggest enhancements, please submit a pull request or open an issue on the project's GitHub repository.

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name: `git checkout -b my-new-feature`
3. Make the necessary changes and commit them: `git commit -am 'Add new feature'`
4. Push your changes to the branch: `git push origin my-new-feature`
5. Submit a pull request on the original repository.
