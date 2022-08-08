/*
O(log n): if a code employs a divide-and-conquer strategy (often recursive) - merge and quick sort
What causes spatial complexity is creating additional arrays - normally in sorting algorithms it's gonna be arrays that are going to cause spatial complexity.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Bubble Sort: the biggest numbers bubble up to the top and then it sorts the smaller part of the array over time.
Every item in a bubble sort has to be compared to every other item in the array (every item will see every other item in the array)
(Time complexity: Best case = O(n), Average case = O(n2), Worst case = O(n2) - Space complexity: constant)

Stable sort: To be considered a stable sort, the sort must guarantee that if two things are equal that that they stay in that same order.
Bubble sort is considered a stable sort. (because it would never swap 2 equal things)

Destructive sort: it's operation on the array itself. (modifying the original input)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Insertion Sort: it's better than bubble sort (it's n squared with better coefficients)
(Time complexity: Best case = O(n), Average case = O(n2), Worst case = O(n2) - Space complexity: constant)
Insertion sort is good when we know we have mostly sorted list, so we use it over quick sort or merge sort which have better average case but worst best case (if the 
arrays you're going to be sorting are likely to be sorted already or very close to it (a few swaps is cheap.) This will make it faster than quick sort and merge sort.)
The sort is destructive and the sort can be stable as long as you program it so that they stay in order during the insertions.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
tail call optimization: if you make the last line of your recursive function a return of your recursive call, then a programming language can automaticly turn that into a 
loop which is faster and more memory efficient than a recursive call.

The time taken by recursive Fibonacci is O(2^n) or exponential.
The time taken by recursive Factorials is O(n).
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Merge Sort: we have to look at everything at least once (it's just the virtue of sorting is that every number has to be at least looked at once), but we're not comparing 
one thing to everything else which makes it logn (it's not always make it logn but very frequently makes it logn).
For merge sort all three of best, worst, and average case computational complexity the answer will be the same.
(Time complexity: Best case = O(n log n), Average case = O(n log n), Worst case = O(n log n) - Space complexity: O(n) -> create an array for every item in the array)
(Merge Sort space complexity will always be O(n) including with arrays. If you draw the space tree out, it will seem as though the space complexity is O(nlgn). 
However, as the code is a Depth First code, you will always only be expanding along one branch of the tree, therefore, the total space usage required will always be 
bounded by O(3n) = O(n))
Algorithm:
1- base case, return if length 1 or 0
2- break into two smaller arrays
3- call mergeSort on left and right
4- return the merge of left and right

Merge sort is stable.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Quick Sort: it's better spatially than merge sort
Quick Sort 3 is when you take the first element, the middle element, and the last element and takes the middle value as the pivot, guaranteeing at least that your pivot 
isn't the smallest or biggest element. -> in which case we end up with a much better average case of O(nlogn).
(Time complexity: Best case = O(n log n), Average case = O(n log n), Worst case = O(n2) - Space complexity: destructive = O(logn), non-destructive = O(n))
The more shuffled the array is the better quick sort is. That way the pivots will tend to be more in the middle so we'll get a good mix in our left and right arrays which 
is where that log n magic comes in -> not every element is being compared to every other elements, so we end up with nlogn like merge sort but it has
better space complexity and a little faster (better coefficients).
It is possiblle to do a destructive version which has better spatial comlexity.
Using quick Sort 3 prevents us from having worst case scenarios
In order for us to get that logn magic instead of just n, we need to be able to skip some comparisons. If it's sorted, we will compare every number against every other 
so we'd end up with O(n²).
It is possible to implement quick sort as a destructive sort that operates in-place and uses some other tricks like tail call optimization.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Radix Sort: similar to bucket sort.
The big O of comparison based algorithms cannot be any faster n log n.
Algorithm: For base doing a positive integer radix sort we will create 10 buckets, one for each integer zero to nine. Then we'll loop d times where d is the maximum length of a 
number in our array. Then in the inner loop we would enqueue all the numbers in the buckets based on what digit we were sorting and then dequeue them back into the main 
array. JS doesn't have queue semantics so we'll use push for enqueue and shift for dequeue. We repeat this process until we get through d and the array is sorted.
(Time complexity:  O((n + b) * d), d id maximum key length and b is number of buckets (the more buckets we need, the larger the complexity), Worst case = O(n2) - Space 
complexity: O(n + d), n is length and d is how many places there are to sort by)
If you have a lot of numbers with lots of varied lengths that will bucket into a good distribution it can be very effective.
If we have a lot of vary long numbers that are distributed really well (uniform distribution with lots of terms), like having hundreds of 1000s that are distributed across that 
entire range then radix sort ends up being a good sort.
It's not great on spatial complexity because of the bucketing
We must start sorting from the rightmost position and use a stable algorithm at each position.
Radix sort is not an in-place algorithm as it uses a temporary count array.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Binary Search: if we have an array that's already sorted, we can use binary search. Otherwise we should use linear search (O(n)).
This algorithm is much better done with a loop than recursion.
(Time complexity:  O(logn) - Space complexity: constant)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
ArrayList: No matter how big the ArrayList is, array lookups take the same amount of time (O(1)).
Compacting: shifting elements in an array in order to delete an index.
you have to do an look-up and a deletion in order to do a deletion.
When we need to do lots of lookups, we going to choose an ArrayList
To implement ArrayList:
class ArrayList {
  // code goes here
  constructor() {
    // instantiate all your variables
  }

  push(value) {
    // add an item to the end of the array
  }

  pop() {
    // remove the last item in the array and returns it
  }

  get(index) {
    // returns that item from the array
  }

  delete(index) {
    // removes item from the array and collapses (shift) the array
  }
}
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
LinkedList: the distinct advantage of linkedlist, is that it becomes wery easy to delete and add things in the middle.
The lookups on a linkedList are O(n), but the delete and the insertion are constant time.
Doubly linkedList: have a previous and next pointer on each node which helps to never have to go more that half of the array. This can be helpful if you want to be able to 
do lookups from the tail or from the head.
Algorithm:
1- create node class with value and next properties
2- create LinkedList class with head, tail and length properties
3- create push method that takes a value, create a new node, check if linkedlist is empty, if so make head the new created node, otherwise set tail.next to node. Then set
tail to set new created node
4- create pop method that calls delete method with length - 1
5- create find method that takes an index, check for boundries, then make a copy of head in a variable called current, loop through 0 to index and increment current
(current = current.next), then return current node.
6- create get method that takes an index, find that node and returns it (if there is one, otherwise return undefined)
7- make delete method that takes an index, check if linkedlist is empty, if not check if we're deleting the first element (the head), make a copy of the head, if tail and
head are the same (only one element in the array) make both of them null, if head exists make head the head.next, for both situations decrement length and return head copy 
value. If we're not deleting the first element, find the previous node that we're deleting, get its next, if it's null (it's tail or out of range) return null, if not link
the previous.next to the .next of the node that we're deleting, if previous.next becomes null it means it's also tail (make it new tail), decrement the length and return 
the value of the node that we deleted.

LinkedList is made of a bunch of nodes that point to the next one in the list. Every node in a LinkedLists has two properties, the value of whatever is being store and 
a pointer to the next node in the list. These nodes will not be sequential in memory, meaning we don't get the easy lookups but the advantage is that adding things is 
easy since we don't have to do the compacting we had to do with ArrayList. The lookups grow with length and therefore the Big O is O(n) for lookups. Deletions are O(1).
(we consider lookups and deletions as separate actions) Insertions are O(1) too.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Tree: a way to structure data. Trees can have many pointers. Not all trees have to be in sorted order but Binary Search Trees do have to be.
Binary Search Tree: have order to them and must be sorted at all times. Each node have 2 children at most. They are made for searching.
The average case scenario of lookups in a binary search tree are O(logn)
Database index uses trees for lookups.
(Time complexity (for lookups): Best case (the root) = O(1), Average case = O(log n), Worst case = O(n) - Space complexity: )
Adding an item to a BST is like lookup. We search for that node until we get to a null node then we add it.
To delete a node we can put the greatest left sub child or the least right child. The least child in the right subtree will not have a left child (Otherwise what you found 
wouldn't be the least one in this subtree). Then we're going to do two things: take its value and replace the value we're trying to delete and then move least right child's 
right child to node we're over writing's left child.

-> .delete called on 5
-> call .find on 5
  -> start with root, 10. 5 is less, go left
  -> found 5
-> .findLeastRightChild with 5
  -> go right on 5, land on 8
  -> go left as far as we can. only one hop, 6
-> replace the node that 5's value with 6
   (the new 6 / old 5 node will be represented as 6')

         10
       /   \
     6'     15
    / \    /  \
   3   8  12  17
      /
     6
      \
       7

-> set 8 left child to be 6 right child

         10
       /   \
     6'     15
    / \    /  \
   3   8  12  17
      /
     7
    
When the node to delete is a leaf node, just wipe out the whole node.
When one of the children is null, you can just move its entire child to be the new child.

   10
  /  \
 5   15
    /
   12
  /  \
 11  14

-> delete 15
-> 15 has no right child but does have a left child
-> set 10 right child to be 15 left child

   10
  /  \
 5   12
    /  \
   11  14


The Big O of deletion would be still be O(log n).
If we add everything in a sorted order to a BST, we get a straight line (linkedlist).  BST has no way to deal with this, so we don't use it directly.
We can have duplicate elements in BST and it can either be in the left subtree or right subtree
A doubly linkedlist is not a tree.
Using a BST over a sorted array: for a sorted array store data as an array list (storing data sequentially in memory), but it's not possible for database index (because objects
could be enormous). In BSTs we don't have to know ahead of time how much data we're gonna allocate.
To implement BST:
class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    // some logic around if this is the root
    // find the correct place to add
    return this; // which is the tree itself
  }
}

class Node {
  // code maybe goes here
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

// we can implement add method either in node class (use recursive method) or tree class (use iterative method)
  add(value) {
    // this could be called recursively
  }
}

Normal BSTs run into worst case scenarios (sorted list of numbers)
In BST you need to be able to rapidly access data in it, even if it means slower inserts and deletes.
We have one node that is the root. That node can have a left child and a right child. It can have both, one, or neither. Every node has a value. Both children are 
nodes just like the root: they can 0-2 children as well and will always have a value (there are no nodes without values.) Every value in a node's left tree is 
smaller than its value and every node in its right tree is larger than its value. Values that are equal can go either way.
We use trees because they're very searchable.
we'll store the whole database in one data structure and then we'll keep a separate tree that we can use an index. When a user searches for their order number, 
we do a fast find on our tree, it points to where the item is in our database and we get a fast look up on a big database. O(log n) on large datasets is very fast.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
AVL Tree: every AVL tree is a BST. The way wwe're gonna define out of balance is the right child has 2 height difference from the left child (single rotation).
For straight line we should use single rotation, but for bent ones (go right then left) called right rotation left child heavy we should use double rotation
A valid AVL tree is always a valid BST, AVL trees are a subset of BST trees. When you add a new value to a AVL tree, you do it the same way. The only difference is on 
the way up your recursive calls you check to see if the node is balanced after you added the new node.
A tree is out of balance if its subtrees' difference of heights is greater than one.
We can now guarantee that we won't hit worst case scenarios of having greatly out-of-balance trees and guarantee we won't hit the O(n) cases. Our worst case becomes O(log n).
Single Rotation Algorithm (a left rotation is mirror of this): 

5
 \
  8

-> Currently valid AVL tree
-> .add called with 9

5 - node A
 \
  8 - node B
   \
    9 - node C

(on the way up from the recursion)
-> check balance of node C: left height is 0, right height is 0, balanced
-> check balance of node B: left height is 0, right height is 1, balanced
-> check balance of node A: left height is 0, right height is 2
unbalanced, right heavy, child is right heavy

-> perform right rotation
-> swap the values of nodes A and B
-> make node B the left child of node A
-> make node C the right child of node A
-> move node B's left child to its right child
(in this case they're both null)
-> make node A's _original_ left child
(which was null in this case) the left child of node B
-> update the heights of all the nodes involved

      8 - node A
    /   \
   5     9
node B   node C

Double Rotations Algorithm:

5
 \
  8

-> currently valid AVL tree
-> .add called with 7

5 - node A
 \
  8 - node B
 /
7 - node C

(on the way up from the recursion)
-> check balance of node C: left height is 0, right height is 0, balanced
-> check balance of node B: left height is 0, right height is 1, balanced
-> check balance of node A: left height is 0, right height is 2,
unbalanced, right heavy, child is left heavy
-> perform left rotation on left heavy right child node B

5 - node A
 \
  7 - node B
   \
    8 - node C

-> now perform right rotation on node A

      7 - node A
    /   \
   5     8
node B   node C
***********************************************************************
AVL Implementation:
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
    // make sure you're updating heights: 
    // if you go right only update height if it does not have a left child or right child height > left child height
    // if you go left only update height if it does not have a right child or left child height > right child height
    this.balance();
  }

  balance() {
    // is this node out of balance by checking the heights
    // if not out of balance do nothing
    // if it's out of balance, do i need single or double rotate
    // if single just call rotate on self
    // if double call rotate on child then on self
  }

  // call rotateRR if the right child is heavy
  rotateRR() {
    a                      b
     \                   /  \
      b        ->       a    c
       \
        c

    // a and b are effected by the rotation so:
    this.left.updateInNewLocation();
    this.updateInNewLocation();
  }

  // call rotateLL if the left child is heavy
  rotateLL() {
    // rotateRR mirror
    this.right.updateInNewLocation();
    this.updateInNewLocation();
  }

  updateInNewLocation() {
    // calculate the new height:
    // if it's a leaf height is 1
    // if it does not have right child or left child height > right child height, update height = left child height + 1
    // if it does not have left child or right child height > left child height, update height = right child height + 1
  }
}
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Depth-First Tree Traversals: When we need to serialize the entire tree into a flat data structure. There are three variations of depth-first traversal. Pre-order traversal: for 
each of the nodes, process the node (save it to an array,) then process the left subtree and then the right tree. In preorder traversal, you process the node, then recursively 
call the method on the left subtree and then the right subtree. In inorder traversal, you first recursively call the method on the left tree, then process the node, and then 
call the method on the right tree. Postorder traversal, you recursively call the method on the left subtree, then the left subtree, then you process the node. In post-order 
traversal root will be last element in the array.
If we want a sorted list, we're gonna use in-order traversal. If we want to make a deep copy of a tree, we're gonna use pre-order traversal. If we want to delete all the 
items in the array, we're gonna use post-order traversal (wa want to visit both children, delete all of them and then delete the node itself and return).
For a sorted list out of a BST, you'd want to use inorder. If you're making a deep copy of a tree, preorder traversal is super useful since you'd copy a node, and then add 
its left child and then its right tree. Postorder would be useful if you're deleting a tree since you'd process the left tree, then the right, and only after the children 
had been deleted would you delete the node you're working on.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Breadth-First Tree Traversals: we should use queue. Every time we pull a node off we're gonna grab its value, add both of its children to the queue, and keep processing 
until the queue is empty (it's iterative). Breadth-first isn't recursive processing of subtrees like depth-first.
Algorithm: 
1- dequeue 
2- enqueue its children (check to see if it has left or right children)
3- add it to the final result
4- keep going until there's no items left in the queue
(This can be solved recursively or iteratively)
We'll just dequeue an item off of the queue, process the node, then add the left child to the queue (if there is one) and then add the right child to the queue (if there 
is one). Call our function recursively on that node. keep going until there's no items left in the queue (base case).

This is useful if you're looking for something you know is going to be near the root of the tree or if you're looking for the "closest" (e.g. least hops) node to something.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Heap Sort: a heap is inherently array, but it represent a tree like data structure. They are used to represent things like priority queues.
The difference between a binary heap which is an array and a BST which is a tree like data structure:
- BST made up of node objects, binary heap is always an array.
- The onle rule in a binary heap is that all the numbers underneath it are smaller
- In-order traversal in a binary heap is not a sorted list.
- A binary heap is always a complete tree (A tree in which every level, except possibly the deepest, is entirely filled. At depth n, the height of the tree, all nodes are 
as far left as possible).  

Max heaps are useful for sorting numbers (the root node is the largest number in the heap). There is also a min heap which is useful to do a reverse sorted list (the root 
node is the smallest number in the heap).
Heapiff: remove index 0 an remake the heap - keep moving things up
Algorithm: 1- remove items from the array 2- heapify the array to make it a max heap againg
All heapify does is it makes sure that a particular item is bigger than all of its children in the heap.
Heap sort complexity: Space = constant, Time = nlogn
Usa case for heap sort: priority queue
Heap sort does not care if the array is already sorted and build a max heap and then do the sorting.

A heap is an array that represents a tree data structure and has to be sorted in a particular way to represent that tree. Priority queues are often represented as heaps 
and often those two terms are used interchangeably even if the the priority queue is implemented a different way.
A binary heap is an array; a BST is made up of node objects.
In a BST, there is a strict order where a left child is always smaller than the parent and the right node is always greater. This is not true of a binary heap. The only 
guarantee of binary heap is the parent is greater than the children, there are no guarantees between sibling nodes.
Similar to the above point, if you do an in-order traversal of a BST, you'll get a sorted list. This does not work in a binary heap.
A binary heap is a "complete binary tree." This means it's as compact as possible. All the children of each node are as full as they can be and left children are filled 
out first. This is not true of a BST: they can be sparse.

Max heaps help you find the greatest number in the heap, but if you flip all the comparisons you'd have a min heap (helps to find the smallest number.)
So this is why a priority queue is often a binary heap: it's very easy to tell the largest number in a binary heap. None of the other is guaranteed, but once you dequeue 
(or take the next element off) it's easy to find the next item in the queue. In fact, that's how heapsort works: you construct an internal priority queue and then remove 
an item at a time and stick it at the end and then find the next largest item in the priority queue; rinse and repeat.
The way to represent a binary tree as an array is that for any index of an array n, its left child is stored at 2n + 1; and its right child is at 2n + 2. The root node 
will always be at 0. That means the root node's left child is at 1 and right child is at 2.
Once you construct a heap, removing an item from it is done in constant time since you need to find the next largest node to move to the root. This process is typically 
called heapify. In order to construct a max heap, you run heapify starting at the middle of the array and work backwards to the root. You don't need to do it from the end 
because heapify will inherently look at those nodes.
Make the array a max heap:
- To make a max heap, you'll run have to heapify on the first half of the array, going backwards. Your loop will looking something like this: 
for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--)
- Loop over the array / max array, dequeuing the root node (which will give you the largest item) and swapping that with last item in the array
- After dequeuing each item, run heapify again (same function we used to create the heap) once to find the next root node
- Next loop you'll dequeue the root node and swap it with the second-to-last item in the array and run heapify again.
- Once you've run out of items to dequeue, you have a sorted array
Implementation:
const heapSort = (array) => {
  // create a max heap
  // go backwards over the array
  // swap places (0 and last element)
  // call heapify on index 0
  return array;
};

const createMaxHeap = (array) => {
  // code
  // start from the middle (because that's the fisrt one to guarantee to have a child) to 0
  // call heapify on every index
};

const heapify = (array, index, heapSize) => {
  // code
  // check if there is a left child which has bigger value than the current element
  // check if there is a right child which has bigger value than the current element
  // if we have to do sth, swap current index with largest value index and call heapify on children
};

function swap(index1, index2, array) {
  // swap 2 items in an array
}
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Graphs: a tree that doesn't have a root and they don't have hierarchy. A node represents some entity, much like a row in an SQL database. Connections between nodes are 
called edge. We can have different types of edges.
In breadth first traverse we can be guaranteed that all nodes that are being enqueued into the queue are unique. That's not necessarily true in a graph.
Since there's no clear parent-child relationship you need to be aware there will be cycles (e.g. A points to B, B points to C, C points to A, circles in graphs.)
To apply breadth first traverse on a graph we have an outter for loop that goes for each degree of separation. Then you have an inner loop (probably a while loop) that dequeues 
items from your queue and processes them. You'll then queue up their connections to be processed for the next iteration.
Breadth first traverse implementation:

const findMostCommonTitle = (myId, degreesOfSeparation) => {
 // create a queue and push current id
 // create a seen Set to keep track of seen ids and initialize it with queue (we don't want to requeue current id)
 // create a jobs object to keep track of all the  jobs that we're gonna see
 // create a for loop from 0 to degreesOfSeparation
    // create a new queue: next level of connection
    // loop through queue (use while loop)
      // pull the first user off
      // queue up next iteration of connections
      // loop over first user conections
        // if we have not seen this connection before
          // add this connection to the new queue
          // add this connection to the seen set
      
      // add this user job title to the jobs object or update its count   
    // set queue to the new queue
  
  // find most common job
  // return Object.keys(jobTitles).reduce((a, b) => jobTitles[a] > jobTitles[b] ? a : b );
};

Time complexity: determined on how many degrees of seperation we're having - the more degrees of seperation that we're fanning out to, we're getting exponentially more 
complexity, so any Big O is going to include however many degrees of seperation that we're going to go out.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Pathfinding: The basic gist of Dijkstra's algorithm is that we'll start at both the beginning and the end node and begin "spiraling" outwards, marking each node with how 
far away it is from from its original Node. We'll alternate spiraling one level with one node, and then one level with the other. We'll do this until we intersect the two 
spirals. As soon as the spiral intersect we know we've found the shortest possible path. They've intersected but our algorithm hasn't made that connection yet. But on the 
next iteration, as the spiraling is happening, those that point will see that the node it's going to has been marked by another origin point. Because of that, we know that 
we've found one of the shortest paths. Instead of each node having at most two children like a binary search tree, each node has at most four children. We're going to take 
the root node (A) and add all of its children (neighbors, really) to a queue, and then begin processing each node as we pop them off the queue. Remember we need to alternate 
processing point A and point B, so we'll just alternate which ones we're pushing on the queue. Finally we'll have to keep track of visited nodes and distances, we'll just 
keep a duplicate matrix and mark it with what length it was and which origin point marked it.
Dijkstra algorithm doing breadth first traversal with adding the ability to add weights into various different points.
Breadth-first search is just Dijkstra's algorithm with all edge weights equal to 1. Dijkstra's algorithm is conceptually breadth-first search that respects edge costs.
Dijkstra's uses a priority queue data structure to keep track of the frontier of unvisited nodes. Breadth-first search uses a regular queue data structure. Operations on a 
priority queue are O(log n). Operations on a regular queue are O(1). The use of a regular queue in BFS is made possible by all edge weights being 1 - which makes the regular 
queue effectively behave as a priority queue.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Tries: this data structure makes it easy to retrieve data. It's a tree that's optimized for searching by prefix. The classic example of what you would use this for is 
autocomplete. The best way to implement typeaheads is using this data structure called trie. A trie start with a root node which is an empty string, then we'll have notes 
coming off for the first letter that someone might type. Every letter is an individual node. We treat spaces like normal character.
A trie starts with a root node that doesn't represent anything (often it's given the value of '' (empty string.) It has a bunch of child nodes (as many are necessary) that 
represent one letter, the first letter of all the words added to the data structure. Each of those letter-nodes will have children nodes for all the second letters of the 
words that are represented in the data structure. So on and so forth, there will be a chain of nodes that represent each letter in the data structure. All you have to do 
is a depth-first traversal of the children nodes to for a list of autocomplete suggestions. Since some words are contained within chains of others You'll often have a flag 
in there that signifies the node you're on is a complete word so you can just add it to the list and then keep going on the children.
You can have autocompletes for mid-word completions or add weights to certain edges/children so they're suggested first.
Implementation:
1- 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Bloom Filters: is a data structure that was designed so that we could ask it questions about extremely large data sets and it could give us answer of no or maybe. It's a
way to design a set. A normal set will be 100% correct always, so the downside of this set implementation is that we must store everything in the set. So by trading off 
accuracy we can reduce how much storage we're using. The way that we're gonna model a bloom filter is by using an array of 0s and 1s. Every element in the array is a 0 bit. 
This is an empty bloom filter. A one means that is has been seen before, and a 0 means that it has not been seen before. When we want to put a string in the array, we're 
gonna run it through 2 to 5 hashing functions (a hashing function takes a number or a string and converts it to a number,) then go to our data structure and flip all those 
bits at those indexes to 1. If we later ask the ds about that string, it will go through the same hashing functions and by looking at our ds we can answer maybe (all matching 
indexes are 1) or no (at least one of the maching indexes is 0).
The more items you add to a Bloom filter, the more you increase the false positive rate. We can mitigate this by having a larger array. We can also have more or less 
hashing functions depending on how much memory we're willing to fill up versus how many false positive we wanna be.
In exchange for being really fast and memory efficient, bloom filters trade off the fact that it can't tell you definitely if an item is in the set; it can only tell you 
definitely that item is not in the set. Stated differently, bloom filters have a false positive rate but do not have false negatives.
Each hashing function should be fast and definitely not cryptographically secure (which are by-design slow.) This means don't use SHA or MD5. They should also have a 
uniform distribution as much as possible.
If an index was already fliped we do nothing to it.
So when you add more items to a bloom filter, you'll increase your false positive rate. You can mitigate this by having a larger array, but you'll be trading off on having a 
larger memory footprint. You can also have more or less hashing functions, trading off on how quickly memory will fill up versus false positive rates.
We can't delete anything from bloom filters.
Implementation:

class BloomFilter {
  // create an array of size n filled with 0s
  constructor() {
    this.array = new Array(100).fill(0);
  }

  // for each hashing function flip matching index to 1
  add(string) {
    const hashFucs = [h1, h2, h3];
    hashFucs.forEach((h) => (this.array[h(string)] = 1));
  }

  // if any of matching indexes be 0, then the answer is 'no', if all of them are 1, then the answer is 'maybe'
  contains(string) {
    const hashFucs = [h1, h2, h3];
    for (let i = 0; i < 3; i++) {
      if (!this.array[hashFucs[i](string)]) return false;
    }
    return true;
  }
}

If we put a double exclamation point, it's going to coalesce it into a boolean (return !!(...)).
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
