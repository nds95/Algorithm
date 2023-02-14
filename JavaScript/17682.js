// https://school.programmers.co.kr/learn/courses/30/lessons/17682

const dartResult = "1D2S#10S";

const solution = (dartResult) => {
  const bonusList = ["S", "D", "T"];
  const optionsList = ["*", "#"];

  let numberList = [];
  // get numberList
  for (let i = 0, len = dartResult.length; i < len; i++) {
    // bonusList에 포함되지 않은 index 값은 무시한다.
    if (!bonusList.includes(dartResult[i])) continue;
    let bonus = dartResult[i] === "D" ? 2 : dartResult[i] === "T" ? 3 : 1;
    let num =
      dartResult[i - 1] !== "0"
        ? Number(dartResult[i - 1])
        : dartResult[i - 2] === "1"
        ? 10
        : 0;

    // 해당 기회에서 option이 없을 때 바로 numberList에 push
    if (!optionsList.includes(dartResult[i + 1])) {
      numberList.push(num ** bonus);
      continue;
    }
    const option = dartResult[i + 1];
    // option이 '#'일 때 -1 곱해주기
    if (option === "#") {
      numberList.push(num ** bonus * -1);
      continue;
    }
    // option이 '*'일 때 이전 점수와 현재 점수 * 2 해주기(첫 번째 기회일 때는 현재 기회에만 * 2)
    if (numberList.length === 0) {
      numberList.push(num ** bonus * 2);
      continue;
    }

    numberList[numberList.length - 1] *= 2;
    numberList.push(num ** bonus * 2);
  }

  console.log(numberList);
  return numberList.reduce((a, b) => a + b);
};

console.log(solution(dartResult));
