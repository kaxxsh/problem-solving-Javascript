let arr = [2, 2, 4, 4, 1];
const duplicates = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }
  }
}

console.log(duplicates);
