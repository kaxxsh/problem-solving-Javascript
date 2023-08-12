let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

arr.map((i) => console.log(i));
