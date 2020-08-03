## <4kyu>

## Snail Sort

Given an `n x n` array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

```
array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
```

For better understanding, please follow the numbers of the next array consecutively:

```
array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
```

## Examples

```

```

### solution

```python
def snail(snail_map):
    visit = [[0] * len(snail_map) for i in range(len(snail_map))] # 방문체크 하는 행렬만들기
    temp = [[0, 1], [1, 0], [0, -1], [-1, 0]]                   # 달팽이 무늬는 항상 우, 하, 좌, 상 으로 움직인다.
    direction = 0                                               # 첫 방향은 항상 우(temp[direction])
    idx = [0, 0]                                                # 첫 시작
    answer = []
    if not snail_map[0]:                                        # [[]] 이라면 [] 리턴
        return answer
    while 1:
        to_go = [0, 0]
        answer.append(snail_map[idx[0]][idx[1]])                # 방문한 자리 숫자 append
        visit[idx[0]][idx[1]] = 1                               # 방문한 자리 체크
        to_go[0], to_go[1] = idx[0] + temp[direction][0], idx[1] + temp[direction][1] # 그 다음으로 방문 할 곳 
        if not 0 <= to_go[0] < len(snail_map) or not 0 <= to_go[1] < len(snail_map) or visit[to_go[0]][to_go[1]]:  # 방문 할 수 있는 자리 체크 방문 할 수 없다면 방향 전환
            direction += 1  # 방향 전환
            direction %= 4  # 방향이 4방향 뿐이기 때문에 4로 나눈 나머지
        idx[0], idx[1] = idx[0] + temp[direction][0], idx[1] + temp[direction][1]
        if not 0 <= idx[0] < len(snail_map) or not 0 <= idx[1] < len(snail_map) or visit[idx[0]][idx[1]]:
            break  # 다 방문 했거나 혹시 list range 에 벗어날 경우 while문 나오기
    return answer
```

## others's better solution

```python
def snail(array):
    a = []
    while array:  
        a.extend(list(array.pop(0))) # array의 가장 맨위의 첫 줄을 pop 하여서 a에 연결
        array = zip(*array)  # zip 함수를 이용해서 전치 행렬을 만들고  
        array.reverse()      # 전치행렬을 행 기준으로 뒤집으면 왼쪽으로 90도 돌린 행렬이 나온다.
    return a
```

