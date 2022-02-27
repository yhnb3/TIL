#### [Sell Diminishing-Valued Colored Balls](https://leetcode.com/problems/sell-diminishing-valued-colored-balls/)

```python
import heapq

class Solution:
    def maxProfit(self, inventory: List[int], orders: int) -> int:
        div = 10 ** 9 + 7
        balls = []
        
        for num in inventory:
            heapq.heappush(balls, -num)
        
        first_num = -heapq.heappop(balls)
        peneplenation = [first_num]
        
        while balls:
            num = -heapq.heappop(balls)
            if orders >= len(peneplenation) * (peneplenation[-1] - num):
                orders -= len(peneplenation) * (peneplenation[-1] - num)
                peneplenation.append(num)
            else:
                break
        
        answer = 0
        for i in range(len(peneplenation)-1):
            answer += (peneplenation[i] + peneplenation[-1] + 1) * (peneplenation[i] - peneplenation[-1]) // 2
            answer %= div
            
        mok = orders // len(peneplenation)
        namuzi = orders % len(peneplenation)
        
        answer += len(peneplenation) * (peneplenation[-1] + peneplenation[-1] - mok + 1) * mok // 2
        answer %= div
        answer += namuzi * (peneplenation[-1] - mok)
        answer %= div
                    
        return answer
```

