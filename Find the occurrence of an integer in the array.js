let arr = [4, 5, 2, 2, 6, 4, 2, 4, 4];

let k = Number(prompt());

let count = 0;

for (let i in arr) {
  if (k === arr[i]) count++;
}

console.log(`Occurrence of an integer : ${count}`);
