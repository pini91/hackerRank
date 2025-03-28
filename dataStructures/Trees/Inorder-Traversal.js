// In this challenge, you are required to implement inorder traversal of a tree.

// Complete the  function in your editor below, which has  parameter: a pointer to the root of a binary tree. It must print the values in the tree's inorder traversal as a single line of space-separated values.

// Input Format

// Our hidden tester code passes the root node of a binary tree to your $inOrder* function.

// Constraints

       

// Output Format

// Print the tree's inorder traversal as a single line of space-separated values.

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

// 1 2 3 4 5 6 
// Explanation

// The tree's inorder traversal results in       as the required result.

/*
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function inOrder(root) {
    let result= []
    
    function traversing(node){
        if(node.left){
            traversing(node.left)
        }
        
        result.push(node.data)
        
        if(node.right){
            traversing(node.right)
        }
    }
    
    traversing(root)
    console.log(result.join(' '))
	
}
