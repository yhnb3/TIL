"use strict";
function helloString(message) {
    return message;
}
function helloNumber(message) {
    return message;
}
// 더 많은 반복된 함수들...
function hello(message) {
    return message;
}
console.log(hello('meesage'));
console.log(hello(1));
function helloGeneric(meesage) {
    return meesage;
}
console.log(helloGeneric('Mark').length);
console.log(helloGeneric(1));
