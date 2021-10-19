// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  let fib = [],
    fibsSum;
  fib[0] = 0;
  fib[1] = 1;
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  let oddFibs = fib.filter((elem) => {
    if (elem % 2 !== 0 && elem <= num) {
      return elem;
    }
  });

  fibsSum = oddFibs.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
  console.log(fibsSum);
  return fibsSum;
}

let result = sumFibs(1000);
console.log('result', result);
