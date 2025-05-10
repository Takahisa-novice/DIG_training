'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// ファイル全体で使用する テスト用の変数を宣言する
let actual;
let expected;

// ファイル全体で使用する テスト用の関数
function validateTest(actual, expected){
  if (actual === expected) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
}

// テストする対象のコード
function add(a, b) {
  return a + b;
}

actual = add(1, 2); // テストを行う式（の演算結果）を actual に代入
expected = 3; // 式の期待値を expected に代入

validateTest(actual, expected);

/**
 * @param {string} firstName - 下の名前
 * @param {string} lastName - 苗字
 * @returns {string} 名前と苗字を連結し、間にスペースを入れたもの
 */
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

actual = getFullName("Ken", "Watanabe");
expected = "Ken Watanabe";

validateTest(actual, expected);

/**
 * @param {string} name - 人の名前
 * @param {boolean} isFormal - 敬称をつけるべきかどうか（敬称ありなら true、無しなら false）
 * @returns {string} 与えられた人の名前と敬称が入った挨拶文
 */
function simpleGreeting(name, isFormal) {
  if(isFormal){
    return "Hello, " + name + "-san.";
  }else{
    return "Hello, " + name + ".";
  }
}

actual = simpleGreeting("Amy", true);
expected = "Hello, Amy-san.";

validateTest(actual, expected);

actual = simpleGreeting("Matt", false);
expected = "Hello, Matt.";

validateTest(actual, expected);


/**
 * @param {number} num1 - 1 番目の数字
 * @param {number} num2 - 2 番目の数字
 * @returns {boolean} 与えられた 1 番目の数字が 2 番目の数より大きいかどうか
 */

function isGreaterThan(num1, num2){
  if(num1 > num2){
    return true;
  }else{
    return false;
  }
}

actual = isGreaterThan(5, 4);
expected = true;

validateTest(actual, expected);

actual = isGreaterThan(3, 4);
expected = false;

validateTest(actual, expected);

/**
 * @param {string} name - 人の名前
 * @returns {string} 与えられた人の名前の挨拶文
 */
function greeting(name) {
  return "Hello, " + name + "!";
}

actual = greeting("Kimiko");
expected = "Hello, Kimiko!";

validateTest(actual, expected);

/**
 * @param {"+"|"-"|"*"|"/"|"**"|"%"} operator - 使用する算術演算子を表す文字列
 * @param {number} operand1 - 1 番目の被演算子
 * @param {number} operand2 - 2 番目の被演算子
 * @returns {number} 与えられた演算子を被演算子と組み合わせて実行した結果
 */

function operate(operator, operand1, operand2){
  if (operator === "+"){
    return operand1 + operand2;
  }else if (operator === "-"){
    return operand1 - operand2;
  }else if (operator === "*"){
    return operand1 * operand2;
  }else if (operator === "/"){
    return operand1 / operand2;
  }else if (operator === "**"){
    return operand1 ** operand2;
  }else if (operator === "%"){
    return operand1 % operand2;
  }
}

actual = operate("+", 1, 2);
expected = 3;

validateTest(actual, expected);

actual = operate("-", 100, 33);
expected = 67;

validateTest(actual, expected);

// *, /, **, % を使ってさらにテストを書いてみましょう
actual = operate("*", 2, 3);
expected = 6;

validateTest(actual, expected);

actual = operate("**", 2, 8);
expected = 256;

validateTest(actual, expected);

actual = operate("/", 9, 2);
expected = 4.5;

validateTest(actual, expected);

actual = operate("%", 9, 2);
expected = 1;

validateTest(actual, expected);

/**
 * @param {string} color - 確認したい色の名前
 * @returns {boolean} 与えられた色が虹色に含まれているかどうか
 */
function isRainbowColor(color){
  const rainbowList = ["red","orange","yellow","green","blue","indigo","violet"];
  if (rainbowList.includes(color)){
    return true;
  }else{
    return false;
  }
}

actual = isRainbowColor("red");
expected = true;

validateTest(actual, expected);

actual = isRainbowColor("rEd");
expected = false;

validateTest(actual, expected);

actual = isRainbowColor("Brown");
expected = false;

validateTest(actual, expected);

// 他の色を確認するテストを書きましょう
actual = isRainbowColor("blue");
expected = true;

validateTest(actual, expected);

actual = isRainbowColor("yellow");
expected = true;

validateTest(actual, expected);

actual = isRainbowColor("black");
expected = false;

validateTest(actual, expected);

// 中級演習

/**
 * @param {any} data - 確認する値
 * @returns {string} 与えられた引数のデータ型を表す分かりやすいメッセージ
 */
function typeOfFriendly(data){
  if (typeof data === "string"){
    return "与えられた引数は文字列です。";
  }else if (typeof data === "number"){
    return "与えられた引数は数値です。";
  }else if (typeof data === "boolean"){
    return "与えられた引数は真偽値です。";
  } else if (typeof data === "undefined"){
    return "与えられた引数は定義されていません。"
  }
}

actual = typeOfFriendly("Hello");
expected = "与えられた引数は文字列です。";

validateTest(actual, expected);

actual = typeOfFriendly(5);
expected = "与えられた引数は数値です。";

validateTest(actual, expected);

// 他の値の型を確認するテストも書きましょう
actual = typeOfFriendly(true);
expected = "与えられた引数は真偽値です。";

validateTest(actual, expected);

actual = typeOfFriendly();
expected = "与えられた引数は定義されていません。";

validateTest(actual, expected);

/**
 * @param {"=="|"==="|"<"|"<="|">"|">="} comparision - 使用したい比較演算子
 * @param {number} operand1 - 1 番目の被演算子
 * @param {number} operand2 - 2 番目の被演算子
 * @returns {boolean} 与えられた演算子を被演算子と組み合わせて比較した結果
 */
function compare(comparision, operand1, operand2){
  switch (comparision){
    case "==":
      return operand1 == operand2;
    case "===":
      return operand1 === operand2;
    case "<":
      return operand1 < operand2;
    case "<=":
      return operand1 <= operand2;
    case ">":
      return operand1 > operand2;
    case ">=":
      return operand1 >= operand2;
  }
}

actual = compare("===", 1, 1);
expected = true;

validateTest(actual, expected);

actual = compare("===", 1, "1");
expected = false;

validateTest(actual, expected);

actual = compare("==", 1, "1");
expected = true;

validateTest(actual, expected);

// 他の演算子を使ったテストも書いてみましょう。
actual = compare("<", "2", "3");
expected = true;

validateTest(actual, expected);

actual = compare("<=", 1, "1");
expected = true;

validateTest(actual, expected);

// 応用演習
/**
 * @param {number} num1 - 1 番目の数値
 * @param {number} num2 - 2 番目の数値 (任意)
 * @param {number} num3 - 3 番目の数値 (任意)
 * @returns {string} 与えられた数字を 1 つの文字列に結合したもの
 */
// ここにコードを書きましょう
function concatenateNumbers(num1, num2 = [], num3 = []){
  return String(num1) + String(num2) + String(num3);
}

actual = concatenateNumbers(7);
expected = "7";

validateTest(actual, expected);

actual = concatenateNumbers(7, 9);
expected = "79";

validateTest(actual, expected);

// 必要に応じてテストを書きましょう。


/**
 * @param {number} quantity - 初めの数量
 * @param {number} period - 半減期（数量が半分になるまでの時間）
 * @param {number} time - 経過時間
 * @returns {number} 与えられた時間が経過したあとに残っている数量
 */
// ここにコードを書きましょう
function halfLife(quantity, period, time){
  return quantity * (1/2) ** (time/period);
}

actual = halfLife(1, 1, 1);
expected = 1 / 2;

validateTest(actual, expected);

actual = halfLife(8, 4, 2);
expected = 4 * Math.SQRT2;

validateTest(actual, expected);

actual = halfLife(2, 2, 4);
expected = 1 / 2;

validateTest(actual, expected);

// 必要に応じてテストを書きましょう。

actual = halfLife(3, 3, 6);
expected = 3 / 4;

validateTest(actual, expected);

actual = halfLife(10, 5, 10);
expected = 5 / 2;

validateTest(actual, expected);

// ナイトメア
/**
 * @param {number} num - 確認したい数字
 * @returns {boolean} 与えられた数字が素数かどうか
 */
function isPrime(num){
  if (num === 2){
    return true;
  }
  if (num < 2 || num % 2 === 0){
    return false;
  }
  let i = 3;
  while (i ** 2 <= num){
    if (num % i === 0){
      return false;
    }
    i += 2;
  }
  return true;
}

actual = isPrime(1);
expected = false;

validateTest(actual, expected);

actual = isPrime(2);
expected = true;

validateTest(actual, expected);

actual = isPrime(3);
expected = true;

validateTest(actual, expected);

actual = isPrime(4);
expected = false;

validateTest(actual, expected);

actual = isPrime(5);
expected = true;

validateTest(actual, expected);

actual = isPrime(104728);
expected = false;

validateTest(actual, expected);

actual = isPrime(104729);
expected = true;

validateTest(actual, expected);

// 必要に応じてテストを書きましょう。
actual = isPrime(104731);
expected = false;

validateTest(actual, expected);

actual = isPrime(113);
expected = true;

validateTest(actual, expected);
