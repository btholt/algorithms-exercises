import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
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
  sort(shuffle(range(0, 25)));
  done();
  return <App />;
}
