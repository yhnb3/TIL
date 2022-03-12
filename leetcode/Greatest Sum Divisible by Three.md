#### [Greatest Sum Divisible by Three](https://leetcode.com/problems/greatest-sum-divisible-by-three/)

```python
class Solution:
    def maxSumDivThree(self, nums: List[int]) -> int:
        dp = [[0]*3 for _ in range(len(nums)+1)]
        dp[0][1] = float('-inf')
        dp[0][2] = float('-inf')
        
        for i, num in enumerate(nums):
            namuzi = num % 3
            
            dp[i+1][namuzi] = max(dp[i][0] + num, dp[i][namuzi])
            dp[i+1][(namuzi +1)%3] = max(dp[i][1] + num, dp[i][(namuzi +1)%3])
            dp[i+1][(namuzi +2)%3] = max(dp[i][2] + num, dp[i][(namuzi +2)%3])
            
        return dp[-1][0]
```

