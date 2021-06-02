import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  // do cool stuff here

  // call snapshot any time you do anything to the array
  // it's okay if you call it with duplicate value array,
  // it will deduplicate for you

  let i = 0;
  let isSwapped = true;
  do {
    isSwapped = false;
    for (let j = i + 1; j < nums.length; j++) {
      snapshot(nums);
      if (nums[i] > nums[j]) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        isSwapped = true;
      }
    }
    i++;
  } while (isSwapped);
  snapshot(nums);
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}
