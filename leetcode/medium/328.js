/*
Given a singly linked list, group all odd nodes together 
followed by the even nodes. 

Please note here we are talking about the node 
number and not the value in the nodes.

You should try to do it in place.
The program should run in O(1) space complexity 
and O(nodes) time complexity.

Example 1:
Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL

Example 2:
Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
*/

const one = {val: 1}
const two = {val: 2}
const three = {val: 3}
const four = {val: 4}
const five = {val:5}

one.next = two
two.next = three
three.next = four
four.next = five
five.next = null

// two pointers

var oddEvenList = function(head) {
  var odd = head
  var even = null
  
};


console.log(oddEvenList(one), '1->3->5->2->4')
