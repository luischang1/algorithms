/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */

/**
 * Swaps two elements in an array
 * @param IA input array
 * @param a first index
 * @param b second index
 */
const swap = (IA, a, b, log) => {
  log && console.log(`swap a: ${IA[a]}, b: ${IA[b]}`);
  const temp = IA[a];
  IA[a] = IA[b];
  IA[b] = temp;
};

/**
 * Based on pivot, moves smaller items to the left and bigger items to the right
 * @param IA input array
 * @param left left index
 * @param right right index
 * @param pivot pivot
 */
const partition = (IA, left, right, pivot, log) => {
  while (left <= right) {
    while (IA[left] < pivot) {
      left++;
    }
    while (IA[right] > pivot) {
      right--;
    }
    log && console.log(`partition left: ${left} - ${IA[left]}, right: ${right} - ${IA[right]}`);
    // left smaller than right
    if (left <= right) {
      if (left < right) {
        swap(IA, left, right, log);
      }
      left++;
      right--;
    }
  }
  log && console.log(`partition array: ${IA}`);
  return left;
};

/**
 * Sorts an array using Quick Sort algorithm
 * @param IA input array
 * @param left left index
 * @param right right index
 */
const sort = (IA, left, right, log) => {
  log && console.log(`\nsort left: ${left}, right: ${right}`);
  if (left < right) {
    // get pivot
    const pivot = IA[Math.floor((right + left) / 2)];
    log && console.log(`sort pivot: ${pivot}`);
    const index = partition(IA, left, right, pivot, log);
    log && console.log(`sort index: ${index}, left: ${left}, right: ${right}`);
    // recursive call with 2 sub arrays at the sides of pivot
    sort(IA, left, index - 1, log);
    sort(IA, index, right, log);
  }
};

/**
 * Quick Sorts an array
 */
const quickSort = (inputArray, log) => {
  console.log('Quick Sort');
  // const inputArray = [6, 5, 2, 10, 1, 9, 3];
  console.log(`BEFORE: ${inputArray}`);
  if (inputArray && inputArray.length > 0) {
    sort(inputArray, 0, inputArray.length - 1, log);
  }
  log && console.log('\n');
  console.log(`AFTER: ${inputArray}\n`);
};

export default quickSort;
