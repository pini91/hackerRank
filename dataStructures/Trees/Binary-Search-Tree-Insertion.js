// You are given a pointer to the root of a binary search tree and values to be inserted into the tree. Insert the values into their appropriate position in the binary search tree and return the root of the updated binary tree. You just have to complete the function.

// Input Format

// You are given a function,

// Node * insert (Node * root ,int data) {

// }
// Constraints

// No. of nodes in the tree  500
// Output Format

// Return the root of the binary search tree after inserting the value into the tree.

// Sample Input

//         4
//        / \
//       2   7
//      / \
//     1   3
// The value to be inserted is 6.

// Sample Output

//          4
//        /   \
//       2     7
//      / \   /
//     1   3 6


function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  function processData(input, data) {
    //recurvise
      if (input === null) {
          return new Node(data);
    } else {
      if (data < input.data) {
          if(input.left === null){
              input.left= new Node(data)
          }
          input.left = processData(input.left, data);
      } else if (data > input.data) {
           if(input.right === null){
              input.right = new Node(data)
          }
          input.right = processData(input.right, data);
      }
      return input;
    }

    //iterating
//     let newNode= new Node(data)
//     if (input === null) {
//     return newNode;
//   } else {
//     let current = input
//     while(current){
//         if(current.data> newNode.data){
//             if(current.left != null){
//                 current = current.left
//             }else{
//                 current.left = newNode
//                 break
//             }
//         }else if(current.data<newNode.data){
//             if(current.right != null){
//                 current = current.right  
//             }else{
//                 current.right = newNode
//                 break
//             }

//         }
//      }
//     }
//     return input
// }
}  