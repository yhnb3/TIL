## <6kyu>

Given an array (arr) as an argument complete the function `countSmileys` that should return the total number of smiling faces.

Rules for a smiling face:

- Each smiley face must contain a valid pair of eyes. Eyes can be marked as `:` or `;`
- A smiley face can have a nose but it does not have to. Valid characters for a nose are `-` or `~`
- Every smiling face must have a smiling mouth that should be marked with either `)` or `D`

No additional characters are allowed except for those mentioned.

**Valid smiley face examples:** `:) :D ;-D :~)`
**Invalid smiley faces:** `;( :> :} :]`

## Examples

```
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
```

### solution

```python
def count_smileys(arr):
    answer = 0
    for i in arr:
        if len(i) == 2:
            if i[1] == ")" or i[1] == "D":
                answer += 1
        else:
            if i[1] == "~" or i[1] == "-":
                if i[2] == ")" or i[2] == "D":
                    answer += 1
    return answer
```

## others's better solution

```python

```

