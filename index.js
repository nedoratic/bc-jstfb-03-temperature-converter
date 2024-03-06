// DOM elements
const input = document.querySelector('.app__input');
const toFahrenheit = document.querySelector('#toFahrenheit');
const toCelsius = document.querySelector('#toCelsius');
const button = document.querySelector('.app__button');
const result = document.querySelector('.app__output');

// Variables
let temperature;
let convertedTemperature;

// Conversion to Celsius
const convertToCelsius = (temperature) => (temperature * 9) / 5 + 32;

// Conversion to Fahrenheit
const convertToFahrenheit = (temperature) => ((temperature - 32) * 5) / 9;

// Convert
const convert = () => {
	temperature = Number(input.value);
	if (toFahrenheit.checked) {
		convertedTemperature = convertToCelsius(temperature).toFixed(1);
		result.textContent = `${temperature}°C is ${convertedTemperature}°F`;
	} else if (toCelsius.checked) {
		convertedTemperature = convertToFahrenheit(temperature).toFixed(1);
		result.textContent = `${temperature}°F is ${convertedTemperature}°C`;
	}
};

button.addEventListener('click', convert);
