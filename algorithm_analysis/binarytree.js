/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;

    }
}


// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;


// const depthFirstValues = (root) => {
//     if (root === null) return [];

//     const result = [];
//     const stack = [root];
//     while (stack.length > 0) {
//         const current = stack.pop();
//         result.push(current.val);

//         if (current.left) stack.push(current.left);
//         if (current.right) stack.push(current.right);


//     }

//     return console.log(result);;

// }


// Recursively
// const depthFirstValues = (root) => {
//     if (root === null) return [];


//     const left = depthFirstValues(root.left); // [b,d,e]
//     const right = depthFirstValues(root.right); // [c,f]
//     const result = [root.val, ...left, ...right]

//     return console.log(result);
// }

// depthFirstValues(a);

// const breadthFirstValues = (root) => {
//     if (root === null) return [];

//     const values = [];
//     const queue = [root];

//     while (queue.length > 0) {
//         const current = queue.shift();
//         values.push(current.val);

//         if (current.left !== null) queue.push(current.left);
//         if (current.right !== null) queue.push(current.right);
//     }

//     return console.log(values);

// }

// breadthFirstValues(a)




// const treeIncludes = (root, target) => {

//     if (root === null) return false;

//     const queue = [root];
//     while (queue.length > 0) {
//         const current = queue.shift()
//         if (current.val === target) {
//             return console.log(true);
//         }


//         if (current.left) queue.push(current.left);
//         if (current.right) queue.push(current.right);
//     }
//     return false

// }


// Recursive
// const treeIncludes = (root, target) => {

//     if (root === null) return false;
//     if (root.val === target) return true;

//     return console.log(treeIncludes(root.left, target) || treeIncludes(root.right, target));

// }



// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// treeIncludes(a, "e")


const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// const treeSum = (root) => {
//     if (root === null) return 0;
//     const result = root.val + treeSum(root.left) + treeSum(root.right)

//     return console.log(result);

// }


// breadth solution

const treeSum = (root) => {
    if (root === null) return 0;

    let totalSum = 0;
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.shift()
        totalSum += current.val;
        if (current.left !== null) queue.push(current.left)
        if (current.right !== null) queue.push(current.right)
    }

    return console.log(totalSum);

}

treeSum(a)













