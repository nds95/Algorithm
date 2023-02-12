// https://school.programmers.co.kr/learn/courses/30/lessons/142086

const s = "asdasd";

function solution(s) {
  let answer = [];
  let usedWordsArr = [];

  // 만약 처음 사용되었다면 usedWordsArr에 넣고 push(-1);
  // 앞에 사용된 적이 있다면 거리 구하고 해당 값 push
  for (let i = 0, len = s.length; i < len; i++) {
    const currentWord = s[i];
    if (!usedWordsArr.includes(currentWord)) {
      usedWordsArr.push(currentWord);
      answer.push(-1);
      continue;
    }

    let count = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (currentWord === s[j]) {
        answer.push(count);
        break;
      }
      count++;
    }
  }

  return answer;
}

console.log(solution(s));
