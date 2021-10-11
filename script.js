// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  let counter = 0;
  let reString;
  let arr = [];
  const regVowel = /[aeiou]/;
  if (regVowel.test(str[0])) {
    return str.concat('way');
  } else if (str.match(regVowel) === null) {
    return str.concat('ay');
  } else {
    for (let i = 0; i <= str.length; i++) {
      if (regVowel.test(str[i])) {
        let slicedStr = str.slice(i);
        console.log(
          'returned string',
          str.slice(i).concat(str.substring(0, i), 'ay')
        );
        return str.slice(i).concat(str.substring(0, i), 'ay');
      }
    }
  }
}
let result = translatePigLatin('glove');
console.log(result);
