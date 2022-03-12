#### [Array With Elements Not Equal to Average of Neighbors](https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/)

```python
class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        
        for i in range(1, len(nums)-1):
            pre = nums[i-1]
            cur = nums[i]
            nex = nums[i+1]
            
            if (pre < cur < nex) or (pre > cur > nex):
                nums[i+1], nums[i] = nums[i], nums[i+1]
            
        return nums
```





