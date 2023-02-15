// https://school.programmers.co.kr/learn/courses/30/lessons/135808

const k = 3;
const m = 4;
// const score = [1, 2, 3, 1, 2, 3, 1];
const score = [1, 2, 3, 1, 2, 3, 1];

const solution = (k, m, score) => {
  let answer = 0;
  score = score.sort((a, b) => b - a);
  let boxList = [];
  for (let i = 0, len = score.length; i < len; i++) {
    boxList.push(score[i]);
    if (boxList.length === m) {
      answer += Math.min(...boxList) * m;
      boxList = [];
    }
  }
  return answer;
};

console.log(solution(k, m, score));
