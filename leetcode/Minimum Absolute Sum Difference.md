## [Minimum Absolute Sum Difference](https://leetcode.com/problems/minimum-absolute-sum-difference/description/)

```python
class Solution:
    def findSimilar(self, arr, target):
        start, end = 0, len(arr) - 1
        while start < end:
            mid = (start + end) // 2
            if arr[mid] >= target:
                end = mid
            else:
                start = mid + 1
        return start

    def minAbsoluteSumDiff(self, nums1: List[int], nums2: List[int]) -> int:
        answer = 0
        N = len(nums1)
        sorted_nums = sorted(nums1)
        modulo = 10**9 + 7
        max_diff = 0
        for i in range(N):
            diff = abs(nums1[i]-nums2[i])
            answer += diff
            answer %= modulo
            similar_idx = self.findSimilar(sorted_nums, nums2[i])
            if similar_idx - 1 >= 0:
                max_diff = max(max_diff, diff - abs(nums2[i]- sorted_nums[similar_idx-1]))
            if similar_idx + 1 < N:
                max_diff = max(max_diff, diff - abs(nums2[i]- sorted_nums[similar_idx+1]))
            max_diff = max(max_diff, diff - abs(nums2[i]- sorted_nums[similar_idx]))
        return (answer - max_diff) % modulo
                
```

이중 반복문로 가장 많은 효과를 줄 수 있는 숫자 조합을 찾았을때는 시간 복잡도에 의해 실패했습니다.

그래서 바이너리 서치를 이용해서 시간 복잡도를 줄여서 해결하였습니다.