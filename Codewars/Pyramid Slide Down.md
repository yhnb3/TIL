## <4kyu>

### Lyrics...

Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem. Imagine that you have a pyramid built of numbers, like this one here:

```
   /3/
  \7\ 4 
 2 \4\ 6 
8 5 \9\ 3
```

### Here comes the task...

Let's say that the *'slide down'* is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest *'slide down'* is `3 + 7 + 4 + 9 = 23`

Your task is to write a function `longestSlideDown` (in ruby: `longest_slide_down`) that takes a pyramid representation as argument and returns its' **largest** *'slide down'*.

## Examples

```
longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]) => 23
```

### By the way...

My tests include some extraordinarily high pyramids so as you can guess, brute-force method is a bad idea unless you have a few centuries to waste. You must come up with something more clever than that.

### solution

```python
def longest_slide_down(pyramid):            #  각 층에서 가장 높게 할 수 있는 경우의 수를 저장해 가면서 내려가기
    for i in range(1, len(pyramid)):      
        for j in range(len(pyramid[i])):
            if j == 0:
                pyramid[i][j] += pyramid[i - 1][j]
            elif j == len(pyramid[i]) - 1:
                pyramid[i][j] += pyramid[i - 1][j - 1]
            else:
                pyramid[i][j] += max(pyramid[i - 1][j - 1], pyramid[i - 1][j])
    return max(pyramid[-1])                # 맨 마지막층에 나오는 숫자중 가장 큰 숫자가 답이다.
```

## others's better solution

```python

```

