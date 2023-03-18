// https://school.programmers.co.kr/learn/courses/30/lessons/12901

let a = 5;
const b = 24;

function solution(a, b) {
  const date = new Date(`2016-${a}-${b}`);

  return date.toString().split(" ")[0].toUpperCase();
}

console.log(solution(a, b));
