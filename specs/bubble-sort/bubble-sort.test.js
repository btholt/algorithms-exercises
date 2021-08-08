// /*
//   Write a bubble sort here
//   Name the function bubbleSort
//   Return the sorted array at the end

//   To run the tests, change the `test.skip(…)` below to `test(…)`

//   Bubble sort works by comparing two adjacent numbers next to each other and then
//   swapping their places if the smaller index's value is larger than the larger
//   index's. Continue looping through until all values are in ascending order
// */

// attempt 1
function bubbleSort(nums) {
  let swap = true
  loopCount = 0
  while (swap === true) {
    swapCount = 0

    for (let i = 0; i < nums.length - loopCount; i++) {
      if (nums[i] > nums[i + 1]) {
        ;[nums[i], nums[i + 1]] = [nums[i + 1], nums[i]] //swap index
        swapCount++ // keep track if sorting happened
      }
    }
    loopCount++

    if (swapCount > 0) {
      swap = true
    } else {
      swap = false
    }
  }
  return nums
  console.log(nums)
}

// attemp 2
function bubbleSort(nums) {
  let swap = false
  loopCount = 0
  do {
    swap = false
    for (let i = 0; i < nums.length - loopCount; i++) {
      if (nums[i] > nums[i + 1]) {
        ;[nums[i], nums[i + 1]] = [nums[i + 1], nums[i]] //swap index
        console.log(nums, loopCount)
        swap = true
      }
    }
    loopCount++
  } while (swap)
  return nums
}

bubbleSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1])

// unit tests
// do not modify the below code
test('bubble sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
  const sortedNums = bubbleSort(nums)
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
