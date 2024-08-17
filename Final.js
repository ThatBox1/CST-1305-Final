
// Given an integer x, return the integer obtained by reversing the digits of x.
// If its a negative number , the sign should preserve

const reverseInteger = (x) => {
    let reversed = 0;
    let isNegative = false;

    // if x is negative, turn it to absolute value
    if (x < 0) {
        isNegative = true;
        x = Math.abs(x);
    }

    while (x > 0) {
        //Split the number into digits
        const digit = x % 10;             // 12(3) -> 1(2) -> (1)
        reversed = reversed * 10 + digit; // 3 -> 3(2) -> 32(1)
        x = Math.floor(x / 10);           // 123 -> 12 -> 1
    }

    if (isNegative) {
        return -reversed
    }
    return reversed;

};


let x = 123;
let x2 = -456;
console.log("======= Question 1 ======= \n")
console.log(reverseInteger(x));
console.log(reverseInteger(x2));


//Given a sorted array of distinct integers and a target
// value, return the index if the target is found. If not, return the index
// where it would be if it were inserted in order.

const findTarget = (nums, target) => {
    let result = 0;

    for (let i = nums.length - 1; i >= 0; i--) {

        // If target is larget than the current number, take index and + 1 
        if (target > nums[i]) {
            result = i + 1;
            break;
        }

        // If target is found in nums, set the result as the index
        if (target === nums[i]) {

            result = i;
            break;
        }
    }
    return result;
}

let nums1 = [1, 3, 5, 6];
let target1 = 5;
let target2 = 2;

console.log("======= Question 2 ======= \n")
console.log(findTarget(nums1, target1));
console.log(findTarget(nums1, target2));


// Write a function to delete a node (except the tail) in a singly
// linked list, given only access to that node.

class ListNode {
    constructor(value) {
    this.value = value;
    this.next = null;
    }
}
   
const deleteNode = (node) => {
    if (!node ||!node.next){ return null};

    //set the node value to the next node's value and adjust the next done as well
    node.val = node.next.val;
    node.next = node.next.next;

    return node;
}

const test1 = {
    val: 4,
    next: {
        val: 5,
        next: {
            val: 1,
            next: {
                val: 9,
                next: null
            }
        }
    }
};

console.log("======= Question 3 ======= \n")
deleteNode(test1.next);

console.log(test1); // Output: 4 -> 1 -> 9

const test2 = {
    val: 4,
    next: {
        val: 5,
        next: {
            val: 1,
            next: {
                val: 9,
                next: null
            }
        }
    }
};
deleteNode(test2)
console.log(test2);


// Find all the duplicates in an array and return which the smallest duplicate. 

const smallestDupe = (arr) => {
    let smallestDupe = Infinity;
    let seen = {};

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (seen[num] && num < smallestDupe) {
            smallestDupe = num;
        }

        seen[num] = true;
    }

    return smallestDupe;
}

let testArr = [4, 10, 5, 1, 11, 5, 1, 4, 1];
let testArr2 = [1, 10, 1, -1, 10, -1];

console.log("======= Question 4 ======= \n")
console.log(smallestDupe(testArr)); // 1
console.log(smallestDupe(testArr2)) // -1


//Which type of search is efficient on a sorted array?
//● C) Hash Search

// What is the time complexity of inserting a new node at the
// beginning of a singly linked list?
//● B) O(n)

//n a binary search tree (BST), the left child of a node is always:
//● B) Smaller than the node

//Which traversal of a BST visits nodes in ascending order?
//● C) In-order

// In a doubly linked list, what does the prev pointer in the first
// node point to?
// ● B) Null
