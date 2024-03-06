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
const convertToCelsius = (temperature) => ((temperature - 32) * 5) / 9;

// Conversion to Fahrenheit
const convertToFahrenheit = (temperature) => (temperature * 9) / 5 + 32;

// Convert
const convert = () => {
	temperature = Number(input.value);

	if (input.value.trim() === '' || isNaN(temperature) || temperature === undefined || temperature === null) {
		result.textContent = 'Please enter a valid temperature.';
		return;
	}

	if (toFahrenheit.checked) {
		convertedTemperature = convertToCelsius(temperature).toFixed(1);
		result.textContent = `${temperature}°C is ${convertedTemperature}°F`;
	} else if (toCelsius.checked) {
		convertedTemperature = convertToFahrenheit(temperature).toFixed(1);
		result.textContent = `${temperature}°F is ${convertedTemperature}°C`;
	} else {
		result.textContent = 'Please select a unit to convert.';
	}
};

// Clear result when input value changes
input.addEventListener('input', () => {
	result.textContent = 'Enter temperature. Select desired conversion. Convert.';
});

// Event listener for button click
button.addEventListener('click', convert);

// Event listener for Enter key press
input.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		convert();
	}
});
