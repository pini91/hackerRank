// You have three stacks of cylinders where each cylinder has the same diameter, but they may vary in height. You can change the height of a stack by removing and discarding its topmost cylinder any number of times.

// Find the maximum possible height of the stacks such that all of the stacks are exactly the same height. This means you must remove zero or more cylinders from the top of zero or more of the three stacks until they are all the same height, then return the height.

// Example




// There are  and  cylinders in the three stacks, with their heights in the three arrays. Remove the top 2 cylinders from  (heights = [1, 2]) and from  (heights = [1, 1]) so that the three stacks all are 2 units tall. Return  as the answer.

// Note: An empty stack is still a stack.

// Function Description

// Complete the equalStacks function in the editor below.

// equalStacks has the following parameters:

// int h1[n1]: the first array of heights
// int h2[n2]: the second array of heights
// int h3[n3]: the third array of heights
// Returns

// int: the height of the stacks when they are equalized
// Input Format

// The first line contains three space-separated integers, , , and , the numbers of cylinders in stacks , , and . The subsequent lines describe the respective heights of each cylinder in a stack from top to bottom:

// The second line contains  space-separated integers, the cylinder heights in stack . The first element is the top cylinder of the stack.
// The third line contains  space-separated integers, the cylinder heights in stack . The first element is the top cylinder of the stack.
// The fourth line contains  space-separated integers, the cylinder heights in stack . The first element is the top cylinder of the stack.
// Constraints

// Sample Input

// STDIN       Function
// -----       --------
// 5 3 4       h1[] size n1 = 5, h2[] size n2 = 3, h3[] size n3 = 4  
// 3 2 1 1 1   h1 = [3, 2, 1, 1, 1]
// 4 3 2       h2 = [4, 3, 2]
// 1 1 4 1     h3 = [1, 1, 4, 1]
// Sample Output

// 5
// Explanation

// Initially, the stacks look like this:

// initial stacks

// To equalize thier heights, remove the first cylinder from stacks  and , and then remove the top two cylinders from stack  (shown below).

// modified stacks

// The stack heights are reduced as follows:

// All three stacks now have , the value to return.


let h1 = [3, 2, 1, 1, 1]
let h2 = [4, 3, 2]
let h3 = [1, 1, 4, 1]

function equalStacks(h1, h2, h3) {

    let sum1 = h1.reduce((acc,el)=> acc+el,0)
    let sum2 = h2.reduce((acc,el)=> acc+el,0)
    let sum3 = h3.reduce((acc,el)=> acc+el,0)

    let a=0
    let b=0
    let c=0

    while(true){
        if(sum1===sum2&&sum2===sum3){
            return sum1
        }

        if(sum1>= sum2 && sum1>=sum3){
            sum1-=h1[a]
            a++
        }else if(sum2>= sum1&& sum2>=sum3){
            sum2-=h2[b]
            b++
        }else if(sum3>= sum1&&sum3>=sum2){
            sum3-=h3[c]
            c++
        }
        //if any stack becomes empty, it means there is no common height and it returns 0.
        //Basically the letters a,b,c just go looping thru the lenght of the array, so example if a>h1.length it means it got beyond the lenght of the array
        if(a>h1.length || b>h2.length||c>h3.length){
            return 0
        }
    }

}


equalStacks(h1, h2, h3)