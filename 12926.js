// https://school.programmers.co.kr/learn/courses/30/lessons/12926
const s = "a B Z";
const n = 25;

function solution(s, n) {
  let answer = "";
  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    const asciiNum = s[i].charCodeAt();
    const reductedNum = reduction(asciiNum, n);
    answer += String.fromCharCode(reductedNum);
  }

  return answer;

  function reduction(num, n) {
    const asciiCriteria =
      num <= "Z".charCodeAt() ? "Z".charCodeAt() : "z".charCodeAt();
    const data = num + n;
    return data > asciiCriteria ? data - 26 : data;
  }
}

console.log(solution(s, n));
