import React from "react";
import "./tree.css";
import { TreeViz } from "./tree-visualizer";
import _ from "lodash";

class Tree {
  add(num) {
    // needs this
  }
  toObject() {
    // returns a root node with
    // {
    //   value:  <number>
    //   left:   <object>
    //   right:  <object>
    //   height: <number, optional>
    // }
    return { value: 1, left: null, right: null, height: 1 };
  }
}

export default function TreeComponent() {
  const nums = _.shuffle(_.range(50));
  const tree = new Tree();
  nums.map((num) => tree.add(num));
  const objs = tree.toObject();
  return <TreeViz root={objs} />;
}
