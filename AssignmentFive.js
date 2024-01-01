// For Task One
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Reversing the linked list
const reversedHead = reverseLinkedList(head);

// Printing the reversed linked list
let current = reversedHead;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}

Time Complexity: O(n)
Space Complexity: O(1)


// For Task Two
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function mergeTwoLists(list1, list2) {
  const dummyHead = new ListNode(-1);
  let current = dummyHead;

  while (list1 !== null && list2 !== null) {
    if (list1.data < list2.data) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1 !== null) {
    current.next = list1;
  }
  if (list2 !== null) {
    current.next = list2;
  }

  return dummyHead.next;
}

// creating the lsit one 
const list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(5);

// crating list 2
const list2 = new ListNode(2);
list2.next = new ListNode(2);
list2.next.next = new ListNode(5);

const mergedList = mergeTwoLists(list1, list2);

// Printing the merged linked list
let current = mergedList;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}

Time Complexity: O(n + m) // n and m are the length of the list 1 and list 2
Space Complexity: O(1)