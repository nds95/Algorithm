// https://school.programmers.co.kr/learn/courses/30/lessons/160586

const keymap = ["ABEF", "ABB"];
const targets = ["ABEEG", "ABB"];

const solution = (keymap, targets) => {
  let answer = [];

  // 해당 문자열이 keymap을 기준으로 최소 몇번 클릭해야하는지 return 하는 함수 만들기
  const getPressCount = (str) => {
    let count;
    for (const string of keymap) {
      const indexOfString = string.indexOf(str);
      // 해당하는 문자열의 순서가 첫번째일때는 quick return
      if (indexOfString === 0) return 1;
      if (indexOfString === -1) continue;
      if (!count || indexOfString < count) count = indexOfString;
    }

    return !count ? -1 : count + 1;
  };
  // 이중 for loop로 targets의 문자열을 하나씩 돌며 위에 작성한 함수로 return받기
  for (const string of targets) {
    let pressCount = 0;
    for (let i = 0, len = string.length; i < len; i++) {
      const getPressCountResult = getPressCount(string[i]);
      if (getPressCountResult === -1) {
        pressCount = -1;
        break;
      }
      pressCount += getPressCountResult;
    }
    answer.push(pressCount);
  }
  return answer;
};

console.log(solution(keymap, targets));
