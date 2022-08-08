/*

  Quick Sort!
  
  Name your function quickSort.
  
  Quick sort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

*/

function quickSort(nums) {
  // base case, array of length 0 or 1
  if (nums.length < 2) return nums;
  // choose pivot
  const pivot = nums[nums.length - 1];
  // separate into left and right arrays
  const left = [];
  const right = [];
  for (let i = 0; i < nums.length - 1; i++) {
    // every item is going to be looked at least once
    // we're gonna look at everything at least once and make comparisons -> O(n)
    if (nums[i] < pivot) left.push(nums[i]);
    else right.push(nums[i]);
  }
  // call quickSort on left and right arrays
  // By over writing left and right we can't improve spatial complexity, because it's so small
  const quickSortLeft = quickSort(left);
  const quickSortRight = quickSort(right);
  // return left.concat(pivot,right)
  return quickSortLeft.concat(pivot, quickSortRight);
}

// unit tests
// do not modify the below code
test("quickSort", function () {
  // 4 and 7 never going to be compared to each other -> logn
  const input = [10, 8, 2, 1, 6, 3, 5, 9, 4, 7, 5];
  const answer = quickSort(input);

  expect(answer).toEqual([1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]);
});
