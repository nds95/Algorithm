// https://school.programmers.co.kr/learn/courses/30/lessons/12921

const n = 10;

function solution(n) {
  let answer = 1;

  const isPrimeNumber = (num) => {
    for (let i = 2, len = num; i < len; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  for (let i = 3, len = n; i <= len; i++) {
    if (!(i % 2)) continue;
    if (isPrimeNumber(i)) answer++;
  }
  return answer;
}

console.log(solution(n));
