331. Verify Preorder Serialization of a Binary Tree

Medium

One way to serialize a binary tree is to use **preorder traversal**. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as `'#'`.

![img](https://assets.leetcode.com/uploads/2021/03/12/pre-tree.jpg)

For example, the above binary tree can be serialized to the string `"9,3,4,#,#,1,#,#,2,#,6,#,#"`, where `'#'` represents a null node.

Given a string of comma-separated values `preorder`, return `true` if it is a correct preorder traversal serialization of a binary tree.

It is **guaranteed** that each comma-separated value in the string must be either an integer or a character `'#'` representing null pointer.

You may assume that the input format is always valid.

- For example, it could never contain two consecutive commas, such as `"1,,3"`.

**Note:** You are not allowed to reconstruct the tree.

```python
class Solution:
    def isValidSerialization(self, preorder: str) -> bool:
        def preOrder(preorder, idx):
            if idx >= len(preorder):
                return -1
            value = preorder[idx]
            if value == "#":
                return idx
            ridx = preOrder(preorder, idx + 1)
            if ridx == len(preorder) - 1 or ridx < 0:
                return -1
            nextIdx = preOrder(preorder, ridx + 1)
            if nextIdx < 0:
                return -1
            return nextIdx
        
        nodeList = preorder.split(',')
        answer = preOrder(nodeList, 0) + 1
        return False if answer == -1 or answer < len(nodeList) else True
```

