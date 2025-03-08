// Given the pointer to the head node of a doubly linked list, reverse the order of the nodes in place. That is, change the next and prev pointers of the nodes so that the direction of the list is reversed. Return a reference to the head node of the reversed list.

// Note: The head node might be NULL to indicate that the list is empty.

// Function Description

// Complete the reverse function in the editor below.

// reverse has the following parameter(s):

// DoublyLinkedListNode head: a reference to the head of a DoublyLinkedList
// Returns
// - DoublyLinkedListNode: a reference to the head of the reversed list

// Input Format

// The first line contains an integer , the number of test cases.

// Each test case is of the following format:

// The first line contains an integer , the number of elements in the linked list.
// The next  lines contain an integer each denoting an element of the linked list.
// Constraints

// Output Format

// Return a reference to the head of your reversed list. The provided code will print the reverse array as a one line of space-separated integers for each test case.

// Sample Input

// 1
// 4
// 1
// 2
// 3
// 4
// Sample Output

// 4 3 2 1 
// Explanation

// The initial doubly linked list is: 1<->2<->3<->4<->null

// The reversed doubly linked list is: 4<->3<->2<->1<->null

function reverse(llist) {

    if(llist == null) return llist

    let current = llist
    let newHead;

    while(current != null){
        let prev = current.prev// we keep a reference to the previous

        //now we start to go back
        current.prev= current.next
        current.next= prev
        
        //we update this each time so that we return it in the end
        newHead= current

        current= current.prev
    }

    return newHead
}




