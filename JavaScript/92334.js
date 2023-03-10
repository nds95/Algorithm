// https://school.programmers.co.kr/learn/courses/30/lessons/92334

const id_list = ["muzi", "frodo", "apeach", "neo"];
let report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
let k = 2;

const solution = (id_list, report, k) => {
  let answer = [];

  // id별 신고한 list 구하기
  let user = {};
  // user init
  for (const id of id_list) {
    user[id] = [];
  }
  for (let i = 0, len = report.length; i < len; i++) {
    let splitedReport = report[i].split(" ");

    // report한 대상이 user object에 존재하지 않으면 추가
    if (!user[splitedReport[0]].includes(splitedReport[1]))
      user[splitedReport[0]].push(splitedReport[1]);
  }
  console.log(user);
  // K번 신고된 user list 구하기
  let blockList = [];
  let blockCountDict = {};
  for (const [userName, reportList] of Object.entries(user)) {
    for (const reportName of reportList) {
      if (!blockCountDict[reportName]) {
        blockCountDict[reportName] = 1;
        continue;
      }

      blockCountDict[reportName]++;
    }
  }
  for (const [reportName, reportCount] of Object.entries(blockCountDict)) {
    if (reportCount >= k) blockList.push(reportName);
  }
  console.log(blockCountDict);
  console.log(blockList);

  // id별 신고한 list에 k번 신고된 user가 있으면 count하고 answer에 push
  for (const [id, reportList] of Object.entries(user)) {
    if (!reportList.length) {
      answer.push(0);
      continue;
    }
    let blockUserCount = 0;
    for (const blockUser of blockList) {
      if (reportList.includes(blockUser)) blockUserCount++;
    }
    answer.push(blockUserCount);
  }
  return answer;
};

console.log(solution(id_list, report, k));
