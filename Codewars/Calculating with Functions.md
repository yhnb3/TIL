## <6kyu>

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

```python
seven(times(five())) # must return 35
four(plus(nine())) # must return 13
eight(minus(three())) # must return 5
six(divided_by(two())) # must return 3
```

Requirements:

- There must be a function for each number from 0 ("zero") to 9 ("nine")
- There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (`divided_by` in Ruby and Python)
- Each calculation consist of exactly one operation and two numbers
- The most outer function represents the left operand, the most inner function represents the right operand
- Divison should be **integer division**. For example, this should return `2`, not `2.666666...`:

```python
eight(divided_by(three()))
```

### solution

```python
def zero(num = False): #your code here
    if num:
        if num[0] == '+':
            return 0 + int(num[1:])
        elif num[0] == "*":
            return 0 * int(num[1:])
        elif num[0] == '/':
            return 0 // int(num[1:])
        elif num[0] == '-':
            return 0 - int(num[1:])
    else:
        return 0;
def one(num = False): #your code here
    if num:
        if num[0] == '+':
            return 1 + int(num[1:])
        elif num[0] == "*":
            return 1 * int(num[1:])
        elif num[0] == '/':
            return 1 // int(num[1:])
        elif num[0] == '-':
            return 1 - int(num[1:])
    else:
        return 1;
def two(num = False): #your code here
    if num:
        if num[0] == '+':
            return 2 + int(num[1:])
        elif num[0] == "*":
            return 2 * int(num[1:])
        elif num[0] == '/':
            return 2 // int(num[1:])
        elif num[0] == '-':
            return 2 - int(num[1:])
    else:
        return 2;
def three(num = False): #your code here
    if num:
        if num[0] == '+':
            return 3 + int(num[1:])
        elif num[0] == "*":
            return 3 * int(num[1:])
        elif num[0] == '/':
            return 3 // int(num[1:])
        elif num[0] == '-':
            return 3 - int(num[1:])
    else:
        return 3;
def four(num = False): #your code here
    if num:
        if num[0] == '+':
            return 4 + int(num[1:])
        elif num[0] == "*":
            return 4 * int(num[1:])
        elif num[0] == '/':
            return 4 // int(num[1:])
        elif num[0] == '-':
            return 4 - int(num[1:])
    else:
        return 4;
def five(num = False): #your code here
    if num:
        if num[0] == '+':
            return 5 + int(num[1:])
        elif num[0] == "*":
            return 5 * int(num[1:])
        elif num[0] == '/':
            return 5 // int(num[1:])
        elif num[0] == '-':
            return 5 - int(num[1:])
    else:
        return 5;
def six(num = False): #your code here
    if num:
        if num[0] == '+':
            return 6 + int(num[1:])
        elif num[0] == "*":
            return 6 * int(num[1:])
        elif num[0] == '/':
            return 6 // int(num[1:])
        elif num[0] == '-':
            return 6 - int(num[1:])
    else:
        return 6;
def seven(num = False): #your code here
    if num:
        if num[0] == '+':
            return 7 + int(num[1:])
        elif num[0] == "*":
            return 7 * int(num[1:])
        elif num[0] == '/':
            return 7 // int(num[1:])
        elif num[0] == '-':
            return 7 - int(num[1:])
    else:
        return 7;
def eight(num = False): #your code here
    if num:
        if num[0] == '+':
            return 8 + int(num[1:])
        elif num[0] == "*":
            return 8 * int(num[1:])
        elif num[0] == '/':
            return 8 // int(num[1:])
        elif num[0] == '-':
            return 8 - int(num[1:])
    else:
        return 8;
def nine(num = False): #your code here
    if num:
        if num[0] == '+':
            return 9 + int(num[1:])
        elif num[0] == "*":
            return 9 * int(num[1:])
        elif num[0] == '/':
            return 9 // int(num[1:])
        elif num[0] == '-':
            return 9 - int(num[1:])
    else:
        return 9;

def plus(x): #your code here
    return "+" + str(x)
def minus(x): #your code here
    return "-" + str(x)
def times(x): #your code here
    return "*" + str(x)
def divided_by(x): #your code here
    return "/" + str(x)
```

## others's better solution

```python

```

