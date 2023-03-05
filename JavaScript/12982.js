// https://school.programmers.co.kr/learn/courses/30/lessons/12982
const d = [1];
let budget = 10;

function solution(d, budget) {
  const sortedArr = d.sort((a, b) => {
    return a - b;
  });
  let sum = 0;

  for (let i = 0, len = d.length; i < len; i++) {
    sum += sortedArr[i];
    if (sum > budget) return i;
    if (sum === budget) return i + 1;
  }
  return d.length;
}

console.log(solution(d, budget));
