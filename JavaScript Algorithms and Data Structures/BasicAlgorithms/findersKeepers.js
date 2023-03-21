/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
*/

function findElement(arr, func) {
  for (let element in arr) {
    let num = arr[element];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}
