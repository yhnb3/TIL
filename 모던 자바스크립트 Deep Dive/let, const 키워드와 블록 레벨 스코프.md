## let, const 키워드와 블록 레벨 스코프

### var 키워드로 만드는 변수의 문제점

같은 스코프내에서 중복 선언을 허용한다.

함수레벨 스코프 함수레벨 내에서는 블록 레벨을 무시하기 때문에 블록 레벨에서 같은 변수명을 쓴다면 함수레벨에 선언된 변수가 오염될 것이다.

호이스팅 때문에 할당되지 않은 변수들에도 접근 가능하며 undefined를 리턴한다.

### let 키워드

중복선언 금지.

블록레벨 스코프 말은 블록레벨이지만 함수 레벨에서 또한 다른 스코프를 가진다.

변수 호이스팅이 되지만 할당되기 전에는 tdz에 존재하기 때문에 참조 불가능하다.

### const 키워드

let 키워드와 같은 특징을 가진다.

하지만 다른 점은 변수 재할당이 불가능하다. 그리고 무조건 선언과 동시에 할당을 해주어야한다.

하지만 const 키워드로 객체나 혹은 배열과 같이 call by reference를 사용하는 변수들은 내부 상태는 변경 가능하다. 하지만 `===`과 같은 얕은 비교로는 그 변화를 알아차릴수는 없다.(주소 값만 비교하기 때문이다.)



