// https://school.programmers.co.kr/learn/courses/30/lessons/42840

const answers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

function solution(answers) {
  const person1 = [1, 2, 3, 4, 5];
  const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const getAnswers = (person) => {
    let correctCount = 0;
    let personIdx = 0;
    for (let i = 0, len = answers.length; i < len; i++) {
      console.log(`answers = ${answers[i]} | ps = ${person[personIdx]}`);
      if (answers[i] === person[personIdx]) correctCount++;
      personIdx++;
      if (personIdx > person.length - 1) personIdx = 0;
    }
    return correctCount;
  };

  let answer = [];
  let answerList = [
    getAnswers(person1),
    getAnswers(person2),
    getAnswers(person3),
  ];
  console.log(answerList);
  const maxNum = Math.max(...answerList);
  for (let i = 0; i < 3; i++) {
    if (answerList[i] === maxNum) {
      answer.push(i + 1);
    }
  }

  return answer;
}

console.log(solution(answers));
