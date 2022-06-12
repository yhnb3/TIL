### 이터러블 프로토콜을 따른  map의 다형성

```js
const products = [
  {name: '반팔티', price: 15000},
  {name: '긴팔티', price: 20000},
  {name: '핸드폰케이스', price: 15000},
  {name: '후드티', price: 30000},
  {name: '바지', price: 25000},  
]

const names = products.map(product => product.name)
const prices = products.map(product => product.price)
// 우리가 흔히 쓰는 map함수를 한번 만들어보자

const map = (f, iter) => {
    let res = []
    for (const a of iter) {
        res.push(f(a))        // 어떤 것을 배열화 할지 모르기 때문에 인수를 던져주고 원하는 값을 반환하는 함수를 요청합니다.
    }
    return res
}

map(p => p.name, products)  ===  products.map(product => product.name) // 같은 결과
```

본래 `map`메소드는 배열 객체의 메소드 이기 때문에 배열에만 사용할 수 있지만 우리가 구현한 `map`함수는 우리가 이터러블 프로토콜을 따르는 객체 어디에나 사용할 수 있습니다. 

```js
let m = new Map()
m.set('a', 10)
m.set('b', 20)
map(([k, a]) => [k, a * 2], m)

const it = m[Symbol.iterator]()
```

### filter

```js
const filter = (f, iter) => {
    let res = []
    for (const a of iter){
        if(f(a)) res.push(a)
    }
    return res
}
```

### reduce

```js
const reduce = (f, acc, iter) => {
    for (const a of iter) {
        acc = f(acc, a)
    }
    return acc
}

// 내부적으로 acc값을 주지 않더라도 배열의 첫번째 인자를 acc로 인식하도록 리팩토링 해보자.
const reduce = (f, acc, iter) => {
    if (!iter) {
       iter = acc[Symbol.iterator]()      // iter를 iterator 객체로 받고
       acc = iter.next().value()                  // next를 한번 한다.
    }
    for (const a of iter) {
        acc = f(acc, a)
    }
    return acc
}
```

### map + filter + reduce

```js
const products = [
  {name: '반팔티', price: 15000},
  {name: '긴팔티', price: 20000},
  {name: '핸드폰케이스', price: 15000},
  {name: '후드티', price: 30000},
  {name: '바지', price: 25000},  
]
const add = (a, b) => a+b

reduce(
  add, 
  map(p => p.price, 
    filter(p => p.price < 20000, products)))

/// 함수형으로 사고하기

// 1단계
reduce(
  add,
  [10, 20, 30, 4]) // 우리가 필요한 형태
// 2단계
reduce(
  add,
  map(p => p.price, products)) // map으로 형태 만들기 가능
// 3단계 필터링 씌우기
reduce(
  add,
  filter(
    p => p < 20000,
    map(p => p.price, products)))

```

