## <5kyu>

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function `cakes()`, which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

## Examples

```
# must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})
# must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})
```

### solution

```python
def cakes(recipe, available):
    answer = 0
    while 1:
        temp = 0
        for i in recipe.keys():
            if i not in available:  # 레시피에 있는 재료중 준비된 재료에 없는 것 확인
                break
            elif available[i] >= recipe[i]:  # 레시피에 필요 한 만큼 충분히 있는지 확인
                available[i] -= recipe[i]
                temp += 1
            else:
                break
        if temp % len(recipe) == 0 and temp != 0:  # 레시피에 필요한 재료들이 모두 충족 되었는지 확인 
            answer += 1                            # 하지만 모두 충족 되지 않는 경우를 따로 나누어서 확인
        else:
            break
    return answer
```

## others's better solution

```python
def cakes(recipe, available):
    return min(available.get(k, 0)/recipe[k] for k in recipe)
```

