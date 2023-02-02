// https://school.programmers.co.kr/learn/courses/30/lessons/42748

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  let resultArr = [];

  // commands의 index에 따른 알맞는 수를 구하는 함수
  const getSortedNum = (arr) => {
    let returnNum = 0;
    const startIdx = arr[0] - 1;
    const length = arr[1];
    const targetNum = arr[2] - 1;
    const slicedArr = array.slice(startIdx, length).sort((a, b) => a - b);

    console.log(slicedArr);
    return slicedArr[targetNum];
  };

  for (let i = 0; i < commands.length; i++) {
    resultArr.push(getSortedNum(commands[i]));
  }
  return resultArr;
}

console.log(solution(array, commands));
