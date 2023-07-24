## [Count Words Obtained After Adding a Letter](Count Words Obtained After Adding a Letter)

```python
class Solution:
    def wordCount(self, startWords: List[str], targetWords: List[str]) -> int:
        alphabet = ["a", "b", "c", "d", "e", "f",  "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        answer = 0
        wordDict = {}
        for start in startWords:
            for alpha in alphabet:
                newStart = list(start)
                newStart.append(alpha)
                sortedStart = sorted(list(newStart))
                wordDict[''.join(sortedStart)] = 1
        
        for target in targetWords:
            sortedTarget = sorted(list(target))
            newTarget = ''.join(sortedTarget)
            if newTarget in wordDict:
                answer += 1

        return answer
```

