// https://school.programmers.co.kr/learn/courses/30/lessons/132267

const a = 2;
const b = 1;
const n = 20;

function solution(a, b, n) {
  let answer = 0;
  let emptyCola = n;

  let isDone = true;
  const changeCola = (cola) => {
    if (cola / a < 1) isDone = false;
    answer += Math.trunc(cola / a) * b;
    emptyCola = Math.trunc(cola / a) * b + (cola % a);
  };

  while (isDone) {
    changeCola(emptyCola);
    if (emptyCola === 0 || emptyCola === 1) isDone = false;
  }

  return answer;
}

console.log(solution(a, b, n));
