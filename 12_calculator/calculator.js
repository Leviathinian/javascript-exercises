const add = function(...nums) {
	let ret = 0;
  for(let i = 0; i < nums.length; i++) {
    ret += nums[i];
  }
  return ret;
};

const subtract = function(...nums) {
	let ret = nums[0];
  for(let i = 1; i < nums.length; i++) {
    ret -= nums[i];
  }
  return ret;
};

const sum = function(array) {
	let ret = 0;
  for(let i = 0; i < array.length; i++) {
    ret += array[i];
  }
  return ret;
};

const multiply = function(array) {
  let ret = array[0];
  for(let i = 1; i < array.length; i++) {
    ret *= array[i];
  }
  return ret;
};

const power = function(num, power) {
  return Math.pow(num, power);
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
	let ret = num;
  for (let i = num - 1; i > 0; i--) {
    ret *= i;
  }
  return ret;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
