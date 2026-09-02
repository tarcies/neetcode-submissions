class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;

        const map = {};
        
        for (const char of s) {
            map[char] = (map[char] || 0) + 1;
        }
        
        for (const char of t) {
            map[char] = (map[char] || 0) - 1;
            if (map[char] == 0) delete map[char];
        }

        return Object.keys(map).length == 0 ? true : false;
    }

}
