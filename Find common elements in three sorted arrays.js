let arr1 = [1, 5, 10, 20, 40, 80].sort((a, b) => a - b);
let arr2 = [6, 7, 20, 80, 100].sort((a, b) => a - b);
let arr3 = [3, 4, 15, 20, 30, 70, 80, 120].sort((a, b) => a - b);

let common = [];

for (let i in arr1) {
  for (let j in arr2) {
    for (let k in arr3) {
      if (arr1[i] === arr2[j] && arr1[i] === arr3[k]) {
        common.push(arr1[i]);
      }
    }
  }
}

console.log(common);