/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

function palindrome(str) {

  // saneStr strips everything that isn't alphanumeric from the string `str`.
  let saneStr = str.replace(/[_,\W]/g, "").toLowerCase();
  // saneStrLength returns the length of saneStr - 1
  // because we are preparing the loop through each character in the string
  let saneStrLength = saneStr.length - 1;
  // media finds the midpoint of saneStr.
  let median = saneStrLength/2;
  // Creating upper and lower to be used later.
  let upper, lower;

  /*
  If saneStrLength is even we round median up and add 1 for upper
  and we round median down and subtract 1 for lower

  If saneStrLength is not even we add 1 to media for upper and
  we return median for lower.
  */
  if (saneStrLength % 2 == 0) {
    upper = Math.ceil(median) + 1;
    lower = Math.floor(median) - 1;
  } else {
    upper = Math.floor(median) + 1;
    lower = Math.floor(median);
  }

  /*
  This is the meat and potatoes of the code.

  We loop through while lower is greater than 0.
  We want to loop through for 0 as well so we use do/while instead
  of just while.

  If the character at saneStr[lower] is not the same as the character
  at saneStr[upper] we return false ending the loop.

  If the loop completes successfully we return true.  
  */
  do {
    if (saneStr[lower] !== saneStr[upper]) {
      return false;
    }
    lower--;
    upper++;
  } while(lower > 0);

  return true;
}
