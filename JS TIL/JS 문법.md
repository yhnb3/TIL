## JS 문법

### 문(문장)의 완료값

모든 문은 완료값을 가진다.

```js
var a =  3 * 6
var b = a
b = 29;
```

세 가지의 문의 예를 적었는데 이 3가지는 모두 표현식 문 이라 일컷는다. 그리고 이 문들의 완료값은 각 각 `undefined`, `undefined`, `29`이다. 이로써 선언문의 완료값은 `undefined` 할당 문의 완료값은 할당된 값이라는 것을 알 수 있다.

```  js
// 그럼 블록의 완료값은 어떨까?

// 1
var a, b;
if(true) {
  b = 4 + 28
}              // 32

// 2
if(true){
    b = 1
    a = 3
}              // 3

// 3
if(true){
    b = 1
    var c = 3
}              // 1
```

블록의 완료값은 내부에서 마지막 문의 값을 암시적으로 반환한 값이다. 

2번 예와 3번 예를 통해서 보면 블록의 완료 값은 `undefined`가 아닌 값을 우선적으로 저장하는 것 같고 마지막으로 완료된 값을 우선적으로 저장하는 것 같아 보입니다.

### 표현식의 부수 효과

대부분의 표현식에는 부수 효과가 없다.

```js
var a = 2
var b = a + 3
```

하지만 함수 호출 표현식은 부수 효과를 가진 표현식의 전형적인 예이다.

```js
function foo(){
  a = a + 1
}

var a = 1
foo()    // 완료값은 undefined이며 부수효과는 a가 변한다.
```

그리고 할당문의 부수효과를 잘 활용하면 좋을때가 있다.

```js
// 기본
var matches
if(str) {
  matches = str.match(/[aeiou]/g)
  
  if (matches) {
    return matches
  }
}

// 할당문 부수효과 사용
var matches
if (str && (matches = str.match(/[aeiou]/g))) {
  return matches
}
```

할당문에 `()`를 감싸면 그 값은 할당문의 완료 값으로 결정 되어서 사용할 수 있게 된다.