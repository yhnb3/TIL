## [Concatenation of Consecutive Binary Numbers](https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/description/)

```python
class Solution:
    def concatenatedBinary(self, n: int) -> int:
        modulo = 10 ** 9 + 7
        def checkLength(n):
            length = 1
            while n > 1:
                n //= 2
                length += 1
            return length
        answer = 0
        for i in range(1, n+1):
            length = checkLength(i)
            answer *= 2 ** length
            answer += i
            answer %= modulo
        return answer
```

