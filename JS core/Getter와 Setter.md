## Getter와 Setter

ECMA5이후 부터 getter/setter 메서드로 프로퍼티의 값을 대체 할 수 있다. 이를 `접근자 프로퍼티`라고 한다.

getter는 반환 값이 프로퍼티의 값이 되고 setter는 값을 '설정'하는 것을 담당하며 반환값은 무시된다.

getter/setter 모두 가지고 있는 프로퍼티라면 읽기 쓰기 모두 가능한 프로퍼티 이며 getter만 가지고 있다면 읽기 전용, setter만 가지고 있다면 쓰기 전용일것이다. 쓰기 전용 프로퍼티를 읽으려고 시도 한다면 undefined가 반환 될 것이다.

#### Example

```javascript
var o = {
    // 데이터 프로퍼티
    data_prop: value,
    
    // 접근자 프로퍼티
    get accessor_prop() {/*함수 본체*/}
    set accessor_prop(value) {/*함수 본체*/}
}
```

### Prototype 속성

### Class 속성

