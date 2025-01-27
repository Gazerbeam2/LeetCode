/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p === null && q === null){ //Checking if both trees are empty, if so return true
        return true
    }else if(p === null || q === null || p.val !== q.val){ //Return false if only one of the tree are empty or one of the nodes have a different match
        return false
    }
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right) //Go through both Trees recursively.


};
