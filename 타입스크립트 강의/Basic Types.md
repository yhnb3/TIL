## Basic Types

타입스크립트 타입

- 스테틱 타입

  개발하는 도중에 타입 체크 

자바스크립트 타입

- 다이나믹 타입

  런타임에서가야 잘못 된것을 알 수 있다. 

### primitive types

- 오브젝트와 레퍼런스가 아닌 실제 값을 정장하는 자료형
- 종류
  - boolean
  - number
  - string
  - sybol
  - null
  - undefined
- literal 값으로 primitive 타입의 서브 타입을 나타낼 수 있다.

### Boolean

```typescript
let isDone: boolean = false;

isDone = true;

typeof isDone // boolean

let isOK: Boolean = true;

typeof isOk // Object
```

### Number

```typescript
let decimal: number = 6;

let hex: number = 0xf00d; // 16진수

let binary: number = 0b1010; // 2진수

let octal: number = 0o744; // 8진수

let notANumber: number = NaN // 오류 안남

let unerscoreNum : number = 1_000_000 // 언더스코어 지원함.
```

### String

```typescript
let myName: string = 'mark';

let fullName : string = 'Mark lee'

let age: number = 30

let sentence: string = `Hello, My name is ${fullName}.
I'll be ${age+1} years old next month.` // template setence
```

### Symbol

- new Symbol로 사용할 수 없다.
- Symbol('foo') 이런식으로 사용가능
- 프리미티브 값을 담아서 사용
- 고요하고 수정 불가능한 값을 만들어줌.
- 그래서 주로 접근 제어하는데 사용한다.

```typescript
console.log(Symbol('foo') === Symbol('foo')) // false

const sym = Symbol();

const obj = {
    [sym]: "value"
}

obj["sym"] // 접근불가
obj[sym] // 접근가능
```

### null & undefined

```typescript
let union : string | null | undefined = undefined // union type 설정
```

