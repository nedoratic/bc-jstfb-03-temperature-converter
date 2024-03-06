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
