// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
  let arr = [2];

  let sum;
  for (let i = 3; i <= num; i++) {
    if (
      !(
        (i % 2 == 0 && i > 2) ||
        (i % 3 == 0 && i > 3) ||
        (i % 5 == 0 && i > 5) ||
        (i % 7 == 0 && i > 7) ||
        (i % 11 == 0 && i > 11) ||
        (i % 13 == 0 && i > 13) ||
        (i % 17 == 0 && i > 17) ||
        (i % 19 == 0 && i > 19) ||
        (i % 23 == 0 && i > 23) ||
        (i % 29 == 0 && i > 29) ||
        (i % 31 == 0 && i > 31) ||
        (i % 37 == 0 && i > 37)
      )
    ) {
      arr.push(i);
    }
  }
  console.log(arr, arr.length);
  sum = arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
  console.log('sum', sum);
  return sum;
}

let result = sumPrimes(977);
console.log(result);
