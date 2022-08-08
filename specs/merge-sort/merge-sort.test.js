/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }

  return merge(
    mergeSort(nums.slice(0, Math.floor(nums.length / 2))),
    mergeSort(nums.slice(Math.floor(nums.length / 2)))
  );
};

function merge(left, right) {
  const result = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Big O of concat() is O(n)

  if (i === left.length) {
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }
  } else {
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
  }
  return result;
}

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
