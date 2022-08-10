## TDD

### Unit Test

특정 조건에서 어떻게 작동해야 할지 정의한 것.

대부분 함수로 표현

준비 -> 실행 -> 단언 패턴을 따른다.

### 개념

적색 : 실패하는 테스트 코드 작성 

녹색 : 함수의 기능 코드 작성 => 테스트에 통과할 정도만 작성 

리팩터(블루) : 코드 리팩토링 

적색 녹색 리팩터의 순환

테스트하기 쉬운 코드

관심사의 분리

### 테스트 코드

`describe` => 테스트 유닛들의 모음

`it` => 테스트 단위

`expect`, `tobe` => 매쳐 : 검증자

### 테스트 할 수 없는 코드

```html
<button onclick="counter++; countDisplay()">
  증가
</button>
<span id="counter-display">0</span>
<script>
	var counter = 0;
  function countDisplay() {
    var el = document.getElementById('counter-display')
    el.innerHTML = counter;
  }
</script>
```

이 코드는 무슨 안 좋은 점이 있을까?

1. 관심사가 분리되지 않음.

   클릭 이벤트 처리기를 인라인으로 처리 하였음.

   counter를 증가 시키면서 `span`태그의 값도 변경해주는 일도 함께 합니다.

2. 재사용성이 떨어짐

   counter로 전역 공간을 어지럽힘.

   횟수를 표시하는 span id 를 displayCouter 함수에 하드 코딩 하였음. 

개선할 수 있는 방법

1. 코드를 UI에서 완전히 분리 해야하고
2. 자바스크립트를 별도 파일로 분리

> ### 모듈 패턴
>
> 1. 임의 모듈 패턴
>
>    ```js
>    // 이름 공간으로 활용한다.
>    var App = App || {}
>    
>    // 이름 공간에 함수를 추가한다. 의존성있는 God 함수를 주입한다.
>    App.Person = function(God) {
>      var name = God.makeName() 
>      
>      //API를 노출한다.
>      return {
>        getName: function() {return name}
>        setName: function(newName) { name = newName }
>      }
>    }
>    
>    const person = App.Person(God)
>    ```
>
> 2. 즉시 실행 함수 모듈 패턴 (싱글톤 패턴)
>
>    ```js
>    var App = App || {}
>    
>    
>    App.Person = (function(God) {
>      var name = God.makeName() 
>      
>      //API를 노출한다.
>      return {
>        getName: function() {return name}
>        setName: function(newName) { name = newName }
>      }
>    })()
>    
>    App.Person(God).getName()  // 이런 식으로 사용
>    ```
>
> - 단일 책임 원칙에 따라 모듈은 한가지 역할만 한다.
> - 모듈 자신이 사용할 객체가 있다면 의존성 주입 형태로 제공해야 한다.

### 개선된점

```html
<html>
  <body>
    <span id="counter-display"></span>
    <button id="btn-increase">Increase</button>

    <script src="ClickCounter.js"></script>
    <script src="ClickCountView.js"></script>

    <script>
      (() => {
        const clickCounter = App.ClickCounter();
        const updateEl = document.getElementById("counter-display");
        const triggerEl = document.getElementById("btn-increase");
        const view = App.ClickCountView(clickCounter, { updateEl, triggerEl });
        view.updateView();
      })();
    </script>
  </body>
</html>
```

1. 단일 책임 원칙 지키기
2. 전역 더럽히지 않기
3. 가독성 좋아짐.



