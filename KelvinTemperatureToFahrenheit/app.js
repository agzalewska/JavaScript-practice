// let’s convert Kelvin to Celsius, then to Fahrenheit
// The forecast today is 293 Kelvin
const kelvin = 293;

// Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable.
const celsius = kelvin - 273;

// let's write an equation to calculate Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// When we convert from Celsius to Fahrenheit, you often get a decimal number. Use the .floor() method to round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
