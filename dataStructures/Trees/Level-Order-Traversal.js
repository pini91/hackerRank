// iven a pointer to the root of a binary tree, you need to print the level order traversal of this tree. In level-order traversal, nodes are visited level by level from left to right. Complete the function  and print the values in a single line separated by a space.

// For example:

//      1
//       \
//        2
//         \
//          5
//         /  \
//        3    6
//         \
//          4  
// For the above tree, the level order traversal is .

// Input Format

// You are given a function,

// void levelOrder(Node * root) {

// }
// Constraints

//  Nodes in the tree  

// Output Format

// Print the values in a single line separated by a space.

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

// 1 2 5 3 6 4

// Explanation

// We need to print the nodes level by level. We process each level from left to right.
// Level Order Traversal: 1->2->5->3->6->4


function levelOrder(root) {
    if (!root) {
        return;
    }

    const queue = [root];
    let result = "";

    while (queue.length > 0) {
        const currentNode = queue.shift();
        result += currentNode.data + " ";

        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }

    console.log(result.trim());
}