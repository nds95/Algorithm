// https://school.programmers.co.kr/learn/courses/30/lessons/147355

const t = "500220839878";
const p = "7";

function solution(t, p) {
  let answerList = [];

  for (let i = 0, len = t.length; i < len; i++) {
    let word = "";
    for (let j = i, jlen = j + p.length; j < jlen; j++) {
      if (t[j] === undefined) continue;
      word += t[j];
      if (word.length === p.length && Number(word) <= Number(p)) {
        answerList.push(word);
      }
    }
  }

  return answerList.length;
}

console.log(solution(t, p));
