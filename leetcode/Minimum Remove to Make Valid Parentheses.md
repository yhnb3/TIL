### 1249. Minimum Remove to Make Valid Parentheses

```python
class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        removed = []
        stack = []
        for idx, alpha in enumerate(s):
            if alpha == "(":
                stack.append([idx, alpha])
            elif alpha == ")":
                if not stack:
                    removed.append([idx, alpha])
                else:
                    stack.pop()
        removed += stack
        removed.sort()
        answer = ""
        for idx, alpha in enumerate(s):
            if removed and idx == removed[0][0]:
                removed.pop(0)
                continue
            else:
                answer += alpha
        return answer
```

