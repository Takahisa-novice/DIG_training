'use strict'
// 1行目に記載している 'use strict' は削除しないでください
5 + 6;
console.log(6 + 6);

function add(numOne, numTwo) {
  return numOne + numTwo;
}

// テスト
console.log(add(4, 3)); // => 7 を表示
console.log(add(100, 42)); // => 142 を表示

console.log(add(100));
console.log(add(1, 4, 5));

function simpleFunctionA() {
  return "Hello simple function A";
}

function simpleFunctionB() {
  console.log("Hello simple function B");
}

console.log("simpleFunctionA: ", simpleFunctionA());
console.log("simpleFunctionB: ", simpleFunctionB());

function subtract(num1, num2) {
  return num1 - num2;
}

console.log(subtract(4, 3)); // => 1
console.log(subtract(100, 42)); // => 58
console.log(subtract(23, 24));

function greeting(name){
  return "Hello, " + name + "!";
}

console.log(greeting("Alex"));
console.log(greeting("Bob"));

function average(num1, num2){
  return (num1 + num2) / 2;
}

console.log(average(5, 10));

function square(x){
  return x ** 2;
}

function cube(x){
  return x ** 3;
}

console.log(cube(3));

// 中級演習
function simpleHelloA() {
  console.log("hello");
}

function simpleHelloB() {
  return "hello";
}

const a = simpleHelloA();
const b = simpleHelloB();
console.log(a, b);

function createGreeting(phrase, friend) {
  return phrase + ", " + friend + "!";
}

// インスタンス化
const morningGreeting = createGreeting("Good morning", "Mike");
const dayGreeting = createGreeting("Hello", "Bob");
const eveningGreeting = createGreeting("Good evening", "Alex");

console.log(morningGreeting); // "Good morning, Mike!" を表示
console.log(dayGreeting); // "Hello, Bob!" を表示
console.log(eveningGreeting); // "Good evening, Alex!" を表示

function sphereSurface(r){
  return 4 * Math.PI * r ** 2;
}

function sphereVolume(r){
  return (4 * Math.PI * r ** 3) / 3;
}

console.log(sphereSurface(5));
console.log(sphereVolume(5));
