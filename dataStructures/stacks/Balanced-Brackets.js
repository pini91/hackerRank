// A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

// Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

// A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

// By this logic, we say a sequence of brackets is balanced if the following conditions are met:

// It contains no unmatched brackets.
// The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
// Given  strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, return YES. Otherwise, return NO.

// Function Description

// Complete the function isBalanced in the editor below.

// isBalanced has the following parameter(s):

// string s: a string of brackets
// Returns

// string: either YES or NO
// Input Format

// The first line contains a single integer , the number of strings.
// Each of the next  lines contains a single string , a sequence of brackets.

// Constraints

// , where  is the length of the sequence.
// All chracters in the sequences ∈ { {, }, (, ), [, ] }.
// Output Format

// For each string, return YES or NO.

// Sample Input

// STDIN           Function
// -----           --------
// 3               n = 3
// {[()]}          first s = '{[()]}'
// {[(])}          second s = '{[(])}'
// {{[[(())]]}}    third s ='{{[[(())]]}}'
// Sample Output

// YES
// NO
// YES
// Explanation

// The string {[()]} meets both criteria for being a balanced string.
// The string {[(])} is not balanced because the brackets enclosed by the matched pair { and } are not balanced: [(]).
// The string {{[[(())]]}} meets both criteria for being a balanced string.

let a= '{{[[(())]]}}'

function isBalanced(s) { 
    
    while(true){
        let originalLength = s.length

        //replace all the matching pairs
        s= s.replace('()', "");
        s= s.replace('[]', "");
        s= s.replace('{}', "");

        //find the new length
        let newLength = s.length

        //If new length is same as the old length, no more replacements are possible(cuz that would mean there were no more pair to replace)
        //we need to exit the loop
        if(newLength === originalLength){
            break
        }
    }
    return s.length===0?'YES':'NO'
}


isBalanced(a)