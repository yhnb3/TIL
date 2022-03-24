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

### getter setter

> getter : 프로퍼티의 값을 가져오는 걸 get이라하다. 즉 getter는 값을 가져오는것을 전문으로 하는 함수
>
> setter : 프로퍼티의 값을 할당하는것을 set이라 한다. 즉 setter는 값을 할당하는 것을 전문으로 하는 함수이다.

```typescript
class Person {
  constructor(private _name: string, private _age: number){} // 프로퍼티에 대한 선언 맟 할당없이 초기화 가능하다.

  get name () {
      console.log('get')
    return this._name + " Eum"
  }

  set name (n: string) {
    this._name = n
  }

  get age() {
    return this._age
  }
} 

const p1 = new Person("Mark", 39);

p1.name ="kangwoo"
console.log(p1.name)
```

### readonly properties

```typescript
class Person {
  public readonly name: string = "Mark"
  private readonly country: string = "USA"

  public constructor(private _name: string, private _age: number){
    this.country = "Korea"
  }
  // 초기화 단계가 지난 이후에는 readonly 프로퍼티에는 값을 할당하거나 변경할 수 없다.

  hello() {
    this.country = "japan" // 에러
  }
} 

const p1 = new Person("Mark", 39);

```

### index Signature in class

> 동적으로 프로퍼티가 들어오는 경우에 고려할만 하다.

```typescript
// class 는 object의 청사진이다.
// {mark: 'male', jade: 'male'}
// {chloe: 'femal', alex: 'male', anna: 'female'}


class Students {
  // mark: string = 'male' // 동적으로 처리 불가능
  [name : string] : "male" | "female"

  mark = "hello" // 에러 male 또는 female 만을 가져야한다.
}

const a = new Students()
a.mark = "male"
a.jaden = "male"

const b = new Students()
b.chloe = "female"
b.alex = "male"
b.anna = "female"

console.log(b)
```

### static properties & methods

> 같은 클래스를 사용하는 객체에서 공용으로 사용하고 싶은 프로퍼티나 메소드를 static으로 정의한다.

```typescript
class Person {
  public static city = "Deagu" 
  public hello() { 
    console.log(Person.city)
  }
  public change() {
    Person.city = "LA"
  }

}

const p1 = new Person();
p1.hello()                // 대구
const p2 = new Person();
p2.hello()                // 대구


p1.change()              
p2.hello()                // LA => city를 Person 클래스로 생성되 모든 객체가 공유한다.
```

### singletone

> 어플리케이션이 실행되는 중간에 클래스로부터 단 하나의 객체만을 생성

```typescript
class ClassName {
  private static instance: ClassName | null = null
  public static getInstance() : ClassName {
    // ClassName으로부터 만든 object가 없으면, 만들어서 리턴.
    if (ClassName.instance === null) {
      ClassName.instance = new ClassName()
    }
    return ClassName.instance
  }
  // ClassName으로부터 만든 object가 있으면 그걸 리턴한다.
  private constructor() {}

} 

const a = ClassName.getInstance()
const b = ClassName.getInstance()

console.log(a===b)
```

### 상속

```typescript
class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`이름은 ${this._name}이고, 나이는 ${this._age}세 입니다.`)
  }

  protected printName():void {
    console.log(this._name, this._age)
  }
}

class Child extends Parent {
  public gender = "male"

  constructor(age: number) {
    super("Mark", age)       //항상 슈퍼를 먼저 호출해야한다.
    this.printName()
  }
}

const c = new Child(30)
c.print()
```

### Abstract Class

> 추상 클래스~

```typescript
abstract class AbstractPerson {          //new로 무언가를 할 수 없다. 오직 상속만을 하기 위한 클래스이다.
  protected _name: string = "Mark"

  abstract setName(name: string): void;
}

class Person extends AbstractPerson {
  public setName(name: string): void {
    this._name = name
  }
}

const p = new Person()
p.setName("강우")
```

### 추상클래스와 인터페이스의 차이점

> 추상클래스는 완전히 공통된 부분만을 정의 할때 사용하며
>
> 인터페이스는 다른 조상에게 상속 받았지만 공통된 메서드나 프로퍼티가 필요할 때 사용하는 것이다. => 다중 상속이 가능하기 때문
