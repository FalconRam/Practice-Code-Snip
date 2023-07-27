/* ------------------------ Bubble Sort ------------------------*/
/* 
In this algorithm, 
    - traverse from left and compare adjacent elements and the higher one is placed at right side. 
    - In this way, the largest element is moved to the rightmost end at first. 
    - This process is then continued to find the second largest and place it and so on,
      until the data is sorted.
*/

let orginalArray = [64, 34, 25, 12, 22, 11, 90];

for (let i = 0; i < orginalArray.length; i++) {
  console.log(orginalArray)
  for (let j = i + 1; j <= orginalArray.length; j++) {
    if (orginalArray[i] > orginalArray[j]) {
      let temp = orginalArray[i];
      orginalArray[i] = orginalArray[j];
      orginalArray[j] = temp;
    }
  }
}
console.log(`Bubble Sorted Array : ${orginalArray}`);
