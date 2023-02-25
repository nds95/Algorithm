// https://school.programmers.co.kr/learn/courses/30/lessons/72410

const new_id = "abcdefghijklmn.p";

const solution = (new_id) => {
  // 1. 대문자를 소문자로 치환 -> lowerCase
  new_id = new_id.toLowerCase();

  // 2. 소문자, 숫자, 빼기, 언더바, 마침표 빼고 제거
  let regex = new RegExp(/[^a-z0-9\-\_\.]/, "g");
  new_id = new_id.replace(regex, ``);
  // 3. 마침표가 2번이상 연속된 부분을 하나로 치환
  regex = new RegExp(/\.{2,}/, "g");
  new_id = new_id.replace(regex, ".");
  // 4. 마침표가 처음이나 끝에 위치하면 제거!
  if (new_id.startsWith(".")) new_id = new_id.substr(1);
  if (new_id.endsWith(".")) new_id = new_id.substr(0, new_id.length - 1);
  // 5. 빈 문자열이라면 'a'를 대입
  if (new_id === "") new_id = "a";
  // 6. 길이가 16자 이상일 때 첫 15개 문자를 제외하고 전부 제거
  if (new_id.length >= 16) new_id = new_id.substr(0, 15);
  if (new_id.endsWith(".")) new_id = new_id.substr(0, new_id.length - 1);
  // 7. 길이가 2자 이하일 때 마지막 문자를 길이가 3이 되도록 끝에 추가
  if (new_id.length <= 2) {
    while (new_id.length < 3) {
      new_id += new_id[new_id.length - 1];
    }
  }
  return new_id;
};

console.log(solution(new_id));
