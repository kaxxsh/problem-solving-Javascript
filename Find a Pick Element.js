let arr = [4, 5, 7, 8, 6, 4, 2, 32, 4];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
    console.log(arr[i]);
  }
}
