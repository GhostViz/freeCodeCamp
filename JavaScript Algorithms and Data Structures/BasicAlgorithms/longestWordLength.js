/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
  let strArray = str.split(" ");
  let largestStr = 0;
  for (let strs in strArray){
    if (largestStr < strArray[strs].length) {
      largestStr = strArray[strs].length;
    }
  }
  return largestStr;
}
