const getTheTitles = function(books) {
    let ret = []
    for (let i = 0; i < books.length; i++) {
        ret.push(books[i].title)
    }
    return ret;
};

// Do not edit below this line
module.exports = getTheTitles;
