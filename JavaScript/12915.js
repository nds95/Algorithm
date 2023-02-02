// https://school.programmers.co.kr/learn/courses/30/lessons/12915

// const strings = ["sum", "bed", "car"];
const strings = ["abce", "abcd", "cdx"];
const n = 1;

function solution(arr, num) {
  let returnData = [];

  // n번째 인덱스를 맨 앞으로 보내주기
  function getReverseTargetStringList(list) {
    return (list = list.map((value) => {
      const nIndexString = value[num];
      let v = value.split("");
      v[n] = v[0];
      v[0] = nIndexString;
      return v.join("");
    }));
  }

  // 맨 앞 애들을 기준으로 sorting해주기.
  returnData = getReverseTargetStringList(arr);
  returnData.sort();
  // 맨 앞 문자가 동일하다면 바꾸기 전 사전을 기준으로기sorting해주기 (그냥 sort()해주면 될 듯)
  // // 문자 다시 되돌리기
  returnData = getReverseTargetStringList(returnData);
  return returnData;
}

console.log(solution(strings, n));
