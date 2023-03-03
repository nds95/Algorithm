// https://school.programmers.co.kr/learn/courses/30/lessons/150370

const today = "2022.05.19";
const terms = ["A 6", "B 12", "C 3"];
const privacies = [
  "2021.05.02 A",
  "2021.07.01 B",
  "2022.02.19 C",
  "2022.02.20 C",
];

const solution = (today, terms, privacies) => {
  let answer = [];
  today = new Date(today);

  // 현재 날짜에서 terms에 나오는 날짜를 더해주는 함수 만들어야함
  const addMonths = (date, month) => {
    date.setMonth(date.getMonth() + month);

    return date;
  };

  // terms의 obj화
  let termsObj = {};
  for (const term of terms) {
    const splitedTerm = term.split(" ");
    termsObj[splitedTerm[0]] = splitedTerm[1];
  }

  for (let i = 0, len = privacies.length; i < len; i++) {
    const splitedValue = privacies[i].split(" ");
    const signUpDate = splitedValue[0];
    let signUpType = splitedValue[1];

    let date = addMonths(new Date(signUpDate), Number(termsObj[signUpType]));
    if (date <= today) answer.push(i + 1);
  }
  return answer;
};

console.log(solution(today, terms, privacies));
