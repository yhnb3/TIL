### 결과를 만드는 reduce, take

```js
// 다형성이 높은 join 함수
const join = curry((sep=',', iter) => 
  reduce((a, b) => `${a}${sep}${b}`, iter))

L.entries = function *(obj) {
  for(cont k in obj) yield [k, obj[k]]
}

const queryStr = pipe(
  L.entries,
  L.map(([k, v] => `${k}=${v}`)),
  join('&')
)

queryString({ limit: 10, offset: 10, type: 'notice'})
```

### take, find

```js
const users = [
    {age: 32},
    {age: 31},
    {age: 30},
    {age: 29},
    {age: 25},
    {age: 14},
    {age: 24},
    {age: 30},
    {age: 40},
    {age: 35},
]

const find = curry((f, iter) => go(
  iter,
  L.filter(f),    // 지연 평가 되고 그래서 뽑히는 원소가 결정되면 더 이상 순회하지 않아도 된다.
  take(1),        // 하나만 뽑으면 바로 끝나게 된다.
  ([a]) => a))
```

### L.map으로 map 만들기

```js
L.map = curry(function *(f, iter) {
  iter = iter[Symbol.iterator]
  let cur;
  while (!(cur = iter.next()).done()) {
    const a = cur.value
    yield f(a)
  }
})

const map = curry(pipe(L.map, take(Infinity)))          // Infinity로 하면 iter를 모두 순회 할때 까지 take를 실행하게된다.

const filter = curry(pipe(L.filter, take(Infinity)))
```

