#  Prim 알고리즘을 이용한 MST문제 풀기

## MST 문제란

>MST 문제는 최소신장트리 문제로  최소 비용으로 모든 정점을 잇는 트리를 만드는 문제이다. 

## Prim 알고리즘

> 프림 알고리즘은 우선 순위 큐를 이용하여 시작 정점에서 갈 수 있는 모든 경우의 수를 우선순위 큐에 저장한다. 그 중 가장 비용이 적게 드는 정점으로 이동 후 우선순위 큐의 가장 첫 인자를 pop 한 후 우선순위 큐에 가능한 경우의 수를 추가한다.

## Solution

```
import heapq

V, E = list(map(int, input().split()))
h = []  # 우선순위 큐
node = [[] for i in range(V)]
for i in range(E):  # 각 정점에서 간선 간의 길이 저장
    a, b, c = list(map(int, input().split()))
    node[a - 1].append([b - 1, c])
    node[b - 1].append([a - 1, c])
visit = [0] * V  # 그래프가 되지 않게 하기 위해 이미 간곳 체크 하기 그리고 0에서 시작 ( 어디서 시작하던 무방 )
visit[0] = 1  # 방문한 정점 확인
h = []
answer = 0  # 답을 저장할 변수
for i in node[0]:  # 0에서 갈 수 있는 모든 경우의 수를 우선순위 큐에 저장
    heapq.heappush(h, [i[1], i[0]])  # 비용을 앞에 두고 저장해서 비용이 적은 순으로 자동 정렬 된다.
while h:
    temp, next_num = heapq.heappop(h)   # 우선순위 큐의 가장 상위에 있는 정점 pop
    if visit[next_v] == 1:              # 혹시 방문 했던 정점이라면 이미 가장 적은 비용으로 방문 했기때문에 continue
        continue
    answer += temp                      # temp에는 비용을 저장했으면 answer에 더해준다
    visit[next_v] = 1                   # 방문 햇기때문에 visit 체크 해준다.
    for i in node[next_v]:              # next_v에는 방문한 정점을 저장하고 next_v에서 방문 할 수 있는 모든 정점과
        if visit[i[0]] == 0:            # 비용을 우선순위 큐에 저장한다.(단, 방문 했던 정점은 저장 X)
            heapq.heappush(h, [i[1], i[0]])
print(answer)                          
```

  