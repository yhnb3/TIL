# Typescript vs Javascript

`Typescript`는 `Javascript`의 슈퍼셋이다. 즉, `javascript`의 모든 기능을 다 가지고 있으며 추가적인 기능도 있다.

## Typescript

```javascript
let age = 10;  
let x = 10;
let weight = 80
// 변수의 이름을 어떻게 붙여주냐에 따라 10의 의미가 정해진다.
// javascript 에서는 값의 유형이 어떤 타입인지를 설명해주지 않는다.
```

```typescript
type Centimeter = number;
type RainbowColor = "red" | 'orange' | 'yellow' |...
let weight:number = 80
let height:Centimeter = 176

let color: RainbowColor = "orange"

//type에 맞지 않는 값을 넣으려고 하면 에러가 나게 되므로 코드를 짜면서 안정감을 줄수 있다.  
```

### 데이터 유형 정의의 중요성

데이터는 크고 복잡하고 많다. 

코드 자체가 데이터 유형을 잘 설명할 수 있다면 디버깅의 어려움을 줄일 수 있다.