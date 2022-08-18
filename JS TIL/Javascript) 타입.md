## Javascript) 타입

#### 내장 타입

- null
- undefined
- boolean
- number
- string
- object (object를 제외하고는 다른 타입들은 원시타입이라 불린다.)
- symbol

```js
typeof "hi" === "string"  // true
```

`typeof` 연산자로 확인 가능

> `null`은 좀 특별하다 `null`은 falsy한 유일한 원시 값이지만 타입은 `object`이다.
>
> 그래서 `null`의 타입을 확인하려면 조금 다르게 접근해야한다.
>
> ```js
> let a = null
> !a && typeof a === 'object' // true
> ```
>
> 다음과 같이 확인해야 확실히 `a`의 `type`이 `null`임을 확신할 수 있다.

그리고 타입을 확인 할 수 있는 것이 또 하나 있는데 이는 함수이다.

```js
function a(b, c) {
  return b+c
}

typeof a === 'function' // true


// tip!
a.length // 2 함수의 인수의 갯수를 보여준다.
```

#### 값이 없는 것과 선언되지 않은것

```js
const a;
a;             // "undefined"
b;             // "b is not defined"
```

`a`변수는 선언 되었지만 값이 없어 `undefined`를 할당 받은 상태이고

`b`변수는 선언 조차 되지 않은 `undeclared`상태이다. **하지만 `typeof b`는 `undefined`이다.** ~~아마 `b`는 아무것도 없는 변수 이기에 타입은 `typeof`에 의해 선언되어지고 값은 할당 받지 못해 `undefined`가 된게 아닐까?~~

이는 타입 가드 역할을 톡톡히 하는데

```js
function doSomethingCool(){
  var helper =
      (typeof FeatureXYZ !== 'undefined') ?
      FeatureXYZ :
  		function (){/* 선언 가능 */}
  ...
}   
```

다음과 같이 누군가 `doSomethingColl()`이라는 함수를 만들어서 다른 사람도 함께 사용하고자 할때 그리고 `FeatureXYZ`함수에 대한 자유도를 주고 싶을 때 사용하는 사람이 `FeatureXYZ`를 선언하지 않아도 에러가 나지 않게 사용할 수 있게 설계할 수 있다.

> 하지만 이런 부분에서 의존성을 주입하여 설계하는 패턴도 존재한다.
>
> ```js
> function doSomethingCool(FeatureXYZ){
>   var helper = FeatureXYZ || function (){/* 선언 가능 */}
>   ...
> }   
> ```
>
> 뭐가 맞다 틀리다고 할 순없지만 대체로 `typeof` 안전 가드가 선택할 수 있는 옵션은 많다.

### 출처 : You dont know JS - 타입과 문법 스코프와 클로저