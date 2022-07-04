### async await

```js
function time() {
  
}

function delay(a) {
  return new Promise(resolve => setTimeout(() => resolve(a), 500));
}

async function f1() {               // 무조건 promise를 리턴한다.
  const a = await delay(10)          
  return a + b
}

const pa = Promise.resolve(10)

(async () => {
  log(await pa);
})()
```

`async` 함수 내에서 모든 행동을 다 한다면 동기적으로 코딩 할 수 있지만 결국 `async`는 promise를 리턴하기 때문에 적재 적소에 활용할 수 있어야 한다.

`async` 와 `await`는 함수 체인이 아닌 문장으로 비동기를 표현하기 위함이다.

파이프 라인은 함수 합성을 위함이다. 비동기상황이던 동기 상황이던 끝까지 안전하게 함수 합성을 하기 위함이다.