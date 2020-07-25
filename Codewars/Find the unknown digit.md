## <4kyu>

To give credit where credit is due: This problem was taken from the ACMICPC-Northwest Regional Programming Contest. Thank you problem writers.

You are helping an archaeologist decipher some runes. He knows that this ancient society used a Base 10 system, and that they never start a number with a leading zero. He's figured out most of the digits as well as a few operators, but he needs your help to figure out the rest.

The professor will give you a simple math expression, of the form

```
[number][op][number]=[number]
```

He has converted all of the runes he knows into digits. The only operators he knows are addition (`+`),subtraction(`-`), and multiplication (`*`), so those are the only ones that will appear. Each number will be in the range from -1000000 to 1000000, and will consist of only the digits 0-9, possibly a leading -, and maybe a few ?s. If there are ?s in an expression, they represent a digit rune that the professor doesn't know (never an operator, and never a leading -). All of the ?s in an expression will represent the same digit (0-9), and it won't be one of the other given digits in the expression. No number will begin with a 0 unless the number itself is 0, therefore 00 would not be a valid number.

Given an expression, figure out the value of the rune represented by the question mark. If more than one digit works, give the lowest one. If no digit works, well, that's bad news for the professor - it means that he's got some of his runes wrong. output -1 in that case.

Complete the method to solve the expression to find the value of the unknown rune. The method takes a string as a paramater repressenting the expression and will return an int value representing the unknown rune or -1 if no such rune exists.

## Examples

```

```

### solution

```python
def calcul(a, b, how):         # 나누기를 제외한 사칙연산 실시
    if how == "+":
        return int(a) + int(b)
    elif how == "-":
        return int(a) - int(b)
    elif how == "*":
        return int(a) * int(b)


def isitright(string, num, find_num):  # 식과 정답을 나누어서 답이 맞는지 검사
    string = list(string)
    find_num = list(find_num)
    a, b, how = 0, 0, 0
    while 1:
        if "?" in string:
            string.insert(string.index("?"), str(num))
            string.remove("?")
        else:
            break
    while 1:
        if "?" in find_num:
            find_num.insert(find_num.index("?"), str(num))
            find_num.remove("?")
        else:
            break
    string = "".join(string)
    find_num = "".join(find_num)
    for i in range(len(string)):
        if not string[i].isdigit() and i != 0:
            a = string[:i]
            b = string[i + 1:]
            how = string[i]
            break
    if (len(a) >= 2 and a[0] == "0") or (len(b) >= 2 and b[0] == "0") or (len(find_num) >= 2 and find_num[0] == "0"):  # "05"와 같이 나오는 것 제거 하기
        return False
    else:
        if calcul(a, b, how) == int(find_num):
            return True

def solve_runes(runes):
    answer = -1
    list = runes.split('=')
    for i in range(10):
        if str(i) not in runes and isitright(list[0], i, list[1]):  # 주어진 숫자외의 숫자 검사
            return i
    return answer
```

## others's better solution

```python
def solve_runes(runes):  # 나는 insert, remove를 사용했지만 replace가 더 좋을듯 하다
    for c in sorted(set('0123456789') - set(runes)):        
        s = runes.replace('?', c).replace('-', ' - ').replace('+', ' + ').replace('*', ' * ').replace('=', ' == ')  # eval함수는 사용을 자제하는 것을 권장 함으로 쓰지 않도록 하겠습니다.
        if not any(e[0] == '0' and e != '0' for e in s.split()) and eval(s): return int(c)
    return -1
```

