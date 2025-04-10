// Given a pointer to the root of a binary tree, print the top view of the binary tree.

// The tree as seen from the top the nodes, is called the top view of the tree.

// For example :

//    1
//     \
//      2
//       \
//        5
//       /  \
//      3    6
//       \
//        4
// Top View : 

// Complete the function  and print the resulting values on a single line separated by space.

// Input Format

// You are given a function,

// void topView(node * root) {

// }
// Constraints

//  Nodes in the tree  

// Output Format

// Print the values on a single line separated by space.

// Sample Input

//    1
//     \
//      2
//       \
//        5
//       /  \
//      3    6
//       \
//        4
// Sample Output

// 1 2 5 6

// Explanation

//    1
//     \
//      2
//       \
//        5
//       /  \
//      3    6
//       \
//        4
// From the top, only nodes  are visible.


function processData(input) {
    if (!input) return;

    const nodeMap = new Map();
    const queue = [[input, 0]]; 

    while (queue.length > 0) {
        const [node, hd] = queue.shift();

        if (!nodeMap.has(hd)) {
            nodeMap.set(hd, node.data);
        }

        if (node.left) {
            queue.push([node.left, hd - 1]);
        }
        if (node.right) {
            queue.push([node.right, hd + 1]);
        }
    }

    const sortedKeys = Array.from(nodeMap.keys()).sort((a, b) => a - b);
    const result = sortedKeys.map(key => nodeMap.get(key)).join(' ');

    console.log(result);
   

    // let d={}
    
    // function traverse(input, h,l){
    //     if(input){
    //         if(!h in d){
    //             d[h]= [input,l]
    //         }else if(d[h][1]>l){
    //             d[h]=[input,l]
    //         }
    //     } 
    //     traverse(input.left, h-1, l+1)
    //     traverse(input.right, h+1, l+1)
    // }
    
    // traverse(input,0,0)
    
    // let sorted=  Object.values(d).sort();
    
    // for(let h in sorted){
    //     console.log(`${d[h][0]} `)
    // }
} 