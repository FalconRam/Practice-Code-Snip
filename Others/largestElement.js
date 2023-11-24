const largestElement = (arr) => {
  let largest = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

console.log(largestElement([-4, -3, -2, -1, -5, -8, -464, -44]));
