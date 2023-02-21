// https://school.programmers.co.kr/learn/courses/30/lessons/131128?language=java

const X = "123123123123123123123123123123123123123123123";
const Y = "123123123123123123123123123123123123123123123";

const solution = (X, Y) => {
  let result = "";
  const moreString = X.length <= Y.length ? Y : X;
  const lessString = X.length <= Y.length ? X : Y;
  // X, Y의 숫자 별 갯수를 dict형태로 확인
  let moreDict = {};
  for (let i = 0, len = moreString.length; i < len; i++) {
    if (moreDict.hasOwnProperty(moreString[i])) {
      moreDict[moreString[i]]++;
      continue;
    }
    moreDict[moreString[i]] = 1;
  }

  let lessDict = {};
  for (let i = 0, len = lessString.length; i < len; i++) {
    if (lessDict.hasOwnProperty(lessString[i])) {
      lessDict[lessString[i]]++;
      continue;
    }
    lessDict[lessString[i]] = 1;
  }

  // lessDict를 기준으로 숫자 갯수 중 Math.min 만큼 result에 숫자 더하기
  // lessDict를 기준으로 갯수를 확인해야 최소한으로 확인 가능
  for (const key in lessDict) {
    // moreDict에서 lessDict의 숫자로된 key를 갖고있지 않다면 continue;
    if (!moreDict.hasOwnProperty(key)) continue;

    const intCount = Math.min(lessDict[key], moreDict[key]);
    for (let i = 0; i < intCount; i++) {
      result += key;
    }
  }
  // result의 값이 없으면 -1을 return
  if (!result) return "-1";
  if (Number(result) === 0) return "0";
  // result를 역으로 sort하면 가장 큰 숫자가 나옴
  return result
    .split("")
    .sort((a, b) => b - a)
    .join("")
    .toString();
};

console.log(solution(X, Y));
