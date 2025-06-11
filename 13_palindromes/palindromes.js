const palindromes = function (str) {
    return str.split('').filter(char => char.match(/[\w\d]/)).reverse().join('').toLowerCase() === str.split('').filter(char => char.match(/[\w\d]/)).join('').toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
