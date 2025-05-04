'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// 例
const school = "DIG college";
console.log(school); // "DIG college" を表示
let week = 1;
console.log(week); // "1" を表示

const name ="Takahisa Deguchi";
let age =26;
let isProgrammer = true;
let currentTask = 1;

console.log(name); // あなたの名前を表示
console.log(age); // あなたの年齢を表示
console.log(isProgrammer); // "true" を表示
console.log(currentTask); // "1" を表示

currentTask = 2;
console.log(currentTask);

// 正方形の面積を計算して保存
const squareSideLength = 2;

let squareArea = squareSideLength ** 2;

console.log(squareArea); // "4" を表示

// 長方形の面積を計算して保存
const rectangleBaseLength = 3;
const rectangleHeightLength = 4;

let rectangleArea = rectangleBaseLength * rectangleHeightLength;

console.log(rectangleArea); // "12" を表示

// 三角形の面積を計算して保存
const triangleBaseLength = 4;
const triangleHeightLength = 5;

let triangleArea = triangleBaseLength * triangleHeightLength / 2;

console.log(triangleArea); // "10" を表示


// 中級演習
const circleDiameter = 10;

let circleCircumference = circleDiameter * Math.PI;

const circleRadius = circleDiameter / 2;

let circleArea = circleRadius ** 2 * Math.PI;

console.log(circleCircumference); // "31.41592653589793" に近い値を表示
console.log(circleArea); // "78.53981633974483" に近い値を表示

let a = "B";
let b = "A";

let temp = a;
a = b;
b = temp;

console.log(a); // "A" を表示
console.log(b); // "B" を表示

let value = 1;

console.log(value); // "1" を表示

value *= 2;

console.log(value); // "2" を表示

value *= 2;

console.log(value); // "4" を表示

value *= 2;

console.log(value); // "8" を表示

value *= 2;

console.log(value); // "16" を表示

value *= 2;

console.log(value); // "32" を表示

value *= 2;

console.log(value); // "64" を表示

const firstName = "Takahisa";
const lastName = "Deguchi";
const city = "Kagoshima";

console.log("Hello, my name is " + firstName + " " + lastName + ". I live in " + city + ".");

// 応用演習
let i=0;

function counter() {
  i++;
  console.log(i);
}

counter(); // => 1
counter(); // => 2
counter(); // => 3

function isOdd(givenNumber) {
  if(givenNumber % 2 == 1){
    console.log("Yes, it's odd");
  }else{
    console.log("No, it's even");
  }
  // 与えられた数値によって、"Yes, it's odd" もしくは "No, it's even" を表示
}

isOdd(3);
isOdd(4);