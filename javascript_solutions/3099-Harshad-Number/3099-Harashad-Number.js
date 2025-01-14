/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum = [...x.toString()].reduce((acc, c) => acc + +c, 0);

   return x % sum === 0 ? sum : -1
};

//we have to convert the number to a string because a string is not inherently iterable.
//I used the [...x.String()] to first convert x into a string and then a iterable wrapped in a array so we can use the reduce method
//The reduce method then takes the iterable and adds them one by one into the accumulator storing the value into a variable.
//Then using the modulous operator, we check if the orgiinal number is divisible by the sum of its digits and return the sum if yes and -1 if no
