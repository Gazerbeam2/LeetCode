//My Solution

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    const ans = [...nums];

    for (let i = 0; i <= nums.length; i++) {
        if (i < nums.length){
        ans.push(nums[i])
        }
    }

    return ans;




};

//Alternative Solutions

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    return [...nums, ...nums]
};

______________________________________________

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const ans = nums.concat(nums)

    return ans
};
