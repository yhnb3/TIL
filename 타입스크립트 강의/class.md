# Class

> object를 만드는 청사진
>
> 클래스이전에 object를 만드는 기본적인 방법은 function
>
> js에서도 es6부터 class 이용가능
>
> oop의 초석
>
> typescript에서는 클래스도 사용자가 만드는 타입의 하나이다.

### 기본적인 class 생성

```typescript
class Person {
  name: string

  constructor(name: string) {
    this.name = name
  }
} 

const p1 = new Person("Mark");

console.log(p1)
```

### Class constructor

```typescript
class Person {
  name: string ='Mark'; // 프로퍼티 할당 방법 1
  age! : number // 클래스 내에서 초기화하지 않고 다음에 따로 객체에서 설정하도록 하겠다는 의미의 !.
  // constructor로 초기화 할 예정이라면 !를 빼도 상관없다.

  // contructor에는 async를 붙일 수 없다.
  // 
  constructor(age?: number) { // 프로퍼티 할당 방법 2
    if (age === undefined) {
      this.age = 20
    } else {
      this.age = age
    }
  }

  // 여기서 초기화 할때는 !를 꼭 붙여 주어야한다.
  async init() {

  }
} 

const p1 = new Person(30);
const p2 = new Person();

console.log(p1)
```

### 접근 제어자

```typescript
class Person {
  //접근제어자 default는 public이다.
  public name: string = "Mark"; // 내외부에서 모두 호출 가능하다.
  private _age: number = 30; //내부에서 호출가능하다. _age처럼 _를 붙히면서 암묵적으로 private 프로퍼티 라는것을 알려주기로 해왔다.
  //protected 접근자는 외부에서는 접근할 수 없지만 상속받은 클래서에서는 접근가능하다.

  constructor() { // 생성자를 private으로 설정하면 new 키워드를 이용해서 새로운 객체를 만들지 못한다.

  }
} 

const p1 = new Person();

console.log(p1)
```

### 생성자 파라미터를 이용한 클래스 초기화

```typescript
class Person {
  constructor(public name: string, public age: number){} // 프로퍼티에 대한 선언 맟 할당없이 초기화 가능하다.
} 

const p1 = new Person("Mark", 39);

console.log(p1)
```

