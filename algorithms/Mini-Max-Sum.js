// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// 16 24
// Function Description

// Complete the  function with the following parameter(s):

// : an array of  integers
// Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.No value should be returned.

// Note For some languages, like C, C++, and Java, the sums may require that you use a long integer due to their size.

// Input Format

// A single line of five space-separated integers.

// Constraints


// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14
// Explanation

// The numbers are , , , , and . Calculate the following sums using four of the five integers:

// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Hints: Beware of integer overflow! Use a 64-bit integer to store the sums.

let arr= "1 3 2 4 5"
let result = arr.split(' ').map(el=> parseInt(el))


function miniMaxSum(arr) {

    const ascending = arr.sort()
    //min is gonna be the sum of the smallest numbers
    const min = ascending.slice(0,4).reduce((acc, el) => acc+el)
  

    const descending = arr.sort((a,b)=> b-a)
    //max is gonna be the sum of the highest numbers
    const max = descending.slice(0,4).reduce((acc, el) => acc+el)
  

    console.log(min, max)
}

miniMaxSum(result) 
