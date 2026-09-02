class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let res = false;
        nums.forEach((num, i) => {
            for (let j = 0; j < nums.length; j++) {
                if (num == nums[j] && i != j) {
                    res = true;
                }
            }
            if (res) {
                return true;
            }
        })
        return res;
    }
}
