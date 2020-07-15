## <6kyu>

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

## Examples

```
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
```

### solution

```python
def order(sentence):
    sent_list = list(sentence.split(' '))
    if len(sent_list) < 2:
        return sentence
    answer = ""
    order_list = [0] * (len(sent_list) + 1)
    for i in range(1, len(order_list)):
        number = ""
        for j in sent_list[i - 1]:
            if j.isdigit():
                number += j
        order_list[int(number)] = sent_list[i - 1]
    return ' '.join(order_list[1:])
```

## others's better solution

```python
def order(sentence):
    return " ".join(sorted(sentence.split(), key=lambda x: int(filter(str.isdigit, x))))
```

