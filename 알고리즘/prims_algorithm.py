import heapq

V, E = list(map(int, input().split()))
h = []  # 우선순위 큐
node = [[] for i in range(V)]
for i in range(E):  # 각 정점에서 간선 간의 길이 저장
    a, b, c = list(map(int, input().split()))
    node[a - 1].append([b - 1, c])
    node[b - 1].append([a - 1, c])
idx = 0
visit = [0] * V  # 그래프가 되지 않게 하기 위해 이미 간곳 체크 하기 그리고 0에서 시작 ( 어디서 시작하던 무방 )
visit[0] = 1
answer = 0
while sum(visit) != V:
    h2 = []
    for i in node[idx]:
        if visit[i[0]] == 0:
            heapq.heappush(h, [i[1], idx, i[0]])
    for i in h:
        if not (i[1] == 1 and i[2] == 1):
            answer += i[0]
            visit[i[2]] = 1
            idx = visit[i[2]]
            heapq.heappop(h)
            break
        else:
            heapq.heappop(h)
    for i in h:
        if i[1] == 1 and i[2] == 1:
            heapq.heappush(h2, i)
    h = h2[:]
print(answer)




