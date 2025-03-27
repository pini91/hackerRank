// Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in the array.

// Example


// Queries are interpreted as follows:

//     a b k
//     1 5 3
//     4 8 7
//     6 9 1
// Add the values of  between the indices  and  inclusive:

// image

// The largest value is  after all operations are performed.

// Function Description

// Complete the function  with the following parameters:

// : the number of elements in the array
// : a two dimensional array of queries where each  contains three integers, , , and .
// Returns

// : the maximum value in the resultant array
// Input Format

// The first line contains two space-separated integers  and , the size of the array and the number of queries.
// Each of the next  lines contains three space-separated integers ,  and , the left index, right index and number to add.

// Constraints

// Sample Input

// STDIN       Function
// -----       --------
// 5 3         arr[] size n = 5, queries[] size q = 3
// 1 2 100     queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]]
// 2 5 100
// 3 4 100
// Sample Output

// 200
// Explanation

// After the first update the list is 100 100 0 0 0.
// After the second update list is 100 200 100 100 100.
// After the third update list is 100 200 200 200 100.

// The maximum value is .

/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */
queries = [
    // Start, end, value to add
        [2,   7,   4],
        [5,   9,   2],
        [6,   12,  8]
    ]
//n=12


function arrayManipulation(n, queries) {

    let arr= Array.from('0'.repeat(n)).map(el=>Number(el))
    //or = let zeroArr = '0'.repeat(n).split('').map((e) => parseInt(e));


    queries.forEach(([a, b, k]) => {
        arr[a - 1] += k;  //-1 they say starts at index 1
        arr[b] -= k;   //because is inclusive so we dont type -1
    })
    let sum = 0;
    let max = 0;
    arr.forEach(val => {
        sum += val;
        max = Math.max(sum, max)
    })
    return max;

    //This solution is too slow:
    //let newArr= arr.map((el,index)=> index>=queries[i][0]-1 && index<=queries[i][1]-1 ? el+queries[i][2]: el)
    //arr= newArr

    //console.log(Math.max(... arr))
    
}

arrayManipulation(12, queries )






//EXPLANATION

// Let's go through how this works using the earlier example. Note that the reason we're changing the value at arr[a - 1] is because the problem statement indicated that the arrays are 1-indexed, so the array indices given are going to be off by 1 since arrays in JavaScript are 0-indexed. The reason we change arr[b] and not arr[b-1] is that the operations are meant to be from a to b inclusive and so we want to add the end point as being after the last index operated on.


// n = 12;
// queries = [
// // Start, end, value to add
//     [2,   7,   4],
//     [5,   9,   2],
//     [6,   12,  8]
// ]
// /*
//  1   2   3   4   5   6   7   8  9  10 11  12  13 // Indices
// */
//  [0, 0,  0,  0,  0,  0,  0,  0, 0,  0, 0,  0,  0] // Starting array
//  [0, 4,  0,  0,  0,  0,  0, -4, 0,  0, 0,  0,  0] // After [2,7,4]
//  [0, 4,  0,  0,  2,  0,  0, -4, 0, -2, 0,  0,  0] // After [5,9,2]
//  [0, 4,  0,  0,  2,  8,  0, -4, 0, -2, 0,  0, -8] // After [6,12,8]

// sum = 0, max = 0, arr = [0,4,0,0,2,8,0,-4,0,-2,0,0,-8]
// sum += 0; // sum stays 0, max stays 0
// sum += 4; // sum is now 4, sum > max, so max becomes 4
// sum += 0; // sum stays same, max stays same
// sum += 0; // sum stays same, max stays same
// sum += 2; // sum is now 6; sum > max, so max becomes 6;
// sum += 8; // sum is now 14; sum > max, so max becomes 14;
// sum += 0; // sum stays same, max stays same
// sum += -4; // sum is 10; max > sum, so max stays 14;
// sum += 0; // sum stays same, max stays same
// sum += -2; // sum is 8; max > sum, so max stays 14;
// sum += 0; // sum stays same, max stays same
// sum += 0; // sum stays same, max stays same
// sum += -8; // sum is 0; max > sum, so stays 14;

// max = 14;
// How does this work? Well, because we're subtracting the value of k at the index following the end index, we're only adding the value of a given k for the indices we should have added that k to. 
//And because we're only changing the values in the array to mark the beginning and end of operations, we're only performing 2 updates for each query. We've changed a variable operation with a worst case 
//complexity of n to be constant! Not too shabby.

//https://dev.to/amyshackles/array-manipulation-javascript-solution-58bj