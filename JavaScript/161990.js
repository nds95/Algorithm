// https://school.programmers.co.kr/learn/courses/30/lessons/161990

const wallpaper = [
  "..........",
  ".....#....",
  "......##..",
  "...##.....",
  "....#.....",
];

const solution = (wallpaper) => {
  let anaswer = [];
  // for에서 0번째 인덱스는 i 최솟값
  // 1번째 인덱스는 indexOf 최솟값
  // 2번째는 i 최댓값
  // 3번째는 indexOf 최댓값
  let lux, luy, rdx, rdy;
  // 2중 for loop를 돌며 i과 j로 값을 구함
  for (let i = 0, len = wallpaper.length; i < len; i++) {
    const X = wallpaper[i];
    const indexOfX = X.indexOf("#");
    if (indexOfX === -1) continue;
    console.log(`indexOfx = ${indexOfX}`);
    console.log(X.lastIndexOf("#"));
    // lux 값이 없을 때 '#'이 존재하면 i 입력(lux는 #가 있는 i의 최솟값)
    if (lux === undefined && indexOfX > -1) lux = i;
    // rdx의 값이 없거나 '#'이 있는 위치가 더 크다면 i 입력(rdx는 #가 있는 i 값의 최댓값)
    if (rdx === undefined || indexOfX > -1) rdx = i + 1;
    if (luy === undefined || indexOfX < luy) luy = indexOfX;
    if (rdy === undefined || X.lastIndexOf("#") + 1 > rdy)
      rdy = X.lastIndexOf("#") + 1;
  }

  return [lux, luy, rdx, rdy]; // [1, 3, 5, 8];
};

console.log(solution(wallpaper));
