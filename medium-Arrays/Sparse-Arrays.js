// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

// Example



// There are  instances of '',  of '', and  of ''. For each query, add an element to the return array: .

// Function Description

// Complete the function  with the following parameters:

// : an array of strings to search
// : an array of query strings
// Returns

// : the results of each query
// Input Format

// The first line contains and integer , the size of .
// Each of the next  lines contains a string .
// The next line contains , the size of .
// Each of the next  lines contains a string .

// Constraints



//  .

// Sample Input 1

// CopyDownload
// Array: stringList
// aba
// baba
// aba
// xzxb

 



// Array: queries
// aba
// xzxb
// ab

 
// 4
// aba
// baba
// aba
// xzxb
// 3
// aba
// xzxb
// ab
// Sample Output 1

// 2
// 1
// 0
// Explanation 1

// Here, "aba" occurs twice, in the first and third string. The string "xzxb" occurs once in the fourth string, and "ab" does not occur at all.


// Sample Input 2

// CopyDownload
// Array: stringList
// def
// de
// fgh

 



// Array: queries
// de
// lmn
// fgh

 
// 3
// def
// de
// fgh
// 3
// de
// lmn
// fgh
// Sample Output 2

// 1
// 0
// 1

// Sample Input 3

// CopyDownload
// Array: stringList
// abcde
// sdaklfj
// asdjf
// na
// basdn
// sdaklfj
// asdjf
// na
// asdjf
// na
// basdn
// sdaklfj
// asdjf

 



// Array: queries
// abcde
// sdaklfj
// asdjf
// na
// basdn

 
// 13
// abcde
// sdaklfj
// asdjf
// na
// basdn
// sdaklfj
// asdjf
// na
// asdjf
// na
// basdn
// sdaklfj
// asdjf
// 5
// abcde
// sdaklfj
// asdjf
// na
// basdn
// Sample Output 3

// 1
// 3
// 4
// 3
// 2

stringList=['ab','ab','abc']
queries=['ab','abc','bc']

function matchingStrings(stringList, queries) {

    let result=[]
    for(let i=0; i<queries.length; i++){
        let counter =0
        for(let j=0; j<stringList.length; j++){
            if(queries[i]===stringList[j]){
                counter+=1
            }
        }
        result.push(counter)
    }

    console.log(result)

    //MY OTHER ANSWER
    // let dic={}


    // for(let el of queries){
    //   dic[el]=0
    // }

    // for(let i in dic){
    //     for(let j=0; j<stringList.length; j++){
    //         if(i === stringList[j]){
    //             dic[i]++
    //         }
    //     }
    // }
    // console.log(Object.values(dic))


    //OR
    // const memory = {}

    // for(const s of stringList){
    //     memory[s]=( memory[s]||0)+1 //or 0 if it doesnt exist
    // }
    // let result = queries.map(el=> memory[el]||0)
    // console.log(result)
 
}

matchingStrings(stringList, queries)