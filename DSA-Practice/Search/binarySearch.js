/* 

Binary Seach is a Alogorithm to eliminate the algorithm to seacrh in linear way.
It will set the mid index and check whether the search value is less than, 
then it will check left side elements from it and omit the right side and vice versa 

*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function binarySearch(arr, searchValue) {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    let midIndex = Math.floor((startIndex + endIndex) / 2);
    console.log(midIndex);
    if (searchValue === arr[midIndex])
      return { isThere: true, index: midIndex };
    else if (searchValue < arr[midIndex]) endIndex = midIndex - 1;
    else if (searchValue > arr[midIndex]) startIndex = midIndex + 1;
  }
  return { isThere: false, index: null };
}

console.log(binarySearch(arr, 10));
