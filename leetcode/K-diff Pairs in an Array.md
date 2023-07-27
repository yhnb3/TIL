## [K-diff Pairs in an Array](https://leetcode.com/problems/k-diff-pairs-in-an-array/description/)

```python
class Solution:
    def findPairs(self, nums: List[int], k: int) -> int:
        num_dict = {}
        answer_dict = {}
        for num in nums:
            if num not in num_dict:
                num_dict[num] = 0
            num_dict[num] += 1

        for num in nums:
            if k == 0:
                if num_dict[num] > 1:
                    answer_dict[(num, num)] = 1
            else:
                if num + k in num_dict:
                    answer_dict[(num, num+k)] = 1
                if num - k in num_dict:    
                    answer_dict[(num-k, num)] = 1
        return len(answer_dict)
```

