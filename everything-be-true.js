// Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
  let counter = 0,
    filteredArr;

  filteredArr = collection.filter((elem) => {
    if (elem.hasOwnProperty(pre)) {
      if (elem[pre]) {
        counter++;
      }
      // console.log(elem[pre]);
    }
  });
  if (counter === collection.length) {
    return true;
  } else return false;
}

let result = truthCheck(
  [
    { user: 'Tinky-Winky', sex: 'male', age: 0 },
    { user: 'Dipsy', sex: 'male', age: 3 },
    { user: 'Laa-Laa', sex: 'female', age: 5 },
    { user: 'Po', sex: 'female', age: 4 },
  ],
  'age'
);
console.log(result);
