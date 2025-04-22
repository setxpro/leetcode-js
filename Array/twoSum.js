var twoSum = function(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {

        // If the complement of the current number is in the map, return the indices
        let complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i]
        }

        map.set(nums[i], i);

    }
}


twoSum.call(null, [2,7,11,15], 9)

// Example 1:
// 
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// 
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// 
// Input: nums = [3,3], target = 6
// Output: [0,1]