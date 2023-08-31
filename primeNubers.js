let count = 0;
for (let i = 1; i <= 10; i++) {
  flag = 0;
  for (let j = 1; j <= 10; j++) {
    if (i % j == 0) {
      flag = flag + 1;
    }
  }
  if (flag == 2) {
    console.log(i);
    count = count + i;
  }
}

console.log(count);
