// Smallest Common Multiple

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

//lcm for array.
function smallestCommons(arr) {
  let newArr = [];
  let min = arr[0] < arr[1] ? arr[0] : arr[1];
  let max = arr[0] > arr[1] ? arr[0] : arr[1];
  for (let i = min; i <= max; i++) {
    newArr.push(i);
  }

  function gcd(a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);
  }

  let result = newArr[0];
  for (let i = 1; i < newArr.length; i++) {
    result = (result * newArr[i]) / gcd(newArr[i], result);
  }

  return result;
}

console.log(smallestCommons([1, 5]));

// lcm for only two numbers.
// function smallestCommons(arr) {
//   let min = (arr[0]<arr[1])?arr[0]:arr[1];
//   let max = (arr[0]>arr[1])?arr[0]:arr[1];

//   let hcf, lcm;
//   for (let i = 1; i <= num1 && i <= num2; i++) {
//     if (num1 % i === 0 && num2 % i === 0) {
//       hcf = i;
//     }
//   }
//   return (lcm = (num1 * num2) / hcf);
// }

// console.log(smallestCommons(1, 5));
