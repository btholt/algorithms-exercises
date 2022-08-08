/*
  AVL Tree
  
  Name you class/function (anything we can call new on) Tree
  
  I would suggest making a Node class as well (it will help _a lot_ with AVL trees) Whereas with BSTs we 
  could get away with most of the logic living in the Tree class, that will be a lot tougher with AVL
  trees dues how the function calls must be recursive in order to get the balancing correct.
  
  Tree must a method called add that takes a value and adds it to the tree and then correctly balances the
  tree. There is only one correct structure for any given order of adding numbers and the unit tests enforce
  that structure.
  
  If you have any questions conceptually about balancing the tree, refer to the class website.
  
  Make sure you are calling the properties
  of the Nodes as follows:
  value - integer - the value being store in the tree
  left  - Node    - the subtree containing Node's with values less than the current Node's value
  right - Node    - the subtree containing Node's with values greater than the current Node's value

*/

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) this.root = new Node(value);
    else this.root.add(value);
  }

  toObject() {
    return this.root;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }

  add(value) {
    // decide to go left or right
    // find the correct place to add
    if (value > this.value) {
      // go right
      if (!this.right) this.right = new Node(value);
      else this.right.add(value);

      if (!this.left || this.right.height > this.left.height) {
        this.height = this.right.height + 1;
      }
    } else {
      // go left
      if (!this.left) this.left = new Node(value);
      else this.left.add(value);

      if (!this.right || this.right.height < this.left.height) {
        this.height = this.left.height + 1;
      }
    }

    // make sure you're updating heights
    this.balance();
  }

  // this function is not correct somehow :) but idk why
  balance() {
    // is this node out of balance by checking the heights
    let rightH = this.right ? this.right.height : 0;
    let leftH = this.left ? this.left.height : 0;
    if (Math.abs(rightH - leftH) > 1) {
      // if it's out of balance, do i need single or double rotate
      if (this.right) {
        // right heavy
        if (this.right.right) {
          // child is right heavy
          this.rotateRR();
        } else {
          // child is left heavy
          this.right.rotateLL();
          this.rotateRR();
        }
      } else {
        // left heavy
        if (this.left.right) {
          // child is right heavy
          this.left.rotateRR();
          this.rotateLL();
        } else {
          // child is left heavy
          this.rotateLL();
        }
      }
      // if single just call rotate on self
      // if double call rotate on child then on self
    }
    // if not out of balance do nothing
  }

  // call rotateRR if the right child is heavy
  rotateRR() {
    const originalLeftChild = this.left;

    const temp = this.value;
    this.value = this.right.value;
    this.right.value = temp;

    this.left = this.right;

    this.right = this.right.right;
    this.left.right = this.left.left;
    this.left.left = originalLeftChild;

    this.left.updateInNewLocation();
    this.updateInNewLocation();
  }

  // call rotateLL if the left child is heavy
  rotateLL() {
    const originalrightChild = this.right;

    const temp = this.value;
    this.value = this.left.value;
    this.left.value = temp;

    this.right = this.left;

    this.left = this.left.left;
    this.right.left = this.right.right;
    this.right.right = originalrightChild;
    this.right.updateInNewLocation();
    this.updateInNewLocation();
  }

  updateInNewLocation() {
    if (!this.right && !this.left) {
      this.height = 1;
    } else if (
      !this.right ||
      (this.left && this.right.height < this.left.height)
    ) {
      this.height = this.left.height + 1;
    } else {
      //if (!this.left || this.right.height > this.left.height)
      this.height = this.right.height + 1;
    }
  }
}

// unit tests
// do not modify the below code
describe.skip("AVL Tree", function () {
  test("creates a correct tree", () => {
    const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
    const tree = new Tree();
    nums.map((num) => tree.add(num));
    const objs = tree.toObject();

    expect(objs.value).toEqual(4);

    expect(objs.left.value).toEqual(2);

    expect(objs.left.left.value).toEqual(1);
    expect(objs.left.left.left).toBeNull();
    expect(objs.left.left.right).toBeNull();

    expect(objs.left.right.value).toEqual(3);
    expect(objs.left.right.left).toBeNull();
    expect(objs.left.right.right).toBeNull();

    expect(objs.right.value).toEqual(7);

    expect(objs.right.left.value).toEqual(6);
    expect(objs.right.left.right).toBeNull();

    expect(objs.right.left.left.value).toEqual(5);
    expect(objs.right.left.left.left).toBeNull();
    expect(objs.right.left.left.right).toBeNull();

    expect(objs.right.right.value).toEqual(9);

    expect(objs.right.right.left.value).toEqual(8);
    expect(objs.right.right.left.left).toBeNull();
    expect(objs.right.right.left.right).toBeNull();

    expect(objs.right.right.right.value).toEqual(10);
    expect(objs.right.right.right.left).toBeNull();
    expect(objs.right.right.right.right).toBeNull();
  });
});
