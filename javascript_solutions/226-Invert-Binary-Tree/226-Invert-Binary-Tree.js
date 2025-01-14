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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root === null) return null; //check if the tree is empty
    return new TreeNode(root.val, invertTree(root.right), invertTree(root.left));
    //We're returning a brand new node with the same value as the original node and swapping the left and node as we traverse through the tree
};
