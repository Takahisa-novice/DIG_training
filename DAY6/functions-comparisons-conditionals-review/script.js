'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let actual;
let expected;

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
 * @param {string} str - テストの対象となる文字列
 * @param {number} num - 確認したい文字数
 * @returns {any} 与えられた文字列の長さが確認したい文字数より長いかどうか
 */
function isLongerThan(str, num){
  if (typeof str !== "string"){
    return "Invalid input.";
  }
  if (str.length > num){
    return true;
  }else{
    return false;
  }
}

actual = isLongerThan("three", 3);
expected = true;

validateTest(actual, expected);

actual = isLongerThan("three", 5);
expected = false;

validateTest(actual, expected);

actual = isLongerThan(3, 5);
expected = "Invalid input.";

validateTest(actual, expected);

/**
 * @param {number} num - テストの対象となる数値
 * @returns {boolean} 与えられた数値が奇数かどうかを表すブーリアン
 */
function isOddWithoutIf(num){
  return (num % 2 === 1)
}

actual = isOddWithoutIf(3);
expected = true;

validateTest(actual, expected);

actual = isOddWithoutIf(4);
expected = false;

validateTest(actual, expected);

/**
 * @param {number} num - 数値（0-10）。その名前がアルファベットの形で返ることになる
 * @returns {"zero"|"one"|"two"|"three"|"four"|"five"|"six"|"seven"|"eight"|"nine"|"ten"} 与えられた数値をアルファベットで記した時の名前
 */
function getSimpleNumberName(num){
  switch(num){
    case 0:
      return "zero";
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    case 8:
      return "eight";
    case 9:
      return "nine";
    case 10:
      return "ten";
    default:
      return "値がありません"
  }
}

actual = getSimpleNumberName(0);
expected = "zero";

validateTest(actual, expected);

// さらにテストを書いて、コードが正しいことを確認してください
actual = getSimpleNumberName(1);
expected = "one";

validateTest(actual, expected);

actual = getSimpleNumberName(10);
expected = "ten";

validateTest(actual, expected);

actual = getSimpleNumberName(12);
expected = "値がありません";

validateTest(actual, expected);

/**
 * @param {number} num - 正多角形の辺の数 (3-8)
 * @returns {"triangle"|"square"|"pentagon"|"hexagon"|"heptagon"|"octagon"} 与えられた数の辺を持つ正多角形の英語名
 */
function getPolygonName(num){
  switch(num){
    case 3:
      return "triangle";
    case 4:
      return "square";
    case 5:
      return "pentagon";
    case 6:
      return "hexagon";
    case 7:
      return "heptagon";
    case 8:
      return "octagon";
    default:
      return "値がありません"
  }
}

actual = getPolygonName(3);
expected = "triangle";

validateTest(actual, expected);

// さらにテストを書いて、コードが正しいことを確認してください
actual = getPolygonName(8);
expected = "octagon";

validateTest(actual, expected);

actual = getPolygonName(11);
expected = "値がありません";

validateTest(actual, expected);

// 中級演習
/**
 * @param {1|2|3|4|5|6|7|8|9|10|11|12} hour - 時 (12時間制)
 * @param {number} minutes - 分
 * @param {"AM"|"PM"} mark - "AM" または "PM"
 * @returns {"morning"|"afternoon"|"evening"|"night"} 大まかな「時間帯」
 */
// ここにコードを書きましょう
function getTimeOfDay(hour, minutes, mark){
  if(mark === "PM"){
    if(hour !== 12){
      hour += 12;
    }
  }
  if (4 <= hour && hour <= 11){
    return "morning";
  }else if (12 <= hour && hour <= 16){
    return "afternoon";
  }else if (17 <= hour && hour <= 20){
    if (hour === 20 && minutes >= 30){
      return "night";
    }
    return "evening";
  }else if (21 <= hour && hour <= 24 || 0 <= hour && hour <=3){
    return "night";
  }
}

actual = getTimeOfDay(4, 0, "AM");
expected = "morning";

validateTest(actual, expected);

actual = getTimeOfDay(3, 59, "AM");
expected = "night";

validateTest(actual, expected);

// さらにテストを書いて、コードが正しいことを確認してください。
actual = getTimeOfDay(8, 29, "PM");
expected = "evening";

validateTest(actual, expected);

actual = getTimeOfDay(8, 40, "PM");
expected = "night";

validateTest(actual, expected);

actual = getTimeOfDay(11, 59, "AM");
expected = "morning";

validateTest(actual, expected);

actual = getTimeOfDay(12, 0, "PM");
expected = "afternoon";

validateTest(actual, expected);

/**
 * @param {number} radius - 半径
 * @returns {number} 与えられた半径の円の面積
 */
function getAreaOfCircle(radius){
  return radius ** 2 * Math.PI;
}

// ここにあなたのテストを書きましょう
actual = getAreaOfCircle(1);
expected = Math.PI;

validateTest(actual, expected);

actual = getAreaOfCircle(2.5);
expected = 6.25 * Math.PI;

validateTest(actual, expected);

/**
 * @param {number} num - 数値。その名前がアルファベットの形で返ることになる
 * @returns {number} 与えられた数値をアルファベットで記した時の名前
 */
function getNumberName(num){
  let result = "";
  if(num < 0){
    result += "negative ";
    num *= -1;
  }else if(num === 0){
    return "zero";
  }
  let thousand = Math.floor(num / 1000);
  let three_digits = num % 1000;
  if (thousand > 0){
    result += one(thousand) + " thousand ";
  }
  if(three_digits !== 0){
    result += three(three_digits);
  }
  return result;
}

function one(num){
  return ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"].at(num);
}

function under_20(num){
  return ["ten", "eleven", "tweleve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"].at(num-10);
}

function ten(num){
  return ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"].at(num);
}

function two(num){
  if (num === 0){
    return "";
  }else if (num < 10){
    return " " + one(num);
  }else if (num < 20){
    return " " + under_20(num);
  }else{
    let two_digit = Math.floor(num / 10);
    let one_digit = num % 10;
    return " " + ten(two_digit) + (one_digit !== 0 ? " " + one(one_digit) : "");
  }
}

function three(num){
  let hundred = Math.floor(num / 100);
  let ten = num % 100;
  let result = "";
  if(hundred > 0){
    result += one(hundred) + " hundred";
  }
  if (hundred !== 0){
    result += two(ten);
  }
  return result;
}

actual = getNumberName(0);
expected = "zero";

validateTest(actual, expected);

actual = getNumberName(1345);
expected = "one thousand three hundred forty five";

validateTest(actual, expected);
// さらにテストを書いて、コードが正しいことを確認してください

actual = getNumberName(764);
expected = "seven hundred sixty four";

validateTest(actual, expected);

actual = getNumberName(-9999);
expected = "negative nine thousand nine hundred ninety nine";

validateTest(actual, expected);