let str = "assdd";

for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < str.length; j++) {
    flag = 0;
    if (str[i] === str[j]) {
      flag++;
    }
    if (flag === 0) {
      console.log(str[i]);
      break;
    }
  }
}
