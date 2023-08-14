let arr = [1, 2, 3, 4, 5, 7, 8];

let k = Number(prompt());

let index;

for (let i in arr) {
  if (arr[i] === k) {
    index = i;
  }
}
for (let j = 1; j <= k; j++) {
  flag = false;
  for (let i = 0; i <= index; i++) {
    if (j === arr[i]) {
      flag = true;
    }
  }
  if (!flag) console.log(j);
}
