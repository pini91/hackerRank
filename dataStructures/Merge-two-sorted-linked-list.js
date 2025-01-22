// Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. Either head pointer may be null meaning that the corresponding list is empty.

// Example
//  refers to 
//  refers to 

// The new list is 

// Function Description

// Complete the mergeLists function in the editor below.

// mergeLists has the following parameters:

// SinglyLinkedListNode pointer headA: a reference to the head of a list
// SinglyLinkedListNode pointer headB: a reference to the head of a list
// Returns

// SinglyLinkedListNode pointer: a reference to the head of the merged list
// Input Format

// The first line contains an integer , the number of test cases.

// The format for each test case is as follows:

// The first line contains an integer , the length of the first linked list.
// The next  lines contain an integer each, the elements of the linked list.
// The next line contains an integer , the length of the second linked list.
// The next  lines contain an integer each, the elements of the second linked list.

// Constraints

// , where  is the  element of the list.
// Sample Input

// 1
// 3
// 1
// 2
// 3
// 2
// 3
// 4
// Sample Output

// 1 2 3 3 4 
// Explanation

// The first linked list is: 1->3->7->null

// The second linked list is: 3->4->null

// Hence, the merged linked list is: 1->2->3->null

function mergeLists(head1, head2) {

    if(head1===null) return head2
    if(head2===null) return head1

    let head3= null

    // first we will set the smallest data to the head of head3
    if(head1.data<head2.data){
        head3= head1
        head1= head1.next
    }else{
        head3= head2
        head2= head2.next
    }

    //we need to keep reference to the head of our new list head3
    //current will actually set the next values for us in our head3 then we will return head3
    let current = head3

    while(head1 != null && head2 !=null){
        if(head1.data<head2.data){
            current.next= head1
            head1= head1.next
        }else{
            current.next= head2
            head2= head2.next
        }
        //here we increment the runner(because we just setted the current to be the next one)
        current= current.next
    }

    //the loop will break when one of the list hits null. When one of the list breaks out we just have to add all of the values of the other list to the merge list

    if(head1== null){
        current.next= head2
    }else{
        current.next= head1
    }

    return head3
}