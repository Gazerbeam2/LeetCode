
2667. Create Hello World Function:
__________________________________________________

Write a function createHelloWorld. It should return a new function that always returns "Hello World".


Example 1:

Input: args = []
Output: "Hello World"
Explanation:s
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
____________________________________________________________________________________________

Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".

__________________________________________________________________________________________________________________


Constraints:

. 0 <= args.length <= 10
