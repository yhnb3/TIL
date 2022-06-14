### Range

```js
const add = (a, b) => a + b

const range = l => {
  let i = -1;
  let res = []
  while (++i < l) {
    res.push = []
  }
  return res
};

let list = range(3)

reduce(add, list)  // 0 + 1 + 2
```

### 느긋한 L.range

```js
const L = {}
L.range = function *l(){
  let i = -1;
  while (++i < l) {
    yield i
  }
};

let list = L.range(3)  // iterator

reduce(add, list)  // 0 + 1 + 2
```

range는 list에 할당 하자마자 바로 한번 내부 순회를 해야하지만 느긋한 range는 직접 순회하기 전에는 내부 순회를 하지 않아도 된다.

아무래도 미리 배열이 평가 되지 않아도 되는 경우에 느긋한 L.range를 사용하면 시간 복잡도를 줄이는데 도움이 될 거라도 생각합니다.

### test 해보기

```js
function test(name, time, f) {
    console.time(name);
    while (time--) f()
    console.timeEnd(name)
}

text('L.range', 10, () => reduce(add, L.range(1000000)))  // 이거 훨 빠르다.
text('range', 10, () => reduce(add, range(1000000)))
```

### take

```js
const take = (l, iter) => {
    let res = []
    for (const a of iter) {
        res.push(a)
    	if(res.length === l) return res
    }
    return res
}
```

