/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  // code goes here
  let swapped = true;
  let iterations = 0;
  while (swapped) {
    swapped = false;
    for (let index = 0; index < nums.length - iterations; index++) {
      const num = nums[index];
      if (num > nums[index + 1]) {
        nums[index] = nums[index + 1];
        nums[index + 1] = num;
        swapped = true;
      }
    }
    iterations++;
  }
  return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
