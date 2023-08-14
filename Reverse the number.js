let num = 123456;
let revnum = 0;
while (num !== 0) {
  revnum = revnum * 10 + (num % 10);
  num = Math.floor(num / 10);
}

console.log(revnum);
