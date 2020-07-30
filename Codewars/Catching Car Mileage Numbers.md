## <4kyu>

> "7777...*8?!??!*", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who *doesn't* like catching those one-off interesting mileage numbers?

Let's make it so Bob **never** misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a `1` or a `2` (respectively).

It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a `2` if the number is "interesting" (see below), a `1` if an interesting number occurs within the next two miles, or a `0` if the number is not interesting.

**Note:** In Haskell, we use `No`, `Almost` and `Yes` instead of `0`, `1` and `2`.

## "Interesting" Numbers

Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

- Any digit followed by all zeros: `100`, `90000`
- Every digit is the same number: `1111`
- The digits are sequential, incementing†: `1234`
- The digits are sequential, decrementing‡: `4321`
- The digits are a palindrome: `1221` or `73837`
- The digits match one of the values in the `awesome_phrases` array

> † For incrementing sequences, `0` should come after `9`, and not before `1`, as in `7890`.
> ‡ For decrementing sequences, `0` should come after `1`, and not before `9`, as in `3210`.

So, you should expect these inputs and outputs:

```python
# "boring" numbers
is_interesting(3, [1337, 256])    # 0
is_interesting(3236, [1337, 256]) # 0

# progress as we near an "interesting" number
is_interesting(11207, []) # 0
is_interesting(11208, []) # 0
is_interesting(11209, []) # 1
is_interesting(11210, []) # 1
is_interesting(11211, []) # 2

# nearing a provided "awesome phrase"
is_interesting(1335, [1337, 256]) # 1
is_interesting(1336, [1337, 256]) # 1
is_interesting(1337, [1337, 256]) # 2
```

## Examples

```

```

### solution

```python
def all_zeros(num):
    if len(str(num)) < 3:
        return False
    if num % (10 ** (len(str(num)) - 1) ) == 0:
        return True
    else:
        return False
    
def same_num(num):
    if len(str(num)) < 3:
        return False
    for i in range(1, len(str(num))):
        if str(num)[i] != str(num)[0]:
            return False
    return True

def increase_num(num):
    if len(str(num)) < 3:
        return False
    for i in range(1, len(str(num))):
        if int(str(num)[i]) == 0: 
            if int(str(num)[i - 1]) != 9:
                return False
            continue
        if int(str(num)[i]) - 1 != int(str(num)[i - 1]):
            return False
    return True

def decrease_num(num):
    if len(str(num)) < 3:
        return False
    for i in range(1, len(str(num))):
        if int(str(num)[i]) + 1 != int(str(num)[i - 1]):
            return False
    return True

def palindrome(num):
    if len(str(num)) < 3:
        return False
    if str(num)[:len(str(num))//2] != str(num)[::-1][:len(str(num))//2]:
        return False
    return True

def check_num(num, array):
    if all_zeros(num):
        return True
    if same_num(num):
        return True
    if increase_num(num):
        return True
    if decrease_num(num):
        return True
    if palindrome(num):
        return True
    if num in array:
        return True
    return False

def is_interesting(number, awesome_phrases):
    if check_num(number, awesome_phrases):
        return 2
    else:
        for i in range( number - 2 if number - 2 > 0 else 0, number + 3):
            if check_num(i, awesome_phrases):
                return 1
        else:
            return 0
```

## others's better solution

```python

```

