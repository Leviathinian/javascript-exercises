const convertToCelsius = function(num) {
  return Math.round(10 * 5/9 * (num - 32)) / 10;
};

const convertToFahrenheit = function(num) {
return Math.round(10 * (9/5 * num + 32)) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
