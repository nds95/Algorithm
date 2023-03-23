// https://school.programmers.co.kr/learn/courses/30/lessons/12977

const nums = [1, 2, 3, 4];

function solution(nums) {
  let answer = 0;

  const getPermutations = (arr, num) => {
    const results = [];

    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const permutations = getPermutations(rest, num - 1);
      const attached = permutations.map((v) => [fixed, ...v]);

      results.push(...attached);
    });

    return results;
  };

  const getIsPrimeNumber = (num) => {
    if (num % 2 === 0) return false;
    for (let i = 3, len = Math.sqrt(num); i <= len; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const permutationsArr = getPermutations(nums, 3);
  console.log(permutationsArr);
  const arr = [];
  for (let i = 0, len = permutationsArr.length; i < len; i++) {
    let sum = 0;
    permutationsArr[i].forEach((value) => {
      sum += value;
    });
    if (getIsPrimeNumber(sum)) answer++;
  }

  return answer;
}
console.log(solution(nums));
