/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

function insertionSort(nums = []) {
  // code goes here
  // Iterate over entire arrry picking a number to insert
  let n = 1;
  while (n < nums.length) {
    // Insert it in the correct place in sorted list (left)
    for (let index = n; index >= 0; index--) {
      // Swap with prev adjacent element if it is greater
      if (nums[index] < nums[index - 1]) {
        const temp = nums[index];
        nums[index] = nums[index - 1];
        nums[index - 1] = temp;
      } else {
        break;
      }
    }
    n++;
  }

  console.log({ nums });
}

// unit tests
// do not modify the below code
test("insertion sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

// Another test
test("insertion sort", function () {
  const nums = [1, 5, 3, 8, 2, 6, 4, 7, 900, -1];
  insertionSort(nums);
  expect(nums).toEqual([-1, 1, 2, 3, 4, 5, 6, 7, 8, 900]);
});
