# interface

> 타입을 만들어 내는 방식이다. 
>
> 내부적인것과는 관꼐없이 외부적으로만 활용되는 객체의 활용 방식
>
> 컴파일 단계에서만 필요로 한다. 

## optional property

```typescript
interface Person2 {
  name: string;
  age?: number;
}
// 변수 뒤에 ?를 입력함으로써 있을 수도 있고 없을 수도 있는 property를 설정한다.

function hello2(person: Person2): void {
  console.log(`안녕하세요 ${person.name} 입니다.` )
}

hello2({name: 'Mark', age: 39})
hello2({name: 'Anna'})
```

### indexable type

```typescript
interface Person3 {
  name: string,
  age?: number,
  [index: string]: any;  
}
// a['asfasf'] 와 같이 property를 설정해주는 것 처럼 설정 할 수 있다.

function hello3(person : Person3 ):void {
  console.log(`안녕하세요 ${person.name} 입니다.`)
}

const p31: Person3 = {
  name: 'Mark',
  age: 39
}

const p32: Person3 = {
  name: "Anna",
  sisters: ["Sung", "Chan"]
}

const p33: Person3 = {
  name: 'Bob',
  father: p31,
  mother: p32,
}

hello3(p33)
hello3(p31)
hello3(p32)
```

## function in interface

```typescript
interface Person4 {
  name: string,
  age: number,
  hello() : void
}

const p41 : Person4 = {
  name: 'Mark',
  age: 39,
  hello: function():void {
    console.log(`안녕하세요 ${this.name} 입니다.`)
  }
}

const p42 : Person4 = {
  name: 'Anna',
  age: 29,
  hello():void {
    console.log(`안녕하세요 ${this.name} 입니다.`)
  }
}
// const p43 : Person4 = {
//   name: 'Bob',
//   age: 19,
//   hello: () : void => {
//     console.log(`안녕하세요 ${this.name} 입니다.`)
//   }
// }

p41.hello()
p42.hello()
```

## class components interface

```typescript
interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name
  }
  
  hello(): void {
    console.log(`안녕하세요 ${this.name} 입니다`)
  }
  
}

const person: IPerson1 = new Person('Mark')
person.hello()
```

## interface extends interface

```typescript
interface Iperson2 {
  name: string;
  age?: number;
}

interface IKorean extends Iperson2 {
  city: string;
}

const k: IKorean = {
  name: '엄강우', 
  city: '대구',
  age: 30
}
```

## function interface

```typescript
interface HelloPerson {
  (name : string, age? :number) : void
}

const helloPerson: HelloPerson = function(name:string, age?: number) {
  console.log(`안녕하세요 ${name} 입니다.`)
}
```

## Readonly

```typescript
interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: 'Mark',
  gender: 'male'
}

p81.gender = 'female' /// Readonly이기 때문에 에러
```

## type alias vs interface

```typescript
type EatType = (food: string) => void
interface IEat {
    (food:string): void
}

type PersonList = string[]
interface IpersonList {
    [index: number]: string
}

//intersection
interface ErrorHandling {
    success: boolean;
    error?: {message: string};
}
interface ArtistsData {
    artists: {name: string }[];
}
type ArtistsResponseType = ArtistsData & ErrorHandling;
interface IArtistsResponse extends ArtistsData, ErrorHandling {}

//union
interface Bird {
    fly() :void;
    layEggs():void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

type PerType = Bird | Fish //interface는 힘들다

//declaration Merging
// htmlElemet를 확장할때 유용하다.
interface MergingInterface {
    a: string
}
interface MergingInterface {
    b:string
}
let mi: MergingInterface;
mi.a //에러 안남
mi.b //에러 안남.

//type alias는 안댐.
```

기본적으로 `type`는 어떤 타입을 부르는 이름을 말하는 것이며 `interface`는 어떤 타입을 만드는 것이다. 라고 선생님이 말씀하셨다.