# React

### 제어 컴포넌트 vs 비제어 컴포넌트

> html에서 input, select, form 같은 태그 속 상태는 제어 컴포넌트 혹은 비제어 컴포넌트로 관리합니다.

제어 컴포넌튼

상태가 바뀔때 마다 setState()로 항상 관리 해주는 것

비제어 컴포넌트

DOM자체에서 값을 가져오는 것을 말합니다. 

ref를 이용하여 DOM에 접근할 필요가 있습니다.

### 합성 이벤트

> react내에서 이벤트리스너를 지정하면 콜백 함수로 받는 객체이다. 흔히 e 혹은 event로 명명하여 사용한다.