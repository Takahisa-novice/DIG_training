console.log("advanced.js から simpleFunctionA を呼び出しています。: ", simpleFunctionA());

function guessMyNumber(n) {
  let upperBound = 7;
  let correctNum = randomNumber(upperBound);
  if (n > upperBound) {
    return "0 から " + upperBound + "の間の数字を入力してください。";
  } else if (n === correctNum) {
    return "当たりです！";
  }
  return "残念！正解は " +  correctNum + " でした。";
}

function randomNumber(n) {
  return Math.floor(Math.random() * (n + 1));
}

const firstTest = guessMyNumber(1);
const secondTest = guessMyNumber(2);
const thirdTest = guessMyNumber(3);

console.log(firstTest);
console.log(secondTest);
console.log(thirdTest);