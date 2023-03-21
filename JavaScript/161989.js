// https://school.programmers.co.kr/learn/courses/30/lessons/161989

const n = 4;
const m = 1;
const section = [1, 2, 3, 4];

const solution = (n, m, section) => {
  let answer = 0;
  let painedSection = 0;
  for (let i = 0, len = section.length; i < len; i++) {
    // 이미 페인트칠 한 구역이면 continue;
    if (painedSection >= section[i]) continue;

    const paintingSection = section[i] + m - 1;
    painedSection = paintingSection;
    answer++;
  }
  return answer;
};

console.log(solution(n, m, section));
