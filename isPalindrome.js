// let string = "mam";
let x = 100

function isPalindrome(x) {
  // return string === string.split("").reverse().join("");

  //   let array = [];
  //   let j = 0;

  //   for (let i = string.length - 1; i >= 0; i--) {
  //     array[j] = string[i];
  //     j++;
  //   }

  // for (let i = 0; i < string.length / 2; i++) {
  //   console.log(i, string[i], string[string.length - i - 1]);
  //   if (string[i] !== string[string.length - i - 1]) {
  //     return false;
  //   }
  // }
  // return true;

  if (x < 0) return false;
  let str = x.toString();
  let len = str.length / 2;
  console.log(str.length,len);
  if (str.length == 2 && str[0] !== str[1]) {
    return false;
  } else if (str.length == 2 && str[0] === str[1]) {
    console.log("else if");
    return true;
  }
  for (let i = 0; i < len; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }

  return true;
}

console.log(isPalindrome(x));
