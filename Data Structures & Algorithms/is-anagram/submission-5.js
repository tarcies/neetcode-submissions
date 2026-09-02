class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length){
            return false;
        }
        let x={} 
        for(let i=0;i<s.length;i++){
            x[s[i]]=(x[s[i]] || 0) + 1
        }
        
        for(let i=0;i<t.length;i++){
            if(!x[t[i]]){
                return false
            }
            x[t[i]]--
        }
        return true
    }
}