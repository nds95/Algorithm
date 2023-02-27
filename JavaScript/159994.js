//https://school.programmers.co.kr/learn/courses/30/lessons/159994

const cards1 = ["i", "water", "drink"];
const cards2 = ["want", "to"];
const goal = ["i", "want", "to", "drink", "water"];

const solution = (cards1, cards2, goal) => {
  let card1Idx = 0;
  let card2Idx = 0;
  for (let i = 0, len = goal.length; i < len; i++) {
    // includes를 사용하려 했으나, 단어의 순서가 중요하므로 각 카드뭉치의 index를 for loop
    // 밖에 두고, 조건에 따라 index를 추가해서 활용하는 방식으로 채택

    // card1에 단어가 존재할 때
    if (goal[i] === cards1[card1Idx]) {
      card1Idx++;
      continue;
    }
    // card2에 단어가 존재할 때
    if (goal[i] === cards2[card2Idx]) {
      card2Idx++;
      continue;
    }

    // 위에 if문제 continue를 줬기 때문에, 순서에 맞게 단어가 존재하지 않는다면 바로 failure quick return
    return "No";
  }

  return "Yes";
};

console.log(solution(cards1, cards2, goal));
