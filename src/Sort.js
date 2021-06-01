import React from "react";
import { App, snapshot, done, range } from "./sort-visualizer";

function bubbleSort(nums) {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      snapshot(nums);
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  snapshot(nums);
  return nums;
}

export default function Sort() {
  const sort = bubbleSort(range(0, 100));
  console.log("sort");
  done();
  return <App />;
}
