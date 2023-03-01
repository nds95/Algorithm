// https://school.programmers.co.kr/learn/courses/30/lessons/155652

const s = "aukks";
const skip = "wbqd";
const index = 5;

const solution = (s, skip, index) => {
  // charCodeAt() 으로 문자열을 관리할 계획이므로, skip을 charCode로 된 arr로 변경
  skip = skip.split("").map((value) => {
    return value.charCodeAt();
  });
  console.log(skip);
  // skip을 제외하고 index만큼 뒤의 알파벳으로 바꿔주는 함수 만들기
  const changeAlphabet = (alphapet) => {
    let charCode = alphapet.charCodeAt();
    console.log(`charCode = ${charCode}`);

    // skip에 해당되어 몇 번 skip해야하는지 확인
    let skipCount = 0;
    for (let i = 0, len = skip.length; i < len; i++) {
      if (charCode < skip[i] && charCode + index >= skip[i]) skipCount++;
    }
    // skipCount만큼 더 더하기
    charCode = charCode + index + skipCount;
    while (charCode > 122) {
      charCode -= 26;
    }

    return String.fromCharCode(charCode);
  };

  let answer = "";
  // for loop로 s의 각 문자열을 가져온다.
  for (let i = 0, len = s.length; i < len; i++) {
    answer += changeAlphabet(s[i]);
  }
  return answer;
};

console.log(solution(s, skip, index));
