/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/
function getDigit(number, place) {
  // 1391, 0, 4 -> return 1
  const len = findLength(number);
  if (place > len) return 0;
  else {
    for (let i = 0; i < place - 1; i++) {
      number = Math.floor(number / 10);
    }
    return number % 10;
  }
}

function findLength(num) {
  let len = 1;
  while (Math.floor(num / 10) > 0) {
    len++;
    num = Math.floor(num / 10);
  }
  return len;
}

function getLongestNumber(array) {
  let max = 0;
  for (let i of array) {
    const len = findLength(i);
    if (len > max) max = len;
  }
  return max;
}

function radixSort(array) {
  // find longest number
  const longestNumber = getLongestNumber(array);
  // create how many buckets you need - an array of 10 arrays
  const buckets = [[], [], [], [], [], [], [], [], [], []];
  // for loop for how many iteration (one iteration for each of the longest numbers)
  for (let i = 1; i <= longestNumber; i++) {
    // while loop: enqueue the numbers into their buckets
    while (array.length) {
      const num = array.shift();
      const digit = getDigit(num, i);
      buckets[digit].push(num);
    }
    // for loop for each bucket: dequeue all of the results
    buckets.forEach((bucket) => {
      while (bucket.length) {
        const num = bucket.shift();
        array.push(num);
      }
    });
  }
  return array;
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
      3000, 3001, 1200, 633,
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
      1200, 1244, 3000, 3001,
    ]);
  });

  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
