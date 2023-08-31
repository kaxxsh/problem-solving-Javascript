let arr = [10, 5, 3, 4, 3, 5, 6];

for (let i = 0; i < arr.length; i++) {
  let flag = false;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      flag = true;
      console.log(arr[i]);
    }
  }
  if (flag) break;
}
