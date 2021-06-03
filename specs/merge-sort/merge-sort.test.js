/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // base case
  if (nums.length <= 1) {
    return nums;
  }

  let middle = Math.floor(nums.length / 2);
  let left = nums.slice(0, middle);
  let right = nums.slice(middle);

  // merge takes two sorted lists and returns one sorted list
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const mergedArray = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      mergedArray.push(right.shift());
    } else {
      mergedArray.push(left.shift());
    }
  }
  return mergedArray.concat(left, right);
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
