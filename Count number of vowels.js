let str = "aeiou";

let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "a" || "e" || "i" || "o" || "u") {
    count++;
  }
}

console.log(count);
