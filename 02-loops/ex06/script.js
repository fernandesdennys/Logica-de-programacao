for (let i = 1; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    break; // Breaks the loop when i is 5
  }
}
console.log("Loop ended"); // This will be printed after the loop ends

for (let i = 1; i < 10; i++) {
  if (i === 5) {
    continue; // Breaks the loop when i is 5
  }
  console.log(i); // This will not be printed when i is 5
}
console.log("Loop ended"); // This will be printed after the loop ends

console.log("-----------------------Loop com while");

let x = 1;
while (x < 10) {
  console.log(x)
  if (x === 5) {
    break
  }
  x++
}

console.log("Loop com while-----------------------");

x = 1;
while (x < 10) {
  if (x === 5) {
    x++
    continue
  }
  console.log(x)
  x++
}
