[Longest Univalue Path](https://leetcode.com/problems/longest-univalue-path/description/)

```python
class Solution:
    def dfs(self, node, prevVal):
        result = 1
        maxTail = 0
        maxPath = 0
        if node.left:
            leftLength, leftMaxPath = self.dfs(node.left, node.val)
            result += leftLength
            maxPath = max(maxPath, leftMaxPath)
            maxTail = max(maxTail, leftLength)
        if node.right:
            rightLength, rightMaxPath = self.dfs(node.right, node.val)
            result += rightLength
            maxPath = max(maxPath, rightMaxPath) 
            maxTail = max(maxTail, rightLength)
        if prevVal == node.val:
            return 1 + maxTail, max(result, maxPath)
        return 0, max(result, maxPath)
                
        
    def longestUnivaluePath(self, root: Optional[TreeNode]) -> int:
        if not root: return 0
        _, answer = self.dfs(root, -1)
        return answer - 1
```

