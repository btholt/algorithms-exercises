function nestedAdd(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (Array.isArray(current)) {
      sum += nestedAdd(current);
    } else {
      sum += current;
    }
  }
  return sum;
}

test("nested arrays addition", () => {
  expect(nestedAdd([1, 2, 3])).toEqual(6);
  expect(nestedAdd([1, [2], 3])).toEqual(6);
  expect(nestedAdd([[[[[[[[[5]]]]]]]]])).toEqual(5);
  expect(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11])).toEqual(5);
});
