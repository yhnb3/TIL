# Generics

### any와 generic의 차이

```typescript
function helloString(message: string) : string {
  return message
}

function helloNumber(message: number) : number {
  return message
}

// 더 많은 반복된 함수들...

function hello(message: any) : any {   // any를 사용하면 변수와 리턴에 대한 정확한 타입에 관한 추론이 불가능하다.
  return message                       
}

console.log(hello('meesage'))
console.log(hello(1))

function helloGeneric<T>(meesage: T): T {      // 제네릭을 사용하면 정확한 타입에 대한 추론이 가능해진다.
  return meesage
}

console.log(helloGeneric('Mark').length)
console.log(helloGeneric(1))
console.log(helloGeneric(true))
```

### Generics Basic

```typescript
function helloBasic<T, U>(message: T, comment: U) : T {
  return message
}

helloBasic<string, number>('message', 39)  // 실행시에 지정한 타입이 아닌 변수는 넣을 수 없다.
helloBasic("Mark", "Jessi") // T가 추론이 된다. 이거와 같은 경우 "Mark"으로 추론이 된다.
```

### Generics Array & Tuple

```typescript
function helloArray<T>(message: T[]): T {
  return message[0]
}

helloArray(['hello world', 'world'])

helloArray(["Hello", 4]) // T => string | number


function helloTuple<T, K>(message: [T, K]) : T {
  return message[0]
}

helloTuple(["Hello", "hi"])
helloTuple(["Hello", 5])
```

### Generics Function

```typescript
type HelloFunctionGeneric1 = <T>(message: T) => T ;

const HelloFunction1: HelloFunctionGeneric1 = <T>(message: T): T => {
  return message
}

interface HelloFunctionGeneric2 {
  <T>(message: T): T
}

const HelloFunction2: HelloFunctionGeneric2 = <T>(message: T): T => {
  return message
}
```

### Generic Class

```typescript
class Person<T, K>{
  private _name: T;
  private _age: K
  constructor(name: T, age: K) {
    this._name = name
    this._age = age
  }
}

new Person("Mark", 9)
```

### Generic Extends

> 상속의 의미 보다는 generic의 범위를 제한하는 방식으로 이용된다.

```typescript
class PersonExtends<T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name
  }
}

new PersonExtends("Mark")
new PersonExtends(3)
```

### keyof & type lookup system

```typescript
interface IPerson {
  name: string;
  age: number;
}

type Keys = keyof IPerson; // IPerson의 key를 가진다.

const person : IPerson = {
  name: 'kw',
  age: 30
}

function getPrpop<T, K extends keyof T>(obj: T, key: K): T[K] {  // 이런식으로 정의하면 K는 union type이 아니라 지정된 type 형식으로 나온다. 
  return obj[key]                                                // 그림 리턴 값인 T[K]도 지정된 타입으로 설정된다.
  
}

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value
}
```

