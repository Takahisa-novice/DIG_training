'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function simplePasswordLock(password) {
  if (password === "password") {
    return "パスワードが合いました。ようこそ！";
  }else{
    return "パスワードが違います。もう一度入力してください。";
  }
}

console.log(simplePasswordLock("qwerty")); // => "パスワードが違います。もう一度入力してください。" と表示されるようにする。
console.log(simplePasswordLock("password")); // => "パスワードが合いました。ようこそ！" と表示されるようにする。

console.log("Hello".length);
console.log("The length of this string is 31".length);
console.log(" spaces! ".length);

function isItTooLong (str){
  if (str.length > 10){
    return true;
  }else{
    return false;
  }
}

function biggerNumber(numOne, numTwo){
  if (numOne > numTwo){
    console.log("The first argument is bigger.");
  }else if (numOne < numTwo){
    console.log("The second argument is bigger.");
  }else{
    console.log("The two argument are equal.")
  }
}

console.log(biggerNumber(4, 3)); // => 'The first argument is bigger.' と表示されるようにする。
console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.' と表示されるようにする。
console.log(biggerNumber(3, 3));

function printDataType(data) {
  if (typeof data === "number") {
    console.log("This is a number.");
  }else if (typeof data === "string") {
    console.log("This is a string.");
  }else if (typeof data === "boolean") {
    console.log("This is a boolean.");
  }else {
    console.log("This is not a string, boolean, or number.");
  }
}

function greeting(name, language){
  if (language === "Japanese"){
    console.log("Konnichiwa, " + name + "!");
  }else if (language === "English"){
    console.log("Hello, " + name + "!");
  }else if (language === "German"){
    console.log("Gutentag, " + name + "!");
  }else if (language === "Spanish"){
    console.log("Hola, " + name + "!");
  }
}

function isEven(num){
  if (typeof num === "number"){
    if (num % 2 === 0){
      return true;
    }else{
      return false;
    }
  }else{
    return "This is not a number.";
  }
}

console.log(isEven(4)); // => true が表示されるようにする。
console.log(isEven(7)); // => false が表示されるようにする。
console.log(isEven("こんにちは"));

// 中級演習
function isOdd(num){
  if (num % 2 === 1){
    return true;
  }else{
    return false;
  }
}

console.log(isOdd(2));
console.log(isOdd(3));

function isPositive(num){
  if (num > 0){
    return true;
  }else{
    return false;
  }
}

console.log(isPositive(-5));
console.log(isPositive(5));

function isNegative(num){
  if (num < 0){
    return true;
  }else{
    return false;
  }
}

console.log(isNegative(-8));
console.log(isNegative(2));

function isZero(num){
  if (num === 0){
    return true;
  }else{
    return false;
  }
}

console.log(isZero(0));
console.log(isZero(6));

// 0からnumber未満の数を返す
function randomNumber(number){
  return Math.floor(Math.random() * number);
}

function guessMyNumber(number){
  let randomNum = randomNumber(6);
  if(randomNum === number){
    return "YES!";
  }else{
    return "NO!";
  }
}

console.log(randomNumber(10));
console.log(guessMyNumber(5));
console.log(guessMyNumber(4));
console.log(guessMyNumber(3));

// 応用演習
function randomStopLight(){
  let randomNum = randomNumber(11);
  if (randomNum < 3){
    return "🔴Red";
  }else if(randomNum >= 3 && randomNum <=6){
    return "🟡Yellow";
  }else if(randomNum > 6){
    return "🟢Green";
  }
}
console.log(randomStopLight());
console.log(randomStopLight());
console.log(randomStopLight());