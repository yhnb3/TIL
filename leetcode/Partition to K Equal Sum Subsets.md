## [Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/description/)

```python
class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
        totalSum = sum(nums)
        if totalSum % k: return False
        target = totalSum // k
        sumBucket = [0] * k
        def dfs(idx):
            if idx == len(nums):
                return True

            for b in range(k):
                if sumBucket[b] + nums[idx] <= target:
                    sumBucket[b] += nums[idx]

                    if dfs(idx+1):
                        return True

                    sumBucket[b] -= nums[idx]

                    if sumBucket[b] == 0:
                        break
            return False

        return dfs(0)
```

