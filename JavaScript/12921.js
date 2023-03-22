// https://school.programmers.co.kr/learn/courses/30/lessons/12921

const n = 100;

function solution(n) {
  const s = new Set();
  //짝수는 소수 일수가 없음
  for (let i = 3; i <= n; i += 2) {
    s.add(i);
  }
  s.add(2);
  console.log(s);
  for (let j = 3; j ** 2 < n; j++) {
    if (s.has(j)) {
      for (let k = j ** 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}

console.log(solution(n));
