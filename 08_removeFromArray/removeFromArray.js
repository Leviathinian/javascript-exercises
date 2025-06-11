const removeFromArray = function(array, ...nums) {
    let ret = array.filter(item => !nums.includes(item));
    return ret;
};

// Do not edit below this line
module.exports = removeFromArray;
