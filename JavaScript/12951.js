// https://school.programmers.co.kr/learn/courses/30/lessons/12951

const s = "for     the last week";

const solution = (s) => {
  let reg = new RegExp(/\s+/, "g");
  s = s.toLowerCase().split(" ");

  for (let i = 0, len = s.length; i < len; i++) {
    if (!s[i]) continue;
    let str = s[i].split("");
    str.splice(0, 1, str[0].toUpperCase());
    s[i] = str.join("");
  }

  return s.join(" ");
};

console.log(solution(s));
