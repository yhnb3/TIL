## <5kyu>

What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

```
'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
```

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. 

## Examples

```
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
```

### solution

```python
def anagrams(word, words):
    dict = {}
    answer = []
    for i in word:
        if i not in dict:
            dict[i] = 1
        else:
            dict[i] += 1
    for i in words:
        for j in i:
            if j not in dict:
                break
            if i.count(j) != dict[j]:
                break
        else:
            answer.append(i)
    return answer
```

## others's better solution

```python
def anagrams(word, words): return [item for item in words if sorted(item)==sorted(word)] # 정렬해서 똑같으면 된다... 유레카
```

