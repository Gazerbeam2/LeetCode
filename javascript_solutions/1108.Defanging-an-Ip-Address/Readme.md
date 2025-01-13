# Title : 1108. Defanging an IP Address

## Description:

Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"

Constraints:

The given address is a valid IPv4 address.

### Explanation:

The problem is asking to replace all instances of a character within a string with a another type of character. The ReplaceAll String Method of Javascript would be able to search all instances within a string and replace them with another character.
