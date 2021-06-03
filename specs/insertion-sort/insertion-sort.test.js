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

function insertionSort(nums) {
  // code goes here

  //outer loop -> traverse through the list
  //first item is already sorted
  for (let i = 1; i < nums.length; i++) {
    let elementToInserted = nums[i];
    //innerloop -> traverse through the sorted part of the list
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] > elementToInserted) {
        const temp = nums[j];
        nums[j] = elementToInserted;
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
}

// unit tests
// do not modify the below code
test("insertion sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
