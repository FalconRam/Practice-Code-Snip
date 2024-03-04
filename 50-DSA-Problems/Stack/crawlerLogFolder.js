/* 
==>  Crawler Log Folder -- https://leetcode.com/problems/crawler-log-folder/

The Leetcode file system keeps a log each time some user performs a change folder operation.

The operations are described below:

    "../" : Move to the parent folder of the current folder. 
    (If you are already in the main folder, remain in the same folder).
    "./" : Remain in the same folder.
    "x/" : Move to the child folder named x (This folder is guaranteed to always exist).

You are given a list of strings logs where logs[i] is the operation performed 
by the user at the ith step.

The file system starts in the main folder, then the operations in logs are performed.

Return the minimum number of operations needed to go back to the main folder 
after the change folder operations.


Example 1:
Input: logs = ["d1/","d2/","../","d21/","./"]
Output: 2
Explanation: Use this change folder operation "../" 2 times and go back to the main folder.

Example 2:
Input: logs = ["d1/","d2/","./","d3/","../","d31/"]
Output: 3

Example 3:
Input: logs = ["d1/","../","../","../"]
Output: 0


Constraints:

    1 <= logs.length <= 103
    2 <= logs[i].length <= 10
    logs[i] contains lowercase English letters, digits, '.', and '/'.
    logs[i] follows the format described in the statement.
    Folder names consist of lowercase English letters and digits.

*/

function crawlerLogFolder(logs) {
  let pathCount = 0;
  let stack = [];
  for (let i = 0; i < logs.length; i++) {
    if (logs[i] != "./" && logs[i] != "../") {
      stack.push(logs[i]);
      pathCount += 1;
    } else if (logs[i] == "../") {
      if (stack.length > 0) {
        // it will not reduce & pop if stack is empty, ensuring there is no path
        stack.pop();
        pathCount--; // Decrement pathCount when moving back to the parent folder
      }
    }
  }
  return pathCount;

  /* WITHOUT STACK */
  // let depth = 0
  // logs.forEach(x => {
  //     if(x.includes("../")) return depth >= 1 ? depth-- : depth = 0
  //     if(x.includes("./")) return
  //     depth++
  // })
  // return depth
}

console.log(crawlerLogFolder(["d1/", "d2/", "../", "d21/", "./"])); // 2
console.log(crawlerLogFolder(["d1/", "d2/", "./", "d3/", "../", "d31/"])); // 3
console.log(crawlerLogFolder(["d1/", "../", "../", "../"])); //0
console.log(
  crawlerLogFolder(["cd7/", "./", "c4/", "b5/", "vt8/", "d1/", "./", "pg0/"])
); // 6
