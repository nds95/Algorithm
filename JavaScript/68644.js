// https://school.programmers.co.kr/learn/courses/30/lessons/68644

// const numbers = [2, 1, 3, 4, 1];
const numbers = [5, 0, 2, 7];

function solution(numbers) {
  let answer = [];
  for (let i = 0, len = numbers.length; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (j === i) continue;
      const sum = numbers[i] + numbers[j];
      if (!answer.includes(sum)) {
        answer.push(sum);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}

console.log(solution(numbers));
