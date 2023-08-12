let arr1 = [1, 3, 4, 5, 7];
let arr2 = [2, 3, 5, 6];

let union = [];
let intersection = [];

// for (let i in arr1) {
//   for (let j in arr2) {
//     if (arr1[i] === arr2[j]) {
//       intersection.push(arr1[i]);
//     }
//   }
// }

for (let i in arr1) {
  union.push(arr1[i]);
  for (let j in arr2) {
    let found = false;

    for (let k in union) {
      if (arr2[j] === union[k]) {
        found = true;
        break;
      }
    }

    if (!found) {
      union.push(arr2[j]);
    }
  }
}

// intersection.map((i) => console.log(i));
union.map((j) => console.log(j));
