let str = "jksbfgbsb";

function reverse(str) {
  let strrev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strrev = strrev + str[i];
  }
  return strrev;
}

console.log(reverse(str));
