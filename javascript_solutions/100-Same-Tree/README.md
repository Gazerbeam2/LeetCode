# Title : 100.Same Tree

## Description :

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:

Input: p = [1,2,3], q = [1,2,3]
Output: true
Example 2:

Input: p = [1,2], q = [1,null,2]
Output: false
Example 3:

Input: p = [1,2,1], q = [1,1,2]
Output: false

Constraints:

The number of nodes in both trees is in the range [0, 100].
-104 <= Node.val <= 104

Solution:

To solve this we have to make sure we cover every condition that would cause the two binary trees to not match. Those conditions would be :

1. One of the Trees are Empty
2. One of the Node Values on one of the tree doesn't match with the other Value on the other Tree.
3. Check those Conditions and return the Trees recursively, if they're empty or identically structurally, return True
