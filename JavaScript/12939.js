// https://school.programmers.co.kr/learn/courses/30/lessons/12939
const s = "1 2 3 4";

const solution = (s) => {
  let answer = "";
  let splitedStr = s.split(" ");
  return `${Math.min(...splitedStr)} ${Math.max(...splitedStr)}`;
  return answer;
};

console.log(solution(s));
