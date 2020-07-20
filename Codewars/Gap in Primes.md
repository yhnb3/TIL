## <5kyu>

The prime numbers are not regularly spaced. For example from `2` to `3` the gap is `1`. From `3` to `5` the gap is `2`. From `7` to `11` it is `4`. Between 2 and 50 we have the following pairs of 2-gaps primes: `3-5, 5-7, 11-13, 17-19, 29-31, 41-43`

A prime gap of length n is a run of n-1 consecutive composite numbers between two **successive** primes (see: http://mathworld.wolfram.com/PrimeGaps.html).

We will write a function gap with parameters:

`g` (integer >= 2) which indicates the gap we are looking for

`m` (integer > 2) which gives the start of the search (m inclusive)

`n` (integer >= m) which gives the end of the search (n inclusive)

In the example above `gap(2, 3, 50)` will return `[3, 5] or (3, 5) or {3, 5}` which is the first pair between 3 and 50 with a 2-gap.

So this function should return the **first** pair of two prime numbers spaced with a gap of `g` between the limits `m`, `n` if these numbers exist otherwise `nil or null or None or Nothing` (depending on the language).

In C++ return in such a case `{0, 0}`. In F# return `[||]`. In Kotlin return `[]`

\#Examples: `gap(2, 5, 7) --> [5, 7] or (5, 7) or {5, 7}`

```
gap(2, 5, 5) --> nil. In C++ {0, 0}. In F# [||]. In Kotlin return`[]
gap(4, 130, 200) --> [163, 167] or (163, 167) or {163, 167}
```

([193, 197] is also such a 4-gap primes between 130 and 200 but it's not the first pair)

`gap(6,100,110) --> nil or {0, 0}` : between 100 and 110 we have `101, 103, 107, 109` but `101-107`is not a 6-gap because there is `103`in between and `103-109`is not a 6-gap because there is `107`in between.

# Note for Go

For Go: nil slice is expected when there are no gap between m and n. Example: gap(11,30000,100000) --> nil

## Examples

```

```

### solution

```python
def pr_num(num):  # 소수 구하는 함수
    if num % 2 == 0:
        return False
    for i in range(3, int((num ** (1/2))) + 1):
        if num % i == 0:
            return False
    return True


def gap(g, m, n):
    answer = [0, 0]
    while m + g <= n:
        if pr_num(m) and pr_num(m + g):   # 처음과 끝이 소수 인지 확인
            for i in range(m + 1, m + g): # 사이에 있는 수들이 모두 소수가 아닌지 확인
                if pr_num(i):
                    m = i                 # 하나라도 소수가 있을 경우 그 수를 m으로 초기화 한 후 반복 
                    break
            else:
                answer = [m, m + g]       # 소수가 없을 경우 반복 끝내기
                break
        else:
            m += 1                        # 구간의 첫번째 숫자는 반드시 소수 이여야 하므로 m을 1씩 늘려가며 반복
    if answer == [0, 0]:                  # 구간이 존재하지 않는 경우 None 리턴
        return None
```

## others's better solution

```python
def gap(g, m, n):
    previous_prime = n
    for i in range(m, n + 1):
        if is_prime(i):                    # 소수인지 확인
            if i - previous_prime == g:    # 첫번째 소수와 다음 나오는 소수의 사이가 갭크기인지 확인
                return [previous_prime, i] # 맞으면 정답 리턴
            previous_prime = i             # 첫번째 소수 계속 초기화
    return None
            
    
def is_prime(n):
    for i in range(2, int(n**.5 + 1)):
        if n % i == 0:
            return False
    return True
```

