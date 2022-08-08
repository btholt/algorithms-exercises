import React from "react";
import "./tree.css";
import { TreeViz } from "./tree-visualizer";
import _ from "lodash";

// class Tree {
//   constructor() {
//     this.root = null;
//   }

//   add(value) {
//     const node = new Node(value);
//     if (!this.root) {
//       this.root = node;
//     } else {
//       let current = this.root;
//       while (current) {
//         if (current.value >= value) {
//           if (!current.left) break;
//           current = current.left;
//         } else {
//           if (!current.right) break;
//           current = current.right;
//         }
//       }
//       if (current.value >= value) {
//         current.left = node;
//       } else {
//         current.right = node;
//       }
//     }
//   }

//   toObject() {
//     return this.root;
//   }
// }
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

export default function TreeComponent() {
  // const nums = _.shuffle(_.range(10));
  // const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8, 11];
  const tree = new Tree();
  nums.map((num) => tree.add(num));
  const objs = tree.toObject();
  return <TreeViz root={objs} />;
}
