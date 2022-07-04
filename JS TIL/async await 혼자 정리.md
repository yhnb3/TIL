### async await

`async`  `await`는  `Promise`를 쉽게 다룰 수 있게 해주는 문법이다.

```js
const delay10 = (a) => {
  return new Promise((resolve) => setTimeout(() => resolve(a), 500));
};

const f1 = async (b) => {                   // async await
  const a = await delay10(10)
  
  console.log(a+b)
  
  return a + b
}

const f2 = (b) => {                         // promise
  return delay10(10).then((res) => {
    console.log(res + b);
    return res + b;
  });
};
```

`async await`는 비동기적인 함수를 동기적으로 작성 할 수 있게 한다고 들 많이 얘기한다. 즉 위의 예처럼  `Promise`를 이용하면 체인을 이용하여 작성해야 하지만 `async await`를 사용하면 문장 형식으로 작성 가능하게 되는 것입니다.

### 장점

```js
const getPostingUserWithPromise = (id) => {                                  // Promise로 만든 api 요청 함수
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
    .then((res) =>
      fetch(`https://jsonplaceholder.typicode.com/users/${res.userId}`)
    )
    .then((res) => res.json())
    .then((res) => res);
};

const getPostingUserWithAsyncAwait = async (id) => {                           // async await로 만든 api 함수
  const getPosts = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json());

  const getUsers = await fetch(
    `https://jsonplaceholder.typicode.com/users/${getPosts.userId}`
  ).then((res) => res.json());

  return getUsers;
};
```

두 함수는 똑같이 동작하고 똑같이 `Promise`를 리턴하는 함수입니다. 

1. 가독성이 좋다.

   일단 `Promise`만을 이용해 만든 함수는 어떤 `flow`로 동작하는지에 대해 빠르게 판단하기 어렵습니다. 그에 비해 `async await`을 이용한 함수는 `post`를 가져와서 그 `post`의 `userId`를 이용하여 `user`정보를 가져온다는 것을 명확하게 알 수 있습니다.

2. 에러 처리

   비동기 처리 과정에서 에러가 난다면 어떨까요? 지금은 2가지 비동기 처리만 적용되어 있지만 더 많은 비동기 처리가 중첩되어 있다고 생각하면 `Promise`로 만들어진 함수는 명확하게 어디서 에러가 난건지에 대해 빠르게 파악하기 어려울 것입니다. 하지만 `async await`을 이용한 함수는 명확히 어떤 변수에 에러가 발생했는지 파악하기 어렵지 않을 것입니다.

### 또 다른 이용방법

비동기 처리 후 `Promise`리턴을 값으로 사용하는 것이 아니라 비동기 처리가 끝난 후 바로 결과 값으로 사용하고 싶을 때 `async await`을 이용할 수 있는 방법을 알아보겠습니다.

예를 들어 `id`가 1인 `post`를 가져와서 바로 `log`를 찍어 보고 싶습니다.

```js
// promise
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
    .then((res) => console.log(res))

// async await
(async () => {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/1`).then(
    (res) => res.json()
  );
  console.log(post);
})();
```

즉시 실행 함수를 이용하여 만들 수 있습니다.

#### [참고사이트](https://www.daleseo.com/js-async-async-await/)



