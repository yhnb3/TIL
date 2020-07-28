## <4kyu>

영어 실력이 부족해서 미완 주말에 다시 도전해보기

## Examples

```

```

### solution

```python
import random

def goto(d, p):
    if d == "<":
        p[1] -= 1
    elif d == "v":
        p[0] += 1
    elif d == "^":
        p[0] -= 1
    elif d == "<"
        p[1] -= 1
    return p

def whereigo(d, p):
    if d == '?':
        d = random.sample(['<', '>', '^', 'v'])
        return goto(d, p)
    else:
        return goto(d, p)
    
def read_code(c, o):
    if c == '+':
        a = o[-1]
        b = o[-2]
        o = o[:-2]
        o += str(int(a) + int(b))
    elif c == '-':
        a = o[-1]
        b = o[-2]
        o = o[:-2]
        o += str(int(b) - int(a))
    elif c == '*':
        a = o[-1]
        b = o[-2]
        o = o[:-2]
        o += str(int(a) * int(b))
    elif c == '/':
        a = o[-1]
        b = o[-2]
        o = o[:-2]
        if a == '0':
            o += '0'
        else:
            o += str(int(b) // int(a))
    elif c == '%':
        a = o[-1]
        b = o[-2]
        o = o[:-2]
        if a == '0':
            o += '0'
        else:
            o += str(int(b) % int(a))
    elif c == '!':
        if o[-1] == '0':
            o = o[:-1] + '1'
        else:
            o = o[:-1] + '0'
    elif c == '`':
        a = o[-1]
        b = o[-2]
        o = o[:-2]
        if b > a:
            o += '1'
        else:
            o += '0'
    return o
            
def interpret(code):
    string_mode=False
    positon =[0, 0]
    output = ""
    direction = code[positon[0]][position[1]]
    positon = goto(direction, position)
    mode = ['+', '-', '*', '/', '%', '!', '`']
    moving = ['>', '<', '^', 'v', '?']
    # TODO: Interpret the code!
    while 1:
        if code[position[0]][position[1]].isdigit():
            output += code[position[0]][position[1]]
        elif code[position[0]][position[1]] in mode:
            output = read_code(code[position[0]][position[1]], output)
        elif code[position[0]][position[1]] in moving:
            position = whereigo(code[position[0]][position[1]], position)
            continue
        elif code[position[0]][position[1]] == '_':
            if output[-1] == '0':
                position[1] += 1
                output = output[:-1]
            else:
                position[1] -= 1
                output = output[:-1]
        elif code[position[0]][position[1]] == '|':
            if output[-1] == '0':
                position[0] += 1
                output = output[:-1]
            else:
                position[0] -= 1
                output = output[:-1]
            continue
        elif code[position[0]][position[1]] == '"':
            string_mode = True
        elif code[position[0]][position[1]] == ':':
            if output == "":
                output = "0"
        elif code[position[0]][position[1]] == '\':
            if len(output) == 1:
                a = output
                b = '0'
                output = a + b
            else:
                a = output[-1]
                b = output[-2]
                output = output[:-2] + a + b
        elif code[position[0]][position[1]] == '$':
            output = output[:-1]
            
    
    return output
```

## others's better solution

```python

```

