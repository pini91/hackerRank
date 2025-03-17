// This exercise focuses on traversing a linked list. You are given a pointer to the  node of a linked list. The task is to print the  of each node, one per line. If the head pointer is , indicating the list is empty, nothing should be printed.

// Function Description

// Complete the  function with the following parameter(s):

// : a reference to the head of the list
// Print

// For each node, print its  value on a new line (console.log in Javascript).
// Input Format

// The first line of input contains , the number of elements in the linked list.
// The next  lines contain one element each, the  values for each node.

// Note: Do not read any input from stdin/console. Complete the printLinkedList function in the editor below.

// Constraints

// , where  is the  element of the linked list.
// Sample Input

// STDIN   Function
// -----   --------
// 2       n = 2
// 16      first data value = 16
// 13      second data value = 13
// Sample Output

// 16
// 13
// Explanation

// There are two elements in the linked list. They are represented as 16 -> 13 -> NULL. So, the  function should print 16 and 13 each on a new line.


// Complete the printLinkedList function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */


// main()


// class Node{
//     constructor(value)
//     {
//     this.value=value
//     this.next=null
//     }
// }
// class LinkedList{
//     constructor()
//     {
//         this.head=null
//     }
//     append(value)
//     {
//         let newnode=new Node(value)
//         if(!this.head)
//         {
//             this.head=newnode
//             return
//         }
//         let current=this.head
//         while(current.next)
//         {
//             current=current.next
//         }
//         current.next=newnode
        
//     }
    // printList(){
    //   let current=this.head
    //   let result=""
    //   while(current)
    //   {
    //       result+=current.value+'->'
    //       current=current.next
    //   }
    //   console.log(result+'null')
    // }
// }

// let list=new LinkedList()
// list.append(10)
// list.append(20)
// list.append(30)
//list.printList()

function printLinkedList(head) {
        let current = head
    
        while(current){
            console.log(current.data)
            current = current.next
        }
}
