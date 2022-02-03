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

### Object

직접 값을 가지고 있지 않고 값을 가진 곳의 정보를 가졌다.

primitive type이 아닌것을 나타내고 싶을대 사용하는 타입.

```typescript
const person1 = { name: 'makr', age:39} // 객체 리터럴

const person2 = Object.create({name:'mark', age: 39})
```

### Array

Object의 일종이다. 

같은 타입의 요소들을 모아놓았다.

```typescript
let list: number[] = [1,2,3];
let list: Array<number> = [1,2,3]
let list: (number|string)[] = [1,2,3 ,"4"];
```

### Tuple

길이가 정해져있고 요소의 타입이 정확한 객체이다.

```typescript
let x: [string, number];
x = ['hello', 39] // 가능
x = [39, 'hello'] // 불가능
```

### Any

어떤 것이나 된다.

어떤 메소드든 이용할 수 있다.

최대한 쓰지 않는 것이 핵심이다.

any는 계속해서 객체를 통해 전파된다.

편의는 타입 안정성을 잃는 대가로 온다는 것을 기억해야한다.

타입 안정성은 typescript를 사용하는 주요 동기 중 하나 이기때문에 최대한 적게 써야한다.

```typescript
function returnAny(message: any): any {
    console.log(message)
}

const any1 = returnAny('리턴은 아무거나')

any.toString() // 타입적인 에러가 뜨지 않는다.

let looselyTyped: any = {}

const d = looselyTyped.a.b.c.d; // d의 타입은 any!

function leakingAny(obj: any) {
    const a = obj.num; // any
    const b = a + 1  // any
    return b
}

const c = leakingAny({num:0}) // any c는 number로 규정 되어야 하지만 any로 규정됨.
c.indexOf("0") // 누수로 인해 에러가 나지 않는다.
```

### unknown

any로 인한 타입 누수를 막지위해 나옴.

모르는 변수의 타입을 묘사할 수도 있다. 

컴파일러와 미래의 코드를 읽는 사람에게 이 변수가 무엇이 될 수 있음을 알려주는 타입을 제공하기를 원하므로 unknown을 제공한다.

```typescript
declare const maybe: unknown;

const aNumber: number = maybe // 에러


// 타입 가드 사용
if (maybe === true) {
    const aBoolean: boolean = maybe;
    
    const aString: string = maybe; // 에러남
}

if (typeof maybe === 'string') {
    maybe // string 타입으로 인식
}
```

### never

리턴에 사용된다.

모든타입의 서브 타입이며, never에는 어떤것도 할당 할 수 없다. 

잘못된 타입을 넣는 실수를 막고자 할 때 많이 사용한다.

```typescript
function error(message: string): never {
	throw new Error(message) 
}

function fail() {
    return error('failed');
}

function infiniteLoop():never {
    while(true){}
}

declare const a : string | number;

if (typeof A !== 'string'){
    a; // number를 가진다.
}

type Indexable<T> = T extends string ? T & {[index:string]: any} : never // never를 이용해 잘못된 타입을 넣는것을 방지하는 방법 중 하나
type ObjectIndexable = Indexable<{}> // never
```

### Void

값을 반환하지 않는 함수의 리턴 타입으로 사용.

리턴을 가지고 아무것도 안하겠다라는 의미의 타입이다.

```typescript
function returnVoid(message: string): void {
    console.log(message)
	return;
}

returnVoid('리턴이 없다.')
```

