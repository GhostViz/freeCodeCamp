/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  let arr = str.split(" ");
  let newArr = [];
  for (let element in arr) {
    newArr.push(arr[element].charAt(0).toUpperCase() + arr[element].slice(1).toLowerCase());
  }
  return newArr.join(" ");
}
