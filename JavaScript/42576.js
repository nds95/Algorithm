// https://school.programmers.co.kr/learn/courses/30/lessons/42576

const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];

const solution = (participant, completion) => {
  participant.sort();
  completion.sort();
  for (let i = 0, len = completion.length; i < len; i++) {
    console.log(participant[i], completion[i]);
    if (participant[i] !== completion[i]) return participant[i];
  }
  return participant[participant.length - 1];
};

console.log(solution(participant, completion));
