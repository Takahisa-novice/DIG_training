'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let expected;
let actual;

function test(actual, expected){
  // 配列同士を比較するため、ここでは JSON.stringify で文字列に変換することにしましょう。
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
}

/**
 * @param {Array<number>} 数値型の要素を持つ配列
 * @returns {number} 与えられた配列のすべての数値の合計
 */
function sumArray(Array) {
  let sum = 0;
  for (const x of Array){
    sum += x;
  }
  return sum;
}

actual = sumArray([1, 2, 3, 4]);
expected = 10;

// さらにテストを書きましょう。
test(actual, expected);

/**
 * @param {Array<number>} 数値型の要素を持つ配列
 * @returns {number} 与えられた配列の全ての数値をかけ合わせた積 (product)
*/
function productArray(Array) {
  let result = 1;
  for (const x of Array){
    result *= x;
  }
  return result;
}

actual = productArray([1, 2, 3, 4]);
expected = 24;

test(actual, expected);

// さらにテストを書きましょう。
actual = productArray([1, 2, 3, 4, 5]);
expected = 120;

test(actual, expected);

/**
 * @param {Array<any>} 配列
 * @returns {boolean} 与えられた配列に "fun" という文字列が要素として入っているかどうかを表すブーリアン
*/
function hasFun(Array) {
  for (const element of Array){
    if (element === "fun"){
      return true;
    }
  }
  return false;
}

actual = hasFun(["dog", 2, false, "fun", "hello"]);
expected = true;

test(actual, expected);

actual = hasFun(["gift", 2, false, "run", "hello"]);
expected = false;

test(actual, expected);

// さらにテストを書きましょう。
actual = hasFun(["gift", 2, false, "funny", "hello"]);
expected = false;

test(actual, expected);

/**
 * @param {Array<any>} any
 * @returns {boolean} 与えられた配列の要素がブーリアンだけかどうかを表すブーリアン
*/
function containsOnlyBooleans(Array) {
  for(const element of Array){
    if (typeof element !== "boolean"){
      return false;
    }
  }
  return true;
}

actual = containsOnlyBooleans([true, false, true, false, false]);
expected = true;

test(actual, expected);

actual = containsOnlyBooleans([true, true, true, "not a boolean"]);
expected = false;

test(actual, expected);

/**
 * @param {Array<any>} 1番目の配列
 * @param {Array<any>} 2番目の配列
 * @returns {Array<any>} 与えられた2つの配列を連結させた配列
 */
function concatenate(Array1, Array2) {
  let result = [];
  for (const x of Array1){
    result.push(x);
  }
  for (const y of Array2){
    result.push(y);
  }
  return result;
}

actual = concatenate(["one", "two"], ["three", "four"]);
expected = ["one", "two", "three", "four"];


// さらにテストを書きましょう。
test(actual, expected);

/**
 * @param {Array<number>} 数値型の要素を持つ配列

 * @returns {Array<number>} 与えられた配列の中の偶数だけを入れた配列
*/
function getEvenNumbers(Array) {
  let result = [];
  for (const x of Array){
    if (x % 2 === 0){
      result.push(x);
    }
  }
  return result;
}

actual = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
expected = [2, 4, 6, 8];

// さらにテストを書きましょう。
test(actual, expected);

/**
 * @param {Array<number>} 第 1 引数：数値型の要素を持つ配列
 * @param {number} 第 2 引数：配列の中の数値にかける数値
 * @returns {Array<number>} 配列の中の数値に第 2 引数をかけた結果が入った新しい配列
*/
function getMultipliedArray(Array, num) {
  let result = []
  for (const x of Array){
    result.push(num * x);
  }
  return result;
}

actual = getMultipliedArray([1, 2, 3], 6);
expected = [6, 12, 18];

test(actual, expected);

actual = getMultipliedArray([4, 5, 6], -3);
expected = [-12, -15, -18];

// さらにテストを書きましょう。
test(actual, expected);

/**
 * @param {Array<number>} 数値型の要素を持つ配列
 * @returns {boolean} 与えられた配列が昇順になっているかを表すブーリアン
 */
function isSorted(array) {
  for (let i=0; i<array.length - 1; i++){
    if (array[i] > array[i+1]){
      return false;
    }
  }
  return true;
}

actual = isSorted([1, 2, 3]);
expected = true;

test(actual, expected);

actual = isSorted([3, 2, 3]);
expected = false;

test(actual, expected);

// さらにテストを書きましょう。

/**
 * @param {Array<any>} 配列
 * @param {string|number|boolean} 配列内での出現回数をカウントしたい値（値のデータ型は `string`、`number`、`boolean` のいずれかとする）
 * @returns {number} 第 2 引数の値が第 1 引数の配列内で出てきた回数
*/
function countOccurrences(array, x) {
  let cnt = 0;
  for (const element of array){
    if (element === x){
      cnt += 1;
    }
  }
  return cnt;
}

actual = countOccurrences([1, 2, 3], 2);
expected = 1;

test(actual, expected);

actual = countOccurrences([1, 2, 2], 2);
expected = 2;

test(actual, expected);

actual = countOccurrences([1, 2, "cat"], "cat");
expected = 1;

test(actual, expected);

// さらにテストを書きましょう。
/**
 * @param {Array<any>} arr
 * @returns {Array<any>} 与えられた配列の要素が逆の順番に入っている新しい配列
 */
function myReverse(arr) {
  const newArr = []
  for (let i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i]);
  }
  return newArr;
}

const japaneseIslands = ["九州", "四国", "本州", "北海道"]; 　// 日本の島が入っている配列です。

actual = myReverse(japaneseIslands);
expected = ["北海道", "本州", "四国", "九州"];

test(actual, expected);

// 元の配列が変更されていないことを確認してください。

actual = japaneseIslands;
expected = ["九州", "四国", "本州", "北海道"];

test(actual, expected);

// さらにテストを書きましょう。
const continents = ["アフリカ", "アジア", "ヨーロッパ", "アメリカ", "南極", "オーストラリア"];

actual = myReverse(continents);
expected = ["オーストラリア", "南極", "アメリカ", "ヨーロッパ", "アジア", "アフリカ"];

test(actual, expected);

actual = continents;
expected = ["アフリカ", "アジア", "ヨーロッパ", "アメリカ", "南極", "オーストラリア"];

test(actual, expected);

/**
 * @param {Array<number>} array
 * @param {"+"|"-"|"*"|"/"|"**"|"%"} 使用したい算術演算子を表す文字列
 * @param {number} 使用したい被演算子
 * @returns {Array<any>} 与えられた配列の各要素に、引数の算術演算子と被演算子を適用した結果が入った新たな配列
 */
function getOperatedArray(array, ope, num) {
  let result = [];
  switch(ope){
    case "+":
      for (const x of array){
        result.push(x + num);
      }
      break;
    case "-":
      for (const x of array){
        result.push(x - num);
      }
      break;
    case "*":
      for (const x of array){
        result.push(x * num);
      }
      break;
    case "/":
      for (const x of array){
        result.push(x / num);
      }
      break;
    case "%":
      for (const x of array){
        result.push(x % num);
      }
      break;
    case "**":
      for (const x of array){
        result.push(x ** num);
      }
      break;
    default:
      break;
  }
  return result;
}

actual = getOperatedArray([1, 2, 3], "+", 5);
expected = [6, 7, 8];

test(actual, expected);


actual = getOperatedArray([9, 6, 3], "/", 3);
expected = [3, 2, 1];

test(actual, expected);
//上記と同じく、配列を比較するためここでは JSON.stringify を使いましょう。

actual = getOperatedArray([1, 2, 3], "-", 5);
expected = [-4, -3, -2];

test(actual, expected);


actual = getOperatedArray([9, 6, 3], "*", 3);
expected = [27, 18, 9];

test(actual, expected);
actual = getOperatedArray([9, 6, 3], "*", 3);
expected = [27, 18, 9];

test(actual, expected);

actual = getOperatedArray([9, 6, 3], "%", 3);
expected = [0, 0, 0];

test(actual, expected);

/**
 * @param {Array<string>} 「痛む場所」が入った配列
 * @returns {string} お医者さんに診てもらうときに言うセリフ
*/
function callADoctor(Array) {
  let result = "先生、";
  let lastIndex = Array.length - 1;
  if(Array.length > 1){
    for (let i=0; i<lastIndex; i++){
      result += Array[i] + "と";
    }
    result += Array[lastIndex];
  }else{
    result += Array[0];
  }
  result += "が痛いんです！";
  return result;
}

actual = callADoctor(["頭"]);
expected = "先生、頭が痛いんです！";

test(actual, expected);

actual = callADoctor(["肩"]);
expected = "先生、肩が痛いんです！";

test(actual, expected);

actual = callADoctor(["頭", "肩", "膝", "足の指"]);
expected = "先生、頭と肩と膝と足の指が痛いんです！";

test(actual, expected);


/**
 * @param {Array<any>} array
 * @returns {number} 与えられた配列の「要素」の数。このとき、入れ子になった配列がある場合は、その配列内の要素も一つ一つカウントすること。
*/
function deepCount(array) {
  let count = 0;

  for (const item of array) {
    if (Array.isArray(item)) {
      count += deepCount(item); // 配列なら中も再帰的にカウント
    }else{
      count++; // 要素としてカウント
    }
  }

  return count;
}

actual = deepCount([1]);
expected = 1;

test(actual, expected);

actual = deepCount([1, 3]);
expected = 2;

test(actual, expected);

actual = deepCount([1, 3, [2, 4]]);
expected = 4;

test(actual, expected);

actual = deepCount(["a", "b", ["c", ["d", "e", ["f"]]]]);
expected = 6;

test(actual, expected);

/**
 * @param {Array<number>} 数値型の要素を持つ配列
 * @returns {Array<number>} 与えられた配列の数値が昇順に並び替えられた配列
 */
function mySort(Array) {
  if (Array.length <= 1){
    return Array;
  }

  const pivot = Array[0]; // 最初の要素をピボットに
  const left = [];
  const right = [];

  for (let i = 1; i < Array.length; i++){
    if (Array[i] < pivot){
      left.push(Array[i]);
    }else{
      right.push(Array[i]);
    }
  }

  // 再帰的にソートして結合
  return [...mySort(left), pivot, ...mySort(right)];
}

let numbers = [5, 4, 3, 2, 1];

actual = mySort(numbers);
expected = [1, 2, 3, 4, 5];

// 正しい結果を返すことを確認する
test(actual, expected);

// 元の配列が変更されていないことを確認する
test(numbers, [5, 4, 3, 2, 1]);

// さらにテストを書きましょう。

numbers = [12, 4, 8, 62, 21, 51, 88, 27];
actual = mySort(numbers);
expected  = [4, 8, 12, 21, 27, 51, 62, 88];
test(actual, expected);

/**
 * @param {Array<any>} arr
 * @returns {Array<any>} 与えられた配列を 1 次元配列に平坦化した配列
*/
function flattenDeep(arr){
  let result = [];
  for (const element of arr){
    // 配列を持っているなら
    if (Array.isArray(element)){
      result = result.concat(flattenDeep(element));
    }else{
      result.push(element);
    }
  }
  return result;
}
actual = flattenDeep([1, 2, 3, [4, 5, 6]]);
expected = [1, 2, 3, 4, 5, 6];

test(actual, expected);

expected = [1, 2, 3, 4, 5, 6];
actual = flattenDeep([
  [1, 2, 3],
  [4, 5, 6],
]);

test(actual, expected);

expected = [1, 2, 3, 4, 5, 6];
actual = flattenDeep([[1], [2], [3], [4, 5, 6]]);

test(actual, expected);

expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
actual = flattenDeep([[1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]]]);

test(actual, expected);