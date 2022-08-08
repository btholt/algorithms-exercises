/*
  
  Create a function called heapSort that accepts an array and performs a heap sort on it in place (heap sorts are normally destructive)
  
  You will probably need at least two more functions: heapify and createMaxHeap
   
*/

const heapSort = (array) => {
  // code
  array = createMaxHeap(array);
  for (let i = 0; i < array.length; i++) {
    swap(0, array.length - i - 1, array);
    heapify(array, 0, array.length - i - 1);
  }
  return array;
};

const createMaxHeap = (array) => {
  // code
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i, array.length);
  }
  return array;
};
// divide array using heapSize
const heapify = (array, index, heapSize) => {
  // code
  const leftChildIndex = 2 * index + 1;
  const leftChild = array[leftChildIndex];
  const RightChildIndex = 2 * index + 2;
  const RightChild = array[RightChildIndex];
  if (leftChildIndex >= heapSize && RightChildIndex >= heapSize) return;
  else if (
    leftChildIndex < heapSize &&
    RightChildIndex >= heapSize &&
    leftChild > array[index]
  ) {
    swap(leftChildIndex, index, array);
    heapify(array, leftChildIndex, heapSize);
  } else if (
    leftChildIndex >= heapSize &&
    RightChildIndex < heapSize &&
    RightChild > array[index]
  ) {
    swap(RightChildIndex, index, array);
    heapify(array, RightChildIndex, heapSize);
  } else if (leftChildIndex < heapSize && RightChildIndex < heapSize) {
    let max = Math.max(array[index], leftChild, RightChild);
    if (max == array[index]) return;
    if (max == leftChild) {
      swap(leftChildIndex, index, array);
      heapify(array, leftChildIndex, heapSize);
    } else {
      swap(RightChildIndex, index, array);
      heapify(array, RightChildIndex, heapSize);
    }
  }
};

function swap(index1, index2, array) {
  // swap 2 items in an array
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

// unit tests
// do not modify the below code
test("heap sort", function () {
  const nums = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1];
  heapSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
