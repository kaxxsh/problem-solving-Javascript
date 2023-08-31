let arr = [1, 4, 5, 6, 8, 74, 12, 1, 41, 23, 5, 4, 5, 68, 74, 5, 6, 7, 4, 1];

let dublicate = [];

for (let i = 0; i < arr.length; i++) {
  flag = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      flag++;
    }
  }

  if (flag === 0) dublicate.push(arr[i]);
}

dublicate.map((i) => console.log(i));
