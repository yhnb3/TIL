#### [Balance a Binary Search Tree](https://leetcode.com/problems/balance-a-binary-search-tree/)

```python
class Solution:
    def dfs(self, root):
        left = []
        right = []
        
        if root.left:
            left = self.dfs(root.left)
        if root.right:
            right = self.dfs(root.right)
        
        return left + [root.val] + right
        
    def remakeTree(self, arr, start, end):
        if start == end:
            return TreeNode(val=arr[start])
        if start > end:
            return None
        
        mid = (start+end)//2
        
        
        node = TreeNode(val=arr[mid])
        
        left = self.remakeTree(arr, start, mid-1)
        right = self.remakeTree(arr, mid+1, end)
        
        node.left = left
        node.right = right
        
        return node
        
        
    def balanceBST(self, root: TreeNode) -> TreeNode:
        sortedArr = self.dfs(root)
        
        return self.remakeTree(sortedArr, 0, len(sortedArr)-1)
```

> BST라는 특성을 이용해 빠르게 정렬한 후 
>
> mid를 기준으로 좌우 서브 트리를 만들면 자연스럽게 좌우의 트리의 높이의 차는 최대 1이 되게 된다.