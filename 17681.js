const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
  let firstMap = [];
  let secondMap = [];

  // 10진수를 2진수로 바꿔주는 함수
  const getBinaryString = (num) => {
    let returnString = "";
    let str = num.toString(2);
    if (str.length !== n) {
      lenDiff = n - str.length;
      for (let i = 0; i < lenDiff; i++) {
        returnString += "0";
      }
      return (returnString += str);
    }

    return str;
  };

  // 2진수를 '#'과 공백으로 바꿔주는 함수
  const getHash = (binaryString) => {
    let returnString = "";

    for (let i = 0, len = binaryString.length; i < len; i++) {
      if (binaryString[i] === "1") {
        returnString += "#";
      } else {
        returnString += " ";
      }
    }

    return returnString;
  };

  // 2개의 지도를 한개로 합쳐주는 함수
  const getMergeMap = (firMap, secMap) => {
    let returnArr = [];
    for (let i = 0; i < n; i++) {
      let mergiedIdx = "";
      for (let j = 0; j < n; j++) {
        if (firMap[i][j] === "#" || secMap[i][j] === "#") {
          mergiedIdx += "#";
        } else {
          mergiedIdx += " ";
        }
      }
      returnArr.push(mergiedIdx);
    }

    return returnArr;
  };

  // 로직
  for (let i = 0; i < n; i++) {
    let row1 = getHash(getBinaryString(arr1[i]));
    let row2 = getHash(getBinaryString(arr2[i]));

    firstMap.push(row1);
    secondMap.push(row2);
  }

  const answer = getMergeMap(firstMap, secondMap);

  return answer;
}

console.log(solution(n, arr1, arr2));
