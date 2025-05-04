'use strict'
// 1行目に記載している 'use strict' は削除しないでください

console.log(1100 >= 99) // => true を表示

console.log(1 >= 21) // => false を表示

console.log(62 !== 126) // => true を表示

console.log("5" === 5) // => false を表示

console.log("6" !== "six") // => true を表示

console.log(2 * 3 * 10 > 50);

function isEqual(valueOne, valueTwo) {
  return valueOne == valueTwo;
}

console.log(isEqual(123, "123"));

function isGreaterThan(valueOne, valueTwo) {
  if(valueOne > valueTwo){
    return true;
  }else{
    return false;
  }
}

console.log(isGreaterThan(8, 33));


// 中級演習
function isOfAge(age){
  if(age >= 20){
    console.log("飲酒可能な年齢です。");
    return true;
  }else{
    console.log("未成年飲酒は法律で禁止されています。");
    return false;
  }
}

console.log(isOfAge(23));
console.log(isOfAge(18));

function isEven(n){
  while(n>2){
    n /= 2;
  }
  if(n===2){
    return true;
  }else{
    return false;
  }
}

function validCredentials(username, password){
  const enoughLength = 8;
  if(username.length > enoughLength && password.length > enoughLength){
    return true;
  }else{
    return false;
  }
}

console.log(validCredentials("rad80792", "xxxxxxx"));

// 応用演習
console.log(isEven(3));
console.log(isEven(4));

function getGreaterValue(num1, num2){
  if(num1 > num2){
    return num1;
  }else{
    return num2;
  }
}

console.log(getGreaterValue(10, 15));
console.log(getGreaterValue(15, 10));

// 可変長引数
function getGreatestValue(){
  let temp = arguments[0];
  for (var i=1; i<arguments.length; i++){
    if(temp < arguments[i]){
      temp = arguments[i];
    }
  }
  return temp;
}

console.log(getGreatestValue(10, 15)); // 15 を表示
console.log(getGreatestValue(15, 10)); // 15 を表示
console.log(getGreatestValue(1, 2, 3, 4, 5)); // 5 を表示
console.log(getGreatestValue(1, 10, 3, 4, 5)); // 10 を表示

// This is a flattened array

// Input:

let arr = [1,44, [2, [3,9], 67], 9];

 

// Function Defin 

function recur(a) {

  let newArr = [];

  for (let i =0 ; i < a.length; i++) {

      const element = a[i];

      if (Array.isArray(element)) {

          // Function calling itself recursion

          newArr.push(...recur(element))

      } else  {

          newArr.push(element)

      }

  }



  return newArr;

}