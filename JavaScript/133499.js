// https://school.programmers.co.kr/learn/courses/30/lessons/133499

const babbling = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];

const solution = (babbling) => {
  const canBabblingList = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  // 정규식으로 발음 가능한 발음들을 전부 '1'로 변경해주는 함수
  const isBabbling = (str) => {
    for (let i = 1, len = canBabblingList.length; i <= len; i++) {
      const regex = new RegExp(`${canBabblingList[i - 1]}`, "g");
      str = str.replace(regex, `${i}`);
    }
    return str;
  };

  // 각 babbling idx를 돌면서 isBabbling을 한 값을 정수로 바꿀 수 있을 때(모든 값이 1일 때만 가능) answer 값에 ++
  for (const babble of babbling) {
    const getIsBabblingResult = isBabbling(babble);

    if (Number(getIsBabblingResult)) {
      let isCorrect = true;
      let str = "";
      for (let i = 0, len = getIsBabblingResult.length; i < len; i++) {
        if (str === getIsBabblingResult[i]) {
          isCorrect = false;
          break;
        }
        str = getIsBabblingResult[i];
      }
      if (isCorrect) answer++;
    }
  }
  return answer;
};

console.log(solution(babbling));
