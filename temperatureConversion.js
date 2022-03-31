//value of Kelvin.
const kelvin = 0;

//value of Celcius.
let celcius = kelvin - 273;

//value of Fahrenheit.
let fahrenheit = Math.floor(celcius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = Math.floor(celcius * (33/100));

console.log(`The temperature is ${newton} degrees in Newton.`);
