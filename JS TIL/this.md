## this?

자바스크립트에서 가장 헷갈리는 체계중 하나가 바로 `this`키워드다. `this`는 모든 함수 스코프 내에 자동으로 설정되는 특수한 식별자로 경험 많은 자바 스크립트 개발자도 정확히 무엇을 가리키는지 짚어내기가 만만치 않다.

> You Don't Know JS에서는 다음과 같이 표현을 하였다.
>
> **모든 기술이 고도로 발전하면 마술과 구별하기 어려워진다.**  - 아서 클라크
>
> 자바 스크립트의  `this`가  이 정도로 고도화된 체계는 아니지만 명확하게 이해하지 못하는 `this`는 그저 신비로운 '마술'과 다름이 없다.

### this를 왜 알아야할까?

`this`를 공부하기도 전에 `this`가 어렵다는 이야기를 했는데 그럼 이 어려운 걸 왜 알아야 할까?

```js
function identify() {
  return this.name.toUpperCase()
}

function speak() {
  var greeting = `Hello, I'm ${identify.call(this)}`
  console.log(greeting)
}

var me = {
  name: "Kyle"
}
var you = {
  name: "Reader"
}

speak.call(me)    // Hello, I'm KYLE
speak.call(you)   // Hello, I'm READER
```

> call 메서드에 대해 추가 설명을 하면 call 메서드는 인자로 넘기는 객체를 함수의 `this`로 바인딩 하는 메서드이다.

다음의 예를 보면 `this`를 통해서 암시적으로 객체 래퍼런스를 넘기는 체계가 API 설계상 좀 더 깔끔하고 명확하며 재사용하기 쉽다. 

### this에 대한 잘못된 해석 2가지

1. `this`는 자기 자신이다.

   ```js
   function foo(num) {
     console.log("foo : " + num)
     this.count++
   }
   
   foo.count = 0
   
   var i;
   
   for(i=0; i<10; i++){
     if (i > 5) {
       foo(i)
     }
   }
   
   // foo: 6
   // foo: 7
   // foo: 8
   // foo: 9
   
   this.count // 0
   ```

   ????????????? 도대체 무슨 일일까? 

   `foo.count = 0`으로 `foo`라는 함수 객체에 `count`라는 프로퍼티를 추가했다. 하지만 `this.count`에서 `this`는 함수 객체를 바라보는 것이 아니다(?!)

   물론 `foo`함수 내에서 참조하는 `this.count`에 대해서는 뒷장에서 좀 더 자세히 알아 볼것이다. 

   그럼 `this`를 제대로 사용하지 위해서는 어떻게 해야할까?

   ```js
   function foo(num) {
     console.log("foo : " + num)
     this.count++
   }
   
   foo.count = 0
   
   var i;
   
   for(i=0; i<10; i++){
     if (i > 5) {
       foo.call(foo, i)              // foo함수의 this를 foo함수 자제로 바인딩하고 i를 인자로 넘기는 foo함수를 실행한다.
     }
   }
   
   // foo: 6
   // foo: 7
   // foo: 8
   // foo: 9
   
   this.count // 4
   ```

2. 자신의 스코프

   분명한건 `this`는 함수의 렉시컬 스코프를 참조하지 않는다. 내부적으로 스코프는 별개의 식별자가 달린 프로퍼티로 구성된 객체의 일종이나 스코프객체는 자바스크립트 구현체인 `엔진`의 내부 부품이기 대문에 일반 자바스크립트 코드로는 접근하지 못한다.

   스코프와 `this`는 접점이 없으니 연결하려 하지 말자.

### this는 무엇인가? 

`this`는 작성 시점이 아닌 런타임 시점에서 바인딩 되며 함수 호출 당시 상황에 따라 콘텍스트가 결정된다. 함수의 위치에 상관 없이 `this 바인딩`은 오로지 어떻게 함수를 호출했느냐에 따라 정해진다.

어떤 함수를 호출하면 활성화 레코드, 즉 실행 콘텍스트가 만들어진다. 여기엔 함수가 호출된 근원과 호출 방법, 전달된 인자 등의 정보가 담겨있다.`this`레퍼런스는 그 중 하나로, 함수가 실행되는 동안 이용할 수 있다.

### 정리

`this`는 자신의 함수나 렉시컬 스코프를 가리키는 래퍼런스가 아니라는 점을 인지해야하고

`this`는 함수 호출 시점에 바인딩 되며 무엇을 가리킬지는 전적으로 함수를 호출한 코드에 달려있다.