// https://school.programmers.co.kr/learn/courses/30/lessons/136798

const number = 5;
const limit = 3;
const power = 2;

const solution = (number, limit, power) => {
  let answer = 1;
  let divisorList = [1];
  // 약수의 개수를 구하는 함수
  const getDivisorCount = (num) => {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (!(num % i)) {
        count++;
        if (num / i !== i) count++;
      }
    }
    return count;
  };
  //for loop를 돌며 각 기사의 약수 개수를 구한다.
  for (let i = 2; i <= number; i++) {
    const divisorCountResult = getDivisorCount(i);
    // 각 약수 개수를 배열에 담는다.
    divisorList.push(divisorCountResult);
  }
  console.log(divisorList);
  // 각 개수를 배열로 담고, list.map으로 limit보다 큰 값을 power로 바꿔준다.
  divisorList = divisorList.map((value) => {
    if (value > limit) return power;
    return value;
  });
  // power로 필터링한 값을 전부 더한 다음 return
  return divisorList.reduce((a, b) => a + b);
};

console.log(solution(number, limit, power));
