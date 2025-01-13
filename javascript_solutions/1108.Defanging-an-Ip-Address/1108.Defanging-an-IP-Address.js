// Solution

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.replaceAll(".","[.]") //replaceALl method is a string method that replaces all occurences of one string pattern with a another pattern
};
