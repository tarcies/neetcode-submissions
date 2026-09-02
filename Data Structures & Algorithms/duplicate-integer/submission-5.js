class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();
        let res = false

        nums.forEach(num => {
            if (set.has(num)) {
                res = true;
            }
            set.add(num);
        });

        return res;
    }
}
