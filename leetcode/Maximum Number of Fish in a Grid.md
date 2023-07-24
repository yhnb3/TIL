## [Maximum Number of Fish in a Grid](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/description/)

```python
class Solution:
    def dfs(self, x, y, grid):
        N, M = len(grid), len(grid[0])
        direction = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        result = grid[x][y]
        grid[x][y] = 0
        for dx, dy in direction:
            curX, curY = x + dx, y + dy
            if 0 <= x + dx < N and 0 <= y + dy < M and grid[x+dx][y+dy]:
                result += self.dfs(x+dx, y+dy, grid)
        return result

    def findMaxFish(self, grid: List[List[int]]) -> int:
        N, M = len(grid), len(grid[0])
        answer = 0
        for x in range(N):
            for y in range(M):
                if grid[x][y]:
                    answer= max(answer, self.dfs(x, y, grid))
        return answer
```

