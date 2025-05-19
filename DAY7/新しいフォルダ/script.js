'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected){
  /* 配列同士はそのままでは比較できません。なぜできないのかについては今後のレッスンで詳しく説明しますが、ここでは JSON.stringify と呼ばれる JavaScript のビルトイン関数で文字列に置き換えてから比較することにしましょう。*/
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
  }  
}  
/**
 * @param {Array<string>} arrayOfPeople - 人の名前の配列
 * @returns {number} 与えられた配列の長さ
 */ 
function numberOfPeople(arrayOfPeople) {
  return arrayOfPeople.length;
}  

let actual = numberOfPeople(["Koike", "Mizuno", "Akagi", "Yano"]);
let expected = 4;

test(actual, expected);

let students = ["Takahashi", "Mizuno", "Harada", "Takeda", "Nikai"];

actual = numberOfPeople(students); // 宣言した配列 students を先ほど作成した numberOfPeople に渡しています。
expected = 5;

test(actual, expected);

students.push("Honda", "Suzuki", "Terada");

actual = numberOfPeople(students);
expected = 8;

test(actual, expected);

/**
 * @param {Array<any>} array - 配列
 * @returns {any} 与えられた配列の最後の要素を返す
 */
function last(array) {
  return array[array.length - 1];
}

actual = last(students);
expected = "Terada";

test(actual, expected);

/**
 * @param {Array<any>} array - 配列
 * @param {any} num - 配列の最後に追加する値
 * @returns {number} 処理後の配列の長さを返す。与えられた配列の末尾に、第 2 引数で渡された要素を追加してください。
 */
function myPush(array, num){
  array[array.length] = num;
  return array.length;
}

let array = [1, 2, 3, 4];

// 関数が正しい結果を返すことを確認する
actual = myPush(array, 5);
expected = 5;

test(actual, expected);

// 配列が正しく変更されていることを確認する
actual = array;
expected = [1, 2, 3, 4, 5];

// 上にも書きましたが、配列同士をそのまま比較することはできません。一旦、JSON.stringify で文字列に変換してから比較しましょう。
test(actual, expected);

// さらにテストを追加してみましょう。
actual = myPush(array, 6);
expected = 6;

test(actual, expected);

/**
 * @param {Array<any>} array - 配列
 * @returns {Array<any>} 配列の真ん中が "hi" に置き換えらえた配列、もしくは同じ配列を返す
 */
function hiInTheMiddle(array){
  let middleIndex =  Math.floor(array.length/2);
  if (array.length % 2 === 1){
    array[middleIndex] = "hi";
  }
  return array;
}

actual = hiInTheMiddle([1, 2, 3, 4, 5]);
expected = [1, 2, "hi", 4, 5];

test(actual, expected);

actual = hiInTheMiddle([1, 2, 3, 4]);
expected = [1, 2, 3, 4];

test(actual, expected);

/**
 * 与えられた配列から最後の要素を取り除き、その要素を返す
 * @param {Array<any>} array - 配列
 * @returns {any} 与えられた配列の最後の要素を返す
*/
function myPop(array){
  // 配列の最終インデックスにアクセスして一つ消す (返り値は配列に注意)
  return array.splice(array.length-1,1)[0];
}

array = [1, 2, 3, 4];

actual = myPop(array);
expected = 4;

test(actual, expected);

actual = array;
expected = [1, 2, 3];

test(actual, expected);

/**
 * 第 1 引数で与えられた配列の最初に第 2 引数の要素を追加
 * @param {Array<any>} array - 配列
 * @param {any} head - 配列の先頭に追加する値
 * @returns {number} 処理後の配列の長さを返す
*/
function myUnshift(array, head){
  // 配列の先頭インデックスに何も削除せずにheadを追加する
  array.splice(0, 0, head);
  return array.length;
}

array = [1, 2, 3, 4];

actual = myUnshift(array, 5);
expected = 5;

test(actual, expected);

actual = array;
expected = [5, 1, 2, 3, 4];

test(actual, expected);

/**
 * 与えられた配列の最初の要素を取り除き、その要素を返す
 * @param {Array<any>} array - 配列
 * @returns {any} 与えられた配列の先頭の要素を返す
*/
function myShift(array){
  // 配列の先頭インデックスにアクセスして一つ消す (返り値は配列に注意)
  return array.splice(0, 1)[0];
}

array = [1, 2, 3, 4];

actual = myShift(array);
expected = 1;

test(actual, expected);

actual = array;
expected = [2, 3, 4];

test(actual, expected);

/**
 * @param {Array<any>} array1 - 1 番目の配列
 * @param {Array<any>} array2 - 2 番目の配列
 * @returns {boolean} 2 つの配列が互いに逆順かどうか
*/
function areReverses(array1, array2){
  return (JSON.stringify(array1.toReversed()) === JSON.stringify(array2));
}

let array1 = [1, 2, 3, 4];
let array2 = [4, 3, 2, 1];

actual = areReverses(array1, array2);
expected = true;

test(actual, expected);

actual = array1;
expected = [1, 2, 3, 4];

test(actual, expected);

/**
 * @param {Array<any>} array1 - 1 番目の配列
 * @param {Array<any>} array2 - 2 番目の配列
 * @returns {Array<any>} 与えられた 2 つの配列を連結した新しい 1 つの配列を返す
*/
function myConcat(array1, array2){
  let result = []
  for (const x of array1){
    result.push(x);
  }
  for (const y of array2){
    result.push(y);
  }
  return result;
}

array1 = [1, 2, 3, 4];
array2 = [4, 3, 2, 1];

actual = myConcat(array1, array2);
expected = [1, 2, 3, 4, 4, 3, 2, 1];

test(actual, expected);

// 元の配列が変更されていないことを確認する
actual = array1;
expected = [1, 2, 3, 4];

test(actual, expected);

actual = array2;
expected = [4, 3, 2, 1];

test(actual, expected);

/**
 * @param {Array<number>} originalArray - 数字の配列
 * @returns {Array<number>} 与えられた配列の要素を昇順に並べた新しい配列
 */
function mySort(originalArray) {
  const n = array.length;
  const arr =  [...originalArray];
  const sorted = [];

  while (arr.length > 0){
    // 最小値とそのインデックスを探す
    let minIndex = 0;
    for (let i = 1; i < arr.length; i++){
      if (arr[i] < arr[minIndex]){
        minIndex = i;
      }
    }

    // 最小値を sortedに追加し、元の配列から削除
    sorted.push(arr[minIndex]);
    arr.splice(minIndex, 1);
  }

  return sorted;
}

let arrayToSort = [5, 4, 3, 2, 1];

actual = mySort(arrayToSort);
expected = [1, 2, 3, 4, 5];

// 正しい結果を返すことを確認する
test(actual, expected);

// 元の配列が変更されていないことを確認する
if (JSON.stringify(arrayToSort) === JSON.stringify([5, 4, 3, 2, 1])) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

// ここにテストを書いてください
arrayToSort = [13, 10, 8, 4, 5, 21, 2, 1, 3]; 

actual = mySort(arrayToSort);
expected = [1, 2, 3, 4, 5, 8, 10, 13, 21];
test(actual, expected);

// 元の配列が変更されていないことを確認する
if (JSON.stringify(arrayToSort) === JSON.stringify([13, 10, 8, 4, 5, 21, 2, 1, 3])) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}