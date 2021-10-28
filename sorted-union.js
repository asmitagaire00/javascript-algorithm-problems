// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

// &[^\s]*

function uniteUnique(arr) {
  arr = [...arguments];
  let flattened = arr.reduce((previousValue, currentValue) => {
    return previousValue.concat(currentValue);
  }, []);
  console.log(flattened);

  let newArr = flattened.reduce((previousValue, currentValue) => {
    if (previousValue.indexOf(currentValue) === -1) {
      previousValue.push(currentValue);
    }
    return previousValue;
  }, []);
  return newArr;
}

let result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result);
