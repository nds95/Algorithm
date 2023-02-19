// https://school.programmers.co.kr/learn/courses/30/lessons/42576

const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

const solution = (participant, completion) => {
  let completionObj = {};
  for (let i = 0, len = participant.length; i < len; i++) {
    const findedIndex = participant[i];
    // completion에 포함되지 않으면 미완주 선수이므로 바로 return
    if (!completion.includes(findedIndex)) return findedIndex;

    // dict에 하나씩 추가
    if (completionObj.hasOwnProperty(findedIndex)) {
      completionObj[findedIndex]++;
      continue;
    }

    completionObj[findedIndex] = 1;
  }
  console.log(completionObj);

  for (let i = 0, len = completion.length; i < len; i++) {
    if (completionObj[completion[i]]) {
      completionObj[completion[i]]--;
    }
  }

  for (const property in completionObj) {
    if (completionObj[property] === 1) {
      return property;
    }
  }
  // participant.forEach((value) => {
  //   if (completion.includes(value)) {
  //     if (completionObj.hasOwnProperty(value)) completionObj[value] += 1;
  //     completionObj[value] = 1;
  //   }
  // });
};

console.log(solution(participant, completion));
