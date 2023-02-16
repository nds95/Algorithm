// https://school.programmers.co.kr/learn/courses/30/lessons/138477

const k = 3;
const score = [10, 100, 20, 150, 1, 100, 200];

const solution = (k, score) => {
  let answer = [];
  let hallOfFame = [];
  for (let i = 0, len = score.length; i < len; i++) {
    if (hallOfFame.length < k) hallOfFame.push(score[i]);
    // score가 명예의 전당의 최저 점수보다 클 때
    if (score[i] > Math.min(...hallOfFame)) {
    }
    answer.push(Math.min(...hallOfFame));
  }
};

console.log(solution(k, score));
