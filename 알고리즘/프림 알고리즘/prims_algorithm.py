import heapq

V, E = list(map(int, input().split()))
h = []  # 우선순위 큐
node = [[] for i in range(V)]
for i in range(E):  # 각 정점에서 간선 간의 길이 저장
    a, b, c = list(map(int, input().split()))
    node[a - 1].append([b - 1, c])
    node[b - 1].append([a - 1, c])
visit = [0] * V  # 그래프가 되지 않게 하기 위해 이미 간곳 체크 하기 그리고 0에서 시작 ( 어디서 시작하던 무방 )
visit[0] = 1
h = []
answer = 0
for i in node[0]:
    heapq.heappush(h, [i[1], i[0]])
while h:
    temp, next_num = heapq.heappop(h)
    if visit[next_num] == 1:
        continue
    answer += temp
    visit[next_num] = 1
    for i in node[next_num]:
        if visit[i[0]] == 0:
            heapq.heappush(h, [i[1], i[0]])
print(answer)





