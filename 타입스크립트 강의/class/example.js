"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } // 프로퍼티에 대한 선언 없이 초기화 가능하다.
}
const p1 = new Person("Mark", 39);
console.log(p1);
