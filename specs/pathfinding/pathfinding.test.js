// write in a function thats a X by X array of arrays of numbers
// as well two x/y combinations and have it return the shortest
// length (you don't need to track the actual path) from point A
// to point B.
//
// the numbers in the maze array represent as follows:
// 0 – open space
// 1 - closed space, cannot pass through. a wall
// 2 - one of the two origination points
//
// you will almost certainly need to transform the maze into your own
// data structure to keep track of all the meta data

// this is a little tool I wrote to log out the maze to the console.
// it is opinionated of how to do that and you do not have to do it
// the way I did. however feel free to use it if you'd like
const logMaze = require("./logger");

const NO_ONE = 0;
const BY_A = 1;
const BY_B = 2;

function generateVisited(maze) {
  const visited = [];
  for (let y = 0; y < maze.length; y++) {
    const yAxis = [];
    for (let x = 0; x < maze[y].length; x++) {
      const coordinate = {
        closed: maze[y][x] === 1,
        length: 0,
        openedBy: NO_ONE,
        x,
        y,
      };
      yAxis.push(coordinate);
    }
    visited.push(yAxis);
  }
  return visited;
}

function getNeighbors(visited, x, y) {
  const neighbors = [];

  // we want to check that we're not gooing out of bounds and that we have not already visited that
  if (y - 1 >= 0 && !visited[y - 1][x].closed) {
    // going left
    neighbors.push(visited[y - 1][x]);
  }

  if (y + 1 < visited[0].length && !visited[y + 1][x].closed) {
    // right
    neighbors.push(visited[y + 1][x]);
  }

  if (x - 1 >= 0 && !visited[y][x - 1].closed) {
    // up
    neighbors.push(visited[y][x - 1]);
  }

  if (x + 1 < visited.length && !visited[y][x + 1].closed) {
    // down
    neighbors.push(visited[y][x + 1]);
  }

  return neighbors;
}

function findShortestPathLength(maze, [xA, yA], [xB, yB]) {
  // code goes here
  // create a grid the same size of the maze and transform it to another data structure which store length of each node, who visited it and is it wall or not? for each node in the graph
  const visited = generateVisited(maze);
  // then mark point A as visited (start of our maze)
  visited[yA][xA].openedBy = BY_A;
  visited[yB][xB].openedBy = BY_B;
  // create 2 queue for points a and b that we're going to go through these queues, spiral them out and breadth-first traverse until they crossover with each other
  let aQueue = [visited[yA][xA]];
  let bQueue = [visited[yB][xB]];
  // create an iteration number start from 0 (keep track of degree of seperation)
  let itr = 0;

  // in our outer loop we wanna go until we find that they meet or don't meet (we wanna go as far as we possibly can until we find the answer)
  while (aQueue.length && bQueue.length) {
    itr++;
    // create a function to get neighbors that takes a coordinate x,y and return all of the neighbors that exist for that particular coordinate
    // get the neighbors for all nodes in aQueue (gather A neighbors)
    let aNeighbors = [];
    while (aQueue.length) {
      // we're gonna go through everything that's in the queue and enqueue all of its valid neighbors
      const coordinate = aQueue.shift();
      // concat gives back a new array
      aNeighbors = aNeighbors.concat(
        getNeighbors(visited, coordinate.x, coordinate.y)
      );
    }

    // then we have to modify all of these new neighbors to be opened by A with all of their correct lengths (process A neighbors)
    for (let i = 0; i < aNeighbors.length; i++) {
      const neighbor = aNeighbors[i];
      // if we have spun out and encountered the next thing that has been opened by B when we're doing it on A, we found the path, so we have to add this neighbor length (length: how far away it is from its origin) to itr which is how far away we are from the other one
      if (neighbor.openedBy === BY_B) return neighbor.length + itr;
      else if (neighbor.openedBy === NO_ONE) {
        neighbor.length = itr;
        neighbor.openedBy = BY_A;
        aQueue.push(neighbor);
      }
    }

    // get the neighbors for all nodes in bQueue (gather B neighbors)
    let bNeighbors = [];
    while (bQueue.length) {
      // we're gonna go through everything that's in the queue and enqueue all of its valid neighbors
      const coordinate = bQueue.shift();
      // concat() gives back a new array
      bNeighbors = bNeighbors.concat(
        getNeighbors(visited, coordinate.x, coordinate.y)
      );
    }

    // then we have to modify all of these new neighbors to be opened by B with all of their correct lengths (process B neighbors)
    for (let i = 0; i < bNeighbors.length; i++) {
      const neighbor = bNeighbors[i];
      // if we have spun out and encountered the next thing that has been opened by A when we're doing it on B, we found the path, so we have to add this neighbor length (length: how far away it is from its origin) to itr which is how far away we are from the other one
      if (neighbor.openedBy === BY_A) return neighbor.length + itr;
      else if (neighbor.openedBy === NO_ONE) {
        neighbor.length = itr;
        neighbor.openedBy = BY_B;
        bQueue.push(neighbor);
      }
    }
  }

  // if we get through all of our outer loop and we did not find anything return -1 means we did not find a path
  return -1;
}

// there is a visualization tool in the completed exercise
// it requires you to shape your objects like I did
// see the notes there if you want to use it

// unit tests
// do not modify the below code
describe("pathfinding – happy path", function () {
  const fourByFour = [
    [2, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 2],
  ];
  it("should solve a 4x4 maze", () => {
    expect(findShortestPathLength(fourByFour, [0, 0], [3, 3])).toEqual(6);
  });

  const sixBySix = [
    [0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0],
  ];
  it("should solve a 6x6 maze", () => {
    expect(findShortestPathLength(sixBySix, [1, 1], [2, 5])).toEqual(7);
  });

  const eightByEight = [
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 2, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 2],
  ];
  it("should solve a 8x8 maze", () => {
    expect(findShortestPathLength(eightByEight, [1, 7], [7, 7])).toEqual(16);
  });

  const fifteenByFifteen = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 1, 1, 2, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  it("should solve a 15x15 maze", () => {
    expect(findShortestPathLength(fifteenByFifteen, [1, 1], [8, 8])).toEqual(
      78
    );
  });
});

// I care far less if you solve these
// nonetheless, if you're having fun, solve some of the edge cases too!
// just remove the .skip from describe.skip
describe("pathfinding – edge cases", function () {
  const byEachOther = [
    [0, 0, 0, 0, 0],
    [0, 2, 2, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
  ];
  it("should solve the maze if they're next to each other", () => {
    expect(findShortestPathLength(byEachOther, [1, 1], [2, 1])).toEqual(1);
  });

  const impossible = [
    [0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0],
    [0, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 2],
  ];
  it("should return -1 when there's no possible path", () => {
    expect(findShortestPathLength(impossible, [1, 1], [4, 4])).toEqual(-1);
  });
});
