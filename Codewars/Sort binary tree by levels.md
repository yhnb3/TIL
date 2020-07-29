## <4kyu>

You are given a binary tree:

```python
class Node:
    def __init__(self, L, R, n):
        self.left = L
        self.right = R
        self.value = n
```

Your task is to return the list with elements from tree sorted by levels, which means the root element goes first, then root children (from left to right) are second and third, and so on.

Return empty list if root is `None`.

Example 1 - following tree:

```
                 2
            8        9
          1  3     4   5
```

Should return following list:

```
[2,8,9,1,3,4,5]
```

Example 2 - following tree:

```
                 1
            8        4
              3        5
                         7
```

Should return following list:

```
[1,8,4,3,5,7]
```

## Examples

```

```

### solution

```python
def tree_by_levels(node):
    answer = []
    if node != None:
        answer.append(node.value)
        check = [node]
        while 1:
            check2 = []
            for i in check:
                if i.left != None:
                    check2.append(i.left)
                    answer.append(i.left.value)
                if i.right != None:
                    check2.append(i.right)
                    answer.append(i.right.value)
            check = check2[:]
            if not check:
                break
    return answer
```

## others's better solution

```python

```

