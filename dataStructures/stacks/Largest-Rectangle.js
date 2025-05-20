// Skyline Real Estate Developers is planning to demolish a number of old, unoccupied buildings and construct a shopping mall in their place. Your task is to find the largest solid area in which the mall can be constructed.

// There are a number of buildings in a certain two-dimensional landscape. Each building has a height, given by . If you join  adjacent buildings, they will form a solid rectangle of area .

// Example

// A rectangle of height  and length  can be constructed within the boundaries. The area formed is .

// Function Description

// Complete the function largestRectangle int the editor below. It should return an integer representing the largest rectangle that can be formed within the bounds of consecutive buildings.

// largestRectangle has the following parameter(s):

// int h[n]: the building heights
// Returns
// - long: the area of the largest rectangle that can be formed within the bounds of consecutive buildings

// Input Format

// The first line contains , the number of buildings.
// The second line contains  space-separated integers, each the height of a building.

// Constraints

// Sample Input

// STDIN       Function
// -----       --------
// 5           h[] size n = 5
// 1 2 3 4 5   h = [1, 2, 3, 4, 5]
// Sample Output

// 9
// Explanation

// An illustration of the test case follows.
// image


buil = [2, 4, 1, 3, 5]

function largestRectangle(h) {
    // stores indices of buildings.
    let stack = [];
    let maxArea = 0;
    let i = 0;
  
    while (i < h.length || stack.length > 0) {
      if (i < h.length && (stack.length === 0 || h[i] > h[stack[stack.length - 1]])) { // or h[i](current index) is bigger than h[stack[stack.length - 1]](the last index of the stack in h)--pushes indices onto the stack when the current building is taller than the one at the top of the stack.
        stack.push(i);//push it into the stack
        i++;
      } else {//The else condition pops indices from the stack when a shorter building is encountered, calculating the area of the potential rectangle.
        let topIndex = stack.pop();
        let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1; //
        let area = h[topIndex] * width;
        maxArea = Math.max(maxArea, area);
      }
    }
    console.log( maxArea);
}

largestRectangle(buil)