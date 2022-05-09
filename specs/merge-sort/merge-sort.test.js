/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // Merge
  const merge = (arrayA = [], arrayB = []) => {
    const result = [];

    while (arrayA.length > 0 || arrayB.length > 0) {
      if (arrayA.length === 0 || arrayB.length === 0) {
        // Return combined sorted list once any one of the array is completed
        return [...result, ...arrayA, ...arrayB];
      }

      if (arrayA[0] < arrayB[0]) {
        result.push(arrayA.shift());
      } else {
        result.push(arrayB.shift());
      }
    }
  };

  // Divide
  const divide = (array = []) => {
    const middleIndex = Math.ceil(array.length / 2);
    return [array.slice(0, middleIndex), array.slice(middleIndex)];
  };

  // Base case
  if (nums.length === 1) {
    return nums;
  }

  // Recursion step
  const [left, right] = divide(nums);
  return merge(mergeSort(left), mergeSort(right));
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
