/*
==> Reward Top K Students -- https://leetcode.com/problems/reward-top-k-students/description/

You are given two string arrays positive_feedback and negative_feedback, 
containing the words denoting positive and negative feedback, respectively. 
Note that no word is both positive and negative.

Initially every student has 0 points. Each positive word in a feedback report 
increases the points of a student by 3, whereas each negative word decreases the points by 1.

You are given n feedback reports, represented by a 0-indexed string array report 
and a 0-indexed integer array student_id, where student_id[i] represents the ID of the student 
who has received the feedback report report[i]. The ID of each student is unique.

Given an integer k, return the top k students after ranking them in non-increasing order 
by their points. In case more than one student has the same points, 
the one with the lower ID ranks higher.

 

Example 1:
Input: positive_feedback = ["smart","brilliant","studious"], negative_feedback = ["not"], report = ["this student is studious","the student is smart"], student_id = [1,2], k = 2
Output: [1,2]
Explanation: 
- Both the students have 1 positive feedback and 3 points 
but since student 1 has a lower ID he ranks higher.

Example 2:
Input: positive_feedback = ["smart","brilliant","studious"], negative_feedback = ["not"], report = ["this student is not studious","the student is smart"], student_id = [1,2], k = 2
Output: [2,1]
Explanation: 
- The student with ID 1 has 1 positive feedback and 1 negative feedback, 
so he has 3-1=2 points. 
- The student with ID 2 has 1 positive feedback, so he has 3 points. 
Since student 2 has more points, [2,1] is returned.

*/

function rewardTopKStudents(
  positive_feedback,
  negative_feedback,
  report,
  student_id,
  k
) {
  // {// const stud_Mark = new Map();
  // // for (let id of student_id) {
  // //   stud_Mark.set(id, getStudentPostiveMarks(id));
  // // }
  // // for (let id of student_id) {
  // //   stud_Mark.set(id, getStudentNegativeMarks(id, stud_Mark.get(id)));
  // // }
  // // function getStudentPostiveMarks(id) {
  // //   let points = 0;
  // //   for (let word of report[student_id.indexOf(id)].split(" ")) {
  // //     if (positive_feedback.includes(word)) points += 3;
  // //   }

  // //   return points;
  // // }
  // // function getStudentNegativeMarks(id, prevPoints) {
  // //   for (let word of report[student_id.indexOf(id)].split(" ")) {
  // //     if (negative_feedback.includes(word)) prevPoints -= 1;
  // //   }
  // //   return prevPoints;
  // // }

  // // const stud_Mark = {};
  // // const feedbackWords = new Set([...positive_feedback, ...negative_feedback]);
  // // // for (let id of student_id) {
  // // //   stud_Mark[id] = getStudentMarks(id, stud_Mark[id] || 0);
  // // // }
  // // // function getStudentMarks(id, prevPoints) {
  // // //   for (let word of report[student_id.indexOf(id)].split(" ")) {
  // // //     if (positive_feedback.includes(word)) prevPoints += 3;
  // // //     else if (negative_feedback.includes(word)) prevPoints -= 1;
  // // //   }
  // // //   return prevPoints;
  // // // }
  // // for (let i = 0; i < student_id.length; i++) {
  // //   const id = student_id[i];
  // //   stud_Mark[id] = 0;
  // //   const words = report[i].split(" ");
  // //   for (let word of words) {
  // //     if (feedbackWords.has(word)) {
  // //       if (positive_feedback.includes(word)) stud_Mark[id] += 3;
  // //       else if (negative_feedback.includes(word)) stud_Mark[id] -= 1;
  // //     }
  // //   }
  // // }
  // // const sortedStud = Object.entries(stud_Mark)
  // //   .sort((a, b) => {
  // //     if (a[1] === b[1]) return a[0] - b[0];
  // //     else return b[1] - a[1];
  // //   })
  // //   .slice(0, k);
  // // console.log(sortedStud);
  // // return sortedStud.map(([id, _]) => parseInt(id));

  // // const pf = new Set(positive_feedback);
  // // const nf = new Set(negative_feedback);

  // // const points = Array.from({ length: report.length }, (_) => Array(2).fill(0));
  // // console.log({ points });
  // // for (let i = 0; i < report.length; i++) {
  // //   points[i][1] = student_id[i];
  // //   const words = report[i].split(" ");
  // //   for (const word of words) {
  // //     if (pf.has(word)) {
  // //       points[i][0] += 3;
  // //     }
  // //     if (nf.has(word)) {
  // //       points[i][0] -= 1;
  // //     }
  // //   }
  // //   console.log(points[i]);
  // // }

  // // points.sort((a, b) => (b[0] !== a[0] ? b[0] - a[0] : a[1] - b[1]));
  //   // return points.map((e) => e[1]).slice(0, k);
  // }

  /* Final Version */
  positive_feedback = new Set(positive_feedback);
  negative_feedback = new Set(negative_feedback);

  const studReport = new Array(student_id.length);
  for (let i = 0; i < student_id.length; i++) {
    const words = report[i].split(" ");
    let posMark = 0;
    let negMark = 0;
    for (let word of words) {
      if (positive_feedback.has(word)) posMark += 3;
      else if (negative_feedback.has(word)) negMark -= 1;
    }
    studReport[i] = [student_id[i], posMark + negMark];
  }
  console.log(studReport);
  const sortedStudReport = studReport
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]))
    .slice(0, k);

  return sortedStudReport.map((rep) => rep[0]);
}

console.log(
  rewardTopKStudents(
    ["smart", "brilliant", "studious"],
    ["not"],
    ["this student is studious", "the student is smart"],
    [1, 2],
    2
  )
);
console.log(
  rewardTopKStudents(
    ["smart", "brilliant", "studious"],
    ["not"],
    ["this student is not studious", "the student is smart"],
    [1, 2],
    2
  )
);

console.log(
  rewardTopKStudents(
    ["fkeofjpc", "qq", "iio"], // +ve
    ["jdh", "khj", "eget", "rjstbhe", "yzyoatfyx", "wlinrrgcm"], // -ve
    [
      "rjstbhe eget kctxcoub urrmkhlmi yniqafy fkeofjpc iio yzyoatfyx khj iio",
      "gpnhgabl qq qq fkeofjpc dflidshdb qq iio khj qq yzyoatfyx", // 589204657 = 16
      "tizpzhlbyb eget z rjstbhe iio jdh jdh iptxh qq rjstbhe",
      "jtlghe wlinrrgcm jnkdbd k iio et rjstbhe iio qq jdh",
      "yp fkeofjpc lkhypcebox rjstbhe ewwykishv egzhne jdh y qq qq", // 43871615 = 7
      "fu ql iio fkeofjpc jdh luspuy yzyoatfyx li qq v",
      "wlinrrgcm iio qq omnc sgkt tzgev iio iio qq qq", // 239084671 = 17
      "d vhg qlj khj wlinrrgcm qq f jp zsmhkjokmb rjstbhe",
    ], // report
    [
      96537918, 589204657, 765963609, 613766496, 43871615, 189209587, 239084671,
      908938263,
    ], // student_id
    3
  )
); // Output: [239084671,589204657,43871615]
