class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();
        let res = false

        for (const num of nums) {
            if (set.has(num)) {
                res = true;
                break;
            }
            set.add(num);
        }

        return res;
    }
}
