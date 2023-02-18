// https://school.programmers.co.kr/learn/courses/30/lessons/138477;

const k = 3;
const score = [10, 100, 20, 150, 1, 100, 200];

function solution(k, score) {
  let answer = [];
  let hallOfFame = [];
  for (let i = 0, len = score.length; i < len; i++) {
    const todayScore = score[i];
    // 명예의 전당에 k보다 적은 수가 있을 때 무조건 push
    if (hallOfFame.length < k) {
      hallOfFame.push(todayScore);
    } else if (
      hallOfFame.length === k &&
      todayScore > Math.min(...hallOfFame)
    ) {
      hallOfFame.sort((a, b) => a - b);
      hallOfFame[0] = score[i];
    }
    answer.push(Math.min(...hallOfFame));
  }
  return answer;
}

console.log(solution(k, score));
