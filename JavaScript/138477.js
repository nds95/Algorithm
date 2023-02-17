// https://school.programmers.co.kr/learn/courses/30/lessons/138477

const k = 3;
const score = [10, 100, 20, 150, 1, 100, 200];

function solution(k, score) {
  // return Math.min(score);
  // let answer = [];
  // let hallOfFame = [];
  // for (let i = 0, len = score.length; i < len; i++) {
  //   // 명예의 전당에 k보다 적은 수가 있을 때 무조건 push
  //   if (hallOfFame.length < k) {
  //     hallOfFame.push(score[i]);
  //   }
  //   // score가 명예의 전당의 최저 점수보다 클 때
  //   if (hallOfFame.length > k && score[i] > Math.min(...hallOfFame)) {
  //     score = score.sort((a, b) => a - b);
  //     score[0] = score[i];
  //   }
  //   answer.push(Math.min(...hallOfFame));
  // }
  // return answer;
}

console.log(solution(k, score));
