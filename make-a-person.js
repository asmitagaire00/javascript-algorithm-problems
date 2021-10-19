// Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function () {
    return firstAndLast;
  };
  this.getFirstName = function () {
    const myArr = firstAndLast.split(' ');
    return myArr[0];
  };
  this.getLastName = function () {
    const myArr = firstAndLast.split(' ');
    return myArr[1];
  };
  this.setFirstName = function (first) {
    firstAndLast = first + ' ' + firstAndLast.split(' ')[1];
  };
  this.setLastName = function (last) {
    firstAndLast = firstAndLast.split(' ')[0] + ' ' + last;
  };
  this.setFullName = function (fullName) {
    firstAndLast = fullName;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
