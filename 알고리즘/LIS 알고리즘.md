# LIS 알고리즘

## 이분탐색을 이용한 알고리즘 구현

> 아이디어
>
> - 최소의 숫자로 최장 증가 수열을 만들어 가면서 진행
> - 기존의 배열의 숫자들이 현재 상태에서 어떤 위치에 들어 갈 수 있는지를 파악 이분 탐색을 이용

| ArrayIndex |  0   |  1   |  2   |  3   |  4   |  5   |  6   |  7   |  8   |
| :--------: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
|   Price    |  0   |  3   |  5   |  7   |  9   |  2   |  1   |  4   |  8   |
|  location  |      |      |      |      |      |      |      |      |      |

> 현재 다음과 같은 수열이 주어졌고 location은 각 각의 숫자들이 최장 증가 수열 속 어떤 위치에 위치 할지를 저장합니다.

| ArrayIndex |  0   |  1   |  2   |  3   |  4   |  5   |  6   |  7   |  8   |
| :--------: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
|   Price    |  0   |  3   |  5   |  7   |  9   |  2   |  1   |  4   |  8   |
|  location  |  0   |      |      |      |      |      |      |      |      |

| ArrayIndex |  0   |  1   |  2   |  3   |  4   |  5   |  6   |  7   |  8   |
| :--------: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
|   Price    |  0   |  3   |  5   |  7   |  9   |  2   |  1   |  4   |  8   |
|  location  |  0   |  1   |  2   |  3   |  4   |      |      |      |      |

|  0   |  1   |  2   |  3   |  4   |
| :--: | :--: | :--: | :--: | :--: |
|  0   |  3   |  5   |  7   |  9   |

> 현재까지 완성된 최장 증가 수열 입니다. 하지만 여기서 2 라는 숫자를 넣어야 합니다. 
>
> 2 는 0 과 3 사이의 숫자 이므로 1번 자리에 들어가야 합니다.

| ArrayIndex |  0   |  1   |  2   |  3   |  4   |  5   |  6   |  7   |  8   |
| :--------: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
|   Price    |  0   |  3   |  5   |  7   |  9   |  2   |  1   |  4   |  8   |
|  location  |  0   |  1   |  2   |  3   |  4   |  1   |      |      |      |

|  0   |  1   |  2   |  3   |  4   |
| :--: | :--: | :--: | :--: | :--: |
|  0   |  2   |  5   |  7   |  9   |

> 이런식으로 최솟값으로 이루어 지는 최장 증가 수열을 갱신한 후 2는 1번 자리에 넣겠습니다.

| ArrayIndex |  0   |  1   |  2   |  3   |  4   |  5   |  6   |  7   |  8   |
| :--------: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
|   Price    |  0   |  3   |  5   |  7   |  9   |  2   |  1   |  4   |  8   |
|  location  |  0   |  1   |  2   |  3   |  4   |  1   |  1   |  2   |  4   |

|  0   |  1   |  2   |  3   |  4   |
| :--: | :--: | :--: | :--: | :--: |
|  0   |  1   |  5   |  7   |  8   |

> 모든 인덱스를 검사하여 완성된 배열입니다.
>
> 다음과 같은 표를 이용해서 최장 증가 수열의 길이는 4라는 것을 알 수 있겠습니다.

# Pyton code

```python
N = int(input())
numbers = list(map(int, input().split()))


def find_location(number, dp):
    if dp[-1] < number:
        dp.append(number)
        return dp
    else:
        start = 0
        end = len(dp) - 1
        while end - start != 1:
            mid = (end + start) // 2
            if dp[mid] > number:
                end = mid
            elif dp[mid] == number:
                end = mid
                break
            else:
                start = mid
        dp[end] = number
        return dp


def find_longest_increase_sequence(numbers):
    dp = [0]
    for idx, number in enumerate(numbers):
        dp = find_location(number, dp)
    return len(dp) - 1


print(find_longest_increase_sequence(numbers))
```

