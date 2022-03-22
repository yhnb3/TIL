"use strict";
function hello3(person) {
    console.log(`안녕하세요 ${person.name} 입니다.`);
}
const p31 = {
    name: 'Mark',
    age: 39
};
const p32 = {
    name: "Anna",
    sisters: ["Sung", "Chan"]
};
const p33 = {
    name: 'Bob',
    father: p31,
    mother: p32,
};
hello3(p33);
hello3(p31);
hello3(p32);
