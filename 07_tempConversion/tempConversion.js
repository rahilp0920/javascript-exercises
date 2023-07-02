const convertToCelsius = function(a) {

  num=(a-32)*(5/9);
  return parseInt(num.toFixed(1));
};

const convertToFahrenheit = function(a) {

  num = (a*9/5)+32;
  return parseInt(num.toFixed(1));

};

