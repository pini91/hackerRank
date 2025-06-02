// Implement a simple text editor. The editor initially contains an empty string, . Perform  operations of the following  types:

// append - Append string  to the end of .
// delete - Delete the last  characters of .
// print - Print the  character of .
// undo - Undo the last (not previously undone) operation of type  or , reverting  to the state it was in prior to that operation.
// Example



// operation
// index   S       ops[index]  explanation
// -----   ------  ----------  -----------
// 0       abcde   1 fg        append fg
// 1       abcdefg 3 6         print the 6th letter - f
// 2       abcdefg 2 5         delete the last 5 letters
// 3       ab      4           undo the last operation, index 2
// 4       abcdefg 3 7         print the 7th characgter - g
// 5       abcdefg 4           undo the last operation, index 0
// 6       abcde   3 4         print the 4th character - d
// The results should be printed as:

// f
// g
// d
// Input Format

// The first line contains an integer, , denoting the number of operations.
// Each line  of the  subsequent lines (where ) defines an operation to be performed. Each operation starts with a single integer,  (where ), denoting a type of operation as defined in the Problem Statement above. If the operation requires an argument,  is followed by its space-separated argument. For example, if  and , line  will be 1 abcd.

// Constraints

// The sum of the lengths of all  in the input .
// The sum of  over all delete operations .
// All input characters are lowercase English letters.
// It is guaranteed that the sequence of operations given as input is possible to perform.
// Output Format

// Each operation of type  must print the  character on a new line.

// Sample Input

// STDIN   Function
// -----   --------
// 8       Q = 8
// 1 abc   ops[0] = '1 abc'
// 3 3     ops[1] = '3 3'
// 2 3     ...
// 1 xy
// 3 2
// 4 
// 4 
// 3 1
// Sample Output

// c
// y
// a
// Explanation

// Initially,  is empty. The following sequence of  operations are described below:

// . We append  to , so .
// Print the  character on a new line. Currently, the  character is c.
// Delete the last  characters in  (), so .
// Append  to , so .
// Print the  character on a new line. Currently, the  character is y.
// Undo the last update to , making  empty again (i.e., ).
// Undo the next to last update to  (the deletion of the last  characters), making .
// Print the  character on a new line. Currently, the  character is a.

// let str = 'abcde';
//const ops=['1 abc','3 3','2 3','1 xy','3 2','4','4','3 1']


const ops =  `8
1 abc
3 3
2 3
1 xy
3 2
4
4
3 1`

function processData(input) {
    //first we separate the input which is a string with separator\n
    input = input.split('\n');
    //we remove the first element which gives the length of the stack
    input.shift()
    //we start the string as an empty string
    let string='';
    //we create an array so that we keep track of the string changes
    let stringModifications=[];
    //we push the first string which is an empty string
    stringModifications.push(string);
    

    for(let i=0; i<input.length; i++){
        const splitIndex= input[i].split(' ')// we separate each index 
        const operation = parseInt(splitIndex[0])// the  first index is the operation
        const arguments = splitIndex[1] //the second is the argument we should add or remove
        
        switch(operation){
            case 1:
                string+=arguments;
                stringModifications.push(string);
                break;
            case 2:
                string = string.slice(0, string.length-parseInt(arguments))// we divide the string between 0 and the arguments which we pass to integer since they were a string
                stringModifications.push(string)
                break;
            case 3:
                console.log(string.charAt(parseInt(arguments)-1));//we pass to integer since they were a string
                break;
            case 4:
                stringModifications.pop()
                string=stringModifications[stringModifications.length -1];
                break;

        }
          
    }

} 



  // if(input[i][0]==='1'){
            //     string += input[i].slice(2)
            //     stringModifications.push(string)
            // }else if(input[i][0]==='2'){
            //     let toDelete= input[i].slice(2)
            //     let indexToDelete=string.indexOf(string[string.length-toDelete])
            //     string = string.slice(0, indexToDelete)
            //     stringModifications.push(string)
            // }else if(input[i][0]==='3'){
            //     //console.log(stringModifications)
            //     let toPrint= input[i].slice(2)
            //     //console.log(string[toPrint-1])
            //     console.log(string.charAt(toPrint-1))
                //console.log(`printing from #3:${string[0]}`)
            // }else if(input[i][0]==='4'){
            //     stringModifications.pop()
            //     string=stringModifications[stringModifications.length-1]
            // }     
processData(ops)