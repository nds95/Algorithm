// https://school.programmers.co.kr/learn/courses/30/lessons/140108

const s = "aaabbaccccabba";

const solution = (s) => {
  let answer = [];
  let sameCount = 0;
  let diffCount = 0;
  let word = "";
  let words = "";
  for (let i = 0, len = s.length; i < len; i++) {
    if (i === len - 1) {
      words += s[i];
      answer.push(words);
      break;
    }
    // word가 비어있을 때
    if (!word) {
      word = s[i]; // word가 비어있을 때 선언
      words += s[i];
      sameCount++;
      continue;
    }

    // word와 현재 문자열이 동일한 문자열일 때
    if (word === s[i]) {
      sameCount++;
      words += s[i];
      continue;
    }

    // word와 현재 문자열이 동일하지 않을 때
    diffCount++;
    words += s[i];

    // 카운트가 동일할 때 혹은 마지막 문자열일 때
    if (sameCount === diffCount) {
      answer.push(words);
      word = "";
      words = "";
      sameCount = 0;
      diffCount = 0;
    }
  }
  console.log(answer);
  return answer.length;
};

console.log(solution(s));
