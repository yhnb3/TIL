###### 문제 설명

아래와 같이 5와 사칙연산만으로 12를 표현할 수 있습니다.

12 = 5 + 5 + (5 / 5) + (5 / 5)
12 = 55 / 5 + 5 / 5
12 = (55 + 5) / 5

5를 사용한 횟수는 각각 6,5,4 입니다. 그리고 이중 가장 작은 경우는 4입니다.
이처럼 숫자 N과 number가 주어질 때, N과 사칙연산만 사용해서 표현 할 수 있는 방법 중 N 사용횟수의 최솟값을 return 하도록 solution 함수를 작성하세요.

##### 제한사항

- N은 1 이상 9 이하입니다.
- number는 1 이상 32,000 이하입니다.
- 수식에는 괄호와 사칙연산만 가능하며 나누기 연산에서 나머지는 무시합니다.
- 최솟값이 8보다 크면 -1을 return 합니다.

##### 입출력 예

| N    | number | return |
| ---- | ------ | ------ |
| 5    | 12     | 4      |
| 2    | 11     | 3      |

##### 입출력 예 설명

예제 #1
문제에 나온 예와 같습니다.

예제 #2
`11 = 22 / 2`와 같이 2를 3번만 사용하여 표현할 수 있습니다.

## Solution

```python
def make_num(num, cnt):                   # 사칙연산이 아닌 숫자 붙히기로 만드는 숫자
    result = 0
    for i in range(cnt):
        result += num * (10 ** i)
    if result <= 32000:
        count[result] = 1
        can_num[cnt].append(result)

def cal_cul(x, y, temp, i):                # 모든 경우의 사칙연산을 하는 함수
    if temp =="+":
        if count[x + y] == 0 and x + y <= 32000:
            count[x + y] = 1
            can_num[i].append(x+y)
    elif temp == "-":
        if x > y:
            if count[x - y] == 0:
                count[x - y] = 1
                can_num[i].append(x-y)
        elif y > x:
            if count[y - x] == 0:
                count[y - x] = 1
                can_num[i].append(y-x)
    elif temp =="*" and x * y <= 32000 :
        if count[x * y] == 0:
            count[x * y] = 1
            can_num[i].append(x*y)
    else:
        if x != 0:
            if count[y // x] == 0:
                count[y // x] = 1
                can_num[i].append(y//x)
        if y != 0:
            if count[x // y] == 0:
                count[x // y] = 1
                can_num[i].append(x//y)
            

count = [0] * 32001                      # 글로벌 영역에 만들어진 숫자를 검증하는 count와 
can_num = [[] for i in range(9)]         # 숫자 갯수별 만들어지는 값을 저장하는 can_num 정의
def solution(N, number): 
    answer = -1                          # answer가 재정의 되지 않으면 8번으로 만들어 질 수 없는 수이기 때문에 -1로                                            초기화
    can_num[1].append(N)
    for i in range(2, 9):
        make_num(N, i)
        for k in range(1, i//2 + 1):
            for x in can_num[k]:
                for y in can_num[i-k]:
                    cal_cul(x, y, "+", i)
                    cal_cul(x, y, "-", i)
                    cal_cul(x, y, "*", i)
                    cal_cul(x, y, "/", i)
        if number in can_num[i]:          # 원하는 숫자가 만들어 졋을 경우 리턴
            return i
    return answer
```

