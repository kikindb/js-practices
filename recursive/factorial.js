function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

function factorialR(num) {
  if (num === 1) return 1;
  return num * factorialR(num - 1);
}

console.log(factorial(60));
console.log(factorialR(60));