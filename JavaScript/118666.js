// https://school.programmers.co.kr/learn/courses/30/lessons/118666

let survey = ["TR", "RT", "TR"];
const choices = [7, 1, 3];

const solution = (survey, choices) => {
  // obj 형태로 각 지표 관리
  let personalityObj = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0, len = choices.length; i < len; i++) {
    const score = Math.abs(choices[i] - 4);

    // 선택한 점수가 '모르겠음' 일 때 점수 없음
    if (!score) continue;

    // 4보다 작으면 survey의 앞 문자열의 점수에 ++ 혹은 뒷 문자열에 ++
    choices[i] < 4
      ? (personalityObj[survey[i][0]] += score)
      : (personalityObj[survey[i][1]] += score);
  }

  // 점수가 동일할 때 T, C, J, A가 사전순으로 빠르기에, 해당 성격을 default로 return 하지만,
  // 반대 점수가 더 높으면 그것을 return 하는 로직 구현
  let answer = "";
  let personalityIndicatorList = ["RT", "CF", "JM", "AN"];
  for (const personality of personalityIndicatorList) {
    const first =
      personality[0] > personality[1] ? personality[1] : personality[0];
    const second =
      personality[0] > personality[1] ? personality[0] : personality[1];

    personalityObj[first] < personalityObj[second]
      ? (answer += second)
      : (answer += first);
  }

  return answer;
};

console.log(solution(survey, choices));
