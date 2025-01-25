const celsius = document.getElementById('celsiusInput');
const fahrenheit = document.getElementById('fahrenheitInput');
const kelvin = document.getElementById('kelvinInput');

updateCelsius();
updateFahrenheit();
updateKelvin();

function updateCelsius() {
  celsius.addEventListener('change', function() {
    const celsiusValue = parseFloat(celsius.value);
    fahrenheit.value = (celsiusValue * 9/5) + 32;
    kelvin.value = celsiusValue + 273.15;
  });
}

function updateFahrenheit() {
  fahrenheit.addEventListener('change', function() {
    const fahrenheitValue = parseFloat(fahrenheit.value);
    celsius.value = (fahrenheitValue - 32) * 5/9;
    kelvin.value = (fahrenheitValue + 459.67) * 5/9;
  });
}

function updateKelvin() {
  kelvin.addEventListener('change', function() {
    const kelvinValue = parseFloat(kelvin.value);
    celsius.value = kelvinValue - 273.15;
    fahrenheit.value = (kelvinValue * 9/5) - 459.67;
  });
}