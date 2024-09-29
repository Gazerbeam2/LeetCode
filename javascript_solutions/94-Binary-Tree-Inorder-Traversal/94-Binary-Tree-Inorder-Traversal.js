/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val,left,right){
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right =(right===undefined ? null : right)
}

function inorderTraversal(root){
    // Base case: if the current root is null, return an empty array.
    if (root === null) {
        return [];
    }

    // Recursive case:
    // 1. Traverse the left subtree and collect the values.
    // 2. Include the value of the current node.
    // 3. Traverse the right subtree and collect the values.
    // Then concatenate them in inorder sequence.
    return [
        ...inorderTraversal(root.left), // Left subtree values
        root.val,                      // Current node value
        ...inorderTraversal(root.right) // Right subtree values
    ];
}
