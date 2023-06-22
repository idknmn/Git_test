alert('Created by ');

var text = "Hello, 63677834285234World!";
let charIndex = 0;
const typingSpeed = 100; // typing speed in milliseconds

function convertTemperature() {
  var temperatureInput = document.getElementById("temperature");
  var unitSelect = document.getElementById("unit");
  var resultCelsius = document.getElementById("resultCelsius");
  var resultFahrenheit = document.getElementById("resultFahrenheit");
  var resultKelvin = document.getElementById("resultKelvin");
  var Explanation_1 = document.getElementById("Explanation_1");
  var Explanation_2 = document.getElementById("Explanation_2");


  var temperature = parseFloat(temperatureInput.value);
  var unit = unitSelect.value;

  if (unit === "celsius") {
    var celsius = temperature;
    var fahrenheit = (celsius * 9/5) + 32;
    var kelvin = celsius + 273.15;

    Explanation_1.innerHTML="";
    Explanation_2.innerHTML="";
    typeText("Celcius to Fahrenheit : (" + celsius +" * 9/5) + 32",Explanation_1)
    typeText("Celcius to Kelvin     : " + celsius +" + 273.15",Explanation_2)

    resultCelsius.textContent = "Celsius: " + celsius.toFixed(2);
    resultFahrenheit.textContent = "Fahrenheit: " + fahrenheit.toFixed(2);
    resultKelvin.textContent = "Kelvin: " + kelvin.toFixed(2);
  } else if (unit === "fahrenheit") {
    var fahrenheit = temperature;
    var celsius = (fahrenheit - 32) * 5/9;
    var kelvin = (fahrenheit + 459.67) * 5/9;

    Explanation_1.innerHTML="";
    Explanation_2.innerHTML="";
    typeText("Fahrenheit to Celcius : (" + fahrenheit +" - 32) * 5/9",Explanation_1)
    typeText("Fahrenheit to Kelvin  : " + fahrenheit +" + 459.67) * 5/9;",Explanation_2)
    
    resultCelsius.textContent = "Celsius: " + celsius.toFixed(2);
    resultFahrenheit.textContent = "Fahrenheit: " + fahrenheit.toFixed(2);
    resultKelvin.textContent = "Kelvin: " + kelvin.toFixed(2);
  } else if (unit === "kelvin") {
    var kelvin = temperature;
    var celsius = kelvin - 273.15;
    var fahrenheit = (kelvin * 9/5) - 459.67;

    Explanation_1.innerHTML="";
    Explanation_2.innerHTML="";
    typeText("Kelvin to Celcius    : " + kelvin +" - 273.15",Explanation_1)
    typeText("Kelvin to Fahrenheit : (" + kelvin +" * 9/5) - 459.67",Explanation_2)
    
    resultCelsius.textContent = "Celsius: " + celsius.toFixed(2);
    resultFahrenheit.textContent = "Fahrenheit: " + fahrenheit.toFixed(2);
    resultKelvin.textContent = "Kelvin: " + kelvin.toFixed(2);
  }

  function typeText(value1, value2) {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      value2.textContent += value1.charAt(charIndex);
      charIndex++;
      if (charIndex === value1.length) {
        clearInterval(typingInterval);
      }
    }, 0);
  }
  function fwe(){

  }
}