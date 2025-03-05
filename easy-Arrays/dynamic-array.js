// Declare a 2-dimensional array, , with  empty arrays, all zero-indexed.
// Declare an integer, , and initialize it to 0.
// You need to process two types of queries:

// Query: 

// Compute .
// Append the integer  to .
// Query: 

// Compute .
// Set .
// Store the new value of  in an answers array.
// Notes:
// -  is the bitwise XOR operation, which corresponds to the ^ operator in most languages. Learn more about it on Wikipedia.
// -  is the modulo operator.
// - Finally,  is the number of elements in .

// Function Description

// Complete the  function with the following parameters:
// - : the number of empty arrays to initialize in 
// - : 2-D array of integers

// Returns

// : the results of each type 2 query in the order they are presented
// Input Format

// The first line contains two space-separated integers, , the size of  to create, and , the number of queries, respectively.
// Each of the  subsequent lines contains a query string, .

// Constraints

// It is guaranteed that query type  will never query an empty array or index.
// Sample Input

// STDIN    Function
// -----    --------
// 2 5      size of arr[] n = 2, size of queries[] q = 5
// 1 0 5    queries = [[1,0,5],[1,1,7],[1,0,3],[2,1,0],[2,1,1]]
// 1 1 7
// 1 0 3
// 2 1 0
// 2 1 1
// Sample Output

// 7
// 3
// Explanation

// Initial Values:


//  = [ ]
//  = [ ]

// Query 0: Append  to .

//  = [5]
//  = [ ]

// Query 1: Append  to .
//  = [5]
//  = [7]

// Query 2: Append  to .

//  = [5, 3]
//  = [7]

// Query 3: Assign the value at index  of  to . Store  in your answer array. 
//  = [5, 3]
//  = [7]

// Query 4: Assign the value at index  of  to . Store  in your answer array. 
//  = [5, 3]
//  = [7]

// Return your answer array [7, 3]. The code stub prints its elements on separate lines.


function dynamicArray(n, queries) {
    //we fill the new arr with the number of n

    let arr = Array(n).fill(null).map(()=> [])

    let lastAnswer=0

    let result=[]

    //now we loop thru the queries
    for(let i=0; i<queries.length; i++){
        let query = queries[i]
        //now we set the index
        let index = (query[1]^lastAnswer)%n

        //now we procces the 2 types of queries

        if(query[0]===1){
            arr[index].push(query[2])
        }else if(query[0]===2){
            lastAnswer = arr[index][query[2]%arr[index].length]
            result.push(lastAnswer)
        }
    }
    return result
}