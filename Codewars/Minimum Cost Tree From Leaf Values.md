### Minimum Cost Tree From Leaf Values

Given an array `arr` of positive integers, consider all binary trees such that:

- Each node has either 0 or 2 children;
- The values of `arr` correspond to the values of each **leaf** in an in-order traversal of the tree. *(Recall that a node is a leaf if and only if it has 0 children.)*
- The value of each non-leaf node is equal to the product of the largest leaf value in its left and right subtree respectively.

Among all possible binary trees considered, return the smallest possible sum of the values of each non-leaf node. It is guaranteed this sum fits into a 32-bit integer.

```python
class Solution:
    def mctFromLeafValues(self, arr: List[int]) -> int:
        
        @lru_cache(None)
        def dp(i, j):
            if j - i == 1: return 0
            if j - i == 2: return arr[i] * arr[i + 1]
            minNum = 2**31
            for k in range(1, j - i):
                minNum = min(max(arr[i:i+k]) * max(arr[i+k:j]) + dp(i, i+k) + dp(i+k, j), minNum)
            return minNum
        
        return dp(0, len(arr))
```

