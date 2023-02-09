// https://school.programmers.co.kr/learn/courses/30/lessons/1845

const nums = [3, 3, 3, 2, 2, 2];

function solution(nums) {
  let answer = Math.trunc(nums.length / 2);
  const setArr = [...new Set(nums)];
  answer = answer > setArr.length ? setArr.length : answer;
  return answer;
}

console.log(solution(nums));
