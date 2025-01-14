# Title : 3099 Harshad Number

## Description: An integer divisible by the sum of its digits is said to be a Harshad number. You are given an integer x. Return the sum of the digits of x if x is a Harshad number, otherwise, return -1

### Explanation:

First i needed to convert the parameter from a number to a string because a string is not iterable.

I used the toString() method alongside the ...spread operator wrapped in array to convert the number into a Array literal.

Then i used the reduce method to find the sum of the digits of the parameter from the array literal with the + operator to turn the result back into a number.

Finally i used a ternary operator with the condition that if the remainder of the original parameter by the sum variable is equal to 0 return the sum value else return -1
