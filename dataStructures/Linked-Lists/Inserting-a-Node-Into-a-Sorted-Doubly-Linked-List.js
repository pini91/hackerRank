// Given a reference to the head of a doubly-linked list and an integer, , create a new DoublyLinkedListNode object having data value  and insert it at the proper location to maintain the sort.

// Example

//  refers to the list 

// Return a reference to the new list: .

// Function Description

// Complete the sortedInsert function in the editor below.

// sortedInsert has two parameters:

// DoublyLinkedListNode pointer head: a reference to the head of a doubly-linked list

// int data: An integer denoting the value of the  field for the DoublyLinkedListNode you must insert into the list.

// Returns

// DoublyLinkedListNode pointer: a reference to the head of the list
// Note: Recall that an empty list (i.e., where ) and a list with one element are sorted lists.

// Input Format

// The first line contains an integer , the number of test cases.

// Each of the test case is in the following format:

// The first line contains an integer , the number of elements in the linked list.
// Each of the next  lines contains an integer, the data for each node of the linked list.
// The last line contains an integer, , which needs to be inserted into the sorted doubly-linked list.
// Constraints

// Sample Input

// STDIN   Function
// -----   --------
// 1       t = 1
// 4       n = 4
// 1       node data values = 1, 3, 4, 10
// 3
// 4
// 10
// 5       data = 5
// Sample Output

// 1 3 4 5 10
// Explanation

// The initial doubly linked list is:1<->3<->4<->10->null.

// The doubly linked list after insertion is: 1<->3<->4<->5<->10->null


function sortedInsert(llist, data) {

    //We create a new node
    const newNode={
        data:data,
        next:null,
        prev:null
    }

    //Case 1 if the list is empty
    if(llist === null){
        return newNode
    }

    //Case 2 if the data goes in the head
    if(data < llist.data){
        newNode.next=llist
        llist.prev= newNode

        return newNode
    }

    let current= llist

    //Case 3 if the node goes somewhere in the middle(the loop willl terminate when either condition becomes false or bith become false)
    while(current.next != null && current.data<data){
        current= current.next
    }

    //we add at the end
    if(current.next== null && current.data<data){
        current.next= newNode
        newNode.prev= current
    }else{
        //insert at a specific position
        //we grab the previous of the current  we create a new variable to differenciate it.
        let previous= current.prev
        
        //we make changes for previous node
        previous.next= newNode
        newNode.prev= previous

        //we maje changes for current node

        newNode.next= current
        current.prev= newNode

    }

    return llist

}