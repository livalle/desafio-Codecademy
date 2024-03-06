
const kelvin = 100;
//valor inicial e nome do cientista 
const celsius = kelvin - 273; 
//conversão de kelvin para celsius
 let fahrenheit = celsius * (9/5) + 32;
//conversão de celsius para fahrenheit
fahrenheit = Math.floor(fahrenheit);
//arredondamnto do resultado de fahrenheit
console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);
