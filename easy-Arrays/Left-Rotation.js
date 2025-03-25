// A  operation on a circular array shifts each of the array's elements  unit to the left. The elements that fall off the left end reappear at the right end. Given an integer , rotate the array that many steps to the left and return the result.

// Example


// After  rotations, .

// Function Description

// Complete the  function with the following parameters:

// : the amount to rotate by
// : the array to rotate
// Returns

// : the rotated array
// Input Format

// The first line contains two space-separated integers that denote , the number of integers, and , the number of left rotations to perform.
// The second line contains  space-separated integers that describe .

// Constraints

// Sample Input

// STDIN      Function
// -----      --------
// 5 4         n = 5 d = 4
// 1 2 3 4 5  arr = [1, 2, 3, 4, 5]
// Sample Output

// 5 1 2 3 4
// Explanation

// To perform d=4 left rotations, the array undergoes the following sequence of changes:
//original: [1,2,3,4,5]->[5,1,2,3,4]

let arr= [1,2,3,4,5]

function rotateLeft(d, arr) {

    let toPush= []

    for(let i=0; i<=d-1; i++ ){
        let shifted= arr.shift()
        toPush.push(shifted)
    }

    let result = arr.concat(toPush)

    console.log(result)

}

rotateLeft(4, arr)

