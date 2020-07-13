### <6 kyu>

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

```python
solution('abc') # should return ['ab', 'c_']
solution('abcdef') # should return ['ab', 'cd', 'ef']
```

solution

```python
def solution(s):
    answer = []
    for i in range(0, len(s), 2):  # 2개 씩 끊어서 answer에 더해준 뒤
        answer.append(s[i:i + 2])
    if len(s) & 1:  # 혹시 문자열의 길이가 홀수라면 answer의 마지막 원소를 바꿔준다.
        answer[-1] = answer[-1] + "_"
    return answer
```

