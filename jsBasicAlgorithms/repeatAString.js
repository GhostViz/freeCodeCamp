/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
*/
function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return ""
  } else {
    let newStr = str;
    for (let i = 1; i < num; i++) {
      newStr += str;
    }
    return newStr;
  }
}
