// Missing letters

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// [a-zA-Z]+

function fearNotLetter(str) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i <= str.length; i++) {
    if (str[i] !== alpha[alpha.indexOf(str[0]) + i]) {
      return alpha[alpha.indexOf(str[0]) + i];
    }
  }
}
let result = fearNotLetter('stvwx');
console.log(result);
