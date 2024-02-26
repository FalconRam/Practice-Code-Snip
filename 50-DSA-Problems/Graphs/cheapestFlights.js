/* 
==> Cheapest Flights Within K Stops -- https://leetcode.com/problems/cheapest-flights-within-k-stops/description/
There are n cities connected by some number of flights. 
You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that 
there is a flight from city fromi to city toi with cost pricei.

You are also given three integers src, dst, and k, 
return the cheapest price from src to dst with at most k stops. 
If there is no such route, return -1.

Example 1:
Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], 
src = 0, dst = 3, k = 1
Output: 700
Explanation:
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 3 is marked in red and 
has cost 100 + 600 = 700. Note that the path through cities [0,1,2,3] 
is cheaper but is invalid because it uses 2 stops.

Example 2:
Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
Output: 200
Explanation:
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 2 is marked in red and 
has cost 100 + 100 = 200.

Example 3:
Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
Output: 500
Explanation:
The graph is shown above.
The optimal path with no stops from city 0 to 2 is marked in red and has cost 500.

*/

/* 
Approach ==>  using an adjacency list to efficiently store the information 
about the flights departing from each node. Then, we'll perform a BFS traversal 
starting from the source node. At each step, we'll update the minimum cost to reach each node 
and continue traversing until we reach the destination node or exhaust the allowed number of stops.

 Time Complexity of BFS traversal is O(V + E), 
 where V is the number of vertices (nodes) and E is the number of edges (flights).
*/

function cheapestFlights(n, flights, src, dst, k) {
  const graph = buildAdjGraph(flights);

  const visitedNodeCost = new Array(n).fill(Number.POSITIVE_INFINITY);
  visitedNodeCost[src] = 0;
  const queue = [[src, 0]]; // city, curCost
  k++; // Increment k to account for the extra stop at destination
  while (k-- > 0 && queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [curCity, curCost] = queue.shift();
      if (graph.has(curCity)) {
        for (let [neighbourCity, neighbourCost] of graph.get(curCity)) {
          const newCost = curCost + neighbourCost;
          console.log({ neighbourCity, neighbourCost: newCost });
          // Update if the new price is lower than previously known
          if (newCost < visitedNodeCost[neighbourCity]) {
            visitedNodeCost[neighbourCity] = newCost;
            queue.push([neighbourCity, curCost + neighbourCost]);
          }
        }
      }
    }
  }
  console.log(visitedNodeCost);
  return visitedNodeCost[dst] !== Number.POSITIVE_INFINITY
    ? visitedNodeCost[dst]
    : -1;
}

function buildAdjGraph(flights) {
  let graph = new Map();
  for (let [from, to, price] of flights) {
    if (!graph.has(from)) {
      graph.set(from, []);
    }
    graph.get(from).push([to, price]);
  }
  console.log(graph);
  return graph;
}

// Test - 1
console.log(
  cheapestFlights(
    4, // n - cities
    [
      [0, 1, 100],
      [1, 2, 100],
      [2, 0, 100],
      [1, 3, 600],
      [2, 3, 200],
    ], // Graph - flights
    0, // src
    3, // dst
    1 // k
  )
); // 700

// Test - 2
console.log(
  cheapestFlights(
    3, // n - cities
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ], // Graph - flights
    0, // src
    2, // dst
    1 // k
  )
); // 200

// Test - 3
console.log(
  cheapestFlights(
    3, // n - cities
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ], // Graph - flights
    0, // src
    2, // dst
    0 // k
  )
); // 500

// // Test - 4
console.log(
  cheapestFlights(
    10,
    [
      [3, 4, 4],
      [2, 5, 6],
      [4, 7, 10],
      [9, 6, 5],
      [7, 4, 4],
      [6, 2, 10],
      [6, 8, 6],
      [7, 9, 4],
      [1, 5, 4],
      [1, 0, 4],
      [9, 7, 3],
      [7, 0, 5],
      [6, 5, 8],
      [1, 7, 6],
      [4, 0, 9],
      [5, 9, 1],
      [8, 7, 3],
      [1, 2, 6],
      [4, 1, 5],
      [5, 2, 4],
      [1, 9, 1],
      [7, 8, 10],
      [0, 4, 2],
      [7, 2, 8],
    ],
    6,
    0,
    7
  )
); // 14

// Test - 5
console.log(
  cheapestFlights(
    4, // n - cities
    [
      [0, 1, 1],
      [0, 2, 5],
      [1, 2, 1],
      [2, 3, 1],
    ], // Graph - flights
    0, // src
    3, // dst
    1 // k
  )
); // 6
