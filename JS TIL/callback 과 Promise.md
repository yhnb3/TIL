### callback 과 Promise

```js
function ad10(a, callback) {
  setTimeout(() => callback(a+10), 100)
}

add10(5, res => {
  console.log(res)
})   // 0.1초 후에 15 출력

function add20(a) {
  return new Promise(resolve => setTimout(() => resolve(a + 20), 100))
}

add20(5)
  .then(add20)
	.then(add20)
	.then(add20)
  .then(res => console.log(res))  // 0.1초 후에 25리턴
```

`promise`는 콜백에 비해 연속적인 실행이 매우 간단하다. 즉, 가독성이 훨씬 좋다.

`promise`와 콜백의 가장 큰 차이는 비동기 상황을 `1급객체로 다룬다는 점이다.`  `promise`가 `대기, 성공, 실패`라는 1급객체를 가진다는 것이 매우 중요하다.

콜백을 이용해 비동기 함수를 변수에 선언을 하면 `undefine`를 할당하지만 `promise`는 프라미스 객체를 가진다는 것이 중요하다. 그 이후에 원하는 타이밍에 핸들링 가능하다는 점이 중요하다. 비동기 상황이 값으로써 다루어 진다는 것이 매우매우매우매우매우 중요하다.

### 값으로의 Promise 활용

```js
const delay100 = a => 
  new Promise(resolve => setTimeout(() => resolve(a), 100))

const go1 = (a, f) => a intanceof Promise ? a.then(f) : f(a);
const add5 = a => a + 5

const n1 = 10
go1(go1(n1, add5), log)  // 15

const n2 = delay100(10)
go1(go1(n2, add5), log)   // 0.1초 후에 15출력 
```

프라미스는 1급 객체로 값을 이용하면 이와 같이 동기함수와 다르지 않게 사용이 가능해진다.

### 합성 관점에서의 Promise와 모나드

`f  . g` 로 함수 합성을 한다, 즉 `f(g(x))`와 같은 개념이다.

모나드는 함수 합성을 안전하게 하기 위한 개념이다.

``` js
const g = a => a + 1
const f = a => a * a

f(g(1))              // 4
f(g())               // NaN 이 코드는 안전하지 않다. 예외처리가 제대로 되어있지 않기 때문이다.

[1].map(g).map(f).forEach(r => console.log(r))    // 모나드를 이용한 활용방법이다.
[].map(g).map(f).forEach(r => console.log(r))     // 값이 없으니 아무일도 일어나지 않는다. 즉 안전하다

Array.of(1).map(g).map(f).forEach(r => console.log(r))            
Promise.resolve(1).then(g).then(f).then(r => console.log(r))    // 위와 형태가 유사하다

new Promise.resolve(resolve => 
  setTimeout(() => resolve(2), 100)
).then(g).then(f).then(r => console.log(r)) 
```

이 프라미스가 특정상황에서 함수를 안전하게 합성하기 위한 도구이다. 어떤 비동기 상황에서도 그리고 어떤 비동기 시점에서도 적절하게 함수를 평가할 수 있다는 점이 `Promise`의 최장점이다.

### Kleisli Composion

오류가 있을 수 있는 함수 합성을 하기 위한 규칙. 

수학에서는 f (g(x)) = f(g(x)) 가 성립이 된다.

하지만 프로그래밍에서는 상태가 변하기 때문에 같지 않은 상황이 나올 수 있다.

 g에서 에러가 난 경우 f(g(x)) = g(x) 의 식이 성립 되게끔 하는 것을 `Kleisli Composition`이라 한다.

```js
var users = [
  {id: 1, name: 'aa'},
  {id: 2, name: 'bb'},
  {id: 3, name: 'cc'},
]

const getUserById = id => find(u => u.id === id, users) || Promise.reject('없어요!');

const f = ({name}) => name
const g = getUserById
const fg = id => f(g(id))

fg(2)    // bb

users.pop()
users.pop()  // users = [{id: 1, name: 'aa'}] 

fg(2)   // 에러가 나게 된다. 이 에러를 차단하는 것이 kleisli composition

const fg  = id => Promise.resolve(id).then(g).then(f).catch(a => a)

fg(2).then(2)  // bb

users.pop()
users.pop()  // users = [{id: 1, name: 'aa'}]


fg(2).then(2)  // 없어요.
g(2).then(2)   // 없어요.
// 합성 함수와 에러가 일어난 시점의 함수의 결과 값이 같다.
```

### go, pipe, reduce에서 비동기 제어

```js
const = (...args) => reduce((a, f) => f(a), args)

go(Promise.resolve(1),
  a=> a + 10,
  a=> Promise.resolve(a + 10),
  a=> a + 10,
  console.log)
```

### Promise.then의 중요한 규칙

```js
Promise.resolve(Promise.resolve(Promise.resolve(1))).then(console.log)
// promise가 중첩되어 있어도 하나의 then으로 해결 가능하다.
```

