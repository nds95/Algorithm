const name = ['may', 'kein', 'kain', 'radi'];
const yearning = [5, 10, 1, 3];
const photo = [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]];

const solution = (name, yearning, photo) => {
  let answer = [];

  //make dict of memory score;
  let memoryScoreDict = {};

  for(let i = 0; i < name.length; i++){
    memoryScoreDict[name[i]] = yearning[i];
  }

  // score memory of score;
  for(let i = 0; i < photo.length; i++){
    const members = photo[i];
    let score = 0;

    for(let j = 0; j < members.length; j++){
      const member = members[j]
      if(memoryScoreDict[member]){
        score += memoryScoreDict[member];
      }
    }
    answer.push(score);
  }
  console.log(answer);
}

console.log(solution(name, yearning, photo));