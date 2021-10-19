//Convert HTML Entities

//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  return str
    .replace('&', '&amp;')
    .replace('<', '&lt;')
    .replace('<', '&lt;')
    .replace('>', '&gt;')
    .replace('"', '&quot;')
    .replace('"', '&quot;')
    .replace("'", '&apos;')
    .replace('<>', '&lt;&gt;');
}
let result = convertHTML('Dolce & Gabbana');
console.log(result);
