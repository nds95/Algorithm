// https://school.programmers.co.kr/learn/courses/30/lessons/42889

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

function solution(N, stages) {
  let answer = [];

  for (let i = 1; i <= N; i++) {
    const thisStage = i;
    // 스테이지에 도달한 플레이어의 수
    let reachPlayerCount = 0;
    // 스테이지에 도달했으나 클리어하지 못한 플레이어의 수
    let failedPlayerCount = 0;
    for (let j = 0, len = stages.length; j < len; j++) {
      if (thisStage <= stages[j]) {
        reachPlayerCount++;
        if (thisStage === stages[j]) failedPlayerCount++;
      }
    }
    // 실패율
    let failureRate =
      reachPlayerCount === 0 ? 0 : failedPlayerCount / reachPlayerCount;
    answer.push({
      stage: thisStage,
      failureRate: failureRate,
    });
  }
  answer.sort((a, b) => b.failureRate - a.failureRate);

  let answerArr = [];
  for (const value of answer) {
    answerArr.push(value.stage);
  }

  return answerArr;
}

console.log(solution(N, stages));
