// Complete the  function in the editor below. It received  parameter: a pointer to the root of a binary tree. It must print the values in the tree's postorder traversal as a single line of space-separated values.

// Input Format

// Our test code passes the root node of a binary tree to the  function.

// Constraints

//  Nodes in the tree  

// Output Format

// Print the tree's postorder traversal as a single line of space-separated values.

// Sample Input

//      1
//       \
//        2
//         \
//          5
//         /  \
//        3    6
//         \
//          4
// Sample Output

// 4 3 6 5 2 1 
// Explanation

// The postorder traversal is shown.

function postOrder(root) {
    let result = []
    
    function traversing(node){
   
        if(node.left){
            traversing(node.left)
        }
        if(node.right){
            traversing(node.right)
        }
            
        result.push(node.data)
   }
   
    traversing(root)
    console.log(result.join(' '))
}
