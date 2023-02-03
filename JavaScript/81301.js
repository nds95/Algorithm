// https://school.programmers.co.kr/learn/courses/30/lessons/81301

const s = "one4seveneight";

function solution(s) {
  let answer = "";
  const words = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  const numbers = "0123456789";
  console.log(numbers);
  // 프로퍼티로 받은 단어가 words의 단어와 일치하면 해당하는 숫자 return
  const getNumber = (word) => {
    console.log(word);
    for (const key in words) {
      if (word === words[key]) {
        return key;
      }
    }
    return -1;
  };

  //for문으로 영문 찾기
  let word = "";
  for (let i = 0; i < s.length; i++) {
    console.log(`answer -> ${answer}`);
    if (numbers.includes(s[i])) {
      answer += `${s[i]}`;
      continue;
    }
    word += s[i];
    const getNumberResult = getNumber(word);
    if (getNumberResult === -1) continue;
    answer += getNumberResult;
    word = "";
  }
  return Number(answer);
}

console.log(solution(s));
