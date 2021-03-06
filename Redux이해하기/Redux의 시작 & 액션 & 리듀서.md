# Redux 이해하기

## Redux 동기

1. 많은 상태를 자바스크립트 코드를 관리할 필요가 생겼다.
2. 상태를 언제, 왜, 어떻게 업데이트할지 제어할 수 없는 지경에 이르렀다.
3. 복잡함은 변화나 비동기와 같이 추론하기 어려운 두 가지 개념을 섞어서 사용한다는 데에서 온다.

> Redux는 상태 변화가 일어나는 시점에 제약을 두어 상태 변화를 예측 가능하게 만들고자 시도한다.

## Redux의 3가지 원칙

- 진실은 하나의 소스로 부터

  > 애플리케이션의 모든 상태는 하나의 스토어 안에 하나의 객체 트리 구조로 저장됩니다.

- 상태는 읽기 전용이다.

  > 상태를 변화시키는 유일한 방법은 무슨일이 벌어지는 지를 묘사하는 액션 객체를 전달하는 방법뿐입니다.

- 변화는 순수 함수로 작성되어야 한다.

  > 액션에 의해 상태 트리가 어떻게 변화하는 지를 지정하기 위해 프로그래머는 순수 리듀서를 작성해야 합니다.

## 액션

```tsx
const ADD_TODO = 'ADD_TODO'
{
    type: ADD_TODO,
    text: 'Build my first redux app'
}
```

> 액션 생산자는 보일러플레이트라고 비판받기도 합니다.
>
> 프로젝트에서 그게 더 적당하고 생각하는 부분에는 객체 리터럴을 사용할 수 있습니다.
>
> 보일러 플레이트란?
>
> - 최소한의 변경으로 여러곳에서 재사용 되며, 반복적으로 비슷한 형태를 띄는 코드를 의미

## 리듀서

> 액션은 무언가 일어난다는 사실을 기술하지만, 그 결과 애플리케이션의 상태가 어떻게 바뀌는지는 특정하지 않습니다. 이것은 리듀서가 할일 입니다.

## 상태 설계하기

> 데이터와 UI상태를 분리하는 것을 추천한다.

## 액션 다루기

> 리듀서는 이전 상태와 액션을 받아서 다음 상태를 반환하는 순수 함수입니다.
>
> 리듀서를 순수하게 유지하는 것은 매우 중요합니다.
>
> 절대로 리듀서 내에서 하지 말아야 할 것들
>
> - 인수들을 변경하기
> - API 호출이나 라우팅 전환같은 사이드 이펙트 일으키기
> - Date.now()나 Math.random()같은 순수하지 않은 함수를 호출하기

- Redux는 처음에 리듀서를 `undefined` 상태로 호출합니다. 그땨가 초기 상태를 반환할 기회입니다.
- 짚고 넘어가야할 점
  - state를 변경하지 않았다.  Object.assign()을 통해서 복사본을 만들어서 반환 하였습니다.
  - default 케이스에 대해 이전의 state를 반환했습니다.

## 마지막으로

- combineReducers()를 이용해서 리듀서들을 묶어주어야 합니다.