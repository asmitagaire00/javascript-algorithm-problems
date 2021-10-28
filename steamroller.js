// SteamrollerPassed
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  const flatArr = [];

  function steamroll(ar) {
    for (const item of ar) {
      if (!(item instanceof Array)) {
        flatArr.push(item);
        continue;
      }
      steamroll(item);
    }

    return flatArr;
  }

  return steamroll(arr);
}

const res = steamrollArray([1, [2], [3, [[4]]]]);
console.log('res:', res);
