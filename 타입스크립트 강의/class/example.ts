class Person {
  constructor(public name: string, public age: number){} // 프로퍼티에 대한 선언 맟 할당없이 초기화 가능하다.
} 

const p1 = new Person("Mark", 39);

console.log(p1)