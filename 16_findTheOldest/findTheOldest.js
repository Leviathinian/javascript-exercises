const findTheOldest = function(array) {
    let ret = array[0];
    const currentYear = new Date().getFullYear();

    for(let i = 0; i < array.length; i++) {
        person = array[i];
        if (person.yearOfDeath == null) {
            if (person.yearOfBirth < ret.yearOfBirth) {
                ret = person;
            }
        } else if (ret.yearOfDeath == null) {
            if (person.yearOfDeath - person.yearOfBirth > currentYear - ret.yearOfBirth) {
                ret = person;
            }
        } else {
            if (person.yearOfDeath - person.yearOfBirth > ret.yearOfDeath - ret.yearOfBirth) {
                ret = person;
            }
        }
    }
    return ret;
};

// Do not edit below this line
module.exports = findTheOldest;
