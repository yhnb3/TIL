"use strict";
class AbstractPerson {
    constructor() {
        this._name = "Mark";
    }
}
class Person extends AbstractPerson {
    setName(name) {
        this._name = name;
    }
}
const p = new Person();
p.setName("강우");
