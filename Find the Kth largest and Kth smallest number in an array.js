let arr = [4, 5, 7, 8, 6, 4, 2, 32, 4];

let k = Number(prompt());

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(`Smallest : ${arr[k - 1]} ` + `Largest : ${arr[arr.length - k]}`);
