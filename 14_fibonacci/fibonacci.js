const fibonacci = function(num) {
    start = Number(num);
    if (start < 0) {
        return "OOPS";
    } else if (start == 0) {
        return 0
    } else if (start == 1 || start == 2) {
        return 1;
    }

    let ret = 0;
    let num1 = 1;
    let num2 = 1;
    for (let i = 3; i <= start; i++) {
        ret = num1 + num2;
        num1 = num2;
        num2 = ret;
    }
    return ret;
};

// Do not edit below this line
module.exports = fibonacci;
