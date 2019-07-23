/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range/

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {

  // use Math.max and Math.min to find the high and low.
  let high = Math.max(arr[0], arr[1]);
  let low = Math.min(arr[0], arr[1]);
  // set the initial value of rangeSum = high.
  let rangeSum = high;

  // While the high is not equal to the low add the low
  // to the rangeSum and increment low.
  while (high != low) {
    rangeSum += low;
    low++;
  }

  return rangeSum;
}
