let arr = [-1, 2, -1, 3, 0];

for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }
  if (count === 0) {
    console.log(arr[i]);
    break;
  }
}
