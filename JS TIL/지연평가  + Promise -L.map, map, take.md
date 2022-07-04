### 지연평가  + Promise -L.map, map, take

```js
go([Promise.resolve(1),Promise.resolve(2),Promise.resolve(3)],
  L.map(a => a+ 10),
  take(2)
  console.log)
```

### 지연된 함수열을 병렬적으로 평가하기

```js
const C = {}
function noop() {}
const catchNoop = arr => (arr.forEach(a => a instanceof Promise ? a.catch(noop) : a), arr) // 미리 catch를 달아주어서 reject가 콘솔에 나오지 않게 한뒤 원하는 타이밍에 catch를 평가할 수 있다.


C.reduce = curry((f, acc, iter) => {
  const iter2 = catchNoop(iter ? [...iter] : [...acc])
  return iter ?
    reduce(f, acc, iter2) :
	  reduce(f, iter2)
})

C.take = curry((l, iter) => take(l, catchNoop([...iter])))

const delay500 = a => new Promise(resolve => setTimeout(() => resolve(a), 500))

go([1,2,3,4,5],
  L.map(a => delay500(a * a)),
  L.filter(a => a % 2),
  C.reduce(add)
  console.log)
```



