## <5kyu>

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

## Examples

```
pig_it('Pig latin is cool') # igPay atinlay siay oolcay
pig_it('Hello world !')     # elloHay orldway !
```

### solution

```python
def pig_it(text):
    s = text.split(' ')
    answer = []
    for i in s:
        temp = i[1:]
        temp += i[0]
        if temp.isalpha():
            temp += 'ay'
        answer.append(temp)
    return ' '.join(answer)
```

## others's better solution

```python
def pig_it(text):    # 나의 풀이와 거의 유사하지만 짧은 풀이
    lst = text.split()
    return ' '.join( [word[1:] + word[:1] + 'ay' if word.isalpha() else word for word in lst])
```

