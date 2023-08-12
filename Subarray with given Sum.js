let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

let start = Number(prompt("Starting index"));
let End = Number(prompt("Ending index"));

let sum = 0;

for (let i = start; i <= End; i++) {
  sum += arr[i];
}

console.log(sum);
