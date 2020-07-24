## <4kyu>

There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

As a simplification, you may assume that no letter occurs more than once in the secret string.

You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.

## Examples

```

```

### solution

```python
#재귀를 이용해서 알파벳을 하나씩 나열 할 수 있는 모든 경우의 수 구하기
def find_secret(answer, alphabet, dict, k, dp): 
    if alphabet not in dict:             # secret의 마지막 알파벳은 딕셔너리의 key안에 존재 하지 않는다
        if len(answer) == len(dict) + 1: # 딕셔너리에 존재하는 key수보다 secret은 1 더 길다.
            return answer
        else:
            if k not in dp:              # 가지치기를 위한 dp딕셔너리 한 알파벳으로 진행되는 가장 긴 문자는 무조건
                dp[k] = answer           # secret의 한 부분이므로 dp에 저장 후 이 알파벳이 나오면 꺼내서 씀으로써
            else:                        # 시간 절약 가능
                if len(dp[k]) < len(answer):
                    dp[k] = answer
            return 0
    for i in dict[alphabet]:
        if i not in dp:
            a = find_secret(answer + i, i, dict, k, dp)
            if a:
                return a
        else:
            a = find_secret(answer + dp[i], dp[i][-1], dict, k, dp)  # 만약 dp에 저장된 알파벳일 경우
            if a:
                return a


def recoverSecret(triplets):
    dp_dict = {}
    alpha_dict = {}
    for i in triplets:   
        if i[0] not in alpha_dict:  # 각각의 알파벳 뒤에 올 수 있는 알파벳 저장
            alpha_dict[i[0]] = [i[1], i[2]]
        else:
            alpha_dict[i[0]].append(i[1])
            alpha_dict[i[0]].append(i[2])
        if i[1] not in alpha_dict: # 각각의 알파벳 뒤에 올 수 있는 알파벳 저장
            alpha_dict[i[1]] = [i[2]]
        else:
            alpha_dict[i[1]].append(i[2])
    for i in alpha_dict.keys():  # 중복되서 들어간 알파벳 제거
        alpha_dict[i] = list(set(alpha_dict[i]))
    for i in alpha_dict.keys():
        a = find_secret(i, i, alpha_dict, i, dp_dict)
        if a:
            return a
 
## 너무 어려운 문제라 후기도 넣으면 정말 틈틈히 고민했지만 하루종일 문제 푼거 같은 기분이다.. 너무 기분이 좋습니다.
```

## others's better solution

```python
def recoverSecret(triplets):
  r = list(set([i for l in triplets for i in l]))  ## 존재하는 알파벳 배열 만들기 스킬
  for l in triplets:
    fix(r, l[1], l[2])
    fix(r, l[0], l[1])
  return ''.join(r)
  
def fix(l, a, b):                        # r 배열에서 a와 b의 인덱스를 비교하여 a가 뒤에 있으면
   """let l.index(a) < l.index(b)"""     # a 를 제거하고 b자리에 a를 넣음으로써 자연스래 a가 b의 앞으로감
   if l.index(a) > l.index(b):           # fix 함수를 반복 함으로써 자동으로 정렬 된다!
       l.remove(a)
       l.insert(l.index(b), a)
## 다른 좋은 풀이들 많은데 도저히 이해 할 수 가 없다.
```

