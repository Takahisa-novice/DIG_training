'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function validateTest(actual, expected){
  if (actual === expected) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
}

/**
 * @param {number} num1 - 1 番目の数字
 * @param {number} num2 - 2 番目の数字
 * @returns {"X は Y と等しい" | "X は Y より小さい" | "X は Y より大きい"} 与えられた 2 つの数字の比較結果
 */
function compareTwoNumbers(num1, num2){
  if (num1 === num2){
      return num1 + " は " + num2 + " と等しい";
  }else if (num1 < num2){
      return num1 + " は " + num2 + " より小さい"; 
  }else if (num1 > num2){
      return num1 + " は " + num2 + " より大きい";
  }
}

let actual = compareTwoNumbers(1, 1);
let expected = "1 は 1 と等しい";

validateTest(actual, expected);

actual = compareTwoNumbers(3, 4);
expected = "3 は 4 より小さい";

validateTest(actual, expected);


// 期待値が "X は Y より大きい" になるテストを書いてみましょう
actual = compareTwoNumbers(10, 5);
expected = "10 は 5 より大きい";

validateTest(actual, expected);


/**
 * @param {number} ??? - 年齢
 * @returns {boolean} 与えられた年齢がティーンエイジャー（13 歳から 19 歳までの間：「thirTEEN」から「nineTEEN」）かどうか
 */
function isTeenager(age) {
  // ここにコードを書きましょう.
  if (typeof age === "number"){
    if ( 13 <= age && age <= 19){
      return true;
    } else {
      return false;
    }
  }else{
    return "無効です！与えられた年齢は数字ではありません！";
  }
}

actual = isTeenager(3);
expected = false;

validateTest(actual, expected);

actual = isTeenager(14);
expected = true;

validateTest(actual, expected);


// さらにテストを書いて、コードが正しいことを確認してください。
actual = isTeenager(20);
expected = false;

validateTest(actual, expected);

actual = isTeenager("Hello!");
expected = "無効です！与えられた年齢は数字ではありません！";

validateTest(actual, expected);

actual = isTeenager(true);
expected = "無効です！与えられた年齢は数字ではありません！";

validateTest(actual, expected);

actual = isTeenager();
expected = "無効です！与えられた年齢は数字ではありません！";

validateTest(actual, expected);

/**
 * @param {string} name - 人の名前
 * @param {boolean} title - 名前に"san" を付ける場合は true　何もつけない場合は false
 * @param {boolean} greet - "Hello" なら true　"Goodbye" なら false
 * @returns {string} 与えられた引数に応じた適切な挨拶文

 */
// ここにコードを書きましょう.
function anotherGreeting(name, title, greet){
  if (typeof name !== "string" || typeof title !== "boolean" || typeof greet !== "boolean"){
    return "無効な入力値です！";
  }
  if (title){
    if (greet){
      return "Hello, " + name + "-san.";
    }else{
      return "Goodbye, " + name + "-san.";
    }
  }else{
    if (greet){
      return "Hello, " + name + "!";
    }else{
      return "Goodbye, " + name + "!";
    }
  }

}


actual = anotherGreeting("Mary", true, true);
expected = "Hello, Mary-san.";

validateTest(actual, expected);

actual = anotherGreeting("Mary", false, true);
expected = "Hello, Mary!";

validateTest(actual, expected);

actual = anotherGreeting("Felix", true, false);
expected = "Goodbye, Felix-san.";

validateTest(actual, expected);

// さらにテストを書いて、コードが正しいことを確認してください。
actual = anotherGreeting("Sato", false, false);
expected = "Goodbye, Sato!";

validateTest(actual, expected);

actual = anotherGreeting(true, false, true);
expected = "無効な入力値です！";

validateTest(actual, expected);

actual = anotherGreeting("Sam", true, 0);
expected = "無効な入力値です！";

validateTest(actual, expected);

/**
 * @param {number} score - 0 以上 100 以下の点数（スコア）
 * @returns {"A"|"B"|"C"|"D"|"F"} 点数に応じた成績（グレード）
 */
function getGrade(score){
  if(score > 100 || score < 0){
    return "無効な点数です。";
  }
  if(90 <= score && score <=100){
    return "A";
  }else if(80 <= score && score <=89){
    return "B";
  }else if(70 <= score && score <=79){
    return "C";
  }else if(60 <= score && score <=69){
    return "D";
  }else if (score <= 59){
    return "F";
  }
}


actual = getGrade(95);
expected = "A";

validateTest(actual, expected);

// さらにテストを書いて、コードが正しいことを確認してください
actual = getGrade(85);
expected = "B";

validateTest(actual, expected);

actual = getGrade(55);
expected = "F";

validateTest(actual, expected);

actual = getGrade(101);
expected = "無効な点数です。";

validateTest(actual, expected);

// さらにテストを書いて、コードが正しいことを確認してください

actual = getGrade(-5);
expected = "無効な点数です。";

validateTest(actual, expected);

/**
 * @param {"A"|"B"|"C"|"D"|"F"} ??? - 成績（グレード）
 * @returns {number} 各成績における最高点（ベストスコア）
 */
function getBestScore(grade){
  if (typeof grade === "string"){
    switch(grade){
      case "A":
        return 100;
      case "B":
        return 89;
      case "C":
        return 79;
      case "D":
        return 69;
      case "F":
        return 59;
      default:
        return "無効な成績です。";
    }
  }else{
    return "無効な成績です。";
  }
}

actual = getBestScore("A");
expected = 100;

validateTest(actual, expected);

actual = getBestScore("B");
expected = 89;

validateTest(actual, expected);

// さらにテストを書いて、コードが正しいことを確認してください
actual = getBestScore("C");
expected = 79;

validateTest(actual, expected);

actual = getBestScore("D");
expected = 69;

validateTest(actual, expected);

actual = getBestScore("F");
expected = 59;

validateTest(actual, expected);

actual = getBestScore("恐竜ってすばらしい");
expected = "無効な成績です。";

validateTest(actual, expected);

actual = getBestScore(100);
expected = "無効な成績です。";

validateTest(actual, expected);

// さらにテストを書いて、コードが正しいことを確認してください
actual = getBestScore(90);
expected = "無効な成績です。";

validateTest(actual, expected);

actual = getBestScore("100");
expected = "無効な成績です。";

validateTest(actual, expected);

/**
 * @param {any} operand1 - １つめの被演算子
 * @param {any} operand2 - ２つめの被演算子
 * @returns {any} ２つの被演算子を与えられた順番のまま || で評価したときと同じ結果
 */
// ここにコードを書きましょう
function or(operand1, operand2){
  if(operand1 === true && operand2 === true){
    return true;
  }else if (operand1 === true && operand2 === false){
    return true;
  }else if (operand1 === false && operand2 === true){
    return true;
  }else{
    return false;
  }
}


actual = or(true, true);
expected = true;

validateTest(actual, expected);

actual = or(true, false);
expected = true;

validateTest(actual, expected);

// さらにテストを書いて、コードが正しいことを確認してください

actual = or(false, true);
expected = true;

validateTest(actual, expected);

actual = or(false, false);
expected = false;

validateTest(actual, expected);

actual = or("bananas", false);
expected = "bananas";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = or("", "bananas");
expected = "bananas";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}