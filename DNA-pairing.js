// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr[i] = [str[i]];
    if (arr[i] == 'G') {
      arr[i].push('C');
    } else if (arr[i] == 'C') {
      arr[i].push('G');
    } else if (arr[i] == 'A') {
      arr[i].push('T');
    } else if (arr[i] == 'T') {
      arr[i].push('A');
    }
  }

  return arr;
}

let result = pairElement('ATCGA');
console.log(result);
